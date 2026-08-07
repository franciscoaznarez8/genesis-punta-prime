import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Bed, Bath, Users, MapPin, ArrowLeft, MessageCircle, ChevronLeft, ChevronRight, X, Star, ExternalLink } from "lucide-react";
import { getPropertyBySlug, properties } from "@/data/properties";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/propiedades/$slug")({
  loader: ({ params }) => {
    const property = getPropertyBySlug(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.property.name} — ${loaderData.property.zone} | Orígenes Propiedades` },
      { name: "description", content: loaderData.property.description },
      { property: "og:title", content: loaderData.property.name },
      { property: "og:description", content: loaderData.property.description },
      { property: "og:image", content: loaderData.property.gallery[0] },
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

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: string[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white z-10 bg-black/40 rounded-full p-2"><X className="h-6 w-6" /></button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 z-10"><ChevronLeft className="h-6 w-6" /></button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 z-10"><ChevronRight className="h-6 w-6" /></button>
      <img src={images[index]} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">{index + 1} / {images.length}</p>
    </div>
  );
}

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    const next = (i + images.length) % images.length;
    setActive(next);
    thumbRef.current?.children[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => ((i ?? 0) - 1 + images.length) % images.length)}
          onNext={() => setLightbox((i) => ((i ?? 0) + 1) % images.length)}
        />
      )}
      <div className="relative aspect-[16/9] overflow-hidden cursor-zoom-in bg-black" onClick={() => setLightbox(active)}>
        <img src={images[active]} alt={name} className="h-full w-full object-cover transition-opacity duration-300" width={1280} height={720} />
        {images.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); go(active - 1); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={(e) => { e.stopPropagation(); go(active + 1); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors"><ChevronRight className="h-5 w-5" /></button>
            <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">{active + 1} / {images.length}</span>
            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">Ver en pantalla completa</span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div ref={thumbRef} className="flex gap-2 overflow-x-auto py-2 scrollbar-hide snap-x">
          {images.map((g, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`flex-shrink-0 snap-start w-20 h-14 overflow-hidden border-2 transition-all rounded-sm ${active === i ? "border-gold opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}
            >
              <img src={g} alt="" className="h-full w-full object-cover" width={160} height={112} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function Page() {
  const { property: p } = Route.useLoaderData() as { property: import("@/data/properties").Property };
  const others = properties.filter((x) => x.slug !== p.slug).slice(0, 3);
  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(p.whatsappMsg ?? `Hola, me interesa ${p.name}.`)}`;

  return (
    <>
      <section className="pt-28 pb-6 bg-sand/30">
        <div className="container-luxe">
          <Link to="/propiedades" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-navy transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Volver al catálogo
          </Link>
          <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-navy">{p.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-gold" /> {p.location}</p>
              {p.rating && (
                <p className="mt-2 flex items-center gap-1.5 text-sm">
                  <Star className="h-4 w-4 text-gold fill-gold" />
                  <span className="font-semibold text-navy">{p.rating}</span>
                  <span className="text-muted-foreground">· {p.reviews} reseñas en Airbnb</span>
                </p>
              )}
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href={waUrl} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle className="h-4 w-4" /> Consultar</a>
              {p.airbnbUrl && (
                <a href={p.airbnbUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white text-sm font-semibold uppercase tracking-[0.1em] transition-colors">
                  <ExternalLink className="h-4 w-4" /> Airbnb
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-4">
        <div className="container-luxe">
          <Gallery images={p.gallery} name={p.name} />
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
              <h2 className="font-display text-3xl text-navy">Sobre esta propiedad</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed text-lg">{p.description}</p>
            </div>
            {p.features.length > 0 && (
              <div>
                <h2 className="font-display text-3xl text-navy">Lo que encontrarás</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm py-2 border-b border-border/50">
                      <span className="h-2 w-2 bg-gold flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {p.services.length > 0 && (
              <div>
                <h2 className="font-display text-3xl text-navy">Servicios</h2>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {p.services.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm py-2 border-b border-border/50">
                      <span className="h-2 w-2 bg-gold flex-shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="font-display text-3xl text-navy">Ubicación</h2>
              <p className="mt-3 text-foreground/80">{p.location}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start bg-card border border-border p-7 shadow-card space-y-3">
            <h3 className="font-display text-2xl text-navy">Consultar disponibilidad</h3>
            <form onSubmit={(e) => { e.preventDefault(); window.open(waUrl, "_blank"); }} className="space-y-3">
              <input required placeholder="Nombre" maxLength={80} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold bg-background" />
              <input required type="email" placeholder="Email" maxLength={120} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold bg-background" />
              <input placeholder="Teléfono" maxLength={30} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold bg-background" />
              <textarea placeholder="Fechas y consulta" rows={3} maxLength={500} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none bg-background" />
              <button className="btn-navy w-full">Enviar consulta</button>
            </form>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-gold w-full inline-flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            {p.airbnbUrl && (
              <a href={p.airbnbUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 py-3 px-4 border border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white text-sm font-semibold uppercase tracking-[0.1em] transition-colors">
                <ExternalLink className="h-4 w-4" /> Ver en Airbnb
              </a>
            )}
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
                  <img src={o.gallery[0]} alt={o.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" width={800} height={600} loading="lazy" />
                </div>
                <h3 className="mt-4 font-display text-xl text-navy group-hover:text-gold transition-colors">{o.name}</h3>
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
