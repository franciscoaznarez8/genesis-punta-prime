import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Orígenes Propiedades Punta del Este" },
      { name: "description", content: "Contactanos por WhatsApp, email o Instagram. Atención personalizada para propietarios y huéspedes en Punta del Este." },
      { property: "og:title", content: "Contacto — Orígenes Propiedades" },
      { property: "og:description", content: "Estamos a un mensaje de distancia." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="pt-36 pb-16 bg-sand/40">
        <div className="container-luxe">
          <SectionTitle eyebrow="Contacto" title="Conversemos" subtitle="Respondemos consultas de propietarios y huéspedes durante todo el año." />
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container-luxe grid gap-12 lg:grid-cols-5">
          <form
            onSubmit={(e) => { e.preventDefault(); window.open(waLink("Hola, quiero hacer una consulta."), "_blank"); }}
            className="lg:col-span-3 bg-card border border-border p-8 md:p-10 shadow-card space-y-4"
          >
            <h2 className="font-display text-3xl text-navy">Enviar un mensaje</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Nombre" maxLength={80} className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <input required type="email" placeholder="Email" maxLength={120} className="border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            </div>
            <input placeholder="Teléfono" maxLength={30} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold" />
            <textarea required placeholder="Mensaje" rows={6} maxLength={1000} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
            <button className="btn-navy w-full md:w-auto">Enviar mensaje</button>
          </form>

          <aside className="lg:col-span-2 space-y-5">
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-6 border border-border hover:border-gold transition-colors bg-card">
              <MessageCircle className="h-6 w-6 text-gold mt-1" />
              <div>
                <div className="eyebrow">WhatsApp</div>
                <div className="mt-1 font-display text-xl text-navy">+598 99 601 819</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 p-6 border border-border hover:border-gold transition-colors bg-card">
              <Mail className="h-6 w-6 text-gold mt-1" />
              <div>
                <div className="eyebrow">Email</div>
                <div className="mt-1 font-display text-xl text-navy">{SITE.email}</div>
              </div>
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex items-start gap-4 p-6 border border-border hover:border-gold transition-colors bg-card">
              <Instagram className="h-6 w-6 text-gold mt-1" />
              <div>
                <div className="eyebrow">Instagram</div>
                <div className="mt-1 font-display text-xl text-navy">@genesispropiedades</div>
              </div>
            </a>
            <div className="flex items-start gap-4 p-6 border border-border bg-card">
              <MapPin className="h-6 w-6 text-gold mt-1" />
              <div>
                <div className="eyebrow">Ubicación</div>
                <div className="mt-1 font-display text-xl text-navy">Punta del Este, Uruguay</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
