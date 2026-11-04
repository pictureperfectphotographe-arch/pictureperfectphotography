export interface Project {
  id: string;
  title: string;
  category: "WEDDINGS" | "PRE-WEDDINGS" | "MATERNITY" | "BABY" | "EVENTS";
  location: string;
  image: string;
  aspect?: string;
  description: string;
  featured?: boolean;
}

export const portfolioProjects: Project[] = [
  {
    id: "sanjana-karthik-wedding",
    title: "Sanjana & Karthik Muhurtham",
    category: "WEDDINGS",
    location: "Hyderabad, Telangana",
    image: "/images/gallery_couple_large.jpg",
    aspect: "portrait",
    description: "Traditional Telugu wedding ceremony documented with candid emotional depth and timeless elegance.",
    featured: true,
  },
  {
    id: "gandipet-sunset-story",
    title: "Golden Hour at Gandipet Lake",
    category: "PRE-WEDDINGS",
    location: "Hyderabad, Telangana",
    image: "/images/gallery_sunset_tree.jpg",
    aspect: "landscape",
    description: "An evocative pre-wedding evening framing serene silhouettes under ancient banyan branches.",
    featured: true,
  },
  {
    id: "aarav-first-milestone",
    title: "Aarav Cradle & Milestone",
    category: "BABY",
    location: "Madhapur, Hyderabad",
    image: "/images/gallery_baby_smile.jpg",
    aspect: "wide",
    description: "Gentle expressions and authentic giggles recorded during a private family cradle ceremony.",
    featured: true,
  },
  {
    id: "shamshabad-pastels",
    title: "Pastel Twilight Editorial",
    category: "PRE-WEDDINGS",
    location: "Shamshabad, Telangana",
    image: "/images/gallery_couple_pink.jpg",
    aspect: "portrait",
    description: "Soft ambient daylight portraits capturing understated romance and natural interaction.",
    featured: true,
  },
  {
    id: "vedic-rituals-detail",
    title: "Jeelakarra Bellam & Sacred Rites",
    category: "WEDDINGS",
    location: "Secunderabad, Telangana",
    image: "/images/gallery_hands_ritual.jpg",
    aspect: "square",
    description: "Detailed sacred rituals honoring heritage, family blessings, and eternal union.",
    featured: true,
  },
  {
    id: "pellikuthuru-radiance",
    title: "Pelli Koothuru & Haldi Grace",
    category: "WEDDINGS",
    location: "Banjara Hills, Hyderabad",
    image: "/images/gallery_bride_saree.jpg",
    aspect: "wide",
    description: "Traditional festive adornment, yellow silks, and candid joy before the wedding ceremony.",
    featured: true,
  },
  {
    id: "garden-mandap-aisle",
    title: "Floral Pathway & Mandap Architecture",
    category: "WEDDINGS",
    location: "Golconda Resorts, Hyderabad",
    image: "/images/gallery_mandap_venue.jpg",
    aspect: "landscape",
    description: "A scenic open-air floral mandap setting the stage for unforgettable vows.",
    featured: true,
  },
  {
    id: "maternity-golden-bloom",
    title: "Golden Bloom Maternity Session",
    category: "MATERNITY",
    location: "Hyderabad, Telangana",
    image: "/images/hero_maternity_yellow.jpg",
    aspect: "portrait",
    description: "Celebrating grace and the promise of new life amidst lush natural gardens.",
    featured: false,
  },
  {
    id: "tender-first-steps",
    title: "Tender Beginnings & Cradle Blessing",
    category: "BABY",
    location: "Jubilee Hills, Hyderabad",
    image: "/images/hero_baby_feet.jpg",
    aspect: "square",
    description: "Newborn innocence cradled in loving parents' hands.",
    featured: false,
  },
  {
    id: "heritage-palace-evening",
    title: "Heritage Fort Pre-Wedding",
    category: "PRE-WEDDINGS",
    location: "Rajasthan, India (Pan-India)",
    image: "/images/hero_sunset_silhouette.jpg",
    aspect: "landscape",
    description: "Cinematic destination romance backdropped by dramatic sunset skies.",
    featured: false,
  },
  {
    id: "garland-exchange-vows",
    title: "Jaimala & Eternal Vows",
    category: "WEDDINGS",
    location: "Novotel HICC, Hyderabad",
    image: "/images/hero_wedding_garland.jpg",
    aspect: "portrait",
    description: "High-spirited garland exchange radiating warmth, flowers, and family cheer.",
    featured: false,
  },
  {
    id: "silver-anniversary-gala",
    title: "Silver Jubilee Family Reunion",
    category: "EVENTS",
    location: "Gachibowli, Hyderabad",
    image: "/images/service_events.jpg",
    aspect: "portrait",
    description: "Generations gathered together celebrating a quarter-century of family legacy.",
    featured: false,
  },
];

// Re-export films from dedicated data source
export type { FilmItem } from "./films";
export { filmsData } from "./films";
