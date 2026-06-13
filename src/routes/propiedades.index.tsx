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
        <div className="container-luxe">
          {properties.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {properties.map((p) => <PropertyCard key={p.slug} p={p} />)}
            </div>
          ) : (
            <div className="border border-dashed border-border bg-card p-12 md:p-16 text-center max-w-2xl mx-auto">
              <p className="eyebrow">Próximamente</p>
              <h2 className="mt-3 font-display text-3xl text-navy">Catálogo en preparación</h2>
              <p className="mt-4 text-sm text-muted-foreground">Estamos finalizando la publicación de nuestras propiedades reales. Mientras tanto, escribinos por WhatsApp y te enviamos las opciones disponibles para tus fechas.</p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex btn-gold"><MessageCircle className="h-4 w-4" /> Consultar por WhatsApp</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
