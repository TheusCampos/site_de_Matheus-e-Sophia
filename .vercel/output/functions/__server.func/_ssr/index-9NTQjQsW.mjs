import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Login, P as Particles, N as Nav, h as heroCouple } from "./Login-Bq6ktypG.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import "../_libs/seroval.mjs";
import { H as Heart, a as ArrowDown, M as Music2, S as SkipBack, P as Pause, b as Play, c as SkipForward, V as VolumeX, d as Volume2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-DI-QjkXt.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
function Intro({ onStart }) {
  const rootRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".intro-photo", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsapWithCSS.from(".intro-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out"
      });
      gsapWithCSS.from(".intro-cta", { y: 20, opacity: 0, duration: 1, delay: 1.6, ease: "power3.out" });
    }, rootRef);
    return () => ctx.revert();
  }, []);
  const handleStart = () => {
    window.dispatchEvent(new CustomEvent("play-music-now"));
    gsapWithCSS.to(rootRef.current, {
      opacity: 0,
      scale: 1.08,
      filter: "blur(20px)",
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: onStart
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: rootRef,
      className: "fixed inset-0 z-[100] grid place-items-center overflow-hidden",
      style: { background: "oklch(0.1 0.04 350)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "intro-photo absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroCouple,
              alt: "Nosso retrato de abertura",
              className: "size-full object-cover opacity-50",
              width: 1536,
              height: 1024,
              fetchPriority: "high",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-petal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-line font-script text-2xl md:text-3xl text-primary mb-6", children: "Para Sophia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "intro-line font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text", children: [
            "Algumas histórias são escritas pelo",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gradient-romance not-italic", children: "destino" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-line font-display text-2xl md:text-3xl mt-4 text-muted-foreground italic", children: "A nossa foi escrita pelo amor." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleStart,
              className: "intro-cta btn-romance mt-12 text-base md:text-lg animate-pulse-glow",
              children: [
                "Começar nossa história",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-5 animate-heart-beat", fill: "currentColor" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-cta mt-6 text-xs text-muted-foreground/70", children: "Recomendado com som ligado · 🎧" })
        ] })
      ]
    }
  );
}
const RELATIONSHIP_START = /* @__PURE__ */ new Date("2025-03-05T00:00:00");
function daysSince(date) {
  return Math.floor((Date.now() - date.getTime()) / (1e3 * 60 * 60 * 24));
}
function Hero() {
  const ref = reactExports.useRef(null);
  const [days, setDays] = reactExports.useState(() => daysSince(RELATIONSHIP_START));
  reactExports.useEffect(() => {
    const i = setInterval(() => setDays(daysSince(RELATIONSHIP_START)), 6e4);
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".hero-photo", { scale: 1.1, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsapWithCSS.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out"
      });
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
              gsapWithCSS.to(".hero-photo", { y: y * 0.3, duration: 0.4, overwrite: true });
              gsapWithCSS.to(".hero-text", {
                y: y * 0.15,
                opacity: Math.max(0, 1 - y / 600),
                duration: 0.4,
                overwrite: true
              });
            }
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, ref);
    return () => {
      clearInterval(i);
      ctx.revert();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      "data-section": "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden content-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-photo absolute inset-0", style: { willChange: "transform" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroCouple,
              alt: "Nós dois em um momento especial",
              className: "size-full object-cover",
              width: 1536,
              height: 1024,
              fetchPriority: "high",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "hero-text relative z-10 px-6 max-w-4xl text-center",
            style: { willChange: "transform, opacity" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4 text-primary animate-heart-beat", fill: "currentColor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-gradient-romance font-bold", children: days }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-2", children: "dias desde que minha vida ficou melhor" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text", children: [
                "Entre bilhões de pessoas no mundo,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "meu coração escolheu ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-romance", children: "você" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl md:text-4xl mt-6 text-primary", children: "E eu escolheria novamente todos os dias." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#memories", className: "btn-romance mt-12 inline-flex", children: [
                "Continuar nossa jornada",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-5" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#memories",
            "aria-label": "Rolar",
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-6" })
          }
        )
      ]
    }
  );
}
let apiPromise = null;
function loadYouTubeAPI() {
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
function MusicPlayer({
  tracks,
  activeId,
  started
}) {
  const playerRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [muted, setMuted] = reactExports.useState(false);
  const [volume, setVolume] = reactExports.useState(0.55);
  const [currentId, setCurrentId] = reactExports.useState(activeId);
  const [apiReady, setApiReady] = reactExports.useState(false);
  const [playerReady, setPlayerReady] = reactExports.useState(false);
  const playIntent = reactExports.useRef(false);
  const fadeOutRef = reactExports.useRef(null);
  const fadeInRef = reactExports.useRef(null);
  const current = tracks.find((t) => t.id === currentId) ?? tracks[0];
  reactExports.useEffect(() => {
    loadYouTubeAPI().then((YT) => {
      if (YT?.Player) setApiReady(true);
    });
  }, []);
  reactExports.useEffect(() => {
    if (!apiReady || playerRef.current) return;
    const player = new window.YT.Player("yt-player-container", {
      // IMPORTANTE: Alguns vídeos não tocam se o player for muito pequeno ou 0x0
      height: "200",
      width: "200",
      videoId: current.youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: current.youtubeId,
        // necessário para o loop funcionar
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: (event) => {
          event.target.setVolume(muted ? 0 : Math.round(volume * 100));
          setPlayerReady(true);
        },
        onStateChange: (event) => {
          const YT = window.YT;
          if (event.data === YT.PlayerState.PLAYING) setIsPlaying(true);
          if (event.data === YT.PlayerState.PAUSED) setIsPlaying(false);
          if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
        },
        onError: () => {
          setIsPlaying(false);
          console.error("Erro no player do YouTube");
        }
      }
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
  }, [apiReady]);
  reactExports.useEffect(() => {
    const player = playerRef.current;
    if (!player || !playerReady) return;
    if (started || playIntent.current) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [started, playerReady]);
  reactExports.useEffect(() => {
    const handlePlayNow = () => {
      playIntent.current = true;
      if (playerRef.current && playerReady) {
        playerRef.current.playVideo();
      }
    };
    window.addEventListener("play-music-now", handlePlayNow);
    return () => window.removeEventListener("play-music-now", handlePlayNow);
  }, [playerReady]);
  reactExports.useEffect(() => {
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
  const lastActiveId = reactExports.useRef(activeId);
  reactExports.useEffect(() => {
    if (!started || !playerReady) return;
    if (activeId === lastActiveId.current) return;
    lastActiveId.current = activeId;
    if (activeId === currentId) return;
    const player = playerRef.current;
    if (!player) return;
    const currentTrack = tracks.find((t) => t.id === currentId) ?? tracks[0];
    const nextTrack2 = tracks.find((t) => t.id === activeId);
    if (!nextTrack2 || nextTrack2.youtubeId === currentTrack.youtubeId) return;
    const target = volume;
    let v = player.getVolume();
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);
    fadeOutRef.current = setInterval(() => {
      v = Math.max(0, v - 5);
      player.setVolume(v);
      if (v <= 0) {
        if (fadeOutRef.current) clearInterval(fadeOutRef.current);
        player.loadVideoById(nextTrack2.youtubeId);
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
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed -left-[9999px] -top-[9999px] opacity-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "yt-player-container" }) }),
    started && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 max-w-xs animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong shadow-glow rounded-2xl px-4 py-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `size-10 rounded-full bg-gradient-romance grid place-items-center shrink-0 ${isPlaying ? "animate-pulse-glow" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "size-5 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: current.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: current.artist })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevTrack,
            "aria-label": "Música anterior",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggle,
            "aria-label": isPlaying ? "Pausar" : "Tocar",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextTrack,
            "aria-label": "Próxima música",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMuted((m) => !m),
            "aria-label": muted ? "Ativar som" : "Silenciar",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          "aria-label": "Volume",
          type: "range",
          min: 0,
          max: 1,
          step: 0.01,
          value: volume,
          onChange: (e) => setVolume(parseFloat(e.target.value)),
          className: "mt-2 w-full accent-primary"
        }
      )
    ] })
  ] });
}
function useSectionTracker(initial) {
  const [active, setActive] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-section]"));
    if (nodes.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const name = visible.target.dataset.section;
          if (name) setActive(name);
        }
      },
      { threshold: [0.3, 0.6] }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return active;
}
const Gallery = reactExports.lazy(() => import("./Gallery-DxMJy4zk.mjs").then((m) => ({
  default: m.Gallery
})));
const Conversations = reactExports.lazy(() => import("./Conversations-CjhW_a1T.mjs").then((m) => ({
  default: m.Conversations
})));
const Proposal = reactExports.lazy(() => import("./Proposal-CYShLmAq.mjs").then((m) => ({
  default: m.Proposal
})));
const FinalMessage = reactExports.lazy(() => import("./FinalMessage-DxZwDm8M.mjs").then((m) => ({
  default: m.FinalMessage
})));
const FAVORITE_ID = "t1hfqfdmcD8";
const TRACKS = [
  // #1 — A FAVORITA. Sempre toca primeiro (ao abrir o site).
  {
    id: "hero",
    title: "É Amor",
    artist: "Jorge & Mateus",
    youtubeId: FAVORITE_ID
  },
  // As demais faixas tocam conforme ela rola a página ou pula no player.
  {
    id: "gallery",
    title: "Memórias",
    artist: "Música 2",
    youtubeId: "kszkoFI84JU"
  },
  {
    id: "chat",
    title: "Sussurros",
    artist: "Música 3",
    youtubeId: "o_1aF54DO60"
  },
  {
    id: "proposal",
    title: "Momentos",
    artist: "Música 4",
    youtubeId: "-YzDsDMYqdw"
  },
  {
    id: "final",
    title: "Para sempre",
    artist: "Música 5",
    youtubeId: "W1tzURKYFNs"
  },
  // Faixa 6 (disponível no botão de passar música)
  {
    id: "bonus",
    title: "Especial",
    artist: "Música 6",
    youtubeId: "kI6ywewtYkc"
  }
];
function Page() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const [started, setStarted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      if (sessionStorage.getItem("sophia:unlocked") === "1") setUnlocked(true);
    } catch (e) {
      console.warn("Storage inacessível", e);
    }
  }, []);
  const activeSection = useSectionTracker("hero");
  const activeTrackId = TRACKS.find((t) => t.id === activeSection)?.id ?? "hero";
  if (!unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(Login, { onUnlock: () => setUnlocked(true) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    !started && /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, { onStart: () => setStarted(true) }),
    started && /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-screen w-full flex items-center justify-center text-primary animate-pulse", children: "Carregando nosso amor..." }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Conversations, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Proposal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalMessage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative py-12 text-center text-xs text-muted-foreground", children: "Feito com ❤️ — para Sophia." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, { tracks: TRACKS, activeId: activeTrackId, started })
  ] });
}
export {
  Page as component
};
