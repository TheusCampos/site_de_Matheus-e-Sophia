import { useEffect, useRef, useState } from "react";
import { Music2, Pause, Play, SkipForward, SkipBack, Volume2, VolumeX } from "lucide-react";

export type Track = {
  id: string;
  title: string;
  artist: string;
  /** YouTube video ID — reproduzido via IFrame Player API (player oculto). */
  youtubeId: string;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: (() => void) | undefined;
  }
}

interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  loadVideoById(videoId: string): void;
  cueVideoById(videoId: string): void;
  destroy?(): void;
  getPlayerState?(): number;
}

interface YTNamespace {
  Player: new (
    element: HTMLElement | string,
    options: {
      height?: string | number;
      width?: string | number;
      videoId?: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (event: { target: YTPlayer }) => void;
        onStateChange?: (event: { data: number; target: YTPlayer }) => void;
        onError?: (event: { data: number; target: YTPlayer }) => void;
      };
    },
  ) => YTPlayer;
  PlayerState: {
    UNSTARTED: -1;
    ENDED: 0;
    PLAYING: 1;
    PAUSED: 2;
    BUFFERING: 3;
    CUED: 5;
  };
}

// Singleton — garante uma única carga do script, mesmo em remounts.
let apiPromise: Promise<YTNamespace> | null = null;
function loadYouTubeAPI(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT) resolve(window.YT);
    };
  });
  return apiPromise;
}

