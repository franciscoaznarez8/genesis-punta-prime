import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, KeyRound, ShieldCheck, Heart, Star, MessageCircle, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/administracion-airbnb")({
  head: () => ({
    meta: [
      { title: "Administración Airbnb en Punta del Este — Orígenes Propiedades" },
      { name: "description", content: "Gestión integral de su propiedad en Airbnb y plataformas premium: anuncios, reservas, check-in, limpieza, mantenimiento y maximización de ocupación." },
      { property: "og:title", content: "Administración Airbnb — Orígenes Propiedades" },
      { property: "og:description", content: "Nos ocupamos de todo. Su propiedad rinde sin que usted se ocupe de la operación." },
      { property: "og:url", content: "/administracion-airbnb" },
    ],
    links: [{ rel: "canonical", href: "/administracion-airbnb" }],
  }),
  component: Page,
});

const services = [
  { icon: Sparkles, title: "Publicación y optimización de anuncios", text: "Fotografía profesional, redacción y posicionamiento en Airbnb, Booking y plataformas premium." },
  { icon: ShieldCheck, title: "Gestión de reservas", text: "Calendarios sincronizados, pagos, contratos y filtrado de huéspedes." },
  { icon: Heart, title: "Atención al huésped", text: "Soporte multilingüe antes, durante y después de la estadía." },
  { icon: KeyRound, title: "Check-in y check-out", text: "Recepción personalizada y entrega de llaves 24/7." },
  { icon: Sparkles, title: "Coordinación de limpieza", text: "Equipo de confianza con estándares de hotelería." },
  { icon: ShieldCheck, title: "Supervisión de mantenimiento", text: "Inspecciones periódicas y respuesta inmediata." },
  { icon: ShieldCheck, title: "Gestión de incidencias", text: "Resolución ágil de cualquier imprevisto." },
  { icon: Star, title: "Maximización de ocupación", text: "Pricing dinámico y estrategia comercial todo el año." },
];

function Page() {
  return (
    <>
      <section className="pt-36 pb-20 bg-navy text-white">
        <div className="container-luxe">
          <SectionTitle eyebrow="Administración Airbnb" title="Nos ocupamos de todo" subtitle="Su propiedad rinde al máximo, sin que usted tenga que ocuparse de la operación diaria." light />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-luxe grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {services.map((s, i) => (
            <div key={i} className="bg-background p-8 hover:bg-card transition-colors">
              <s.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-sand/40">
        <div className="container-luxe grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionTitle eyebrow="Beneficios" title="¿Por qué elegirnos?" align="left" />
            <ul className="mt-8 space-y-4">
              {["Reportes mensuales transparentes","Equipo local con experiencia hotelera","Atención personalizada en cada estadía","Tarifas dinámicas para maximizar ingresos","Mantenimiento preventivo permanente"].map((b) => (
                <li key={b} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-gold mt-0.5" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-background border border-border p-10">
            <h3 className="font-display text-3xl text-navy">Solicitar asesoramiento</h3>
            <p className="mt-3 text-sm text-muted-foreground">Conversemos sobre su propiedad. Sin compromiso.</p>
            <a href={waLink("Hola, quiero asesoramiento de administración.")} target="_blank" rel="noreferrer" className="mt-6 btn-gold inline-flex">
              <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
