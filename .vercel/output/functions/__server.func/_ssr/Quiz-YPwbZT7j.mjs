import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { C as Check, X, e as Sparkles, R as RotateCcw } from "../_libs/lucide-react.mjs";
const QUESTIONS = [
  {
    q: "Em que dia tudo começou?",
    options: ["14/02/2025", "05/03/2025", "10/06/2025", "22/04/2025"],
    correct: 1
  },
  {
    q: "Qual é a nossa música?",
    options: ["Um Homem Apaixonado", "é amor", "Seu Astral", "Evidências"],
    correct: 1
  },
  {
    q: "Qual o nosso lugar favorito?",
    options: ["Nosso abraço", "Casa", "Cinema", "Parque"],
    correct: 0
  },
  {
    q: "O que eu mais amo em você?",
    options: ["O sorriso", "O olhar", "O abraço", "Tudo"],
    correct: 3
  },
  {
    q: "Quem disse 'eu te amo' primeiro?",
    options: ["Eu", "Você", "Foi junto", "Ninguém lembra 😅"],
    correct: 1
  },
  {
    q: "Qual flor te representa?",
    options: ["Rosa", "Girassol", "Cerejeira", "Tulipa"],
    correct: 1
  },
  {
    q: "O que faríamos num dia perfeito?",
    options: ["Filme em casa", "passeio surpresa", "Jantar a dois", "Tudo isso"],
    correct: 3
  }
];
function Quiz() {
  const ref = reactExports.useRef(null);
  const [idx, setIdx] = reactExports.useState(0);
  const [score, setScore] = reactExports.useState(0);
  const [picked, setPicked] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  const q = QUESTIONS[idx];
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.fromTo(
        ".quiz-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsapWithCSS.fromTo(
        ".quiz-opt",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.15, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, [idx, done]);
  const pick = (i) => {
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
          colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c"]
        });
      } else {
        setIdx((n) => n + 1);
        setPicked(null);
      }
    }, 1e3);
  };
  const reset = () => {
    setIdx(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-16 md:py-24 px-6 content-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-1", children: "Jogo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl", children: "Quiz do nosso amor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Quantas você acerta sobre a gente?" })
    ] }),
    !done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quiz-card glass-strong rounded-3xl p-6 md:p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Pergunta ",
          idx + 1,
          " de ",
          QUESTIONS.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Pontos: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gradient-romance", children: score })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-white/10 rounded-full overflow-hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-gradient-romance transition-all",
          style: { width: `${idx / QUESTIONS.length * 100}%` }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl mb-6", children: q.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: q.options.map((opt, i) => {
        const isPicked = picked === i;
        const isRight = picked !== null && i === q.correct;
        const isWrong = isPicked && i !== q.correct;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => pick(i),
            disabled: picked !== null,
            className: `quiz-opt text-left rounded-2xl px-4 py-3 border transition flex items-center justify-between ${isRight ? "bg-primary/30 border-primary text-foreground" : isWrong ? "bg-destructive/20 border-destructive text-foreground" : "glass border-white/15 hover:border-primary/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: opt }),
              isRight && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5 text-primary" }),
              isWrong && /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5 text-destructive" })
            ]
          },
          i
        );
      }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quiz-card glass-strong rounded-3xl p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-10 text-primary mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl", children: [
        "Você acertou ",
        score,
        " de ",
        QUESTIONS.length,
        "!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-gradient-romance mt-3", children: score === QUESTIONS.length ? "Você me conhece como ninguém. ❤️" : score >= QUESTIONS.length - 2 ? "Quase perfeita, como você." : "A gente tem ainda mais a viver juntos!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reset, className: "btn-ghost-romance mt-6 text-sm", children: [
        "Jogar de novo ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" })
      ] })
    ] })
  ] }) });
}
export {
  Quiz
};
