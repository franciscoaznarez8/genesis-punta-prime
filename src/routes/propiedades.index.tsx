import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/site/PropertyCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Search } from "lucide-react";

export const Route = createFileRoute("/propiedades/")(({
  head: () => ({
    meta: [
      { title: "Propiedades en Punta del Este — Orígenes Propiedades" },
      { name: "description", content: "Explorá nuestra selección de propiedades premium para alquiler temporario en Punta del Este, La Barra, José Ignacio y zonas exclusivas." },
      { property: "og:title", content: "Propiedades — Orígenes Propiedades" },
      { property: "og:description", content: "Selección curada de propiedades premium en Punta del Este." },
      { property: "og:url", content: "/propiedades" },
    ],
    links: [{ rel: "canonical", href: "/propiedades" }],
  }),
  component: Page,
}));

const ALL = "Todas";

function Page() {
  const [search, setSearch] = useState("");
  const [zone, setZone] = useState(ALL);
  const [guests, setGuests] = useState(ALL);
  const [bedrooms, setBedrooms] = useState(ALL);

  const zones = useMemo(() => [ALL, ...Array.from(new Set(properties.map((p) => p.zone)))], []);
  const guestOptions = useMemo(() => [ALL, "2+", "4+", "6+", "8+", "10+"], []);
  const bedroomOptions = useMemo(() => [ALL, "1", "2", "3", "4", "5+"], []);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.zone.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase());
      const matchZone = zone === ALL || p.zone === zone;
      const minGuests = guests === ALL ? 0 : parseInt(guests);
      const matchGuests = p.guests >= minGuests;
      const minBeds = bedrooms === ALL ? 0 : bedrooms === "5+" ? 5 : parseInt(bedrooms);
      const matchBeds = bedrooms === ALL ? true : bedrooms === "5+" ? p.bedrooms >= 5 : p.bedrooms === minBeds;
      return matchSearch && matchZone && matchGuests && matchBeds;
    });
  }, [search, zone, guests, bedrooms]);

  return (
    <>
      <section className="pt-36 pb-16 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Catálogo" title="Propiedades" subtitle="Residencias seleccionadas en las mejores zonas de Maldonado y Punta del Este." />

          {/* Buscador */}
          <div className="mt-10 relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre, zona o ubicación..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border bg-background text-sm focus:outline-none focus:border-gold"
            />
          </div>

          {/* Filtros */}
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Zona</label>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-gold min-w-[160px]"
              >
                {zones.map((z) => <option key={z}>{z}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Huéspedes</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-gold min-w-[140px]"
              >
                {guestOptions.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Dormitorios</label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-gold min-w-[140px]"
              >
                {bedroomOptions.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            {(zone !== ALL || guests !== ALL || bedrooms !== ALL || search) && (
              <div className="flex flex-col gap-1 justify-end">
                <button
                  onClick={() => { setZone(ALL); setGuests(ALL); setBedrooms(ALL); setSearch(""); }}
                  className="px-4 py-2 text-[0.75rem] uppercase tracking-[0.15em] text-muted-foreground border border-border hover:border-gold hover:text-navy transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>

          {/* Resultado */}
          <p className="mt-6 text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "propiedad encontrada" : "propiedades encontradas"}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container-luxe">
          {filtered.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => <PropertyCard key={p.slug} p={p} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-3xl text-navy">Sin resultados</p>
              <p className="mt-3 text-muted-foreground">Probá cambiando los filtros de búsqueda.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
