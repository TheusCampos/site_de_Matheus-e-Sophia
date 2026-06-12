import { useEffect, useRef, useState } from "react";
import m1 from "@/assets/foto-1.jpeg";
import m2 from "@/assets/foto-2.jpeg";
import m3 from "@/assets/foto-3.jpeg";
import m5 from "@/assets/foto-5.jpeg";
import hero from "@/assets/banner-02.png";

const SLIDES = [hero, m3, m2, m5, m1];

const FULL_TEXT =
  "Se eu pudesse escolher novamente, escolheria você. Se pudesse viver mil vidas, te amaria em todas elas. eu te amo meu amor!!";

export function FinalMessage() {
  const ref = useRef<HTMLElement>(null);
  const [typed, setTyped] = useState("");
  const [slide, setSlide] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStarted(true)),
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(t);
    }, 45);
    return () => clearInterval(t);
  }, [started]);

  useEffect(() => {
    const i = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      ref={ref}
      data-section="final"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 content-auto"
    >
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover transition-opacity duration-[2000ms]"
            style={{ opacity: i === slide ? 0.35 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <p className="font-script text-2xl text-primary mb-6">Capítulo final</p>
        <p className="font-display text-2xl md:text-4xl leading-relaxed glow-text min-h-[200px] md:min-h-[280px]">
          {typed}
          <span className="inline-block w-0.5 h-7 md:h-10 bg-primary ml-1 animate-pulse" />
        </p>
        <p className="font-script text-3xl md:text-5xl text-gradient-romance mt-10">
          Com todo o meu amor.
        </p>
      </div>
    </section>
  );
}