/** Player flutuante e persistente. Cross-fade entre seções. */
export function MusicPlayer({
  tracks,
  activeId,
  started,
}: {
  tracks: Track[];
  activeId: string;
  started: boolean;
}) {
  const playerRef = useRef<YTPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.55);
  const [currentId, setCurrentId] = useState(activeId);
  const [apiReady, setApiReady] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playIntent = useRef(false);
  const fadeOutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeInRef = useRef<NodeJS.Timeout | null>(null);

  const current = tracks.find((t) => t.id === currentId) ?? tracks[0];

  // 1. Carrega o script da IFrame API.
  useEffect(() => {
    loadYouTubeAPI().then((YT) => {
      if (YT?.Player) setApiReady(true);
    });
  }, []);

  // 2. Cria o player oculto uma vez, quando a API estiver pronta.
  useEffect(() => {
    // Só inicializa se a API estiver pronta e o player não existir
    if (!apiReady || playerRef.current) return;

    // Usamos um ID fixo para não dar conflito com o React renderizando o elemento
    const player = new window.YT!.Player("yt-player-container", {
      // IMPORTANTE: Alguns vídeos não tocam se o player for muito pequeno ou 0x0
      height: "200",
      width: "200",
      videoId: current.youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: current.youtubeId, // necessário para o loop funcionar
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: (event) => {
          event.target.setVolume(muted ? 0 : Math.round(volume * 100));
          setPlayerReady(true);
        },
        onStateChange: (event) => {
          const YT = window.YT!;
          if (event.data === YT.PlayerState.PLAYING) setIsPlaying(true);
          if (event.data === YT.PlayerState.PAUSED) setIsPlaying(false);
          // Em vídeos únicos o loop via playerVars falha; reinicia manualmente.
          if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
        },
        onError: () => {
          setIsPlaying(false);
          console.error("Erro no player do YouTube");
        },
      },
    });
    playerRef.current = player;

    return () => {
      try {
        playerRef.current?.destroy?.();
        playerRef.current = null;
        setPlayerReady(false);
      } catch (e) {
        console.warn("Erro ao destruir player", e);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady]);

  // 3. Liga/desliga a reprodução quando o usuário inicia a jornada.
  useEffect(() => {
    const player = playerRef.current;
    if (!player || !playerReady) return;

    if (started || playIntent.current) {
      // Tentativa inicial de play
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [started, playerReady]);

  // Listener para play síncrono (burlar bloqueio de autoplay)
  useEffect(() => {
    const handlePlayNow = () => {
      playIntent.current = true;
      if (playerRef.current && playerReady) {
        playerRef.current.playVideo();
      }
    };
    window.addEventListener("play-music-now", handlePlayNow);
    return () => window.removeEventListener("play-music-now", handlePlayNow);
  }, [playerReady]);

  // Fallback: se o navegador bloquear o autoplay, o próximo clique do usuário na tela vai forçar o play
  useEffect(() => {
    if (!started || isPlaying || !playerReady) return;

    const playOnInteract = () => {
      playerRef.current?.playVideo();
    };

    window.addEventListener("click", playOnInteract, { capture: true });
    window.addEventListener("touchstart", playOnInteract, { capture: true });

    return () => {
      window.removeEventListener("click", playOnInteract, { capture: true });
      window.removeEventListener("touchstart", playOnInteract, { capture: true });
    };
  }, [started, isPlaying, playerReady]);

  const lastActiveId = useRef(activeId);

  // 4. Cross-fade entre tracks (disparado APENAS por rolagem)
  useEffect(() => {
    if (!started || !playerReady) return;

    if (activeId === lastActiveId.current) return;
    lastActiveId.current = activeId;

    if (activeId === currentId) return;

    const player = playerRef.current;
    if (!player) return;

    const currentTrack = tracks.find((t) => t.id === currentId) ?? tracks[0];
    const nextTrack = tracks.find((t) => t.id === activeId);
    if (!nextTrack || nextTrack.youtubeId === currentTrack.youtubeId) return;

    const target = volume;
    let v = player.getVolume();

    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);

    fadeOutRef.current = setInterval(() => {
      v = Math.max(0, v - 5);
      player.setVolume(v);

      if (v <= 0) {
        if (fadeOutRef.current) clearInterval(fadeOutRef.current);

        player.loadVideoById(nextTrack.youtubeId);
        player.playVideo();
        setCurrentId(activeId);

        let vi = 0;
        fadeInRef.current = setInterval(() => {
          vi = Math.min(target * 100, vi + 4);
          player.setVolume(muted ? 0 : Math.round(vi));
          if (vi >= target * 100) {
            if (fadeInRef.current) clearInterval(fadeInRef.current);
          }
        }, 60);
      }
    }, 50);

    return () => {
      if (fadeOutRef.current) clearInterval(fadeOutRef.current);
      if (fadeInRef.current) clearInterval(fadeInRef.current);
    };
  }, [activeId, started, currentId, volume, muted, tracks, playerReady]);

  // 5. Sincroniza volume/mute em tempo real.
  useEffect(() => {
    const player = playerRef.current;
    if (player && playerReady) {
      player.setVolume(muted ? 0 : Math.round(volume * 100));
    }
  }, [volume, muted, playerReady]);

  const toggle = () => {
    const player = playerRef.current;
    if (!player || !playerReady) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  };

  const prevTrack = () => {
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);

    const idx = tracks.findIndex((t) => t.id === currentId);
    const p = tracks[(idx - 1 + tracks.length) % tracks.length];
    const player = playerRef.current;

    if (player && playerReady && p.youtubeId !== current.youtubeId) {
      player.loadVideoById(p.youtubeId);
      player.setVolume(muted ? 0 : Math.round(volume * 100));
      player.playVideo();
    }
    setCurrentId(p.id);
  };

  const nextTrack = () => {
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);

    const idx = tracks.findIndex((t) => t.id === currentId);
    const n = tracks[(idx + 1) % tracks.length];
    const player = playerRef.current;

    if (player && playerReady && n.youtubeId !== current.youtubeId) {
      player.loadVideoById(n.youtubeId);
      player.setVolume(muted ? 0 : Math.round(volume * 100));
      player.playVideo();
    }
    setCurrentId(n.id);
  };

  return (
    <>
      {/* Container invisível SEMPRE renderizado para o YouTube inicializar no fundo */}
      <div className="pointer-events-none fixed -left-[9999px] -top-[9999px] opacity-0">
        <div id="yt-player-container" />
      </div>

      {started && (
        <div className="fixed bottom-4 right-4 z-50 max-w-xs animate-fade-up">
          <div className="glass-strong shadow-glow rounded-2xl px-4 py-3 flex items-center gap-3">
            <div
              className={`size-10 rounded-full bg-gradient-romance grid place-items-center shrink-0 ${isPlaying ? "animate-pulse-glow" : ""}`}
            >
              <Music2 className="size-5 text-primary-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold truncate">{current.title}</p>
              <p className="text-[10px] text-muted-foreground truncate">{current.artist}</p>
            </div>
            <button
              onClick={prevTrack}
              aria-label="Música anterior"
              className="size-8 grid place-items-center rounded-full hover:bg-white/10 transition"
            >
              <SkipBack className="size-4" />
            </button>
            <button
              onClick={toggle}
              aria-label={isPlaying ? "Pausar" : "Tocar"}
              className="size-8 grid place-items-center rounded-full hover:bg-white/10 transition"
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button
              onClick={nextTrack}
              aria-label="Próxima música"
              className="size-8 grid place-items-center rounded-full hover:bg-white/10 transition"
            >
              <SkipForward className="size-4" />
            </button>
            <button
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Ativar som" : "Silenciar"}
              className="size-8 grid place-items-center rounded-full hover:bg-white/10 transition"
            >
              {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
          </div>
          <input
            aria-label="Volume"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
        </div>
      )}
    </>
  );
}
