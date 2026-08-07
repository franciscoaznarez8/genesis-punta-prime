import React, { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star, KeyRound, ShieldCheck, Heart, MessageCircle } from "lucide-react";
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
            <img src={about} alt="Vista aérea del Puente de La Barra y la desembocadura del Arroyo Maldonado, Maldonado, Uruguay" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
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
          <SectionTitle eyebrow="Reseñas verificadas de Airbnb" title="Lo que dicen nuestros huéspedes" />
          <div className="mt-4 flex items-center gap-3">
            <div className="flex gap-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-5 w-5 text-gold fill-gold"/>)}</div>
            <span className="font-display text-2xl text-navy">4.9</span>
            <span className="text-muted-foreground text-sm">· Más de 200 reseñas verificadas en Airbnb</span>
          </div>
          <TestimoniosGrid />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-navy text-white">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <p className="eyebrow !text-gold-soft">Hablemos</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">¿Listo para dar el siguiente paso?</h2>
          <p className="mt-6 text-white/75 leading-relaxed">Encontramos la propiedad ideal, gestionamos la tuya o te asesoramos en tu próxima inversión en Punta del Este.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href={waLink("Hola, quiero saber más sobre los servicios de Orígenes Propiedades.")} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle className="h-4 w-4" /> Escribinos</a>
            <Link to="/propiedades" className="btn-outline-light">Ver propiedades <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

const TODOS_TESTIMONIOS = [
  { property: "PARADISO — Pueblo Mío", rating: 5, text: "La casa es realmente espectacular, las fotos no le hacen justicia. Ambientes súper amplios, muy cómodos para pasar un buen tiempo en familia. El barrio es hermoso, muy tranquilo y rodeado de naturaleza. Sofi como anfitriona una genia, nos ayudó en todo lo que necesitamos. Sin dudas intentaremos volver." },
  { property: "PARADISO — Pueblo Mío", rating: 5, text: "Todo impecable. Fuimos en familia, se organizó de un momento al otro y la casa estuvo impecable. Todo perfecto. El hermano de Sofi nos hizo un asado increíble. La verdad que valió la pena. La casa hermosa. Volvería a ir." },
  { property: "PARADISO — Pueblo Mío", rating: 5, text: "Pasamos divino, una casa espectacular con todas las comodidades. Siempre en contacto. Nos recibieron y estuvieron atentos. Súper recomendable. Sin dudas para volver." },
  { property: "PARADISO — Pueblo Mío", rating: 5, text: "La casa es espectacular, cómoda, amplia, bien pensada, todo disponible para disfrutar. Sofía y familia son excelentes anfitriones, siempre prontos para resolver. Si estás buscando espacio y tranquilidad este es el lugar." },
  { property: "PARADISO — Pueblo Mío", rating: 5, text: "La casa es un sueño. Súper amplios los ambientes, muchos sofás y estufas a leña. Ambientes muy cálidos con linda decoración, muy bien distribuida, muy bien equipada, las camas cómodas. Muy recomendable." },
  { property: "Abadejo House — La Barra", rating: 5, text: "Nos recibieron con mucha atención y cordialidad. Cuando pedíamos algo, se encargaban de ello con prontitud. Casa excelente, alojamiento excelente, servicio perfecto." },
  { property: "Abadejo House — La Barra", rating: 5, text: "La estadía cumplió con nuestras expectativas y tuvimos días muy felices. La puesta de sol en el balcón con piscina y jacuzzi fue maravillosa. El servicio de limpieza diario fue muy útil. Sofi y su madre responden rápidamente y son serviciales." },
  { property: "Abadejo House — La Barra", rating: 5, text: "Esta es una hermosa casa de playa con mucho espacio para nuestro grupo de 9. Gran espacio de parrilla al aire libre y amplio espacio para cenar. Estás a 2 cuadras de la playa. Los anfitriones son muy amables y receptivos." },
  { property: "Abadejo House — La Barra", rating: 5, text: "Sofi fue muy amable en cada contacto y muy flexible. La casa es tal cual se muestra en las fotos, muy cómoda y con una ubicación privilegiada. Cuenta con todos los elementos para una gran estadía." },
  { property: "Las Brisas — La Barra", rating: 5, text: "La predisposición de Sofía para con nosotros fue excelente desde el día 1. La casa está muy bien equipada y muy bien ubicada. Todo lo demás es excelente y es un lugar para recomendar sin lugar a dudas." },
  { property: "Las Brisas — La Barra", rating: 5, text: "La casa es tal cual las fotos, se encuentra en un barrio tranquilo y tiene mucha privacidad. Está próxima a locales comerciales y a la playa. La dueña ha sido amable y ha estado atenta a nuestras necesidades." },
  { property: "Casa 5 dorm — Pueblo Mío", rating: 5, text: "Una experiencia excelente. El lugar es hermoso, muy cuidado y con instalaciones impecables. Todo estaba tal cual (o mejor) que en las fotos. La atención de Sofi fue increíble: siempre atenta, súper amable y respondiendo rapidísimo. Sin dudas volveríamos y lo recomendamos 100%." },
  { property: "Casa 5 dorm — Pueblo Mío", rating: 5, text: "La casa es increíble, incluso mejor que las fotos. Espacioso, muy limpio y bien equipado. Sofía es una excelente anfitriona, muy receptiva y rápida para ayudar. Definitivamente me hospedaría aquí de nuevo." },
  { property: "Casa 5 dorm — Pueblo Mío", rating: 5, text: "Mi estancia fue espectacular. El lugar es hermoso, muy cómodo y perfectamente cuidado. Sofía fue una anfitriona encantadora: atenta, amable y siempre dispuesta a ayudar. Sin duda volvería. ¡Totalmente recomendable!" },
  { property: "Casa 5 dorm — Pueblo Mío", rating: 5, text: "La casa es hermosa, tal como sale en las fotos. Muy amplia y cómoda, tiene todo lo que puedas necesitar. El barrio es muy tranquilo. Sofía súper atenta y responde siempre enseguida. Muy recomendable." },
  { property: "Casa en José Ignacio", rating: 5, text: "Tremenda casa a 2 cuadras de las dos playas. A 1 cuadra del pueblo y de todos los restos. La casa es impecable y tiene de todo. Es súper completa, toda nueva. Realmente recomendable." },
  { property: "Casa en José Ignacio", rating: 5, text: "Sofi fue una anfitriona muy amable y atenta. Extremadamente educada. Nos encantó la casa y nuestra estancia. Sin duda volveremos para otras vacaciones." },
  { property: "Casa en José Ignacio", rating: 5, text: "La casa es hermosa: nueva, moderna. Muy bien equipada y decorada. Cerca de la playa y el pueblo de José Ignacio con todos los restaurants y tiendas a pie. Gran estadía en familia." },
  { property: "Casa en José Ignacio", rating: 5, text: "Fueron unas vacaciones espectaculares. Sofía fue una anfitriona muy amable y atenta. Nos enamoramos de la casa. Todo funcionó a la perfección, la ubicación es estupenda y el lugar es mágico. Sin dudas lo recomiendo." },
];

