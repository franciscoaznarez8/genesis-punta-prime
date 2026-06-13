import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MessageCircle, Search, X } from "lucide-react";
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
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("");
  const [guests, setGuests] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const zones = useMemo(
    () => Array.from(new Set(properties.map((p) => p.zone))).sort(),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return properties.filter((p) => {
      if (zone && p.zone !== zone) return false;
      if (guests && p.guests < Number(guests)) return false;
      if (bedrooms && p.bedrooms < Number(bedrooms)) return false;
      if (q && !`${p.name} ${p.zone} ${p.location}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, zone, guests, bedrooms]);

  const hasFilters = Boolean(query || zone || guests || bedrooms);
  const clear = () => { setQuery(""); setZone(""); setGuests(""); setBedrooms(""); };

  return (
    <>
      <section className="pt-36 pb-12 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Catálogo" title="Propiedades" subtitle="Residencias seleccionadas en las mejores zonas de Maldonado y Punta del Este." />
        </div>
      </section>

      <section className="py-10 bg-background border-b border-border">
        <div className="container-luxe">
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
            <label className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre o ubicación…"
                className="w-full border border-border bg-background pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-gold"
              />
            </label>
            <select value={zone} onChange={(e) => setZone(e.target.value)} className="border border-border bg-background px-3 py-3 text-sm focus:outline-none focus:border-gold">
              <option value="">Todas las zonas</option>
              {zones.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className="border border-border bg-background px-3 py-3 text-sm focus:outline-none focus:border-gold">
              <option value="">Huéspedes</option>
              {[2,4,6,8,10,12].map((n) => <option key={n} value={n}>{n}+ huéspedes</option>)}
            </select>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="border border-border bg-background px-3 py-3 text-sm focus:outline-none focus:border-gold">
              <option value="">Dormitorios</option>
              {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n}+ dormitorios</option>)}
            </select>
            {hasFilters && (
              <button onClick={clear} className="inline-flex items-center justify-center gap-2 border border-border px-4 py-3 text-xs uppercase tracking-[0.18em] hover:border-gold hover:text-navy transition">
                <X className="h-3.5 w-3.5" /> Limpiar
              </button>
            )}
          </div>
          {properties.length > 0 && (
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "propiedad" : "propiedades"}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container-luxe">
          {properties.length === 0 ? (
            <div className="border border-dashed border-border bg-card p-12 md:p-16 text-center max-w-2xl mx-auto">
              <p className="eyebrow">Próximamente</p>
              <h2 className="mt-3 font-display text-3xl text-navy">Catálogo en preparación</h2>
              <p className="mt-4 text-sm text-muted-foreground">Estamos finalizando la publicación de nuestras propiedades reales. Mientras tanto, escribinos por WhatsApp y te enviamos las opciones disponibles para tus fechas.</p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex btn-gold"><MessageCircle className="h-4 w-4" /> Consultar por WhatsApp</a>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <PropertyCard key={p.slug} p={p} />)}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-display text-2xl text-navy">Sin resultados</p>
              <p className="mt-3 text-sm text-muted-foreground">Probá ajustar los filtros o limpialos para ver todas las propiedades.</p>
              <button onClick={clear} className="mt-6 btn-navy">Limpiar filtros</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
