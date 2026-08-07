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
      { title: "Orígenes Propiedades — Venta, alquiler y administración en Punta del Este" },
      { name: "description", content: "Encontramos la propiedad ideal y cuidamos cada inversión como si fuera propia. Venta, alquiler y administración de propiedades en Punta del Este con atención personalizada." },
      { property: "og:title", content: "Orígenes Propiedades — Punta del Este" },
      { property: "og:description", content: "Venta, alquiler y administración de propiedades en Punta del Este con atención personalizada y conocimiento local." },
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
        <img src={hero} alt="Faro de José Ignacio, Maldonado, Uruguay" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/80" />
        <div className="container-luxe relative z-10 py-32 md:py-40 text-white">
          <p className="eyebrow !text-gold-soft animate-fade-up">Orígenes Propiedades · Punta del Este</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            Encontramos la propiedad ideal y cuidamos cada inversión como si fuera propia.
          </h1>
          <span className="mt-7 inline-block hairline animate-fade-up" style={{ animationDelay: "150ms" }} />
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
            Venta, alquiler y administración de propiedades en Punta del Este, con atención personalizada, conocimiento local y un compromiso real con cada cliente.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href={waLink("Hola, me interesa que administren mi propiedad.")} target="_blank" rel="noreferrer" className="btn-gold"><Sparkles className="h-4 w-4" /> Quiero que administren mi propiedad</a>
            <Link to="/propiedades" className="btn-outline-light">Ver propiedades <ArrowRight className="h-4 w-4" /></Link>
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
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => <PropertyCard key={p.slug} p={p} />)}
          </div>
          <div className="mt-14 text-center">
            <Link to="/propiedades" className="btn-navy">Ver todas las propiedades</Link>
          </div>
        </div>
      </section>

      {/* VENTAS STRIP */}
      <section className="py-16 bg-navy text-white">
        <div className="container-luxe flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow !text-gold-soft">También hacemos</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl max-w-xl">Compra y venta de propiedades en Punta del Este</h2>
            <p className="mt-3 text-white/75 max-w-lg">
              Asesoramos compradores e inversores con conocimiento real del mercado local, acceso a propiedades off-market y acompañamiento en todo el proceso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/ventas" className="btn-gold">Ver sección ventas <ArrowRight className="h-4 w-4" /></Link>
            <a href={waLink("Hola, estoy buscando una propiedad para comprar en Punta del Este.")} target="_blank" rel="noreferrer" className="btn-outline-light">
              <MessageCircle className="h-4 w-4" /> Consultar
            </a>
          </div>
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
            <img src={about} alt="Puente de La Barra sobre el Arroyo Maldonado, La Barra, Maldonado, Uruguay" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
          </div>
        </div>
      </section>

      {/* PROPIETARIOS */}
      <section className="py-24 md:py-32 bg-navy text-white">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-5 items-start">
            <div className="lg:col-span-3">
              <p className="eyebrow !text-gold-soft">Para propietarios</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">¿Tenés una propiedad en Punta del Este?</h2>
              <span className="mt-5 inline-block hairline" />
              <p className="mt-6 text-white/80 max-w-xl leading-relaxed">
                Te ayudamos a generar ingresos sin ocuparte de la operación diaria. Nos encargamos de absolutamente todo para que tu propiedad funcione al máximo.
              </p>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
                {[
                  { icon: Sparkles, label: "Publicación en Airbnb" },
                  { icon: KeyRound, label: "Gestión de reservas" },
                  { icon: KeyRound, label: "Check-in y check-out" },
                  { icon: ShieldCheck, label: "Limpieza" },
                  { icon: ShieldCheck, label: "Mantenimiento" },
                  { icon: Heart, label: "Jardinería" },
                  { icon: Sparkles, label: "Piscinas" },
                  { icon: Star, label: "Atención al huésped" },
                ].map((b) => (
                  <div key={b.label} className="bg-navy p-5 hover:bg-white/5 transition-colors">
                    <b.icon className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-sm text-white/85 leading-snug">{b.label}</p>
                  </div>
                ))}
              </div>
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
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 md:py-32 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Reseñas reales de Airbnb" title="Lo que dicen nuestros huéspedes" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Gastón",
                role: "Abadejo House — La Barra",
                rating: 5,
                text: "Lugar espectacular, vistas increíbles al mar. La casa es exactamente como en las fotos, muy bien equipada. La anfitriona muy atenta y respondió todo rápidamente. Sin dudas volvería.",
                airbnb: true,
              },
              {
                name: "Valentina",
                role: "PARADISO — Manantiales",
                rating: 5,
                text: "Casa preciosa en un barrio privado muy tranquilo. La piscina y el acceso al lago son un lujo. Todo impecable, muy limpio y ordenado. La experiencia superó nuestras expectativas.",
                airbnb: true,
              },
              {
                name: "Federico",
                role: "Las Brisas — La Barra",
                rating: 5,
                text: "Ubicación perfecta, a dos cuadras de todo. El jacuzzi nuevo es increíble. La atención de la anfitriona fue excelente, siempre disponible. Recomiendo 100% para quienes quieren disfrutar La Barra.",
                airbnb: true,
              },
            ].map((t) => (
              <figure key={t.name} className="bg-background p-8 border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">{Array.from({length: t.rating}).map((_,i) => <Star key={i} className="h-4 w-4 text-gold fill-gold"/>)}</div>
                  {t.airbnb && (
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#FF5A5F] font-semibold border border-[#FF5A5F]/30 px-2 py-0.5">Airbnb</span>
                  )}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-snug text-navy">"{t.text}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Más de 200 reseñas verificadas en Airbnb · Calificación promedio ★4.9
          </p>
        </div>
      </section>
    </>
  );
}
