import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Heart, Lock } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { checkPassword } from "@/lib/auth.functions";
import heroCouple from "@/assets/banner-01.png";

export function Login({ onUnlock }: { onUnlock: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const verify = useServerFn(checkPassword);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".lk-photo", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsap.from(".lk-line", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".lk-form", { y: 24, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await verify({ data: { password: pwd } });
      if (res.ok) {
        gsap.to(rootRef.current, {
          opacity: 0,
          scale: 1.08,
          filter: "blur(20px)",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            try {
              sessionStorage.setItem("sophia:unlocked", "1");
            } catch (e) {
              console.warn("Storage inativo", e);
            }
            onUnlock();
          },
        });
      } else {
        setError("Senha incorreta. Dica: a data em que tudo começou. 💗");
        gsap.fromTo(
          ".lk-form",
          { x: -8 },
          {
            x: 8,
            yoyo: true,
            repeat: 5,
            duration: 0.06,
            onComplete: () => gsap.set(".lk-form", { x: 0 }),
          },
        );
      }
    } catch {
      setError("Algo deu errado. Tente de novo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden"
      style={{ background: "oklch(0.08 0.04 350)" }}
    >
      <div className="lk-photo absolute inset-0">
        <img src={heroCouple} alt="" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-petal" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-md w-full">
        <div className="lk-line inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <Lock className="size-4 text-primary" />
          <span className="text-xs uppercase tracking-widest">Entrada privada</span>
        </div>
        <h1 className="lk-line font-display text-4xl md:text-5xl leading-tight glow-text">
          Só para a <span className="text-gradient-romance">Sophia</span>.
        </h1>
        <p className="lk-line font-script text-2xl md:text-3xl mt-3 text-primary">
          Qual foi o dia em que tudo começou?
        </p>
        <p className="lk-line text-sm text-muted-foreground mt-2">
          Digite a data do nosso primeiro dia (formato dd/mm/aaaa).
        </p>

        <form onSubmit={submit} className="lk-form mt-8 glass-strong rounded-2xl p-5 shadow-soft">
          <div className="flex items-center gap-2">
            <input
              type="password"
              inputMode="numeric"
              autoFocus
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="dd/mm/aaaa"
              className="flex-1 bg-transparent border-b border-white/20 focus:border-primary/70 outline-none px-2 py-3 text-center font-display text-xl tracking-widest placeholder:text-muted-foreground/60"
            />
          </div>
          <button
            type="submit"
            disabled={loading || pwd.length < 6}
            className="btn-romance w-full mt-5 disabled:opacity-50"
          >
            {loading ? (
              "Abrindo..."
            ) : (
              <>
                Abrir nossa história{" "}
                <Heart className="size-4 animate-heart-beat" fill="currentColor" />
              </>
            )}
          </button>
          {error && <p className="text-xs text-destructive mt-3">{error}</p>}
        </form>
        <p className="lk-line text-[10px] text-muted-foreground/60 mt-5">
          Feito com ❤️ — só você tem a chave.
        </p>
      </div>
    </div>
  );
}
