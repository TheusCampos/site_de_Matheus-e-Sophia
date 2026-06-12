import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Heart, ChevronLeft, ChevronRight, Star, X } from "lucide-react";
import m1 from "@/assets/favorita-01.jpeg";
import m2 from "@/assets/favorita-02.jpeg";
import m3 from "@/assets/favorita-03.jpeg";
import m4 from "@/assets/favorita-04.jpeg";
import m5 from "@/assets/favorita-05.jpeg";
import m6 from "@/assets/favorita-06.jpeg";
import m7 from "@/assets/favorita-07.jpeg";
import m8 from "@/assets/favorita-08.jpeg";
import m9 from "@/assets/favorita-09.jpeg";
import m10 from "@/assets/favorita-10.jpeg";

type Memory = {
  id: string;
  src: string;
  date: string;
  place: string;
  caption: string;
  featured?: boolean;
};

const MEMORIES: Memory[] = [
  {
    id: "m1",
    src: m1,
    date: "07 Set 2025",
    place: "Uma das minhas fotos favoritas",
    caption: "Um dia simples que se tornou inesquecível.",
    featured: true,
  },
  {
    id: "m2",
    src: m2,
    date: "23 Mai 2026",
    place: "Não tenho palavre para dizer o com linda você é",
    caption: "Dançamos até o mundo desaparecer.",
  },
  {
    id: "m3",
    src: m3,
    date: "21 Dez 2025",
    place: "Uns de muitos show que agente foi",
    caption: "é tão bom estar com você.",
    featured: true,
  },
  {
    id: "m4",
    src: m4,
    date: "25 Mai 2025",
    place: "A minha primeira foto favorita",
    caption: "Polaroides que viram memórias eternas.",
  },
  {
    id: "m5",
    src: m5,
    date: "19 Out 2025",
    place: "Parque das cerejeiras",
    caption: "Cada pétala um pedido secreto.",
    featured: true,
  },
  {
    id: "m6",
    src: m6,
    date: "Sempre",
    place: "Um show que eu adoro",
    caption: "curtimos até o mundo desaparecer.",
  },
  {
    id: "m7",
    src: m7,
    date: "23 Mai 2026",
    place: "Uma das minhas fotos favoritas",
    caption: "uma foto ineesquecível.",
    featured: true,
  },
  {
    id: "m8",
    src: m8,
    date: "23 Mai 2026",
    place: "A minha primeira foto favorita",
    caption: "um beijo que viram memórias eternas.",
  },
  {
    id: "m9",
    src: m9,
    date: "21 Dez 2025",
    place: "Um casamento marcante kk",
    caption: "é tão bom estar com você.",
    featured: true,
  },
  {
    id: "m10",
    src: m10,
    date: "25 Mai 2025",
    place: "um dia simples",
    caption: "eu te amo meu amor!!",
  },
];

const FAV_KEY = "sophia:favorites";

