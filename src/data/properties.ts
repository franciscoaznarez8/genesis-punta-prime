// ============================================================
// Propiedades reales administradas por Génesis Propiedades
// ------------------------------------------------------------
// Para agregar una nueva propiedad, copiá el bloque de ejemplo
// que está al final del archivo (comentado) dentro del array
// `properties` y completá los campos.
//
// Imágenes: subir los archivos a `src/assets/` y luego importarlos
// arriba (ej: `import villa1 from "@/assets/villa-las-rosas-1.jpg"`).
// La primera imagen del array `gallery` se usa como portada.
// ============================================================

export type Property = {
  slug: string;            // identificador en la URL (sin espacios, en minúsculas)
  name: string;            // nombre real de la propiedad
  zone: string;            // zona (ej: "La Barra", "José Ignacio")
  guests: number;          // capacidad máxima de huéspedes
  bedrooms: number;        // dormitorios
  bathrooms: number;       // baños
  gallery: string[];       // galería de fotos (la primera es la portada)
  description: string;     // descripción larga
  features: string[];      // características destacadas
  services: string[];      // servicios incluidos
  location: string;        // ubicación detallada
  airbnbUrl?: string;      // link a la publicación en Airbnb (opcional)
};

// Cuando tengas las propiedades reales, agregalas a este array.
export const properties: Property[] = [
  {
    slug: "paradiso-pueblo-mio",
    name: '"Paradiso" Pueblo Mío',
    zone: "Manantiales",
    guests: 12,
    bedrooms: 6,
    bathrooms: 5,
    gallery: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-37682421/original/d02fe848-57d3-40bb-8dcf-8fd1021208dc.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/4909a442-7637-4ef5-90c1-d3fcbce938aa.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/485607a8-17ba-4002-95b2-2fafb9073215.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/ff6dc18f-d359-4b35-a3fc-f829ba2db631.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/592cf158-31d4-4a2a-9f5d-e26501c9591d.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mzc2ODI0MjE%3D/original/f6e03cda-ce8e-47e9-9b35-15b125f4a139.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mzc2ODI0MjE%3D/original/c9e2d8a6-79ba-4868-b55d-dae91b9ceb97.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mzc2ODI0MjE%3D/original/9309ec0e-c741-41b7-91a2-de1c63816695.jpeg?im_w=1200",
    ],
    description:
      "Casa única a estrenar en el barrio privado Pueblo Mío, Manantiales. Diseño contemporáneo que dialoga con la naturaleza a través de grandes ventanales, madera y piedra del lugar. Ubicada entre campo y playa, ofrece la tranquilidad perfecta para descansar y disfrutar con amigos o familia. Favorito entre los huéspedes en Airbnb (5,0 ★).",
    features: [
      "Piscina exclusiva",
      "Barrio privado Pueblo Mío",
      "Entre campo y playa",
      "6 dormitorios · 10 camas",
      "5,5 baños",
      "Sauna",
      "Grandes ventanales con vistas",
      "Diseño en madera y piedra",
    ],
    services: [
      "Llegada autónoma con caja de seguridad",
      "Limpieza incluida",
      "Atención personalizada del anfitrión",
      "Check-in y check-out coordinados",
    ],
    location: "Barrio privado Pueblo Mío — Manantiales, Maldonado",
    airbnbUrl: "https://es-l.airbnb.com/rooms/37682421",
  },
];

export const getPropertyBySlug = (slug: string) =>
  properties.find((p) => p.slug === slug);

// ------------------------------------------------------------
// EJEMPLO de cómo cargar una propiedad real:
// ------------------------------------------------------------
// import casa1 from "@/assets/casa-ejemplo-1.jpg";
// import casa2 from "@/assets/casa-ejemplo-2.jpg";
//
// {
//   slug: "casa-ejemplo",
//   name: "Casa Ejemplo",
//   zone: "La Barra",
//   guests: 6,
//   bedrooms: 3,
//   bathrooms: 2,
//   gallery: [casa1, casa2],
//   description: "Descripción de la propiedad...",
//   features: ["Piscina", "Parrillero", "Wi-Fi"],
//   services: ["Limpieza incluida", "Check-in personalizado"],
//   location: "La Barra — Maldonado",
//   airbnbUrl: "https://www.airbnb.com/rooms/123456",
// }
