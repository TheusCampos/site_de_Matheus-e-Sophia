import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import confetti from "canvas-confetti";
import { Check, RotateCcw, Sparkles, X } from "lucide-react";

type Q = { q: string; options: string[]; correct: number; hint?: string };

const QUESTIONS: Q[] = [
  {
    q: "Em que dia tudo começou?",
    options: ["14/02/2025", "05/03/2025", "10/06/2025", "22/04/2025"],
    correct: 1,
  },
  {
    q: "Qual é a nossa música?",
    options: ["Um Homem Apaixonado", "é amor", "Seu Astral", "Evidências"],
    correct: 1,
  },
  {
    q: "Qual o nosso lugar favorito?",
    options: ["Nosso abraço", "Casa", "Cinema", "Parque"],
    correct: 0,
  },
  {
    q: "O que eu mais amo em você?",
    options: ["O sorriso", "O olhar", "O abraço", "Tudo"],
    correct: 3,
  },
  {
    q: "Quem disse 'eu te amo' primeiro?",
    options: ["Eu", "Você", "Foi junto", "Ninguém lembra 😅"],
    correct: 1,
  },
  {
    q: "Qual flor te representa?",
    options: ["Rosa", "Girassol", "Cerejeira", "Tulipa"],
    correct: 1,
  },
  {
    q: "O que faríamos num dia perfeito?",
    options: ["Filme em casa", "passeio surpresa", "Jantar a dois", "Tudo isso"],
    correct: 3,
  },
];

export function Quiz() {
  const ref = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = QUESTIONS[idx];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quiz-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      );
      gsap.fromTo(
        ".quiz-opt",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.15, ease: "power3.out" },
      );
    }, ref);
    return () => ctx.revert();
  }, [idx, done]);

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const ok = i === q.correct;
    if (ok) setScore((s) => s + 1);
    setTimeout(() => {
      if (idx + 1 >= QUESTIONS.length) {
        setDone(true);
        confetti({
          particleCount: 160,
          spread: 100,
          origin: { y: 0.6 },
          colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c"],
        });
      } else {
        setIdx((n) => n + 1);
        setPicked(null);
      }
    }, 1000);
  };

  const reset = () => {
    setIdx(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <p className="font-script text-2xl text-primary mb-1">Jogo</p>
          <h2 className="font-display text-3xl md:text-5xl">Quiz do nosso amor</h2>
          <p className="mt-3 text-muted-foreground">Quantas você acerta sobre a gente?</p>
        </header>

        {!done ? (
          <div className="quiz-card glass-strong rounded-3xl p-6 md:p-8 shadow-soft">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
              <span>
                Pergunta {idx + 1} de {QUESTIONS.length}
              </span>
              <span>
                Pontos: <strong className="text-gradient-romance">{score}</strong>
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-gradient-romance transition-all"
                style={{ width: `${(idx / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-6">{q.q}</h3>
            <div className="grid gap-3">
              {q.options.map((opt, i) => {
                const isPicked = picked === i;
                const isRight = picked !== null && i === q.correct;
                const isWrong = isPicked && i !== q.correct;
                return (
                  <button
                    key={i}
                    onClick={() => pick(i)}
                    disabled={picked !== null}
                    className={`quiz-opt text-left rounded-2xl px-4 py-3 border transition flex items-center justify-between ${
                      isRight
                        ? "bg-primary/30 border-primary text-foreground"
                        : isWrong
                          ? "bg-destructive/20 border-destructive text-foreground"
                          : "glass border-white/15 hover:border-primary/50"
                    }`}
                  >
                    <span>{opt}</span>
                    {isRight && <Check className="size-5 text-primary" />}
                    {isWrong && <X className="size-5 text-destructive" />}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="quiz-card glass-strong rounded-3xl p-8 text-center">
            <Sparkles className="size-10 text-primary mx-auto mb-3" />
            <p className="font-display text-3xl">
              Você acertou {score} de {QUESTIONS.length}!
            </p>
            <p className="font-script text-2xl text-gradient-romance mt-3">
              {score === QUESTIONS.length
                ? "Você me conhece como ninguém. ❤️"
                : score >= QUESTIONS.length - 2
                  ? "Quase perfeita, como você."
                  : "A gente tem ainda mais a viver juntos!"}
            </p>
            <button onClick={reset} className="btn-ghost-romance mt-6 text-sm">
              Jogar de novo <RotateCcw className="size-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
