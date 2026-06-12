import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart } from "lucide-react";
import heroCouple from "@/assets/banner-01.png";

export function Intro({ onStart }: { onStart: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".intro-photo", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsap.from(".intro-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.from(".intro-cta", { y: 20, opacity: 0, duration: 1, delay: 1.6, ease: "power3.out" });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleStart = () => {
    // Dispara evento síncrono para burlar o bloqueio de autoplay do navegador
    window.dispatchEvent(new CustomEvent("play-music-now"));

    gsap.to(rootRef.current, {
      opacity: 0,
      scale: 1.08,
      filter: "blur(20px)",
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: onStart,
    });
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
      style={{ background: "oklch(0.1 0.04 350)" }}
    >
      <div className="intro-photo absolute inset-0">
        <img
          src={heroCouple}
          alt="Nosso retrato de abertura"
          className="size-full object-cover opacity-50"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-petal" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="intro-line font-script text-2xl md:text-3xl text-primary mb-6">Para Sophia</p>
        <h1 className="intro-line font-display text-4xl md:text-6xl lg:text-7xl leading-tight glow-text">
          Algumas histórias são escritas pelo{" "}
          <em className="text-gradient-romance not-italic">destino</em>.
        </h1>
        <p className="intro-line font-display text-2xl md:text-3xl mt-4 text-muted-foreground italic">
          A nossa foi escrita pelo amor.
        </p>
        <button
          onClick={handleStart}
          className="intro-cta btn-romance mt-12 text-base md:text-lg animate-pulse-glow"
        >
          Começar nossa história
          <Heart className="size-5 animate-heart-beat" fill="currentColor" />
        </button>
        <p className="intro-cta mt-6 text-xs text-muted-foreground/70">
          Recomendado com som ligado · 🎧
        </p>
      </div>
    </div>
  );
}
