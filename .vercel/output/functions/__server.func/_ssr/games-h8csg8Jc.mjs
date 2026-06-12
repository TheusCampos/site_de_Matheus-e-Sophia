import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Login, P as Particles, N as Nav } from "./Login-Bq6ktypG.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/gsap.mjs";
import "./server-DI-QjkXt.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
const Quiz = reactExports.lazy(() => import("./Quiz-YPwbZT7j.mjs").then((m) => ({
  default: m.Quiz
})));
const MemoryGame = reactExports.lazy(() => import("./MemoryGame-DXf7DcPH.mjs").then((m) => ({
  default: m.MemoryGame
})));
const WordGuess = reactExports.lazy(() => import("./WordGuess-Bb-wr1M1.mjs").then((m) => ({
  default: m.WordGuess
})));
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-primary animate-pulse", children: "Carregando jogos..." }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quiz, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MemoryGame, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WordGuess, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "btn-ghost-romance text-sm inline-flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
      " Voltar para a nossa história"
    ] }) })
  ] });
}
export {
  GamesPage as component
};
