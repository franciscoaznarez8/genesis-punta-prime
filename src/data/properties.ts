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
export const properties: Property[] = [];

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
