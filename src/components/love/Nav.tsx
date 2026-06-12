import { Link, useRouterState } from "@tanstack/react-router";
import { Gamepad2, Heart } from "lucide-react";

export function Nav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-strong rounded-full px-2 py-1.5 flex items-center gap-1 shadow-soft">
        <Link
          to="/"
          className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${path === "/" ? "bg-gradient-romance text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`}
        >
          <Heart className="size-3.5" fill="currentColor" /> Nossa história
        </Link>
        <Link
          to="/games"
          className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${path === "/games" ? "bg-gradient-romance text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`}
        >
          <Gamepad2 className="size-3.5" /> Jogos
        </Link>
      </div>
    </nav>
  );
}
