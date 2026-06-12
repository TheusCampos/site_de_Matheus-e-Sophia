import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Login } from "@/components/love/Login";
import { Intro } from "@/components/love/Intro";
import { Hero } from "@/components/love/Hero";
import { Gallery } from "@/components/love/Gallery";
import { Conversations } from "@/components/love/Conversations";
import { Proposal } from "@/components/love/Proposal";
import { FinalMessage } from "@/components/love/FinalMessage";
import { Particles } from "@/components/love/Particles";
import { MusicPlayer, type Track } from "@/components/love/MusicPlayer";
import { Nav } from "@/components/love/Nav";
import { useSectionTracker } from "@/components/love/useSectionTracker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para Sophia — A nossa história" },
      {
        name: "description",
        content:
          "Uma jornada interativa pela nossa história de amor. Memórias, conversas, jogos e um pedido especial — feito do coração.",
      },
      { property: "og:title", content: "Para Sophia — A nossa história" },
      { property: "og:description", content: "Uma surpresa romântica em forma de site. ❤️" },
    ],
  }),
  component: Page,
});

// 🎵 "É Amor - Jorge & Mateus" — a favorita de Sophia 💗
const FAVORITE_ID = "t1hfqfdmcD8";

const TRACKS: Track[] = [
  // #1 — A FAVORITA. Sempre toca primeiro (ao abrir o site).
  { id: "hero", title: "É Amor", artist: "Jorge & Mateus", youtubeId: FAVORITE_ID },

  // As demais faixas tocam conforme ela rola a página ou pula no player.
  { id: "gallery", title: "Memórias", artist: "Música 2", youtubeId: "kszkoFI84JU" },
  { id: "chat", title: "Sussurros", artist: "Música 3", youtubeId: "o_1aF54DO60" },
  { id: "proposal", title: "Momentos", artist: "Música 4", youtubeId: "-YzDsDMYqdw" },
  { id: "final", title: "Para sempre", artist: "Música 5", youtubeId: "W1tzURKYFNs" },

  // Faixa 6 (disponível no botão de passar música)
  { id: "bonus", title: "Especial", artist: "Música 6", youtubeId: "kI6ywewtYkc" },
];

function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("sophia:unlocked") === "1") setUnlocked(true);
    } catch (e) {
      console.warn("Storage inacessível", e);
    }
  }, []);

  const activeSection = useSectionTracker("hero");
  const activeTrackId = TRACKS.find((t) => t.id === activeSection)?.id ?? "hero";

  if (!unlocked) return <Login onUnlock={() => setUnlocked(true)} />;

  return (
    <main className="relative">
      <Particles />
      <Nav />

      {!started && <Intro onStart={() => setStarted(true)} />}

      {started && (
        <>
          <Hero />
          <Gallery />
          <Conversations />
          <Proposal />
          <FinalMessage />
          <footer className="relative py-12 text-center text-xs text-muted-foreground">
            Feito com ❤️ — para Sophia.
          </footer>
        </>
      )}

      <MusicPlayer tracks={TRACKS} activeId={activeTrackId} started={started} />
    </main>
  );
}
