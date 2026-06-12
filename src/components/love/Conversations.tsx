import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";

type Msg = { from: "me" | "her"; text?: string; img?: string; time: string };
type Conversation = { id: string; title: string; subtitle: string; messages: Msg[] };

const INITIAL: Conversation[] = [
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
        time: "23:19",
      },
      { from: "me", text: "Então segura minha mão. A gente atravessa junto.", time: "23:20" },
      { from: "her", text: "Combinado. Pra sempre. ❤️", time: "23:20" },
    ],
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
      { from: "her", text: "Então vamos transformar em verdade. ✈️", time: "07:06" },
    ],
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
      { from: "her", text: "Melhor mensagem da minha vida. 💍❤️", time: "22:44" },
    ],
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
      { from: "me", text: "Anotado. Vai todo mundo acontecer.", time: "21:13" },
    ],
  },
];

const PRINTS_KEY = "sophia:prints";

type Print = { convId: string; from: "me" | "her"; img: string; time: string };

export function Conversations() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [prints, setPrints] = useState<Print[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PRINTS_KEY);
      if (raw) setPrints(JSON.parse(raw));
    } catch (e) {
      console.warn("Storage inativo", e);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cv-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const active = INITIAL[activeIdx];
  const activePrints = prints.filter((p) => p.convId === active.id);
  const allMessages: Msg[] = [
    ...active.messages,
    ...activePrints.map((p) => ({ from: p.from, img: p.img, time: p.time })),
  ];

  // animate messages whenever conversation changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cv-msg",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
      );
    }, scrollRef);
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 300);
    return () => ctx.revert();
  }, [activeIdx, prints]);

  const prev = () => setActiveIdx((i) => (i - 1 + INITIAL.length) % INITIAL.length);
  const next = () => setActiveIdx((i) => (i + 1) % INITIAL.length);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>, from: "me" | "her") => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = String(reader.result);
      const time = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const next = [...prints, { convId: active.id, from, img, time }];
      setPrints(next);
      try {
        localStorage.setItem(PRINTS_KEY, JSON.stringify(next));
      } catch (err) {
        console.warn("Storage error", err);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const removePrint = (img: string) => {
    const n = prints.filter((p) => !(p.convId === active.id && p.img === img));
    setPrints(n);
    try {
      localStorage.setItem(PRINTS_KEY, JSON.stringify(n));
    } catch (err) {
      console.warn("Storage error", err);
    }
  };

  return (
    <section ref={ref} data-section="chat" className="relative py-24 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="cv-header text-center mb-12">
          <p className="font-script text-2xl text-primary mb-2">Capítulo 2</p>
          <h2 className="font-display text-4xl md:text-6xl">Nossas conversas favoritas</h2>
          <p className="mt-4 text-muted-foreground">
            Navegue entre os momentos — ou adicione os seus próprios prints.
          </p>
        </header>

        {/* TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {INITIAL.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveIdx(i)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition border ${
                i === activeIdx
                  ? "bg-gradient-romance text-primary-foreground border-transparent shadow-glow"
                  : "glass border-white/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* PHONE MOCKUP */}
        <div className="flex justify-center">
          <div className="relative w-[330px] md:w-[380px] aspect-[9/19] rounded-[44px] bg-neutral-900 p-[10px] shadow-glow ring-1 ring-white/10">
            <div className="relative size-full overflow-hidden rounded-[36px] bg-background flex flex-col">
              {/* notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-neutral-900" />

              {/* status bar */}
              <div className="relative z-20 flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold">
                <span>9:41</span>
                <span className="opacity-70">●●● 5G ▮</span>
              </div>

              {/* chat header */}
              <div className="relative z-20 flex items-center gap-2 px-3 py-2 border-b border-white/10">
                <button
                  onClick={prev}
                  aria-label="Conversa anterior"
                  className="size-8 grid place-items-center rounded-full hover:bg-white/10"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <div className="size-9 rounded-full bg-gradient-romance grid place-items-center font-display text-primary-foreground text-sm">
                  S
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">Sophia ❤️</p>
                  <p className="text-[10px] text-muted-foreground truncate">{active.subtitle}</p>
                </div>
                <button
                  onClick={next}
                  aria-label="Próxima conversa"
                  className="size-8 grid place-items-center rounded-full hover:bg-white/10"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* subtitle tag */}
              <div className="px-3 pt-2 pb-1 text-center">
                <span className="text-[10px] text-muted-foreground italic">{active.title}</span>
              </div>

              {/* messages */}
              <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto px-3 py-2">
                {allMessages.map((m, i) => (
                  <div
                    key={i}
                    className={`cv-msg flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[78%] rounded-2xl px-3 py-2 text-[13px] ${
                        m.from === "me"
                          ? "bg-gradient-romance text-primary-foreground rounded-br-sm shadow-glow"
                          : "bg-white/10 text-foreground rounded-bl-sm"
                      }`}
                    >
                      {m.img ? (
                        <div className="relative">
                          <img
                            src={m.img}
                            alt="print da conversa"
                            loading="lazy"
                            decoding="async"
                            width={240}
                            height={400}
                            className="rounded-xl max-h-56 object-contain"
                          />
                          <button
                            onClick={() => removePrint(m.img!)}
                            aria-label="Remover print"
                            className="absolute -top-2 -right-2 size-6 grid place-items-center rounded-full bg-background/80 border border-white/20"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ) : (
                        <p className="leading-relaxed whitespace-pre-wrap">{m.text}</p>
                      )}
                      <p
                        className={`text-[9px] mt-1 ${m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        {m.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* input bar with upload */}
              <div className="relative z-20 border-t border-white/10 px-3 py-2 flex items-center gap-2">
                <label
                  className="size-9 grid place-items-center rounded-full bg-white/10 cursor-pointer hover:bg-white/20"
                  title="Print como ela"
                >
                  <ImagePlus className="size-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onUpload(e, "her")}
                  />
                </label>
                <div className="flex-1 h-9 rounded-full bg-white/10 px-3 grid items-center text-[11px] text-muted-foreground">
                  Adicionar print da conversa…
                </div>
                <label
                  className="size-9 grid place-items-center rounded-full bg-gradient-romance text-primary-foreground cursor-pointer"
                  title="Print como eu"
                >
                  <ImagePlus className="size-4" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onUpload(e, "me")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