function TestimoniosGrid() {
  const [verTodos, setVerTodos] = useState(false);
  const visibles = verTodos ? TODOS_TESTIMONIOS : TODOS_TESTIMONIOS.slice(0, 6);
  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibles.map((t, i) => (
          <figure key={i} className="bg-background p-6 border border-border flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({length: t.rating}).map((_,j) => <Star key={j} className="h-4 w-4 text-gold fill-gold"/>)}
              </div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#FF5A5F] font-semibold border border-[#FF5A5F]/40 px-2 py-0.5 rounded-sm">Airbnb ✓</span>
            </div>
            <blockquote className="text-foreground/80 leading-relaxed text-sm flex-1">"{t.text}"</blockquote>
            <figcaption>
              <div className="text-xs font-semibold text-navy">Huésped verificado</div>
              <div className="text-xs text-muted-foreground">{t.property}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {!verTodos && (
          <button
            onClick={() => setVerTodos(true)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-white text-[0.75rem] font-semibold uppercase tracking-[0.15em] transition-colors"
          >
            Ver todas las reseñas ({TODOS_TESTIMONIOS.length})
          </button>
        )}
        <a href="https://www.airbnb.com/users/show/23459639" target="_blank" rel="noreferrer" className="text-sm text-[#FF5A5F] hover:underline">
          Ver en Airbnb →
        </a>
      </div>
    </>
  );
}
