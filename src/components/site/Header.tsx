import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/propiedades", label: "Alquileres" },
  { to: "/ventas", label: "Ventas" },
  { to: "/administracion-airbnb", label: "Administración" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-baseline gap-2 shrink-0">
          <span
            className={`font-display text-2xl md:text-[1.7rem] font-semibold tracking-tight ${
              scrolled || open ? "text-navy" : "text-white"
            }`}
          >
            Orígenes
          </span>
          <span
            className={`text-[0.65rem] uppercase tracking-[0.3em] ${
              scrolled || open ? "text-gold" : "text-gold-soft"
            }`}
          >
            Propiedades
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`text-[0.78rem] uppercase tracking-[0.18em] font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-navy"
                  : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: scrolled
                  ? "text-navy border-b border-gold pb-1"
                  : "text-white border-b border-gold pb-1",
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn-gold !py-2.5 !px-4 !text-xs"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            aria-label="Abrir menú"
            className={`lg:hidden p-2 ${scrolled || open ? "text-navy" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-luxe flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 border-b border-border/60 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-4"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { SITE };
