import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { M as Music2, H as Heart } from "../_libs/lucide-react.mjs";
const START = /* @__PURE__ */ new Date("2025-03-05T00:00:00");
function diff(now) {
  let s = Math.max(0, Math.floor((now - START.getTime()) / 1e3));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  return { d, h, m, s };
}
function Proposal() {
  const ref = reactExports.useRef(null);
  const [t, setT] = reactExports.useState(() => diff(Date.now()));
  const [accepted, setAccepted] = reactExports.useState(false);
  const [noPos, setNoPos] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const i = setInterval(() => setT(diff(Date.now())), 1e3);
    return () => clearInterval(i);
  }, []);
  reactExports.useEffect(() => {
    const items = ref.current?.querySelectorAll(".reveal") ?? [];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
  const accept = () => {
    setAccepted(true);
    const burst = () => confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c", "#ffffff"],
      scalar: 1.2
    });
    burst();
    setTimeout(burst, 300);
    setTimeout(burst, 700);
  };
  const dodge = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const parent = el.parentElement.getBoundingClientRect();
    const x = Math.random() * (parent.width - rect.width) - parent.width / 2 + rect.width / 2;
    const y = Math.random() * 80 - 40;
    setNoPos({ x, y });
  };
  const Unit = ({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl px-3 py-4 md:px-5 md:py-6 min-w-[68px] md:min-w-[92px] text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl md:text-5xl text-gradient-romance font-bold tabular-nums", children: String(value).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mt-1", children: label })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      "data-section": "proposal",
      className: "relative py-24 md:py-36 px-6 overflow-hidden content-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-gradient-aurora opacity-20 blur-3xl",
            style: { animation: "aurora-spin 40s linear infinite" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-12 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-2", children: "Capítulo 3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Nossa música, nossa história" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal glass-strong rounded-3xl p-6 flex gap-4 items-center shadow-soft", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-20 rounded-2xl bg-gradient-romance grid place-items-center animate-pulse-glow shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "size-9 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Nossa música" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl truncate", children: "É AMOR" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground truncate", children: "Jorge & Mateus" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1 rounded-full bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-2/3 bg-gradient-romance" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal glass-strong rounded-3xl p-6 shadow-soft", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Começou em" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl mt-1", children: "05 de Março, 2025" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-xl text-primary mt-2", children: "o dia mais bonito da minha vida" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-muted-foreground mb-5", children: "juntos há" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-2 md:gap-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Unit, { value: t.d, label: "Dias" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Unit, { value: t.h, label: "Horas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Unit, { value: t.m, label: "Minutos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Unit, { value: t.s, label: "Segundos" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center max-w-2xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-block mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                className: `size-32 md:size-40 text-primary drop-shadow-[0_0_40px_oklch(0.72_0.18_0/0.6)] ${accepted ? "animate-heart-beat" : ""}`,
                fill: "currentColor",
                style: {
                  transition: "transform 0.6s ease",
                  transform: accepted ? "scale(1.2)" : "scale(1)"
                }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl md:text-2xl italic text-muted-foreground leading-relaxed", children: "Você transformou meus dias comuns em momentos extraordinários. Quero continuar vivendo essa história ao seu lado por muito tempo. Então tenho apenas uma pergunta…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl md:text-5xl mt-8 glow-text", children: [
              "Você aceita continuar sendo",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-romance", children: "o amor da minha vida" }),
              "? ❤️"
            ] }),
            !accepted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-12 flex flex-wrap items-center justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: accept, className: "btn-romance text-lg", children: "SIM ❤️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: accept, className: "btn-romance text-lg", children: "CLARO QUE SIM 😍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onMouseEnter: dodge,
                  onFocus: dodge,
                  onClick: dodge,
                  className: "btn-ghost-romance text-sm transition-transform",
                  style: { transform: `translate(${noPos.x}px, ${noPos.y}px)` },
                  children: "Não"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 glass-strong rounded-3xl p-8 animate-fade-up", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl md:text-5xl text-gradient-romance", children: "Eu sabia. 💍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Obrigado por escolher a mim, todos os dias." })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  Proposal
};
