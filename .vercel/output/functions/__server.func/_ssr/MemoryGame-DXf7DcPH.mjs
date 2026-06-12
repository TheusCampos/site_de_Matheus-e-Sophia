import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { R as RotateCcw, H as Heart } from "../_libs/lucide-react.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-section": "game", className: "relative py-24 md:py-36 px-6 content-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: "", className: "size-full object-cover", loading: "lazy", decoding: "async" }),
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
export {
  MemoryGame
};
