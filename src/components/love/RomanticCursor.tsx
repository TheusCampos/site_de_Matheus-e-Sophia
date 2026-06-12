import { useEffect, useRef } from "react";

/** Soft heart-glow trailing cursor. Desktop only. */
export function RomanticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x,
      ry = y;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[200] size-2 rounded-full bg-primary mix-blend-screen"
        style={{ boxShadow: "0 0 20px oklch(0.72 0.18 0 / 0.9)" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[199] size-9 rounded-full border border-primary/60 mix-blend-screen"
      />
    </>
  );
}
