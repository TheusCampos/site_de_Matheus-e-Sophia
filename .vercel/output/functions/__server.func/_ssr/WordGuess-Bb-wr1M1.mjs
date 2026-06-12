import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { R as RotateCcw } from "../_libs/lucide-react.mjs";
const WORDS = ["AMOR", "SOPHIA", "DESTINO", "BEIJO", "SORRISO", "ETERNO", "GIRASSOL", "CORACAO"];
function pick() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}
function WordGuess() {
  const ref = reactExports.useRef(null);
  const [word, setWord] = reactExports.useState(pick);
  const [guessed, setGuessed] = reactExports.useState(/* @__PURE__ */ new Set());
  const [errors, setErrors] = reactExports.useState(0);
  const MAX = 6;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const won = reactExports.useMemo(() => word.split("").every((c) => guessed.has(c)), [word, guessed]);
  const lost = errors >= MAX;
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.fromTo(
        ".wg-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, [word]);
  const press = (l) => {
    if (won || lost || guessed.has(l)) return;
    const n = new Set(guessed);
    n.add(l);
    setGuessed(n);
    if (!word.includes(l)) setErrors((e) => e + 1);
  };
  const reset = () => {
    setWord(pick());
    setGuessed(/* @__PURE__ */ new Set());
    setErrors(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-16 md:py-24 px-6 content-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-1", children: "Jogo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl", children: "Adivinhe a palavra" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Cada palavra tem a ver com a gente. 💗" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wg-card glass-strong rounded-3xl p-6 md:p-8 shadow-soft text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 md:gap-3 mb-6 flex-wrap", children: word.split("").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `size-10 md:size-12 grid place-items-center rounded-xl font-display text-2xl border ${guessed.has(c) || lost ? "bg-primary/20 border-primary text-foreground" : "bg-white/5 border-white/15 text-transparent"}`,
          children: guessed.has(c) || lost ? c : "_"
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-4", children: [
        "Vidas restantes: ",
        MAX - errors,
        " ❤️"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 sm:grid-cols-9 gap-1.5 max-w-md mx-auto", children: letters.map((l) => {
        const used = guessed.has(l);
        const isRight = used && word.includes(l);
        const isWrong = used && !word.includes(l);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => press(l),
            disabled: used || won || lost,
            className: `size-8 md:size-9 rounded-md text-xs font-semibold transition ${isRight ? "bg-primary text-primary-foreground" : isWrong ? "bg-destructive/30 text-muted-foreground" : "bg-white/10 hover:bg-white/20"}`,
            children: l
          },
          l
        );
      }) }),
      (won || lost) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: won ? "Você acertou! ❤️" : `A palavra era ${word}.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reset, className: "btn-ghost-romance mt-4 text-sm", children: [
          "Jogar de novo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  WordGuess
};
