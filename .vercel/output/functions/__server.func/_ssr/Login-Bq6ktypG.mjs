import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DI-QjkXt.mjs";
import { L as Lock, H as Heart, G as Gamepad2 } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
function Particles({ count = 24 }) {
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const petalsCount = isMobile ? Math.floor(count / 2) : count;
  const starsCount = isMobile ? 20 : 60;
  const petals = reactExports.useMemo(
    () => Array.from({ length: petalsCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 14,
      size: 8 + Math.random() * 14,
      opacity: 0.4 + Math.random() * 0.5
    })),
    [petalsCount]
  );
  const stars = reactExports.useMemo(
    () => Array.from({ length: starsCount }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      size: 1 + Math.random() * 2
    })),
    [starsCount]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
    stars.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute rounded-full bg-white animate-twinkle",
        style: {
          top: `${s.top}%`,
          left: `${s.left}%`,
          width: s.size,
          height: s.size,
          animationDelay: `${s.delay}s`,
          willChange: "opacity"
        }
      },
      `s-${s.id}`
    )),
    petals.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute rounded-full",
        style: {
          left: `${p.left}%`,
          top: "-10vh",
          width: p.size,
          height: p.size,
          background: "radial-gradient(circle at 30% 30%, oklch(0.92 0.08 350), oklch(0.7 0.2 5))",
          opacity: p.opacity,
          filter: isMobile ? "none" : "blur(0.5px)",
          animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
          boxShadow: isMobile ? "none" : "0 0 10px oklch(0.72 0.18 0 / 50%)",
          willChange: "transform, opacity"
        }
      },
      `p-${p.id}`
    ))
  ] });
}
function Nav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-4 left-1/2 -translate-x-1/2 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-full px-2 py-1.5 flex items-center gap-1 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: `px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${path === "/" ? "bg-gradient-romance text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-3.5", fill: "currentColor" }),
          " Nossa história"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/games",
        className: `px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${path === "/games" ? "bg-gradient-romance text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gamepad2, { className: "size-3.5" }),
          " Jogos"
        ]
      }
    )
  ] }) });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const checkPassword = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  password: stringType().min(1).max(64)
})).handler(createSsrRpc("acb1303650d06e817a2d0d022d2aa347de13d2c0bf924aa627ea52d7e5aa6258"));
const heroCouple = "/assets/banner-01-6xOSht01.png";
function Login({ onUnlock }) {
  const rootRef = reactExports.useRef(null);
  const [pwd, setPwd] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const verify = useServerFn(checkPassword);
  reactExports.useEffect(() => {
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.from(".lk-photo", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power3.out" });
      gsapWithCSS.from(".lk-line", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        stagger: 0.15,
        ease: "power3.out"
      });
      gsapWithCSS.from(".lk-form", { y: 24, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });
    }, rootRef);
    return () => ctx.revert();
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await verify({ data: { password: pwd } });
      if (res.ok) {
        gsapWithCSS.to(rootRef.current, {
          opacity: 0,
          scale: 1.08,
          filter: "blur(20px)",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            try {
              sessionStorage.setItem("sophia:unlocked", "1");
            } catch (e2) {
              console.warn("Storage inativo", e2);
            }
            onUnlock();
          }
        });
      } else {
        setError("Senha incorreta. Dica: a data em que tudo começou. 💗");
        gsapWithCSS.fromTo(
          ".lk-form",
          { x: -8 },
          {
            x: 8,
            yoyo: true,
            repeat: 5,
            duration: 0.06,
            onComplete: () => gsapWithCSS.set(".lk-form", { x: 0 })
          }
        );
      }
    } catch {
      setError("Algo deu errado. Tente de novo.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: rootRef,
      className: "fixed inset-0 z-[100] grid place-items-center overflow-hidden",
      style: { background: "oklch(0.08 0.04 350)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lk-photo absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroCouple, alt: "", className: "size-full object-cover opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-petal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-md w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lk-line inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest", children: "Entrada privada" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "lk-line font-display text-4xl md:text-5xl leading-tight glow-text", children: [
            "Só para a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-romance", children: "Sophia" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lk-line font-script text-2xl md:text-3xl mt-3 text-primary", children: "Qual foi o dia em que tudo começou?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lk-line text-sm text-muted-foreground mt-2", children: "Digite a data do nosso primeiro dia (formato dd/mm/aaaa)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "lk-form mt-8 glass-strong rounded-2xl p-5 shadow-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                inputMode: "numeric",
                autoFocus: true,
                value: pwd,
                onChange: (e) => setPwd(e.target.value),
                placeholder: "dd/mm/aaaa",
                className: "flex-1 bg-transparent border-b border-white/20 focus:border-primary/70 outline-none px-2 py-3 text-center font-display text-xl tracking-widest placeholder:text-muted-foreground/60"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading || pwd.length < 6,
                className: "btn-romance w-full mt-5 disabled:opacity-50",
                children: loading ? "Abrindo..." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  "Abrir nossa história",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-4 animate-heart-beat", fill: "currentColor" })
                ] })
              }
            ),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive mt-3", children: error })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lk-line text-[10px] text-muted-foreground/60 mt-5", children: "Feito com ❤️ — só você tem a chave." })
        ] })
      ]
    }
  );
}
export {
  Login as L,
  Nav as N,
  Particles as P,
  heroCouple as h
};
