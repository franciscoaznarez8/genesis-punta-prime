export const SITE = {
  name: "Sofía Algorta Real Estate",
  tagline: "Inmobiliaria & Administración en Punta del Este",
  whatsappNumber: "59899601819",
  email: "sofialquila@gmail.com",
  instagram: "https://instagram.com/sofiaalgortarealestate",
};

export const waLink = (msg = "Hola Sofía Algorta Real Estate, me gustaría recibir más información.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
