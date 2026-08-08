import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Home, TrendingUp, ShieldCheck, Users, MapPin, ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";
import about from "@/assets/about-punta.jpg";

export const Route = createFileRoute("/ventas")({
  head: () => ({
    meta: [
      { title: "Propiedades en Venta en Punta del Este — Génesis Propiedades" },
      { name: "description", content: "Comprá o vendé propiedades en Punta del Este, La Barra, José Ignacio y zonas exclusivas de Maldonado. Asesoramiento personalizado y conocimiento local." },
      { property: "og:title", content: "Venta de Propiedades — Génesis Propiedades" },
      { property: "og:url", content: "/ventas" },
    ],
    links: [{ rel: "canonical", href: "/ventas" }],
  }),
  component: Page,
});

const zonas = [
  { name: "Punta del Este", desc: "Península, Playa Brava y Mansa. Apartamentos, penthouses y propiedades frente al mar." },
  { name: "La Barra & Manantiales", desc: "El corazón del Uruguay trendy. Casas de diseño, barrios privados y vistas al mar." },
  { name: "José Ignacio", desc: "El destino más exclusivo del Cono Sur. Propiedades únicas en primera línea." },
  { name: "Punta Ballena", desc: "Naturaleza, tranquilidad y vistas panorámicas al Río de la Plata." },
  { name: "San Vicente", desc: "Zona en crecimiento, ideal para inversión. Casas y chacras en entorno natural." },
  { name: "Barrios privados", desc: "Pueblo Mío, Club de Mar y otros desarrollos con seguridad y amenities completos." },
];

const tipos = [
  "Apartamentos", "Casas", "Penthouses", "Chacras y estancias",
  "Terrenos", "Locales comerciales", "Barrios privados", "Propiedades en primera línea"
];

const beneficios = [
  { icon: Home, title: "Cartera selectiva", text: "Accedé a propiedades curadas según tu perfil de inversión y necesidades." },
  { icon: TrendingUp, title: "Conocimiento del mercado", text: "Años de experiencia en la zona nos permiten asesorarte sobre precios reales y oportunidades únicas." },
  { icon: ShieldCheck, title: "Seguridad jurídica", text: "Te acompañamos en todo el proceso: oferta, promesa de compraventa, escritura y trámites." },
  { icon: Users, title: "Atención personalizada", text: "Un asesor dedicado durante todo el proceso, sin intermediarios innecesarios." },
  { icon: MapPin, title: "Conocemos cada zona", desc: "Conocemos cada barrio, cada calle y cada propiedad en detalle — información que no encontrás en internet." },
  { icon: CheckCircle2, title: "Propiedades off-market", text: "Acceso a propiedades que no se publican abiertamente, antes de que lleguen al mercado general." },
];

