import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Login, P as Particles, N as Nav } from "./Login-DKuwCuRI.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, C as Check, X, S as Sparkles, R as RotateCcw, H as Heart } from "../_libs/lucide-react.mjs";
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
import "./server-DCzYpSM9.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
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
  const pick2 = (i) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-16 md:py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
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
            onClick: () => pick2(i),
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
const m1 = "/assets/foto-10-CxVi2jBm.jpeg";
const m2 = "/assets/foto-11-BekCgo7b.jpeg";
const m3 = "/assets/foto-12-CCl-GjCC.jpeg";
const m4 = "/assets/foto-13-BHEKEDFs.jpeg";
const m5 = "/assets/foto-14-DFAikvJu.jpeg";
const m6 = "/assets/foto-15-0GdS7AQI.jpeg";
const m7 = "/assets/foto-16-DxBXx_oB.jpeg";
const m8 = "/assets/foto-17-B9ruzNS2.jpeg";
const m9 = "/assets/foto-18-DBUglDwe.jpeg";
const m10 = "/assets/foto-19-Cw5JfSrN.jpeg";
const m11 = "/assets/foto-20-WE9XVkKk.jpeg";
const m12 = "/assets/foto-21-DDfyEi_2.jpeg";
const IMAGES = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
function shuffle() {
  const deck = [...IMAGES, ...IMAGES].map((img, i) => ({ id: i, img, matched: false }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
function MemoryGame() {
  const [deck, setDeck] = reactExports.useState(() => shuffle());
  const [flipped, setFlipped] = reactExports.useState([]);
  const [attempts, setAttempts] = reactExports.useState(0);
  const [won, setWon] = reactExports.useState(false);
  const matchedCount = reactExports.useMemo(() => deck.filter((c) => c.matched).length, [deck]);
  reactExports.useEffect(() => {
    if (flipped.length !== 2) return;
    const [a, b] = flipped;
    setAttempts((n) => n + 1);
    const ca = deck.find((c) => c.id === a);
    const cb = deck.find((c) => c.id === b);
    if (ca.img === cb.img) {
      setTimeout(() => {
        setDeck((d) => d.map((c) => c.id === a || c.id === b ? { ...c, matched: true } : c));
        setFlipped([]);
      }, 500);
    } else {
      setTimeout(() => setFlipped([]), 900);
    }
  }, [flipped, deck]);
  reactExports.useEffect(() => {
    if (matchedCount === deck.length && !won) {
      setWon(true);
      const fire = () => confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#fef0f5", "#f8c8d8", "#e88aab", "#c45c7c"]
      });
      fire();
      setTimeout(fire, 400);
      setTimeout(fire, 800);
    }
  }, [matchedCount, deck.length, won]);
  const click = (id) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-section": "game", className: "relative py-24 md:py-36 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-2", children: "Bônus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Memória do amor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Encontre os pares e descubra de novo cada momento nosso." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-4 glass rounded-full px-5 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Tentativas: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gradient-romance", children: attempts })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Pares:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-gradient-romance", children: [
            matchedCount / 2,
            "/",
            IMAGES.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: reset,
            "aria-label": "Reiniciar",
            className: "ml-2 size-7 grid place-items-center rounded-full hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-3.5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 md:gap-4", children: deck.map((c) => {
      const isFlipped = flipped.includes(c.id) || c.matched;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => click(c.id),
          "aria-label": "Carta de memória",
          className: "relative aspect-square rounded-2xl",
          style: { perspective: 1e3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute inset-0 transition-transform duration-500",
              style: {
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 rounded-2xl bg-gradient-romance shadow-glow grid place-items-center",
                    style: { backfaceVisibility: "hidden" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-8 text-primary-foreground/80", fill: "currentColor" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute inset-0 rounded-2xl overflow-hidden border border-white/20",
                    style: { backfaceVisibility: "hidden", transform: "rotateY(180deg)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: "", className: "size-full object-cover" }),
                      c.matched && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/30 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-8 text-white drop-shadow-lg", fill: "currentColor" }) })
                    ]
                  }
                )
              ]
            }
          )
        },
        c.id
      );
    }) }),
    won && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 text-center glass-strong rounded-3xl p-8 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl", children: "Parabéns! Você encontrou todos os pares." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl md:text-3xl text-gradient-romance mt-3", children: "Assim como eu encontrei a melhor pessoa da minha vida." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: reset, className: "btn-ghost-romance mt-6", children: [
        "Jogar de novo ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" })
      ] })
    ] })
  ] }) });
}
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-16 md:py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
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
function GamesPage() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem("sophia:unlocked") === "1");
    } catch (e) {
      console.warn("Storage inacessível", e);
    }
  }, []);
  if (!unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(Login, { onUnlock: () => setUnlocked(true) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 18 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "pt-28 pb-8 text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-2", children: "Bônus para você" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl glow-text", children: "Nossos joguinhos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Pequenos jogos que falam da gente. Escolha um e brinque com calma. ❤️" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Quiz, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryGame, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WordGuess, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "btn-ghost-romance text-sm inline-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
      " Voltar para a nossa história"
    ] }) })
  ] });
}
export {
  GamesPage as component
};
