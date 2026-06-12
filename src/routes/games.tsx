import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Particles } from "@/components/love/Particles";
import { Nav } from "@/components/love/Nav";
import { Quiz } from "@/components/love/Quiz";
import { MemoryGame } from "@/components/love/MemoryGame";
import { WordGuess } from "@/components/love/WordGuess";
import { Login } from "@/components/love/Login";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Jogos · Para Sophia" },
      { name: "description", content: "Quiz, jogo da memória e mais — feitos com amor para você." },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const [unlocked, setUnlocked] = useState(false);
  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem("sophia:unlocked") === "1");
    } catch (e) {
      console.warn("Storage inacessível", e);
    }
  }, []);

  if (!unlocked) return <Login onUnlock={() => setUnlocked(true)} />;

  return (
    <main className="relative min-h-screen">
      <Particles count={18} />
      <Nav />

      <header className="pt-28 pb-8 text-center px-6">
        <p className="font-script text-2xl text-primary mb-2">Bônus para você</p>
        <h1 className="font-display text-4xl md:text-6xl glow-text">Nossos joguinhos</h1>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Pequenos jogos que falam da gente. Escolha um e brinque com calma. ❤️
        </p>
      </header>

      <Quiz />
      <MemoryGame />
      <WordGuess />

      <footer className="py-12 text-center">
        <Link to="/" className="btn-ghost-romance text-sm inline-flex">
          <ArrowLeft className="size-4" /> Voltar para a nossa história
        </Link>
      </footer>
    </main>
  );
}
