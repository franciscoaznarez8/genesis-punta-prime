import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/propiedades/")({
  head: () => ({
    meta: [
      { title: "Propiedades en Punta del Este — Génesis Propiedades" },
      { name: "description", content: "Explorá nuestra selección de propiedades premium para alquiler temporario en Punta del Este, La Barra, José Ignacio y zonas exclusivas." },
      { property: "og:title", content: "Propiedades — Génesis Propiedades" },
      { property: "og:description", content: "Selección curada de propiedades premium en Punta del Este." },
      { property: "og:url", content: "/propiedades" },
    ],
    links: [{ rel: "canonical", href: "/propiedades" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="pt-36 pb-16 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Catálogo" title="Propiedades" subtitle="Residencias seleccionadas en las mejores zonas de Maldonado y Punta del Este." />
        </div>
      </section>
      <section className="py-16 md:py-20 bg-background">
        <div className="container-luxe grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => <PropertyCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
  );
}
