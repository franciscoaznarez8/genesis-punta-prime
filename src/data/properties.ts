import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

export type Property = {
  slug: string;
  name: string;
  zone: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  services: string[];
  location: string;
};

export const properties: Property[] = [
  {
    slug: "villa-mar-azul",
    name: "Villa Mar Azul",
    zone: "Playa Brava",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    image: p1,
    gallery: [p1, p5, p2],
    description:
      "Villa frente al mar con piscina infinity, decoración contemporánea y acceso directo a la playa. Ideal para familias o grupos que buscan privacidad y lujo.",
    features: ["Piscina infinity", "Frente al mar", "Parrillero", "Estacionamiento privado", "Wi-Fi de alta velocidad", "Aire acondicionado"],
    services: ["Limpieza incluida", "Check-in personalizado", "Servicio de mucama opcional", "Chef privado bajo solicitud"],
    location: "Parada 12, Playa Brava — Punta del Este",
  },
  {
    slug: "penthouse-horizonte",
    name: "Penthouse Horizonte",
    zone: "Península",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    image: p2,
    gallery: [p2, p5, p1],
    description:
      "Penthouse en la Península con terraza panorámica y vistas 360° al puerto y al mar. A pasos de los mejores restaurantes y comercios.",
    features: ["Terraza panorámica", "Jacuzzi exterior", "Cocina gourmet", "Cochera", "Seguridad 24hs"],
    services: ["Servicio de conserjería", "Limpieza semanal", "Lavandería"],
    location: "Península — Punta del Este",
  },
  {
    slug: "casa-dunas",
    name: "Casa Dunas",
    zone: "La Barra",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image: p3,
    gallery: [p3, p1, p6],
    description:
      "Diseño minimalista entre dunas, grandes ventanales y una conexión total con la naturaleza. A 200 metros de la playa.",
    features: ["Diseño de autor", "Jardín nativo", "Parrillero techado", "Calefacción", "Smart TV"],
    services: ["Limpieza incluida", "Set de bienvenida"],
    location: "La Barra — Maldonado",
  },
  {
    slug: "chacra-olivos",
    name: "Chacra Los Olivos",
    zone: "José Ignacio",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    image: p4,
    gallery: [p4, p1, p3],
    description:
      "Chacra estilo campo-chic con piscina, olivos centenarios y amplios espacios al aire libre. Perfecta para eventos privados y retiros.",
    features: ["Piscina climatizada", "Quincho cerrado", "Cancha de bochas", "Huerta orgánica", "10 hectáreas"],
    services: ["Mantenimiento integral", "Servicio de catering bajo solicitud", "Transfer al aeropuerto"],
    location: "José Ignacio — Maldonado",
  },
  {
    slug: "apartamento-mansa",
    name: "Apartamento Mansa View",
    zone: "Playa Mansa",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: p5,
    gallery: [p5, p2, p1],
    description:
      "Apartamento de lujo con vistas plenas a la Playa Mansa. Decoración elegante en tonos azul marino y dorado, ideal para parejas o familias pequeñas.",
    features: ["Vista al mar", "Amenities completos", "Gimnasio", "Piscina del edificio", "Portería 24hs"],
    services: ["Recepción del edificio", "Limpieza al check-out"],
    location: "Rambla Williman — Playa Mansa",
  },
  {
    slug: "cottage-ballena",
    name: "Cottage Punta Ballena",
    zone: "Punta Ballena",
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    image: p6,
    gallery: [p6, p3, p4],
    description:
      "Coqueto cottage con jardín mediterráneo y vistas al mar desde la terraza. Una opción acogedora y exclusiva a minutos del centro.",
    features: ["Jardín privado", "Pérgola con vista al mar", "Hogar a leña", "Bicicletas disponibles"],
    services: ["Limpieza incluida", "Productos de bienvenida orgánicos"],
    location: "Punta Ballena — Maldonado",
  },
];

export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);
