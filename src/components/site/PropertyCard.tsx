import { Link } from "@tanstack/react-router";
import { Bed, Bath, Users, MapPin, ArrowRight } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group bg-card border border-border overflow-hidden shadow-card hover:shadow-luxe transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-navy font-semibold">
          {p.zone}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-navy">{p.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold" /> {p.location}
        </p>
        <div className="mt-5 flex items-center gap-5 text-sm text-foreground/75 border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold" /> {p.guests}</span>
          <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {p.bedrooms}</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {p.bathrooms}</span>
        </div>
        <Link
          to="/propiedades/$slug"
          params={{ slug: p.slug }}
          className="mt-6 inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.22em] text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
        >
          Ver detalles <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
