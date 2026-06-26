import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/85 mt-24">
      <div className="container-luxe py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-white">Orígenes</span>
            <span className="eyebrow !text-gold-soft">Propiedades</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Inmobiliaria y administración integral de propiedades en Punta del
            Este. Atención personalizada, transparencia y experiencias
            excepcionales.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={waLink()} target="_blank" rel="noreferrer" className="p-2 border border-white/20 hover:border-gold hover:text-gold transition" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={`mailto:${SITE.email}`} className="p-2 border border-white/20 hover:border-gold hover:text-gold transition" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="p-2 border border-white/20 hover:border-gold hover:text-gold transition" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-soft">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Inicio</Link></li>
            <li><Link to="/propiedades" className="hover:text-gold">Propiedades</Link></li>
            <li><Link to="/administracion-airbnb" className="hover:text-gold">Administración Airbnb</Link></li>
            <li><Link to="/concierge" className="hover:text-gold">Servicios Concierge</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-gold">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-gold">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-soft">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Punta del Este, Uruguay</li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></li>
            <li><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp +598 99 601 819</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Orígenes Propiedades. Todos los derechos reservados.</p>
          <Link to="/privacidad" className="hover:text-gold">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
