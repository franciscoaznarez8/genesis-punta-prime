import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Home, TrendingUp, ShieldCheck, Users, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
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

      {/* AVISO sin stock */}
      <section className="py-10 bg-gold/10 border-y border-gold/30">
        <div className="container-luxe flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <CheckCircle2 className="h-8 w-8 text-gold flex-shrink-0" />
          <p className="text-navy font-medium leading-relaxed">
            Actualmente estamos ampliando nuestra cartera de ventas. Si tenés una propiedad para vender o estás buscando comprar, <strong>contactanos directamente</strong> — trabajamos con propiedades exclusivas y off-market.
          </p>
          <a
            href={waLink("Hola, me interesa vender o comprar una propiedad en Punta del Este.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold flex-shrink-0"
          >
            <MessageCircle className="h-4 w-4" /> Escribinos
          </a>
        </div>
      </section>

      {/* ZONAS */}
      <section className="py-24 bg-background">
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

      {/* TIPOS */}
      <section className="py-24 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Qué encontrarás"
            title="Todo tipo de propiedades"
            subtitle="Desde apartamentos en la península hasta chacras en José Ignacio — tenemos acceso a toda la oferta del mercado."
          />
          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {tipos.map((tipo) => (
              <div key={tipo} className="flex items-center gap-3 py-4 px-2 border-b border-border text-sm font-medium text-navy">
                <span className="h-2 w-2 bg-gold flex-shrink-0" /> {tipo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-background">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Por qué elegirnos"
            title="Comprá con confianza"
            subtitle="Más de 20 propiedades gestionadas, superanfitriones en Airbnb y presencia en todas las zonas exclusivas."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.title} className="flex gap-5">
                <b.icon className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
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
