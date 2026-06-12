import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Login, P as Particles, N as Nav, h as heroCouple } from "./Login-DKuwCuRI.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import "../_libs/seroval.mjs";
import { H as Heart, a as ArrowDown, b as ChevronLeft, c as ChevronRight, d as Star, X, I as ImagePlus, M as Music2, e as SkipBack, P as Pause, f as Play, g as SkipForward, V as VolumeX, h as Volume2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function Intro({ onStart }) {
  const rootRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".intro-photo", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsapWithCSS.from(".intro-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out"
      });
      gsapWithCSS.from(".intro-cta", { y: 20, opacity: 0, duration: 1, delay: 1.6, ease: "power3.out" });
    }, rootRef);
    return () => ctx.revert();
  }, []);
  const handleStart = () => {
    window.dispatchEvent(new CustomEvent("play-music-now"));
    gsapWithCSS.to(rootRef.current, {
      opacity: 0,
      scale: 1.08,
      filter: "blur(20px)",
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: onStart
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: rootRef,
      className: "fixed inset-0 z-[100] grid place-items-center overflow-hidden",
      style: { background: "oklch(0.1 0.04 350)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "intro-photo absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroCouple,
              alt: "Nosso retrato de abertura",
              className: "size-full object-cover opacity-50",
              width: 1536,
              height: 1024,
              fetchPriority: "high",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-petal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-line font-script text-2xl md:text-3xl text-primary mb-6", children: "Para Sophia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "intro-line font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text", children: [
            "Algumas histórias são escritas pelo",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gradient-romance not-italic", children: "destino" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-line font-display text-2xl md:text-3xl mt-4 text-muted-foreground italic", children: "A nossa foi escrita pelo amor." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleStart,
              className: "intro-cta btn-romance mt-12 text-base md:text-lg animate-pulse-glow",
              children: [
                "Começar nossa história",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-5 animate-heart-beat", fill: "currentColor" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "intro-cta mt-6 text-xs text-muted-foreground/70", children: "Recomendado com som ligado · 🎧" })
        ] })
      ]
    }
  );
}
const RELATIONSHIP_START = /* @__PURE__ */ new Date("2025-03-05T00:00:00");
function daysSince(date) {
  return Math.floor((Date.now() - date.getTime()) / (1e3 * 60 * 60 * 24));
}
function Hero() {
  const ref = reactExports.useRef(null);
  const [days, setDays] = reactExports.useState(() => daysSince(RELATIONSHIP_START));
  reactExports.useEffect(() => {
    const i = setInterval(() => setDays(daysSince(RELATIONSHIP_START)), 6e4);
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".hero-photo", { scale: 1.1, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsapWithCSS.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out"
      });
      const onScroll = () => {
        const y = window.scrollY;
        gsapWithCSS.to(".hero-photo", { y: y * 0.3, duration: 0.4, overwrite: true });
        gsapWithCSS.to(".hero-text", {
          y: y * 0.15,
          opacity: Math.max(0, 1 - y / 600),
          duration: 0.4,
          overwrite: true
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, ref);
    return () => {
      clearInterval(i);
      ctx.revert();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      "data-section": "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-photo absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroCouple,
              alt: "Nós dois em um momento especial",
              className: "size-full object-cover",
              width: 1536,
              height: 1024,
              fetchPriority: "high",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-text relative z-10 px-6 max-w-4xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4 text-primary animate-heart-beat", fill: "currentColor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-gradient-romance font-bold", children: days }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-2", children: "dias desde que minha vida ficou melhor" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text", children: [
            "Entre bilhões de pessoas no mundo,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "meu coração escolheu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-romance", children: "você" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl md:text-4xl mt-6 text-primary", children: "E eu escolheria novamente todos os dias." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#memories", className: "btn-romance mt-12 inline-flex", children: [
            "Continuar nossa jornada",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#memories",
            "aria-label": "Rolar",
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "size-6" })
          }
        )
      ]
    }
  );
}
const m1$1 = "/assets/favorita-01-J6fRRYbu.jpeg";
const m2$1 = "/assets/favorita-02-CSqdKQgu.jpeg";
const m3$1 = "/assets/favorita-03-B2hVXgK5.jpeg";
const m4 = "/assets/favorita-04-DC1Gp6ps.jpeg";
const m5$1 = "/assets/favorita-05-Di0aR22r.jpeg";
const m6 = "/assets/favorita-06-FXlQSrd9.jpeg";
const m7 = "/assets/favorita-07-BkHesjOo.jpeg";
const m8 = "/assets/favorita-08-CRcsKLgD.jpeg";
const m9 = "/assets/favorita-09-ChFWGIR2.jpeg";
const m10 = "/assets/favorita-10-CIIXQOtw.jpeg";
const MEMORIES = [
  {
    id: "m1",
    src: m1$1,
    date: "07 Set 2025",
    place: "Uma das minhas fotos favoritas",
    caption: "Um dia simples que se tornou inesquecível.",
    featured: true
  },
  {
    id: "m2",
    src: m2$1,
    date: "23 Mai 2026",
    place: "Não tenho palavre para dizer o com linda você é",
    caption: "Dançamos até o mundo desaparecer."
  },
  {
    id: "m3",
    src: m3$1,
    date: "21 Dez 2025",
    place: "Uns de muitos show que agente foi",
    caption: "é tão bom estar com você.",
    featured: true
  },
  {
    id: "m4",
    src: m4,
    date: "25 Mai 2025",
    place: "A minha primeira foto favorita",
    caption: "Polaroides que viram memórias eternas."
  },
  {
    id: "m5",
    src: m5$1,
    date: "19 Out 2025",
    place: "Parque das cerejeiras",
    caption: "Cada pétala um pedido secreto.",
    featured: true
  },
  {
    id: "m6",
    src: m6,
    date: "Sempre",
    place: "Um show que eu adoro",
    caption: "curtimos até o mundo desaparecer."
  },
  {
    id: "m7",
    src: m7,
    date: "23 Mai 2026",
    place: "Uma das minhas fotos favoritas",
    caption: "uma foto ineesquecível.",
    featured: true
  },
  {
    id: "m8",
    src: m8,
    date: "23 Mai 2026",
    place: "A minha primeira foto favorita",
    caption: "um beijo que viram memórias eternas."
  },
  {
    id: "m9",
    src: m9,
    date: "21 Dez 2025",
    place: "Um casamento marcante kk",
    caption: "é tão bom estar com você.",
    featured: true
  },
  {
    id: "m10",
    src: m10,
    date: "25 Mai 2025",
    place: "um dia simples",
    caption: "eu te amo meu amor!!"
  }
];
const FAV_KEY = "sophia:favorites";
function useFavorites() {
  const [favs, setFavs] = reactExports.useState(/* @__PURE__ */ new Set());
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      if (raw) setFavs(new Set(JSON.parse(raw)));
    } catch (e) {
      console.warn("Local storage inacessível", e);
    }
  }, []);
  const toggle = (id) => {
    setFavs((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      try {
        localStorage.setItem(FAV_KEY, JSON.stringify([...n]));
      } catch (e) {
        console.warn("Local storage inacessível", e);
      }
      return n;
    });
  };
  return { favs, toggle };
}
function Gallery() {
  const ref = reactExports.useRef(null);
  const trackRef = reactExports.useRef(null);
  const [index, setIndex] = reactExports.useState(0);
  const [active, setActive] = reactExports.useState(null);
  const { favs, toggle } = useFavorites();
  const [burst, setBurst] = reactExports.useState(null);
  const slides = MEMORIES;
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsapWithCSS.context(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const t = e.target;
            if (t.dataset.animated) return;
            t.dataset.animated = "1";
            if (t.classList.contains("gal-header")) {
              gsapWithCSS.from(t.children, {
                y: 30,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out"
              });
            } else if (t.classList.contains("gal-grid")) {
              gsapWithCSS.from(t.querySelectorAll(".gal-thumb"), {
                y: 50,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out"
              });
            }
          });
        },
        { threshold: 0.15 }
      );
      el.querySelectorAll(".gal-header, .gal-grid").forEach((n) => obs.observe(n));
      return () => obs.disconnect();
    }, ref);
    return () => ctx.revert();
  }, []);
  reactExports.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    gsapWithCSS.to(el, { xPercent: -(100 / slides.length) * index, duration: 0.9, ease: "power3.inOut" });
  }, [index, slides.length]);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const current = slides[index];
  const isFavCurrent = current ? favs.has(current.id) : false;
  reactExports.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);
  const onToggle = (id) => {
    toggle(id);
    if (!favs.has(id)) {
      setBurst(id);
      setTimeout(() => setBurst(null), 700);
    }
  };
  reactExports.useEffect(() => {
    document.body.classList.toggle("no-scroll", !!active);
    return () => document.body.classList.remove("no-scroll");
  }, [active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      id: "memories",
      "data-section": "gallery",
      className: "relative py-24 md:py-36 px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "gal-header text-center mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-2", children: "Capítulo 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Nossas melhores memórias" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Deslize pelos momentos em destaque e marque com ❤️ os seus favoritos." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-20 flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "phone-frame relative mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[300px] md:w-[340px] aspect-[9/19] rounded-[44px] bg-neutral-900 p-[10px] shadow-glow ring-1 ring-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-full overflow-hidden rounded-[36px] bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-neutral-900" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-center justify-between px-4 pt-3 pb-2 text-[10px] font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:41" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "●●● 5G ▮" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-center justify-between px-3 py-2 border-b border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-script text-xl text-primary", children: "Sophia & Eu" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 opacity-70 text-xs", children: "+ ♡ ✈" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-center gap-2 px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-gradient-romance p-[2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-full rounded-full bg-background grid place-items-center text-[10px]", children: "❤️" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold truncate", children: "nossa.historia" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground truncate", children: current?.place })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-60", children: "⋯" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-black", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      ref: trackRef,
                      className: "flex h-full",
                      style: { width: `${slides.length * 100}%` },
                      children: slides.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "relative shrink-0 grow-0 h-full",
                          style: { width: `${100 / slides.length}%` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "img",
                            {
                              src: m.src,
                              alt: m.caption,
                              className: "size-full object-cover",
                              loading: i === 0 ? "eager" : "lazy",
                              decoding: "async",
                              width: 340,
                              height: 340
                            }
                          )
                        },
                        m.id
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 flex gap-1", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `h-1 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`
                    },
                    i
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: prev,
                      "aria-label": "Anterior",
                      className: "absolute inset-y-0 left-0 w-1/3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: next,
                      "aria-label": "Próximo",
                      className: "absolute inset-y-0 right-0 w-1/3"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 px-3 pt-2 flex items-center gap-3 text-lg", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => current && onToggle(current.id),
                      "aria-label": "Curtir",
                      className: "relative",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Heart,
                          {
                            className: `size-6 transition ${isFavCurrent ? "text-primary scale-110" : ""}`,
                            fill: isFavCurrent ? "currentColor" : "none"
                          }
                        ),
                        current && burst === current.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 rounded-full animate-ping bg-primary/40" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "💬" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "✈" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto opacity-70", children: "🔖" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "nossa.historia" }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic", children: current?.caption })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: current?.date })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: prev,
                  "aria-label": "Anterior",
                  className: "hidden md:grid absolute left-[-72px] top-1/2 -translate-y-1/2 size-12 place-items-center rounded-full glass-strong hover:bg-white/15",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-6" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: next,
                  "aria-label": "Próximo",
                  className: "hidden md:grid absolute right-[-72px] top-1/2 -translate-y-1/2 size-12 place-items-center rounded-full glass-strong hover:bg-white/15",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-6" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex md:hidden gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: prev,
                  "aria-label": "Anterior",
                  className: "size-11 grid place-items-center rounded-full glass-strong",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: next,
                  "aria-label": "Próximo",
                  className: "size-11 grid place-items-center rounded-full glass-strong",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-display text-2xl md:text-3xl mb-8", children: "Toda a galeria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gal-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5", children: MEMORIES.map((m) => {
            const isFav = favs.has(m.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "gal-thumb group relative overflow-hidden rounded-2xl glass shadow-soft",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(m), className: "block w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: m.src,
                          alt: m.caption,
                          loading: "lazy",
                          decoding: "async",
                          width: 400,
                          height: 400,
                          className: "w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: m.date }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic text-sm truncate", children: m.caption })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => onToggle(m.id),
                      "aria-label": "Favoritar",
                      className: `absolute top-3 right-3 size-9 grid place-items-center rounded-full backdrop-blur-xl border transition ${isFav ? "bg-primary/40 border-primary text-white" : "bg-black/30 border-white/20 text-white hover:bg-black/50"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4", fill: isFav ? "currentColor" : "none" })
                    }
                  ),
                  m.featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-gradient-romance text-primary-foreground px-2 py-1 rounded-full flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3", fill: "currentColor" }),
                    " Destaque"
                  ] })
                ]
              },
              m.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-6", children: favs.size > 0 ? `${favs.size} memória${favs.size > 1 ? "s" : ""} favorita${favs.size > 1 ? "s" : ""} ❤️` : "Toque no ❤️ para favoritar uma memória" })
        ] }),
        active && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            role: "dialog",
            "aria-modal": "true",
            className: "fixed inset-0 z-[80] grid place-items-center p-4 bg-background/85 backdrop-blur-xl animate-fade-up",
            onClick: () => setActive(null),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "aria-label": "Fechar",
                  className: "absolute top-6 right-6 size-10 grid place-items-center rounded-full glass hover:bg-white/15",
                  onClick: () => setActive(null),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl w-full", onClick: (e) => e.stopPropagation(), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: active.src,
                    alt: active.caption,
                    className: "w-full max-h-[75vh] object-contain rounded-2xl shadow-glow"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl italic", children: active.caption }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: [
                    active.date,
                    " · ",
                    active.place
                  ] })
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}
const INITIAL = [
  {
    id: "c1",
    title: "A primeira confissão",
    subtitle: "23 de fevereiro · 23h14",
    messages: [
      { from: "me", text: "Oi… posso te confessar uma coisa?", time: "23:14" },
      { from: "her", text: "Sempre. 💗", time: "23:14" },
      { from: "me", text: "Sorri sozinho aqui só de pensar em você.", time: "23:15" },
      { from: "her", text: "Para com isso 🥺 tô virando tomate", time: "23:15" },
      { from: "me", text: "Acho que eu nunca senti isso por ninguém.", time: "23:18" },
      {
        from: "her",
        text: "Eu também não. E me assusta um pouquinho, no melhor sentido.",
        time: "23:19"
      },
      { from: "me", text: "Então segura minha mão. A gente atravessa junto.", time: "23:20" },
      { from: "her", text: "Combinado. Pra sempre. ❤️", time: "23:20" }
    ]
  },
  {
    id: "c2",
    title: "O bom dia que virou tradição",
    subtitle: "Todos os dias desde então",
    messages: [
      { from: "me", text: "Bom dia, meu amor ☀️", time: "07:02" },
      { from: "her", text: "Bom dia, vida 🥰", time: "07:03" },
      { from: "me", text: "Sonhei com a gente de novo.", time: "07:03" },
      { from: "her", text: "Conta tudo!", time: "07:04" },
      { from: "me", text: "A gente tava viajando. Você ria muito.", time: "07:05" },
      { from: "her", text: "Então vamos transformar em verdade. ✈️", time: "07:06" }
    ]
  },
  {
    id: "c3",
    title: "Quando você disse 'eu te amo'",
    subtitle: "Eu li umas dez vezes pra ter certeza",
    messages: [
      { from: "her", text: "Posso te falar uma coisa séria?", time: "22:41" },
      { from: "me", text: "Sempre.", time: "22:41" },
      { from: "her", text: "Eu te amo.", time: "22:42" },
      { from: "me", text: "Espera, deixa eu reler isso umas 10 vezes 😭", time: "22:42" },
      { from: "her", text: "Boba 😅", time: "22:43" },
      { from: "me", text: "Eu também te amo. Muito. Desde o primeiro 'oi'.", time: "22:43" },
      { from: "her", text: "Melhor mensagem da minha vida. 💍❤️", time: "22:44" }
    ]
  },
  {
    id: "c4",
    title: "Planos pro futuro",
    subtitle: "Lista do que ainda vamos viver",
    messages: [
      { from: "me", text: "Lista nova: lugares pra ir com você.", time: "21:10" },
      { from: "her", text: "Manda 👀", time: "21:10" },
      { from: "me", text: "1. Praia ao amanhecer.", time: "21:11" },
      { from: "me", text: "2. Cinema na sessão das 14h, sem ninguém na sala.", time: "21:11" },
      { from: "me", text: "3. Uma viagem só nossa, sem pressa pra voltar.", time: "21:12" },
      { from: "her", text: "4. Casa nossa. Com cachorro. ❤️", time: "21:13" },
      { from: "me", text: "Anotado. Vai todo mundo acontecer.", time: "21:13" }
    ]
  }
];
const PRINTS_KEY = "sophia:prints";
function Conversations() {
  const ref = reactExports.useRef(null);
  const scrollRef = reactExports.useRef(null);
  const [activeIdx, setActiveIdx] = reactExports.useState(0);
  const [prints, setPrints] = reactExports.useState([]);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(PRINTS_KEY);
      if (raw) setPrints(JSON.parse(raw));
    } catch (e) {
      console.warn("Storage inativo", e);
    }
  }, []);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".cv-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out"
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  const active = INITIAL[activeIdx];
  const activePrints = prints.filter((p) => p.convId === active.id);
  const allMessages = [
    ...active.messages,
    ...activePrints.map((p) => ({ from: p.from, img: p.img, time: p.time }))
  ];
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.fromTo(
        ".cv-msg",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" }
      );
    }, scrollRef);
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 300);
    return () => ctx.revert();
  }, [activeIdx, prints]);
  const prev = () => setActiveIdx((i) => (i - 1 + INITIAL.length) % INITIAL.length);
  const next = () => setActiveIdx((i) => (i + 1) % INITIAL.length);
  const onUpload = (e, from) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = String(reader.result);
      const time = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const next2 = [...prints, { convId: active.id, from, img, time }];
      setPrints(next2);
      try {
        localStorage.setItem(PRINTS_KEY, JSON.stringify(next2));
      } catch (err) {
        console.warn("Storage error", err);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  const removePrint = (img) => {
    const n = prints.filter((p) => !(p.convId === active.id && p.img === img));
    setPrints(n);
    try {
      localStorage.setItem(PRINTS_KEY, JSON.stringify(n));
    } catch (err) {
      console.warn("Storage error", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, "data-section": "chat", className: "relative py-24 md:py-36 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "cv-header text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-2xl text-primary mb-2", children: "Capítulo 2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl", children: "Nossas conversas favoritas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Navegue entre os momentos — ou adicione os seus próprios prints." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none", children: INITIAL.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActiveIdx(i),
        className: `shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition border ${i === activeIdx ? "bg-gradient-romance text-primary-foreground border-transparent shadow-glow" : "glass border-white/15 text-muted-foreground hover:text-foreground"}`,
        children: c.title
      },
      c.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-[330px] md:w-[380px] aspect-[9/19] rounded-[44px] bg-neutral-900 p-[10px] shadow-glow ring-1 ring-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-full overflow-hidden rounded-[36px] bg-background flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-neutral-900" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:41" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "●●● 5G ▮" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 flex items-center gap-2 px-3 py-2 border-b border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prev,
            "aria-label": "Conversa anterior",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-9 rounded-full bg-gradient-romance grid place-items-center font-display text-primary-foreground text-sm", children: "S" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold truncate", children: "Sophia ❤️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: active.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: next,
            "aria-label": "Próxima conversa",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pt-2 pb-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground italic", children: active.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 space-y-2 overflow-y-auto px-3 py-2", children: allMessages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `cv-msg flex ${m.from === "me" ? "justify-end" : "justify-start"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `max-w-[78%] rounded-2xl px-3 py-2 text-[13px] ${m.from === "me" ? "bg-gradient-romance text-primary-foreground rounded-br-sm shadow-glow" : "bg-white/10 text-foreground rounded-bl-sm"}`,
              children: [
                m.img ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: m.img,
                      alt: "print da conversa",
                      loading: "lazy",
                      decoding: "async",
                      width: 240,
                      height: 400,
                      className: "rounded-xl max-h-56 object-contain"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => removePrint(m.img),
                      "aria-label": "Remover print",
                      className: "absolute -top-2 -right-2 size-6 grid place-items-center rounded-full bg-background/80 border border-white/20",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3" })
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed whitespace-pre-wrap", children: m.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-[9px] mt-1 ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                    children: m.time
                  }
                )
              ]
            }
          )
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 border-t border-white/10 px-3 py-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "size-9 grid place-items-center rounded-full bg-white/10 cursor-pointer hover:bg-white/20",
            title: "Print como ela",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: (e) => onUpload(e, "her")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-9 rounded-full bg-white/10 px-3 grid items-center text-[11px] text-muted-foreground", children: "Adicionar print da conversa…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "size-9 grid place-items-center rounded-full bg-gradient-romance text-primary-foreground cursor-pointer",
            title: "Print como eu",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: (e) => onUpload(e, "me")
                }
              )
            ]
          }
        )
      ] })
    ] }) }) })
  ] }) });
}
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
      className: "relative py-24 md:py-36 px-6 overflow-hidden",
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
      className: "relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24",
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
let apiPromise = null;
function loadYouTubeAPI() {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT) resolve(window.YT);
    };
  });
  return apiPromise;
}
function MusicPlayer({
  tracks,
  activeId,
  started
}) {
  const playerRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [muted, setMuted] = reactExports.useState(false);
  const [volume, setVolume] = reactExports.useState(0.55);
  const [currentId, setCurrentId] = reactExports.useState(activeId);
  const [apiReady, setApiReady] = reactExports.useState(false);
  const [playerReady, setPlayerReady] = reactExports.useState(false);
  const playIntent = reactExports.useRef(false);
  const fadeOutRef = reactExports.useRef(null);
  const fadeInRef = reactExports.useRef(null);
  const current = tracks.find((t) => t.id === currentId) ?? tracks[0];
  reactExports.useEffect(() => {
    loadYouTubeAPI().then((YT) => {
      if (YT?.Player) setApiReady(true);
    });
  }, []);
  reactExports.useEffect(() => {
    if (!apiReady || playerRef.current) return;
    const player = new window.YT.Player("yt-player-container", {
      // IMPORTANTE: Alguns vídeos não tocam se o player for muito pequeno ou 0x0
      height: "200",
      width: "200",
      videoId: current.youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: current.youtubeId,
        // necessário para o loop funcionar
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: (event) => {
          event.target.setVolume(muted ? 0 : Math.round(volume * 100));
          setPlayerReady(true);
        },
        onStateChange: (event) => {
          const YT = window.YT;
          if (event.data === YT.PlayerState.PLAYING) setIsPlaying(true);
          if (event.data === YT.PlayerState.PAUSED) setIsPlaying(false);
          if (event.data === YT.PlayerState.ENDED) event.target.playVideo();
        },
        onError: () => {
          setIsPlaying(false);
          console.error("Erro no player do YouTube");
        }
      }
    });
    playerRef.current = player;
    return () => {
      try {
        playerRef.current?.destroy?.();
        playerRef.current = null;
        setPlayerReady(false);
      } catch (e) {
        console.warn("Erro ao destruir player", e);
      }
    };
  }, [apiReady]);
  reactExports.useEffect(() => {
    const player = playerRef.current;
    if (!player || !playerReady) return;
    if (started || playIntent.current) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [started, playerReady]);
  reactExports.useEffect(() => {
    const handlePlayNow = () => {
      playIntent.current = true;
      if (playerRef.current && playerReady) {
        playerRef.current.playVideo();
      }
    };
    window.addEventListener("play-music-now", handlePlayNow);
    return () => window.removeEventListener("play-music-now", handlePlayNow);
  }, [playerReady]);
  reactExports.useEffect(() => {
    if (!started || isPlaying || !playerReady) return;
    const playOnInteract = () => {
      playerRef.current?.playVideo();
    };
    window.addEventListener("click", playOnInteract, { capture: true });
    window.addEventListener("touchstart", playOnInteract, { capture: true });
    return () => {
      window.removeEventListener("click", playOnInteract, { capture: true });
      window.removeEventListener("touchstart", playOnInteract, { capture: true });
    };
  }, [started, isPlaying, playerReady]);
  const lastActiveId = reactExports.useRef(activeId);
  reactExports.useEffect(() => {
    if (!started || !playerReady) return;
    if (activeId === lastActiveId.current) return;
    lastActiveId.current = activeId;
    if (activeId === currentId) return;
    const player = playerRef.current;
    if (!player) return;
    const currentTrack = tracks.find((t) => t.id === currentId) ?? tracks[0];
    const nextTrack2 = tracks.find((t) => t.id === activeId);
    if (!nextTrack2 || nextTrack2.youtubeId === currentTrack.youtubeId) return;
    const target = volume;
    let v = player.getVolume();
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);
    fadeOutRef.current = setInterval(() => {
      v = Math.max(0, v - 5);
      player.setVolume(v);
      if (v <= 0) {
        if (fadeOutRef.current) clearInterval(fadeOutRef.current);
        player.loadVideoById(nextTrack2.youtubeId);
        player.playVideo();
        setCurrentId(activeId);
        let vi = 0;
        fadeInRef.current = setInterval(() => {
          vi = Math.min(target * 100, vi + 4);
          player.setVolume(muted ? 0 : Math.round(vi));
          if (vi >= target * 100) {
            if (fadeInRef.current) clearInterval(fadeInRef.current);
          }
        }, 60);
      }
    }, 50);
    return () => {
      if (fadeOutRef.current) clearInterval(fadeOutRef.current);
      if (fadeInRef.current) clearInterval(fadeInRef.current);
    };
  }, [activeId, started, currentId, volume, muted, tracks, playerReady]);
  reactExports.useEffect(() => {
    const player = playerRef.current;
    if (player && playerReady) {
      player.setVolume(muted ? 0 : Math.round(volume * 100));
    }
  }, [volume, muted, playerReady]);
  const toggle = () => {
    const player = playerRef.current;
    if (!player || !playerReady) return;
    if (isPlaying) player.pauseVideo();
    else player.playVideo();
  };
  const prevTrack = () => {
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);
    const idx = tracks.findIndex((t) => t.id === currentId);
    const p = tracks[(idx - 1 + tracks.length) % tracks.length];
    const player = playerRef.current;
    if (player && playerReady && p.youtubeId !== current.youtubeId) {
      player.loadVideoById(p.youtubeId);
      player.setVolume(muted ? 0 : Math.round(volume * 100));
      player.playVideo();
    }
    setCurrentId(p.id);
  };
  const nextTrack = () => {
    if (fadeOutRef.current) clearInterval(fadeOutRef.current);
    if (fadeInRef.current) clearInterval(fadeInRef.current);
    const idx = tracks.findIndex((t) => t.id === currentId);
    const n = tracks[(idx + 1) % tracks.length];
    const player = playerRef.current;
    if (player && playerReady && n.youtubeId !== current.youtubeId) {
      player.loadVideoById(n.youtubeId);
      player.setVolume(muted ? 0 : Math.round(volume * 100));
      player.playVideo();
    }
    setCurrentId(n.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed -left-[9999px] -top-[9999px] opacity-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "yt-player-container" }) }),
    started && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 max-w-xs animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong shadow-glow rounded-2xl px-4 py-3 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `size-10 rounded-full bg-gradient-romance grid place-items-center shrink-0 ${isPlaying ? "animate-pulse-glow" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "size-5 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: current.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground truncate", children: current.artist })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevTrack,
            "aria-label": "Música anterior",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggle,
            "aria-label": isPlaying ? "Pausar" : "Tocar",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: nextTrack,
            "aria-label": "Próxima música",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "size-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMuted((m) => !m),
            "aria-label": muted ? "Ativar som" : "Silenciar",
            className: "size-8 grid place-items-center rounded-full hover:bg-white/10 transition",
            children: muted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          "aria-label": "Volume",
          type: "range",
          min: 0,
          max: 1,
          step: 0.01,
          value: volume,
          onChange: (e) => setVolume(parseFloat(e.target.value)),
          className: "mt-2 w-full accent-primary"
        }
      )
    ] })
  ] });
}
function useSectionTracker(initial) {
  const [active, setActive] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-section]"));
    if (nodes.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const name = visible.target.dataset.section;
          if (name) setActive(name);
        }
      },
      { threshold: [0.3, 0.6] }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
  return active;
}
const FAVORITE_ID = "t1hfqfdmcD8";
const TRACKS = [
  // #1 — A FAVORITA. Sempre toca primeiro (ao abrir o site).
  {
    id: "hero",
    title: "É Amor",
    artist: "Jorge & Mateus",
    youtubeId: FAVORITE_ID
  },
  // As demais faixas tocam conforme ela rola a página ou pula no player.
  {
    id: "gallery",
    title: "Memórias",
    artist: "Música 2",
    youtubeId: "kszkoFI84JU"
  },
  {
    id: "chat",
    title: "Sussurros",
    artist: "Música 3",
    youtubeId: "o_1aF54DO60"
  },
  {
    id: "proposal",
    title: "Momentos",
    artist: "Música 4",
    youtubeId: "-YzDsDMYqdw"
  },
  {
    id: "final",
    title: "Para sempre",
    artist: "Música 5",
    youtubeId: "W1tzURKYFNs"
  },
  // Faixa 6 (disponível no botão de passar música)
  {
    id: "bonus",
    title: "Especial",
    artist: "Música 6",
    youtubeId: "kI6ywewtYkc"
  }
];
function Page() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const [started, setStarted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      if (sessionStorage.getItem("sophia:unlocked") === "1") setUnlocked(true);
    } catch (e) {
      console.warn("Storage inacessível", e);
    }
  }, []);
  const activeSection = useSectionTracker("hero");
  const activeTrackId = TRACKS.find((t) => t.id === activeSection)?.id ?? "hero";
  if (!unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(Login, { onUnlock: () => setUnlocked(true) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    !started && /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, { onStart: () => setStarted(true) }),
    started && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Conversations, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Proposal, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalMessage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative py-12 text-center text-xs text-muted-foreground", children: "Feito com ❤️ — para Sophia." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MusicPlayer, { tracks: TRACKS, activeId: activeTrackId, started })
  ] });
}
export {
  Page as component
};
