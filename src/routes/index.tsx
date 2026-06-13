import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, KeyRound, Heart, Star } from "lucide-react";
import hero from "@/assets/hero-punta-este.jpg";
import about from "@/assets/about-punta.jpg";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Génesis Propiedades — Alquiler y administración en Punta del Este" },
      { name: "description", content: "Propiedades exclusivas para alquiler temporario y administración integral en Punta del Este. Gestionamos su propiedad con profesionalismo y cuidamos cada detalle." },
      { property: "og:title", content: "Génesis Propiedades — Punta del Este" },
      { property: "og:description", content: "Propiedades exclusivas y administración integral en Punta del Este." },
      { property: "og:image", content: hero },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = properties.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <img src={hero} alt="Punta del Este al atardecer" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/80" />
        <div className="container-luxe relative z-10 py-32 md:py-40 text-white">
          <p className="eyebrow !text-gold-soft animate-fade-up">Génesis Propiedades · Punta del Este</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Propiedades exclusivas y administración integral en Punta del Este
          </h1>
          <span className="mt-7 inline-block hairline animate-fade-up" style={{ animationDelay: "150ms" }} />
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
            Gestionamos propiedades, cuidamos cada detalle y brindamos experiencias excepcionales a propietarios y huéspedes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href={waLink("Hola, quiero que administren mi propiedad.")} target="_blank" rel="noreferrer" className="btn-gold">Quiero que administren mi propiedad <ArrowRight className="h-4 w-4" /></a>
            <Link to="/propiedades" className="btn-outline-light">Ver propiedades</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-[0.65rem] uppercase tracking-[0.4em]">
          Scroll
        </div>
      </section>

      {/* DESTACADAS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe">
          <SectionTitle eyebrow="Propiedades destacadas" title="Selección curada" subtitle="Una colección de residencias y apartamentos premium, elegidos por su ubicación, diseño y experiencia." />
          {featured.length > 0 ? (
            <>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((p) => <PropertyCard key={p.slug} p={p} />)}
              </div>
              <div className="mt-14 text-center">
                <Link to="/propiedades" className="btn-navy">Ver todas las propiedades</Link>
              </div>
            </>
          ) : (
            <div className="mt-16 border border-dashed border-border bg-card p-12 text-center">
              <p className="font-display text-2xl text-navy">Próximamente</p>
              <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">Estamos preparando la publicación de nuestras propiedades. Contactanos por WhatsApp para conocer la disponibilidad actual.</p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="mt-6 inline-flex btn-gold"><MessageCircle className="h-4 w-4" /> Consultar disponibilidad</a>
            </div>
          )}
        </div>
      </section>

      {/* ADMINISTRACIÓN */}
      <section className="py-24 md:py-32 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Administración Airbnb" title="Nos ocupamos de todo" subtitle="Una gestión integral diseñada para que su propiedad rinda al máximo, sin que usted tenga que ocuparse de la operación." />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
            {[
              { icon: Sparkles, title: "Publicación y optimización", text: "Anuncios profesionales en todas las plataformas." },
              { icon: KeyRound, title: "Check-in y check-out", text: "Recepción personalizada las 24 horas." },
              { icon: ShieldCheck, title: "Supervisión y mantenimiento", text: "Inspecciones y respuesta inmediata." },
              { icon: Heart, title: "Atención al huésped", text: "Soporte multilingüe durante toda la estadía." },
              { icon: Sparkles, title: "Coordinación de limpieza", text: "Equipo de confianza entre estadías." },
              { icon: ShieldCheck, title: "Gestión de reservas", text: "Calendarios sincronizados y pagos." },
              { icon: KeyRound, title: "Gestión de incidencias", text: "Resolución ágil de cualquier imprevisto." },
              { icon: Star, title: "Maximización de ocupación", text: "Pricing dinámico y estrategia comercial." },
            ].map((s, i) => (
              <div key={i} className="bg-background p-8 hover:bg-card transition-colors">
                <s.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/administracion-airbnb" className="btn-gold">Solicitar asesoramiento</Link>
          </div>
        </div>
      </section>

      {/* CONCIERGE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-luxe grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <SectionTitle eyebrow="Servicios Concierge" title="Servicios personalizados" align="left" subtitle="Pensamos cada detalle para que tanto propietarios como huéspedes vivan una experiencia impecable." />
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {["Traslados privados","Compras previas a la llegada","Coordinación de mantenimiento","Jardinería","Piscinas","Propietarios ausentes","Recomendaciones locales","Atención personalizada"].map((s) => (
                <li key={s} className="flex items-start gap-3 border-b border-border/60 pb-3">
                  <span className="mt-2 h-1.5 w-1.5 bg-gold shrink-0" /> <span>{s}</span>
                </li>
              ))}
            </ul>
            <Link to="/concierge" className="mt-10 inline-flex btn-navy">Conocer más</Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={about} alt="Punta del Este" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
          </div>
        </div>
      </section>

      {/* PROPIETARIOS */}
      <section className="py-24 md:py-32 bg-navy text-white">
        <div className="container-luxe grid gap-14 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3">
            <p className="eyebrow !text-gold-soft">Para propietarios</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">¿Tenés una propiedad en Punta del Este?</h2>
            <span className="mt-5 inline-block hairline" />
            <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
              Te ayudamos a generar ingresos sin ocuparte de la operación diaria. Nos encargamos de todo: huéspedes, mantenimiento, limpieza y reportes claros.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-y-3 gap-x-8 text-sm">
              {[
                "Publicación en Airbnb",
                "Gestión de reservas",
                "Check-in y check-out",
                "Limpieza",
                "Mantenimiento",
                "Jardinería",
                "Piscinas",
                "Atención al huésped",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 border-b border-white/10 pb-3"><Sparkles className="h-4 w-4 text-gold shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.open(waLink("Hola, me interesa la administración de mi propiedad."), "_blank"); }}
            className="lg:col-span-2 bg-background text-foreground p-8 shadow-luxe space-y-4"
          >
            <h3 className="font-display text-2xl text-navy">Quiero recibir información</h3>
            <input required maxLength={80} placeholder="Nombre" className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            <input required maxLength={30} placeholder="Teléfono" className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            <select required className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold">
              <option value="">Tipo de propiedad</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Chacra</option>
              <option>Penthouse</option>
            </select>
            <button type="submit" className="btn-gold w-full !py-3">Quiero recibir información</button>
          </form>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 md:py-32 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Testimonios" title="Confianza construida día a día" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { name: "Martina G.", role: "Propietaria, La Barra", text: "Confié mi casa en La Barra y nunca tuve que preocuparme por nada. Reportes claros y reservas todo el verano." },
              { name: "Juan & Sofía", role: "Huéspedes, Brasil", text: "La atención fue impecable de principio a fin. La casa lucía exactamente como en las fotos." },
              { name: "Rodrigo P.", role: "Propietario, José Ignacio", text: "Profesionales, transparentes y con un cuidado obsesivo por el detalle. Recomiendo Génesis sin dudar." },
            ].map((t) => (
              <figure key={t.name} className="bg-background p-8 border border-border">
                <div className="flex gap-1 text-gold">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current"/>)}</div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-navy">"{t.text}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
