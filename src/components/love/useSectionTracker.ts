import { useEffect, useState } from "react";

/** Track which `[data-section]` is most visible in the viewport. */
export function useSectionTracker(initial: string) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    if (nodes.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const name = (visible.target as HTMLElement).dataset.section;
          if (name) setActive(name);
        }
      },
      { threshold: [0.3, 0.6] },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return active;
}
