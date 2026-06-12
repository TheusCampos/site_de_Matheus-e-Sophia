import { useMemo, useEffect, useState } from "react";

/** Floating cherry petals + twinkling stars background. Pure CSS, GPU-friendly. */
export function Particles({ count = 24 }: { count?: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const petalsCount = isMobile ? Math.floor(count / 2) : count;
  const starsCount = isMobile ? 20 : 60;

  const petals = useMemo(
    () =>
      Array.from({ length: petalsCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 14,
        size: 8 + Math.random() * 14,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [petalsCount],
  );
  const stars = useMemo(
    () =>
      Array.from({ length: starsCount }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: 1 + Math.random() * 2,
      })),
    [starsCount],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            willChange: "opacity",
          }}
        />
      ))}
      {petals.map((p) => (
        <span
          key={`p-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.92 0.08 350), oklch(0.7 0.2 5))",
            opacity: p.opacity,
            filter: isMobile ? "none" : "blur(0.5px)",
            animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: isMobile ? "none" : "0 0 10px oklch(0.72 0.18 0 / 50%)",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
