import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Star, Heart } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";
import familiaAsset from "@/assets/familia-origenes.jpg.asset.json";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Sofía Algorta Real Estate Punta del Este" },
      { name: "description", content: "Sofía Algorta, uruguaya, fundadora de Sofía Algorta Real Estate. Más de 10 años de experiencia en alquileres, ventas y administración de propiedades en Punta del Este." },
      { property: "og:title", content: "Sobre Nosotros — Sofía Algorta Real Estate" },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      {/* PRESENTACIÓN */}
      <section className="pt-36 pb-20 bg-background">
        <div className="container-luxe max-w-3xl">
          <div>
            <p className="eyebrow">Sobre nosotros</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-navy leading-[1.05]">
              Ayudarte a encontrar lo que realmente buscás
            </h1>
            <span className="mt-6 inline-block hairline" />
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">
              Soy Sofía Algorta, uruguaya, fundadora de Sofía Algorta Real Estate. Crecí viniendo a estas playas desde chica — La Barra, Manantiales, José Ignacio — y hoy vivo acá. Esta zona no es solo mi lugar de trabajo, es mi casa.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Llevo más de 10 años trabajando con propiedades en Punta del Este y la costa de Maldonado. Alquileres temporarios, ventas, administración y asesoramiento en construcción — acompañé a cientos de clientes en decisiones que importan de verdad. Y en todo ese tiempo aprendí una cosa: la diferencia está en escuchar antes de ofrecer.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Creo que el mejor negocio es el que le sirve a las dos partes. Por eso me tomo el tiempo de conocer a cada cliente, entender su situación y sus objetivos antes de recomendar nada. La confianza se construye así — no con promesas, sino con resultados que tienen sentido para quien los recibe.
            </p>
            <a
              href={waLink("Hola Sofía, me gustaría conocer más sobre Sofía Algorta Real Estate.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex btn-gold"
            >
              Hablemos
            </a>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-16 bg-navy text-white">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { num: "+10", label: "Años de experiencia" },
            { num: "+20", label: "Propiedades gestionadas" },
            { num: "+200", label: "Reseñas verificadas" },
            { num: "4.9★", label: "Calificación promedio" },
          ].map((s) => (
            <div key={s.label} className="bg-navy p-8 text-center">
              <div className="font-display text-5xl text-gold">{s.num}</div>
              <div className="mt-2 text-sm text-white/70 uppercase tracking-[0.15em]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LO QUE TRAIGO */}
      <section className="py-24 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="Lo que nos define"
            subtitle="Más de una década acompañando a propietarios, compradores e inversores en la costa de Maldonado."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, title: "Trato personal", desc: "Cada cliente tiene una situación distinta. Me tomo el tiempo de entenderla antes de recomendar cualquier cosa." },
              { icon: MapPin, title: "Conocimiento local", desc: "Vivo en La Barra. Conozco cada barrio, cada propiedad y cada detalle de esta zona desde adentro." },
              { icon: Star, title: "Experiencia comprobada", desc: "Más de 10 años, más de 20 propiedades gestionadas y cientos de operaciones acompañadas con resultados reales." },
              { icon: ShieldCheck, title: "Asesoramiento integral", desc: "Alquileres, ventas y también construcción — mi padre es arquitecto con décadas de trayectoria en la zona." },
            ].map((v) => (
              <div key={v.title} className="bg-background border border-border p-7 hover:border-gold transition-colors group">
                <v.icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 font-display text-xl text-navy group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 bg-background">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow">Mi historia</p>
            <h2 className="mt-3 font-display text-4xl text-navy">Desde chica, este era mi lugar</h2>
            <span className="mt-5 inline-block hairline" />
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Siempre tuve una relación especial con esta parte de Uruguay. Lugares que conozco desde que tengo memoria, donde crecí, donde aprendí a querer el mar y la tranquilidad de esta costa.
              </p>
              <p>
                Hace más de 10 años empecé a trabajar formalmente con propiedades en la zona. Lo que arrancó de manera enfocada fue creciendo de forma natural, impulsado por algo que nunca cambió: el compromiso con cada cliente. Hoy gestiono más de 20 propiedades, acompaño operaciones de venta y asesoro a quienes quieren construir o invertir — y vivo en La Barra, a metros de las casas que cuido.
              </p>
              <p>
                Conozco personalmente cada propiedad que gestiono o comercializo. Eso me permite asesorarte con honestidad sobre qué tiene, qué potencial tiene y si realmente se ajusta a lo que buscás.
              </p>
              <p>
                Además, tengo algo que pocas personas en este rubro tienen: mi padre es arquitecto con décadas de trayectoria en la zona. Eso me dio desde chica un ojo diferente para las propiedades — entiendo la construcción, los materiales, el potencial de un terreno, lo que se puede hacer y lo que no. Si estás pensando en construir, reformar o evaluar una propiedad, ese conocimiento está disponible para vos también.
              </p>
              <p>
                Sofía Algorta Real Estate nació de una convicción muy clara: que hay lugar para alguien que se tome el tiempo de entender qué es lo que cada persona realmente necesita. Ese es mi trabajo. Ese es mi diferencial.
              </p>
            </div>
          </div>
          <figure className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={familiaAsset.url}
                alt="Sofía Algorta junto a su familia en la costa de Maldonado, Uruguay"
                className="h-full w-full object-cover"
                width={1440} height={1800}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/30" />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Sofía y su familia — Maldonado, Uruguay.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl">¿Querés que te ayude a encontrar lo que buscás?</h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            Ya sea que estés buscando una propiedad para alquilar, querés comprar, vender, o necesitás que alguien gestione la tuya — hablemos. Sin compromiso, con toda la atención.
          </p>
          <a
            href={waLink("Hola Sofía, me gustaría hablar sobre propiedades en Punta del Este.")}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex btn-gold"
          >
            Escribile a Sofía
          </a>
        </div>
      </section>
    </>
  );
}
