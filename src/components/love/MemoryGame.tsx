import { useEffect, useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { Heart, RotateCcw } from "lucide-react";
import m1 from "@/assets/foto-10.jpeg";
import m2 from "@/assets/foto-11.jpeg";
import m3 from "@/assets/foto-12.jpeg";
import m4 from "@/assets/foto-13.jpeg";
import m5 from "@/assets/foto-14.jpeg";
import m6 from "@/assets/foto-15.jpeg";
import m7 from "@/assets/foto-16.jpeg";
import m8 from "@/assets/foto-17.jpeg";
import m9 from "@/assets/foto-18.jpeg";
import m10 from "@/assets/foto-19.jpeg";
import m11 from "@/assets/foto-20.jpeg";
import m12 from "@/assets/foto-21.jpeg";

const IMAGES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];

type Card = { id: number; img: string; matched: boolean };

function shuffle(): Card[] {
  const deck = [...IMAGES, ...IMAGES].map((img, i) => ({ id: i, img, matched: false }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function MemoryGame() {
  const [deck, setDeck] = useState<Card[]>(() => shuffle());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  const matchedCount = useMemo(() => deck.filter((c) => c.matched).length, [deck]);

  useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    setAttempts((n) => n + 1);
    const ca = deck.find((c) => c.id === a)!;
    const cb = deck.find((c) => c.id === b)!;
    if (ca.img === cb.img) {
      setTimeout(() => {
        setDeck((d) => d.map((c) => (c.id === a || c.id === b ? { ...c, matched: true } : c)));
        setFlipped([]);
      }, 500);
    } else {
      setTimeout(() => setFlipped([]), 900);
    }
  }, [flipped, deck]);

  useEffect(() => {
    if (matchedCount === deck.length && !won) {
      setWon(true);
      const fire = () =>
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c"],
        });
      fire();
      setTimeout(fire, 400);
      setTimeout(fire, 800);
    }
  }, [matchedCount, deck.length, won]);

  const click = (id: number) => {
    if (flipped.length === 2) return;
    if (flipped.includes(id)) return;
    if (deck.find((c) => c.id === id)?.matched) return;
    setFlipped((f) => [...f, id]);
  };

  const reset = () => {
    setDeck(shuffle());
    setFlipped([]);
    setAttempts(0);
    setWon(false);
  };

  return (
    <section data-section="game" className="relative py-24 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <p className="font-script text-2xl text-primary mb-2">Bônus</p>
          <h2 className="font-display text-4xl md:text-6xl">Memória do amor</h2>
          <p className="mt-4 text-muted-foreground">
            Encontre os pares e descubra de novo cada momento nosso.
          </p>
          <div className="mt-6 inline-flex items-center gap-4 glass rounded-full px-5 py-2 text-sm">
            <span>
              Tentativas: <strong className="text-gradient-romance">{attempts}</strong>
            </span>
            <span className="opacity-50">·</span>
            <span>
              Pares:{" "}
              <strong className="text-gradient-romance">
                {matchedCount / 2}/{IMAGES.length}
              </strong>
            </span>
            <button
              onClick={reset}
              aria-label="Reiniciar"
              className="ml-2 size-7 grid place-items-center rounded-full hover:bg-white/10"
            >
              <RotateCcw className="size-3.5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 md:gap-4">
          {deck.map((c) => {
            const isFlipped = flipped.includes(c.id) || c.matched;
            return (
              <button
                key={c.id}
                onClick={() => click(c.id)}
                aria-label="Carta de memória"
                className="relative aspect-square rounded-2xl"
                style={{ perspective: 1000 }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-romance shadow-glow grid place-items-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Heart className="size-8 text-primary-foreground/80" fill="currentColor" />
                  </div>
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <img src={c.img} alt="" className="size-full object-cover" />
                    {c.matched && (
                      <div className="absolute inset-0 bg-primary/30 grid place-items-center">
                        <Heart className="size-8 text-white drop-shadow-lg" fill="currentColor" />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {won && (
          <div className="mt-10 text-center glass-strong rounded-3xl p-8 animate-fade-up">
            <p className="font-display text-2xl md:text-3xl">
              Parabéns! Você encontrou todos os pares.
            </p>
            <p className="font-script text-2xl md:text-3xl text-gradient-romance mt-3">
              Assim como eu encontrei a melhor pessoa da minha vida.
            </p>
            <button onClick={reset} className="btn-ghost-romance mt-6">
              Jogar de novo <RotateCcw className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