function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center">
        <img src={about} alt="Punta del Este" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/80" />
        <div className="container-luxe relative z-10 py-40 text-white">
          <p className="eyebrow !text-gold-soft">Ventas</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Comprá o vendé en Punta del Este
          </h1>
          <span className="mt-7 inline-block hairline" />
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            Asesoramos a compradores e inversores en la adquisición de propiedades en las mejores zonas de Maldonado. Con años de experiencia local, te acompañamos en cada paso.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={waLink("Hola, estoy buscando una propiedad para comprar en Punta del Este.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
            </a>
            <Link to="/contacto" className="btn-outline-light">
              Dejar mis datos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROYECTOS EN VENTA */}
      <section className="py-24 bg-background">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Proyectos en venta"
            title="Terrenos y lotes disponibles"
            subtitle="Oportunidades seleccionadas en los mejores barrios privados de Maldonado. Consultame directamente para más información."
          />

          <div className="mt-16 space-y-24">

            {/* NATIVO */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://nativojoseignacio.com.uy/images/assets/new_nativo_jose_ignacio.jpg"
                  alt="Barrio Nativo José Ignacio"
                  className="h-full w-full object-cover"
                  width={1200} height={900}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                <span className="absolute top-4 left-4 bg-navy/90 backdrop-blur px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold">José Ignacio</span>
              </div>
              <div>
                <p className="eyebrow">Barrio privado</p>
                <h3 className="mt-2 font-display text-4xl text-navy">Barrio Nativo</h3>
                <p className="mt-1 text-muted-foreground text-sm">José Ignacio · Maldonado</p>
                <span className="mt-4 inline-block hairline" />
                <p className="mt-5 text-foreground/80 leading-relaxed">
                  Vivir en la naturaleza, a 3 minutos del pueblo más exclusivo del Uruguay. 124 hectáreas diseñadas para integrarse al entorno natural de José Ignacio, con lotes desde 4.000 m².
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { num: "124 ha", label: "Superficie total" },
                    { num: "4.000 m²", label: "Lotes desde" },
                    { num: "3 min", label: "Del pueblo y la playa" },
                  ].map((s) => (
                    <div key={s.label} className="border border-border p-3">
                      <div className="font-display text-xl text-navy">{s.num}</div>
                      <div className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {["Club house con piscina","Zona deportiva","Cerco perimetral","Seguridad permanente","Bosque nativo","Espejos de agua"].map((a) => (
                      <span key={a} className="text-xs border border-border px-3 py-1 text-navy">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  
                    href={waLink("Hola Sofía, me interesa consultar por terrenos en Barrio Nativo, José Ignacio.")}
                    target="_blank" rel="noreferrer"
                    className="btn-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                  </a>
                  
                    href="https://nativojoseignacio.com.uy"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy text-navy hover:bg-navy hover:text-white text-sm font-semibold uppercase tracking-[0.1em] transition-colors"
                  >
                    Ver sitio oficial <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* PUEBLO MÍO GOLF */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-last lg:order-first">
                <p className="eyebrow">Barrio privado</p>
                <h3 className="mt-2 font-display text-4xl text-navy">Pueblo Mío Golf</h3>
                <p className="mt-1 text-muted-foreground text-sm">Manantiales · Maldonado</p>
                <span className="mt-4 inline-block hairline" />
                <p className="mt-5 text-foreground/80 leading-relaxed">
                  57 lotes únicos que abrazan la cancha del Club de Golf La Barra. Un barrio selecto con lotes desde 4.000 hasta 8.000 m², con vistas al golf, tajamares o campo abierto. A 3 km de La Barra y 6,5 km de Manantiales.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { num: "57", label: "Lotes exclusivos" },
                    { num: "8.000 m²", label: "Lotes hasta" },
                    { num: "3 km", label: "De La Barra" },
                  ].map((s) => (
                    <div key={s.label} className="border border-border p-3">
                      <div className="font-display text-xl text-navy">{s.num}</div>
                      <div className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {["Seguridad 24hs","Calles asfaltadas","2 canchas de tenis","2 canchas de pádel","2 canchas de fútbol 5","Gimnasio","Salón de yoga"].map((a) => (
                      <span key={a} className="text-xs border border-border px-3 py-1 text-navy">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  
                    href={waLink("Hola Sofía, me interesa consultar por terrenos en Pueblo Mío Golf, Manantiales.")}
                    target="_blank" rel="noreferrer"
                    className="btn-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden order-first lg:order-last">
                <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-1110330638772649350/original/63ada327-e509-4172-a5dd-98aa66ac9e2b.jpeg?im_w=1200"
                  alt="Pueblo Mío Golf Manantiales"
                  className="h-full w-full object-cover"
                  width={1200} height={900}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                <span className="absolute top-4 left-4 bg-navy/90 backdrop-blur px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold">Manantiales</span>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* PUEBLO MÍO */}
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-1650988006759702876/original/c5b8a74c-e3ac-4506-b2e6-11effc80f737.jpeg?im_w=1200"
                  alt="Pueblo Mío Manantiales"
                  className="h-full w-full object-cover"
                  width={1200} height={900}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
                <span className="absolute top-4 left-4 bg-navy/90 backdrop-blur px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold font-semibold">Manantiales</span>
              </div>
              <div>
                <p className="eyebrow">Barrio privado</p>
                <h3 className="mt-2 font-display text-4xl text-navy">Pueblo Mío</h3>
                <p className="mt-1 text-muted-foreground text-sm">Manantiales · Maldonado</p>
                <span className="mt-4 inline-block hairline" />
                <p className="mt-5 text-foreground/80 leading-relaxed">
                  El barrio privado más consolidado de la zona. 160 hectáreas con 180 lotes de 4.000 m² rodeados de 9 lagunas y 86 hectáreas de espacios comunes. A 5 minutos de Manantiales, equidistante entre Punta del Este y José Ignacio.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    { num: "160 ha", label: "Superficie total" },
                    { num: "180", label: "Lotes" },
                    { num: "9", label: "Lagunas" },
                  ].map((s) => (
                    <div key={s.label} className="border border-border p-3">
                      <div className="font-display text-xl text-navy">{s.num}</div>
                      <div className="text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {["Club house sobre la laguna","3 sectores de piscina","Beach house","Guardería náutica","Zona deportiva","Gimnasio","Kids Club","Guest house","Seguridad 24hs"].map((a) => (
                      <span key={a} className="text-xs border border-border px-3 py-1 text-navy">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  
                    href={waLink("Hola Sofía, me interesa consultar por terrenos en Pueblo Mío, Manantiales.")}
                    target="_blank" rel="noreferrer"
                    className="btn-gold"
                  >
                    <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="py-24 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Zonas"
            title="Dónde operamos"
            subtitle="Trabajamos en todas las zonas exclusivas de Maldonado, con conocimiento profundo de cada mercado."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {zonas.map((z) => (
              <div key={z.name} className="border border-border p-7 hover:border-gold transition-colors group">
                <MapPin className="h-5 w-5 text-gold" />
                <h3 className="mt-4 font-display text-xl text-navy group-hover:text-gold transition-colors">{z.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="container-luxe text-center max-w-3xl">
          <p className="eyebrow !text-gold-soft">Hablemos</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">¿Buscás comprar o vender?</h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            Contanos qué estás buscando o qué propiedad querés vender. Te respondemos a la brevedad con opciones a tu medida y un seguimiento cercano.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={waLink("Hola, quiero hablar sobre compra o venta de una propiedad en Punta del Este.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
            </a>
            <Link to="/contacto" className="btn-outline-light">
              Dejar mis datos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
