import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Orígenes Propiedades" },
      { name: "description", content: "Política de privacidad de Orígenes Propiedades. Cómo recolectamos, usamos y protegemos sus datos." },
      { property: "og:url", content: "/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/privacidad" }],
  }),
  component: () => (
    <section className="pt-36 pb-20 bg-background">
      <div className="container-luxe max-w-3xl">
        <SectionTitle eyebrow="Legal" title="Política de Privacidad" align="left" />
        <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed">
          <p>En Orígenes Propiedades respetamos su privacidad y nos comprometemos a proteger sus datos personales conforme a la legislación vigente en Uruguay.</p>
          <h3 className="font-display text-2xl text-navy">Información que recopilamos</h3>
          <p>Nombre, email, teléfono y mensajes que usted nos proporciona a través de los formularios del sitio.</p>
          <h3 className="font-display text-2xl text-navy">Uso de la información</h3>
          <p>Utilizamos sus datos exclusivamente para responder consultas, gestionar reservas y enviar información relevante sobre nuestros servicios.</p>
          <h3 className="font-display text-2xl text-navy">Contacto</h3>
          <p>Para ejercer sus derechos o realizar consultas escríbanos a sofialquila@gmail.com.</p>
        </div>
      </div>
    </section>
  ),
});
