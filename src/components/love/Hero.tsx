import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDown, Heart } from "lucide-react";
import heroCouple from "@/assets/banner-01.png";

const RELATIONSHIP_START = new Date("2025-03-05T00:00:00");

function daysSince(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [days, setDays] = useState(() => daysSince(RELATIONSHIP_START));

  useEffect(() => {
    const i = setInterval(() => setDays(daysSince(RELATIONSHIP_START)), 60_000);
    const ctx = gsap.context(() => {
      gsap.from(".hero-photo", { scale: 1.1, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsap.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out",
      });

      // Parallax
      const onScroll = () => {
        const y = window.scrollY;
        gsap.to(".hero-photo", { y: y * 0.3, duration: 0.4, overwrite: true });
        gsap.to(".hero-text", {
          y: y * 0.15,
          opacity: Math.max(0, 1 - y / 600),
          duration: 0.4,
          overwrite: true,
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

  return (
    <section
      ref={ref}
      data-section="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-photo absolute inset-0">
        <img
          src={heroCouple}
          alt="Nós dois em um momento especial"
          className="size-full object-cover"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      <div className="hero-text relative z-10 px-6 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Heart className="size-4 text-primary animate-heart-beat" fill="currentColor" />
          <span className="text-sm font-medium">
            <span className="font-display text-lg text-gradient-romance font-bold">{days}</span>
            <span className="text-muted-foreground ml-2">
              dias desde que minha vida ficou melhor
            </span>
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text">
          Entre bilhões de pessoas no mundo,
          <br />
          meu coração escolheu <span className="text-gradient-romance">você</span>.
        </h2>
        <p className="font-script text-2xl md:text-4xl mt-6 text-primary">
          E eu escolheria novamente todos os dias.
        </p>

        <a href="#memories" className="btn-romance mt-12 inline-flex">
          Continuar nossa jornada
          <ArrowDown className="size-5" />
        </a>
      </div>

      <a
        href="#memories"
        aria-label="Rolar"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-bounce"
      >
        <ArrowDown className="size-6" />
      </a>
    </section>
  );
}
