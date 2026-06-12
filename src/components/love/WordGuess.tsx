import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { RotateCcw } from "lucide-react";

const WORDS = ["AMOR", "SOPHIA", "DESTINO", "BEIJO", "SORRISO", "ETERNO", "GIRASSOL", "CORACAO"];

function pick() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export function WordGuess() {
  const ref = useRef<HTMLElement>(null);
  const [word, setWord] = useState(pick);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  const MAX = 6;

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const won = useMemo(() => word.split("").every((c) => guessed.has(c)), [word, guessed]);
  const lost = errors >= MAX;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".wg-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      );
    }, ref);
    return () => ctx.revert();
  }, [word]);

  const press = (l: string) => {
    if (won || lost || guessed.has(l)) return;
    const n = new Set(guessed);
    n.add(l);
    setGuessed(n);
    if (!word.includes(l)) setErrors((e) => e + 1);
  };

  const reset = () => {
    setWord(pick());
    setGuessed(new Set());
    setErrors(0);
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <p className="font-script text-2xl text-primary mb-1">Jogo</p>
          <h2 className="font-display text-3xl md:text-5xl">Adivinhe a palavra</h2>
          <p className="mt-3 text-muted-foreground">Cada palavra tem a ver com a gente. 💗</p>
        </header>

        <div className="wg-card glass-strong rounded-3xl p-6 md:p-8 shadow-soft text-center">
          <div className="flex justify-center gap-2 md:gap-3 mb-6 flex-wrap">
            {word.split("").map((c, i) => (
              <div
                key={i}
                className={`size-10 md:size-12 grid place-items-center rounded-xl font-display text-2xl border ${
                  guessed.has(c) || lost
                    ? "bg-primary/20 border-primary text-foreground"
                    : "bg-white/5 border-white/15 text-transparent"
                }`}
              >
                {guessed.has(c) || lost ? c : "_"}
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-4">Vidas restantes: {MAX - errors} ❤️</p>

          <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5 max-w-md mx-auto">
            {letters.map((l) => {
              const used = guessed.has(l);
              const isRight = used && word.includes(l);
              const isWrong = used && !word.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => press(l)}
                  disabled={used || won || lost}
                  className={`size-8 md:size-9 rounded-md text-xs font-semibold transition ${
                    isRight
                      ? "bg-primary text-primary-foreground"
                      : isWrong
                        ? "bg-destructive/30 text-muted-foreground"
                        : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {l}
                </button>
              );
            })}
          </div>

          {(won || lost) && (
            <div className="mt-6">
              <p className="font-display text-xl">
                {won ? "Você acertou! ❤️" : `A palavra era ${word}.`}
              </p>
              <button onClick={reset} className="btn-ghost-romance mt-4 text-sm">
                Jogar de novo <RotateCcw className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
