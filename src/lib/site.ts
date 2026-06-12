export const SITE = {
  name: "Génesis Propiedades",
  tagline: "Inmobiliaria & Administración en Punta del Este",
  whatsappNumber: "59899601819",
  email: "sofialquila@gmail.com",
  instagram: "https://instagram.com/genesispropiedades",
};

export const waLink = (msg = "Hola Génesis Propiedades, me gustaría recibir más información.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
