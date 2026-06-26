import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Home, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/ventas")({
  head: () => ({
    meta: [
      { title: "Propiedades en Venta — Orígenes Propiedades Punta del Este" },
      { name: "description", content: "Comprá o vendé propiedades en Punta del Este con el asesoramiento personalizado de Orígenes Propiedades. Conocimiento local, transparencia y acompañamiento en cada paso." },
      { property: "og:title", content: "Propiedades en Venta — Orígenes Propiedades" },
      { property: "og:description", content: "Comprá o vendé propiedades en Punta del Este con asesoramiento personalizado." },
      { property: "og:url", content: "/ventas" },
    ],
    links: [{ rel: "canonical", href: "/ventas" }],
  }),
  component: Page,
});

const benefits = [
  { icon: Home, title: "Cartera selectiva", text: "Accedé a propiedades curadas según tu perfil y objetivo." },
  { icon: TrendingUp, title: "Tasación realista", text: "Precios basados en el conocimiento del mercado local." },
  { icon: ShieldCheck, title: "Seguridad jurídica", text: "Acompañamiento en documentación y trámites." },
  { icon: Users, title: "Atención personalizada", text: "Un asesor dedicado durante todo el proceso de compra o venta." },
];

function Page() {
  return (
    <>
      <section className="pt-36 pb-20 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle
            eyebrow="Ventas"
            title="Comprá o vendé en Punta del Este"
            subtitle="Asesoramiento personalizado para operaciones de compra y venta de propiedades en la península y zonas exclusivas."
          />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="border border-border p-7 bg-card hover:border-gold transition-colors">
              <b.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl text-navy">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container-luxe text-center max-w-3xl">
          <p className="eyebrow !text-gold-soft">¿Buscás comprar o vender?</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Conversemos sobre tu próxima operación</h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            Contanos qué estás buscando o qué propiedad querés vender. Te respondemos por WhatsApp con opciones a tu medida y un seguimiento cercano.
          </p>
          <a
            href={waLink("Hola, quiero hablar sobre compra/venta de una propiedad.")}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex btn-gold"
          >
            <MessageCircle className="h-4 w-4" /> Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