function useFavorites() {
  const [favs, setFavs] = useState<Set<string>>(new Set());
  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      if (raw) setFavs(new Set(JSON.parse(raw)));
    } catch (e) {
      console.warn("Local storage inacessível", e);
    }
  }, []);
  const toggle = (id: string) => {
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

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<Memory | null>(null);
  const { favs, toggle } = useFavorites();
  const [burst, setBurst] = useState<string | null>(null);

  // Todas as memórias entram no carrossel — basta adicionar ao MEMORIES.
  // A flag `featured` continua valendo para o selo "Destaque" na grade.
  const slides = MEMORIES;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const t = e.target as HTMLElement;
            if (t.dataset.animated) return;
            t.dataset.animated = "1";
            if (t.classList.contains("gal-header")) {
              gsap.from(t.children, {
                y: 30,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
              });
            } else if (t.classList.contains("gal-grid")) {
              gsap.from(t.querySelectorAll(".gal-thumb"), {
                y: 50,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.08,
                ease: "power3.out",
              });
            }
          });
        },
        { threshold: 0.15 },
      );
      el.querySelectorAll(".gal-header, .gal-grid").forEach((n) => obs.observe(n));
      return () => obs.disconnect();
    }, ref);
    return () => ctx.revert();
  }, []);

  // animate carousel slide
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // O track tem largura = slides.length * 100% do container.
    // Cada slide ocupa (100 / slides.length)% do track = 100% do container.
    // Para mostrar o slide `index`, movemos o track por (100/slides.length)% de sua própria largura.
    gsap.to(el, { xPercent: -(100 / slides.length) * index, duration: 0.9, ease: "power3.inOut" });
  }, [index, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const current = slides[index];
  const isFavCurrent = current ? favs.has(current.id) : false;

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);

  const onToggle = (id: string) => {
    toggle(id);
    if (!favs.has(id)) {
      setBurst(id);
      setTimeout(() => setBurst(null), 700);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", !!active);
    return () => document.body.classList.remove("no-scroll");
  }, [active]);

  return (
    <section
      ref={ref}
      id="memories"
      data-section="gallery"
      className="relative py-24 md:py-36 px-6 content-auto"
    >
      <div className="max-w-6xl mx-auto">
        <header className="gal-header text-center mb-14">
          <p className="font-script text-2xl text-primary mb-2">Capítulo 1</p>
          <h2 className="font-display text-4xl md:text-6xl">Nossas melhores memórias</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Deslize pelos momentos em destaque e marque com ❤️ os seus favoritos.
          </p>
        </header>

        {/* PHONE MOCKUP CAROUSEL — estilo Instagram */}
        <div className="relative mb-20 flex flex-col items-center">
          <div className="phone-frame relative mx-auto">
            {/* phone body */}
            <div className="relative w-[300px] md:w-[340px] aspect-[9/19] rounded-[44px] bg-neutral-900 p-[10px] shadow-glow ring-1 ring-white/10">
              <div className="relative size-full overflow-hidden rounded-[36px] bg-background">
                {/* notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-neutral-900" />

                {/* IG status bar */}
                <div className="relative z-20 flex items-center justify-between px-4 pt-3 pb-2 text-[10px] font-semibold">
                  <span>9:41</span>
                  <span className="opacity-70">●●● 5G ▮</span>
                </div>

                {/* IG header */}
                <div className="relative z-20 flex items-center justify-between px-3 py-2 border-b border-border/40">
                  <span className="font-script text-xl text-primary">Sophia & Eu</span>
                  <div className="flex gap-2 opacity-70 text-xs">+ ♡ ✈</div>
                </div>

                {/* post header */}
                <div className="relative z-20 flex items-center gap-2 px-3 py-2">
                  <div className="size-7 rounded-full bg-gradient-romance p-[2px]">
                    <div className="size-full rounded-full bg-background grid place-items-center text-[10px]">
                      ❤️
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold truncate">nossa.historia</p>
                    <p className="text-[9px] text-muted-foreground truncate">{current?.place}</p>
                  </div>
                  <span className="text-xs opacity-60">⋯</span>
                </div>

                {/* slides */}
                <div className="relative aspect-square overflow-hidden bg-black">
                  <div
                    ref={trackRef}
                    className="flex h-full"
                    style={{ width: `${slides.length * 100}%` }}
                  >
                    {slides.map((m, i) => (
                      <div
                        key={m.id}
                        className="relative shrink-0 grow-0 h-full"
                        style={{ width: `${100 / slides.length}%` }}
                      >
                        <img
                          src={m.src}
                          alt={m.caption}
                          className="size-full object-cover"
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          width={340}
                          height={340}
                        />
                      </div>
                    ))}
                  </div>

                  {/* dots overlay */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 rounded-full transition-all ${i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                      />
                    ))}
                  </div>

                  {/* tap zones */}
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute inset-y-0 left-0 w-1/3"
                  />
                  <button
                    onClick={next}
                    aria-label="Próximo"
                    className="absolute inset-y-0 right-0 w-1/3"
                  />
                </div>

                {/* actions */}
                <div className="relative z-20 px-3 pt-2 flex items-center gap-3 text-lg">
                  <button
                    onClick={() => current && onToggle(current.id)}
                    aria-label="Curtir"
                    className="relative"
                  >
                    <Heart
                      className={`size-6 transition ${isFavCurrent ? "text-primary scale-110" : ""}`}
                      fill={isFavCurrent ? "currentColor" : "none"}
                    />
                    {current && burst === current.id && (
                      <span className="pointer-events-none absolute inset-0 rounded-full animate-ping bg-primary/40" />
                    )}
                  </button>
                  <span className="opacity-70">💬</span>
                  <span className="opacity-70">✈</span>
                  <span className="ml-auto opacity-70">🔖</span>
                </div>

                {/* caption */}
                <div className="relative z-20 px-3 py-2">
                  <p className="text-[11px]">
                    <span className="font-semibold">nossa.historia</span>{" "}
                    <span className="font-display italic">{current?.caption}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-1">{current?.date}</p>
                </div>
              </div>
            </div>

            {/* side buttons (desktop) */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="hidden md:grid absolute left-[-72px] top-1/2 -translate-y-1/2 size-12 place-items-center rounded-full glass-strong hover:bg-white/15"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="hidden md:grid absolute right-[-72px] top-1/2 -translate-y-1/2 size-12 place-items-center rounded-full glass-strong hover:bg-white/15"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* mobile controls */}
          <div className="mt-6 flex md:hidden gap-3">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="size-11 grid place-items-center rounded-full glass-strong"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              className="size-11 grid place-items-center rounded-full glass-strong"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* GRID — todas com favoritar */}
        <h3 className="text-center font-display text-2xl md:text-3xl mb-8">Toda a galeria</h3>
        <div className="gal-grid grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {MEMORIES.map((m) => {
            const isFav = favs.has(m.id);
            return (
              <div
                key={m.id}
                className="gal-thumb group relative overflow-hidden rounded-2xl glass shadow-soft"
              >
                <button onClick={() => setActive(m)} className="block w-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={m.src}
                      alt={m.caption}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 text-left">
                    <p className="text-[10px] text-muted-foreground">{m.date}</p>
                    <p className="font-display italic text-sm truncate">{m.caption}</p>
                  </div>
                </button>
                <button
                  onClick={() => onToggle(m.id)}
                  aria-label="Favoritar"
                  className={`absolute top-3 right-3 size-9 grid place-items-center rounded-full backdrop-blur-xl border transition ${
                    isFav
                      ? "bg-primary/40 border-primary text-white"
                      : "bg-black/30 border-white/20 text-white hover:bg-black/50"
                  }`}
                >
                  <Heart className="size-4" fill={isFav ? "currentColor" : "none"} />
                </button>
                {m.featured && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-gradient-romance text-primary-foreground px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="size-3" fill="currentColor" /> Destaque
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          {favs.size > 0
            ? `${favs.size} memória${favs.size > 1 ? "s" : ""} favorita${favs.size > 1 ? "s" : ""} ❤️`
            : "Toque no ❤️ para favoritar uma memória"}
        </p>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center p-4 bg-background/85 backdrop-blur-xl animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute top-6 right-6 size-10 grid place-items-center rounded-full glass hover:bg-white/15"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.caption}
              className="w-full max-h-[75vh] object-contain rounded-2xl shadow-glow"
            />
            <div className="text-center mt-6">
              <p className="font-display text-2xl italic">{active.caption}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {active.date} · {active.place}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
