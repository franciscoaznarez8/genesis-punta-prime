import { Link } from "@tanstack/react-router";
import { Bed, Bath, Users, MapPin, MessageCircle, ExternalLink, Star, ArrowRight } from "lucide-react";
import type { Property } from "@/data/properties";
import { SITE } from "@/lib/site";

export function PropertyCard({ p }: { p: Property }) {
  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(p.whatsappMsg ?? `Hola, me interesa la propiedad ${p.name}.`)}`;

  return (
    <article className="group bg-card border border-border overflow-hidden shadow-card hover:shadow-luxe transition-all duration-500">
      <Link to="/propiedades/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/3] overflow-hidden">
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
        {p.rating && (
          <span className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-navy">
            <Star className="h-3 w-3 text-gold fill-gold" /> {p.rating} {p.reviews && <span className="text-muted-foreground font-normal">({p.reviews})</span>}
          </span>
        )}
      </Link>
      <div className="p-6">
        <Link to="/propiedades/$slug" params={{ slug: p.slug }}>
          <h3 className="font-display text-2xl text-navy hover:text-gold transition-colors">{p.name}</h3>
        </Link>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold" /> {p.location}
        </p>
        <div className="mt-5 flex items-center gap-5 text-sm text-foreground/75 border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold" /> {p.guests} huésp.</span>
          <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {p.bedrooms} dorm.</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {p.bathrooms} baños</span>
        </div>
        <Link
          to="/propiedades/$slug"
          params={{ slug: p.slug }}
          className="mt-4 inline-flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-navy hover:text-gold transition-colors"
        >
          Ver más <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-[0.75rem] font-semibold uppercase tracking-[0.12em] rounded-sm transition-colors"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          {p.airbnbUrl && (
            <a
              href={p.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 border border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white text-[0.75rem] font-semibold uppercase tracking-[0.12em] rounded-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Ver en Airbnb
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
