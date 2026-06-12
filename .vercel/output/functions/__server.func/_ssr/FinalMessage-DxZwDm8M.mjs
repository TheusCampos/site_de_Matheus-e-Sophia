import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
const m1 = "/assets/foto-1-CYnGumee.jpeg";
const m2 = "/assets/foto-2-D3DQU_WY.jpeg";
const m3 = "/assets/foto-3-5DnJghdg.jpeg";
const m5 = "/assets/foto-5-DqqgUOWv.jpeg";
const hero = "/assets/banner-02-7hQfU-UU.png";
const SLIDES = [hero, m3, m2, m5, m1];
const FULL_TEXT = "Se eu pudesse escolher novamente, escolheria você. Se pudesse viver mil vidas, te amaria em todas elas. eu te amo meu amor!!";
function FinalMessage() {
  const ref = reactExports.useRef(null);
  const [typed, setTyped] = reactExports.useState("");
  const [slide, setSlide] = reactExports.useState(0);
  const [started, setStarted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!started) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, [started]);
  reactExports.useEffect(() => {
    const i = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      "data-section": "final",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 content-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          SLIDES.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: "",
              "aria-hidden": true,
              className: "absolute inset-0 size-full object-cover transition-opacity duration-[2000ms]",
              style: { opacity: i === slide ? 0.35 : 0 }
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-6", children: "Capítulo final" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl md:text-4xl leading-relaxed glow-text min-h-[200px] md:min-h-[280px]", children: [
            typed,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-0.5 h-7 md:h-10 bg-primary ml-1 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-3xl md:text-5xl text-gradient-romance mt-10", children: "Com todo o meu amor." })
        ] })
      ]
    }
  );
}
export {
  FinalMessage
};
