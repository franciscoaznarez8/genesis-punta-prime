import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, MapPin, Eye, Heart } from "lucide-react";
import about from "@/assets/about-punta.jpg";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros — Orígenes Propiedades Punta del Este" },
      { name: "description", content: "Equipo local especializado en administración de propiedades y alquileres temporarios en Punta del Este. Atención personalizada, transparencia y confianza." },
      { property: "og:title", content: "Sobre Nosotros — Orígenes Propiedades" },
      { property: "og:description", content: "Equipo local con conocimiento profundo del mercado de Punta del Este." },
      { property: "og:image", content: about },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="pt-36 pb-20 bg-background">
        <div className="container-luxe grid gap-14 lg:grid-cols-2 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={about} alt="Punta del Este" className="h-full w-full object-cover" width={1280} height={960} loading="lazy" />
          </div>
          <div>
            <SectionTitle eyebrow="Sobre Nosotros" title="Un equipo cercano, un servicio profesional" align="left" />
            <p className="mt-6 text-foreground/80 leading-relaxed">
              En Orígenes Propiedades entendemos que detrás de cada propiedad hay una historia, una inversión y un proyecto personal. Por eso trabajamos de manera cercana, involucrándonos en cada operación y brindando una atención personalizada tanto a propietarios como a compradores, vendedores e inquilinos.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Nos especializamos en la venta, alquiler y administración de propiedades en Punta del Este, con un enfoque basado en la confianza, la transparencia y el conocimiento real del mercado local.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Conocemos personalmente cada propiedad que ofrecemos, recorremos cada espacio y cuidamos cada detalle. Creemos que esa cercanía marca la diferencia y nos permite recomendar con seguridad la opción adecuada para cada cliente.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Más que gestionar propiedades, buscamos construir relaciones duraderas y ofrecer un servicio profesional con trato humano.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand/40">
        <div className="container-luxe grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Heart, t: "Atención personalizada", d: "Cada propietario y huésped tiene un trato único." },
            { icon: MapPin, t: "Conocimiento local", d: "Equipo nacido y formado en Punta del Este." },
            { icon: Eye, t: "Transparencia", d: "Reportes claros y comunicación abierta." },
            { icon: ShieldCheck, t: "Confianza", d: "Procesos seguros y profesionales certificados." },
          ].map((v) => (
            <div key={v.t} className="bg-background border border-border p-7">
              <v.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl text-navy">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
