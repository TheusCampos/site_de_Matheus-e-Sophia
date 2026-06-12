import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { H as Heart, f as ChevronLeft, g as ChevronRight, h as Star, X } from "../_libs/lucide-react.mjs";
const m1 = "/assets/favorita-01-J6fRRYbu.jpeg";
const m2 = "/assets/favorita-02-CSqdKQgu.jpeg";
const m3 = "/assets/favorita-03-B2hVXgK5.jpeg";
const m4 = "/assets/favorita-04-DC1Gp6ps.jpeg";
const m5 = "/assets/favorita-05-Di0aR22r.jpeg";
const m6 = "/assets/favorita-06-FXlQSrd9.jpeg";
const m7 = "/assets/favorita-07-BkHesjOo.jpeg";
const m8 = "/assets/favorita-08-CRcsKLgD.jpeg";
const m9 = "/assets/favorita-09-ChFWGIR2.jpeg";
const m10 = "/assets/favorita-10-CIIXQOtw.jpeg";
const MEMORIES = [
  {
    id: "m1",
    src: m1,
    date: "07 Set 2025",
    place: "Uma das minhas fotos favoritas",
    caption: "Um dia simples que se tornou inesquecível.",
    featured: true
  },
  {
    id: "m2",
    src: m2,
    date: "23 Mai 2026",
    place: "Não tenho palavre para dizer o com linda você é",
    caption: "Dançamos até o mundo desaparecer."
  },
  {
    id: "m3",
    src: m3,
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
    src: m5,
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
      className: "relative py-24 md:py-36 px-6 content-auto",
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
export {
  Gallery
};
