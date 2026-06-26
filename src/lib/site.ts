export const SITE = {
  name: "Orígenes Propiedades",
  tagline: "Inmobiliaria & Administración en Punta del Este",
  whatsappNumber: "59899601819",
  email: "sofialquila@gmail.com",
  instagram: "https://instagram.com/origenespropiedades",
};

export const waLink = (msg = "Hola Orígenes Propiedades, me gustaría recibir más información.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
