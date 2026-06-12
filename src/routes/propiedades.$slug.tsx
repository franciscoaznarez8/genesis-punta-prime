import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Bed, Bath, Users, MapPin, ArrowLeft, MessageCircle } from "lucide-react";
import { getPropertyBySlug, properties } from "@/data/properties";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/propiedades/$slug")({
  loader: ({ params }) => {
    const property = getPropertyBySlug(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.property.name} — ${loaderData.property.zone} | Génesis Propiedades` },
      { name: "description", content: loaderData.property.description },
      { property: "og:title", content: loaderData.property.name },
      { property: "og:description", content: loaderData.property.description },
      { property: "og:image", content: loaderData.property.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-20 container-luxe text-center">
      <h1 className="font-display text-4xl text-navy">Propiedad no encontrada</h1>
      <Link to="/propiedades" className="mt-6 inline-flex btn-navy">Volver al catálogo</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="pt-40 pb-20 container-luxe text-center">
      <h1 className="font-display text-4xl text-navy">No pudimos cargar esta propiedad</h1>
    </div>
  ),
  component: Page,
});

function Page() {
  const { property: p } = Route.useLoaderData();
  const [active, setActive] = useState(p.gallery[0]);
  const others = properties.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="pt-28 pb-10 bg-sand/30">
        <div className="container-luxe">
          <Link to="/propiedades" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-navy">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver
          </Link>
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-navy">{p.name}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-gold" /> {p.location}</p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container-luxe grid gap-4 md:grid-cols-[3fr_1fr]">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={active} alt={p.name} className="h-full w-full object-cover" width={1280} height={960} />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
            {p.gallery.map((g, i) => (
              <button key={i} onClick={() => setActive(g)} className={`aspect-[4/3] overflow-hidden border-2 transition ${active === g ? "border-gold" : "border-transparent"}`}>
                <img src={g} alt="" className="h-full w-full object-cover" width={400} height={300} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-luxe grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-3 max-w-md gap-6 border-y border-border py-6">
              <Stat icon={Users} label="Huéspedes" value={p.guests} />
              <Stat icon={Bed} label="Dormitorios" value={p.bedrooms} />
              <Stat icon={Bath} label="Baños" value={p.bathrooms} />
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Descripción</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">{p.description}</p>
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Características</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" /> {f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Servicios</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                {p.services.map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" /> {s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl text-navy">Ubicación</h2>
              <p className="mt-3 text-foreground/80">{p.location}</p>
              <div className="mt-5 aspect-[16/7] bg-sand/60 grid place-items-center border border-border">
                <p className="text-sm text-muted-foreground">Ubicación aproximada · {p.zone}</p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start bg-card border border-border p-7 shadow-card">
            <h3 className="font-display text-2xl text-navy">Consultar disponibilidad</h3>
            <form onSubmit={(e) => { e.preventDefault(); window.open(waLink(`Hola, me interesa ${p.name}.`), "_blank"); }} className="mt-5 space-y-3">
              <input required placeholder="Nombre" maxLength={80} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <input required type="email" placeholder="Email" maxLength={120} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <input placeholder="Teléfono" maxLength={30} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <textarea placeholder="Fechas y consulta" rows={3} maxLength={500} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
              <button className="btn-navy w-full">Enviar consulta</button>
            </form>
            <a href={waLink(`Hola, me interesa ${p.name}.`)} target="_blank" rel="noreferrer" className="mt-3 btn-gold w-full"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-sand/40">
        <div className="container-luxe">
          <h2 className="font-display text-3xl text-navy">También podría interesarte</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/propiedades/$slug" params={{ slug: o.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" width={800} height={600} loading="lazy" />
                </div>
                <h3 className="mt-4 font-display text-xl text-navy">{o.name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{o.zone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: number }) {
  return (
    <div>
      <Icon className="h-5 w-5 text-gold" />
      <div className="mt-2 font-display text-2xl text-navy">{value}</div>
      <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}
