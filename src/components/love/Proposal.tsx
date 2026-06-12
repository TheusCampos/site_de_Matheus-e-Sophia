import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Music2 } from "lucide-react";

const START = new Date("2025-03-05T00:00:00");

function diff(now: number) {
  let s = Math.max(0, Math.floor((now - START.getTime()) / 1000));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  return { d, h, m, s };
}

export function Proposal() {
  const ref = useRef<HTMLElement>(null);
  const [t, setT] = useState(() => diff(Date.now()));
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const i = setInterval(() => setT(diff(Date.now())), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const accept = () => {
    setAccepted(true);
    const burst = () =>
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c", "#ffffff"],
        scalar: 1.2,
      });
    burst();
    setTimeout(burst, 300);
    setTimeout(burst, 700);
  };

  const dodge = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const parent = (el.parentElement as HTMLElement).getBoundingClientRect();
    const x = Math.random() * (parent.width - rect.width) - parent.width / 2 + rect.width / 2;
    const y = Math.random() * 80 - 40;
    setNoPos({ x, y });
  };

  const Unit = ({ value, label }: { value: number; label: string }) => (
    <div className="glass rounded-2xl px-3 py-4 md:px-5 md:py-6 min-w-[68px] md:min-w-[92px] text-center">
      <div className="font-display text-3xl md:text-5xl text-gradient-romance font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <section
      ref={ref}
      data-section="proposal"
      className="relative py-24 md:py-36 px-6 overflow-hidden content-auto"
    >
      <div
        className="absolute inset-0 bg-gradient-aurora opacity-20 blur-3xl"
        style={{ animation: "aurora-spin 40s linear infinite" }}
      />
      <div className="relative max-w-5xl mx-auto">
        <header className="text-center mb-12 reveal">
          <p className="font-script text-2xl text-primary mb-2">Capítulo 3</p>
          <h2 className="font-display text-4xl md:text-6xl">Nossa música, nossa história</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="reveal glass-strong rounded-3xl p-6 flex gap-4 items-center shadow-soft">
            <div className="size-20 rounded-2xl bg-gradient-romance grid place-items-center animate-pulse-glow shrink-0">
              <Music2 className="size-9 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Nossa música
              </p>
              <p className="font-display text-2xl truncate">É AMOR</p>
              <p className="text-sm text-muted-foreground truncate">Jorge & Mateus</p>
              <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-romance" />
              </div>
            </div>
          </div>

          <div className="reveal glass-strong rounded-3xl p-6 shadow-soft">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Começou em</p>
            <p className="font-display text-3xl mt-1">05 de Março, 2025</p>
            <p className="font-script text-xl text-primary mt-2">o dia mais bonito da minha vida</p>
          </div>
        </div>

        <div className="reveal text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5">juntos há</p>
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            <Unit value={t.d} label="Dias" />
            <Unit value={t.h} label="Horas" />
            <Unit value={t.m} label="Minutos" />
            <Unit value={t.s} label="Segundos" />
          </div>
        </div>

        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="relative inline-block mb-8">
            <Heart
              className={`size-32 md:size-40 text-primary drop-shadow-[0_0_40px_oklch(0.72_0.18_0/0.6)] ${
                accepted ? "animate-heart-beat" : ""
              }`}
              fill="currentColor"
              style={{
                transition: "transform 0.6s ease",
                transform: accepted ? "scale(1.2)" : "scale(1)",
              }}
            />
          </div>

          <p className="font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            Você transformou meus dias comuns em momentos extraordinários. Quero continuar vivendo
            essa história ao seu lado por muito tempo. Então tenho apenas uma pergunta…
          </p>

          <h3 className="font-display text-3xl md:text-5xl mt-8 glow-text">
            Você aceita continuar sendo{" "}
            <span className="text-gradient-romance">o amor da minha vida</span>? ❤️
          </h3>

          {!accepted ? (
            <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
              <button onClick={accept} className="btn-romance text-lg">
                SIM ❤️
              </button>
              <button onClick={accept} className="btn-romance text-lg">
                CLARO QUE SIM 😍
              </button>
              <button
                onMouseEnter={dodge}
                onFocus={dodge}
                onClick={dodge}
                className="btn-ghost-romance text-sm transition-transform"
                style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
              >
                Não
              </button>
            </div>
          ) : (
            <div className="mt-12 glass-strong rounded-3xl p-8 animate-fade-up">
              <p className="font-script text-3xl md:text-5xl text-gradient-romance">Eu sabia. 💍</p>
              <p className="mt-3 text-muted-foreground">
                Obrigado por escolher a mim, todos os dias.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
