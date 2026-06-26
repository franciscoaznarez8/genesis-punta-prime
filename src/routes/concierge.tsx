import { createFileRoute } from "@tanstack/react-router";
import { Car, ShoppingBag, Wrench, Leaf, Waves, KeyRound, MapPinned, Heart } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Servicios Concierge en Punta del Este — Orígenes Propiedades" },
      { name: "description", content: "Servicios personalizados de concierge: traslados, compras, mantenimiento, jardinería, piscinas y atención dedicada para propietarios y huéspedes." },
      { property: "og:title", content: "Servicios Concierge — Orígenes Propiedades" },
      { property: "og:description", content: "Atención personalizada y servicios premium en Punta del Este." },
      { property: "og:url", content: "/concierge" },
    ],
    links: [{ rel: "canonical", href: "/concierge" }],
  }),
  component: Page,
});

const items = [
  { icon: Car, title: "Traslados", text: "Servicio privado desde y hacia el aeropuerto o cualquier destino." },
  { icon: ShoppingBag, title: "Compras previas a la llegada", text: "Heladera y despensa lista al ingresar a la propiedad." },
  { icon: Wrench, title: "Coordinación de mantenimiento", text: "Profesionales de confianza para cualquier reparación." },
  { icon: Leaf, title: "Jardinería", text: "Cuidado integral de jardines y espacios verdes." },
  { icon: Waves, title: "Piscinas", text: "Mantenimiento y limpieza periódica de piscinas." },
  { icon: KeyRound, title: "Propietarios ausentes", text: "Cuidamos su propiedad todo el año." },
  { icon: MapPinned, title: "Recomendaciones locales", text: "Restaurantes, experiencias y reservas exclusivas." },
  { icon: Heart, title: "Atención personalizada", text: "Un equipo dedicado a anticipar cada necesidad." },
];

function Page() {
  return (
    <>
      <section className="pt-36 pb-20 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Servicios Concierge" title="Servicios personalizados" subtitle="Cuidamos cada detalle para que propietarios y huéspedes vivan una experiencia impecable." />
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container-luxe grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div key={s.title} className="border border-border p-7 hover:border-gold transition-colors bg-card">
              <s.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold">Solicitar un servicio</a>
        </div>
      </section>
    </>
  );
}
