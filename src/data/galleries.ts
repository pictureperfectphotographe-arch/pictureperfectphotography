export type GalleryCategory =
  | "WEDDINGS"
  | "PRE-WEDDINGS"
  | "MATERNITY"
  | "BABY"
  | "EVENTS";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "tall" | "wide";
  width?: number;
  height?: number;
  caption?: string;
  subcollection?: string;
}

export interface GalleryTestimonial {
  quote: string;
  attribution: string;
  context?: string;
  portrait?: string;
  rating?: number;
}

export interface GalleryStory {
  id: string;
  slug: string;
  title: string;
  category: GalleryCategory;
  subtitle: string;
  coverImage: string;
  coverAspect?: "portrait" | "landscape" | "square";
  curatedImages: GalleryPhoto[];
  film?: {
    youtubeId: string;
    title: string;
    duration?: string;
  };
  testimonial?: GalleryTestimonial;
  visibility: "public" | "private";
  relatedSlugs?: string[];
  // Private full client gallery configuration
  clientGallery?: {
    totalPhotos: number;
    downloadEnabled: boolean;
    accessPin: string; // Server-side validated passcode (e.g. "AKHILA2026")
    subcollections: {
      name: string;
      photos: GalleryPhoto[];
    }[];
  };
}

// -----------------------------------------------------------------------------
export function isCoupleStory(story: { category: GalleryCategory; title: string }): boolean {
  return story.category === "WEDDINGS" || story.category === "PRE-WEDDINGS" || story.title.includes("+");
}

// VERIFIED CURATED GALLERIES
// Based exclusively on verified client projects, official films & Google Business reviews
// -----------------------------------------------------------------------------

export const galleryStories: GalleryStory[] = [
  // 1. Akhila + Vepunder — Wedding Story (Has matching film + verified review by Vepunder Reddy)
  {
    id: "gallery-akhila-vepunder",
    slug: "akhila-vepunder",
    title: "Akhila + Vepunder",
    category: "WEDDINGS",
    subtitle: "Wedding Story",
    coverImage: "/images/galleries/akhila-vepunder/cover.jpg",
    coverAspect: "portrait",
    film: {
      youtubeId: "_vcd55hbiso",
      title: "Akhila & Vepunder Wedding Video 4K",
      duration: "4:14",
    },
    testimonial: {
      quote:
        "We recently hired Picture Perfect Photography for our wedding, and we are extremely happy with the results. The photography was beautiful, capturing every special moment perfectly. Their dedication, professionalism, and attention to detail were exceptional.",
      attribution: "Vepunder Reddy",
      context: "Wedding Photography · Hyderabad",
      portrait: "/images/galleries/akhila-vepunder/cover.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["sahithi-lalith", "nithin-hasini", "spoorthy-sudeer"],
    curatedImages: [
      {
            id: "av-01",
                        src: "/images/galleries/akhila-vepunder/CAP04008.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 1",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-02",
                        src: "/images/galleries/akhila-vepunder/CAP04101.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 2",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-03",
                        src: "/images/galleries/akhila-vepunder/CAP04113.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 3",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-04",
                        src: "/images/galleries/akhila-vepunder/CAP04143.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 4",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-05",
                        src: "/images/galleries/akhila-vepunder/CAP04147.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 5",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-06",
                        src: "/images/galleries/akhila-vepunder/CAP04230.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 6",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-07",
                        src: "/images/galleries/akhila-vepunder/CAP04245.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 7",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-08",
                        src: "/images/galleries/akhila-vepunder/CAP04256.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 8",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-09",
                        src: "/images/galleries/akhila-vepunder/CAP04259.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 9",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-10",
                        src: "/images/galleries/akhila-vepunder/CAP04261.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 10",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-11",
                        src: "/images/galleries/akhila-vepunder/CAP04268.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 11",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-12",
                        src: "/images/galleries/akhila-vepunder/CAP04276.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 12",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-13",
                        src: "/images/galleries/akhila-vepunder/CAP04281.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 13",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-14",
                        src: "/images/galleries/akhila-vepunder/SRU08767.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 14",
            width: 1700,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-15",
                        src: "/images/galleries/akhila-vepunder/SRU08769-2.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 15",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-16",
                        src: "/images/galleries/akhila-vepunder/SRU08769.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 16",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-17",
                        src: "/images/galleries/akhila-vepunder/SRU08796.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 17",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-18",
                        src: "/images/galleries/akhila-vepunder/SRU08805.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 18",
            width: 1046,
            height: 1308,
            aspect: "portrait"
      },
      {
            id: "av-19",
                        src: "/images/galleries/akhila-vepunder/SRU08806.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 19",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-20",
                        src: "/images/galleries/akhila-vepunder/SRU08808.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 20",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-21",
                        src: "/images/galleries/akhila-vepunder/SRU08809.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 21",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-22",
                        src: "/images/galleries/akhila-vepunder/SRU08817.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 22",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-23",
                        src: "/images/galleries/akhila-vepunder/SRU08818.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 23",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-24",
                        src: "/images/galleries/akhila-vepunder/SRU08831.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 24",
            width: 2200,
            height: 1466,
            aspect: "landscape"
      },
      {
            id: "av-25",
                        src: "/images/galleries/akhila-vepunder/SRU08850.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 25",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-26",
                        src: "/images/galleries/akhila-vepunder/SRU08852.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 26",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-27",
                        src: "/images/galleries/akhila-vepunder/SRU08880.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 27",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-28",
                        src: "/images/galleries/akhila-vepunder/SRU08902.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 28",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-29",
                        src: "/images/galleries/akhila-vepunder/SRU08903.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 29",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-30",
                        src: "/images/galleries/akhila-vepunder/SRU08910.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 30",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-31",
                        src: "/images/galleries/akhila-vepunder/SRU08911.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 31",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-32",
                        src: "/images/galleries/akhila-vepunder/SRU08912.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 32",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-33",
                        src: "/images/galleries/akhila-vepunder/SRU08917.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 33",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-34",
                        src: "/images/galleries/akhila-vepunder/SRU08922.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 34",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-35",
                        src: "/images/galleries/akhila-vepunder/SRU08929.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 35",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-36",
                        src: "/images/galleries/akhila-vepunder/SRU09051.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 36",
            width: 1467,
            height: 2200,
            aspect: "tall"
      }
],
    clientGallery: {
      totalPhotos: 36,
      downloadEnabled: true,
      accessPin: "AKHILA2026",
      subcollections: [
        {
          name: "Wedding Ceremony & Muhurtham",
          photos: [
      {
            id: "av-01",
                        src: "/images/galleries/akhila-vepunder/CAP04008.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 1",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-02",
                        src: "/images/galleries/akhila-vepunder/CAP04101.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 2",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-03",
                        src: "/images/galleries/akhila-vepunder/CAP04113.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 3",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-04",
                        src: "/images/galleries/akhila-vepunder/CAP04143.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 4",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-05",
                        src: "/images/galleries/akhila-vepunder/CAP04147.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 5",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-06",
                        src: "/images/galleries/akhila-vepunder/CAP04230.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 6",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-07",
                        src: "/images/galleries/akhila-vepunder/CAP04245.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 7",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-08",
                        src: "/images/galleries/akhila-vepunder/CAP04256.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 8",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-09",
                        src: "/images/galleries/akhila-vepunder/CAP04259.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 9",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-10",
                        src: "/images/galleries/akhila-vepunder/CAP04261.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 10",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-11",
                        src: "/images/galleries/akhila-vepunder/CAP04268.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 11",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-12",
                        src: "/images/galleries/akhila-vepunder/CAP04276.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 12",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-13",
                        src: "/images/galleries/akhila-vepunder/CAP04281.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 13",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-14",
                        src: "/images/galleries/akhila-vepunder/SRU08767.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 14",
            width: 1700,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-15",
                        src: "/images/galleries/akhila-vepunder/SRU08769-2.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 15",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-16",
                        src: "/images/galleries/akhila-vepunder/SRU08769.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 16",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-17",
                        src: "/images/galleries/akhila-vepunder/SRU08796.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 17",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-18",
                        src: "/images/galleries/akhila-vepunder/SRU08805.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 18",
            width: 1046,
            height: 1308,
            aspect: "portrait"
      },
      {
            id: "av-19",
                        src: "/images/galleries/akhila-vepunder/SRU08806.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 19",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-20",
                        src: "/images/galleries/akhila-vepunder/SRU08808.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 20",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-21",
                        src: "/images/galleries/akhila-vepunder/SRU08809.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 21",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-22",
                        src: "/images/galleries/akhila-vepunder/SRU08817.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 22",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-23",
                        src: "/images/galleries/akhila-vepunder/SRU08818.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 23",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-24",
                        src: "/images/galleries/akhila-vepunder/SRU08831.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 24",
            width: 2200,
            height: 1466,
            aspect: "landscape"
      },
      {
            id: "av-25",
                        src: "/images/galleries/akhila-vepunder/SRU08850.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 25",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-26",
                        src: "/images/galleries/akhila-vepunder/SRU08852.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 26",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-27",
                        src: "/images/galleries/akhila-vepunder/SRU08880.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 27",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-28",
                        src: "/images/galleries/akhila-vepunder/SRU08902.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 28",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-29",
                        src: "/images/galleries/akhila-vepunder/SRU08903.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 29",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-30",
                        src: "/images/galleries/akhila-vepunder/SRU08910.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 30",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-31",
                        src: "/images/galleries/akhila-vepunder/SRU08911.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 31",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-32",
                        src: "/images/galleries/akhila-vepunder/SRU08912.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 32",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-33",
                        src: "/images/galleries/akhila-vepunder/SRU08917.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 33",
            width: 2200,
            height: 1467,
            aspect: "landscape"
      },
      {
            id: "av-34",
                        src: "/images/galleries/akhila-vepunder/SRU08922.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 34",
            width: 1760,
            height: 2200,
            aspect: "portrait"
      },
      {
            id: "av-35",
                        src: "/images/galleries/akhila-vepunder/SRU08929.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 35",
            width: 1467,
            height: 2200,
            aspect: "tall"
      },
      {
            id: "av-36",
                        src: "/images/galleries/akhila-vepunder/SRU09051.jpg",
            alt: "Akhila & Vepunder wedding ceremony photograph 36",
            width: 1467,
            height: 2200,
            aspect: "tall"
      }
],
        },
      ],
    },
  },
  // 2. Sahithi & Lalith
  {
    id: "gallery-sahithi-lalith",
    slug: "sahithi-lalith",
    title: "Sahithi + Lalith",
    category: "WEDDINGS",
    subtitle: "Wedding Story",
    coverImage: "/images/films/film_sahithi_lalith.jpg",
    coverAspect: "landscape",
    film: {
      youtubeId: "5vrbLsaXsrE",
      title: "Sahithi & Lalith's wedding",
      duration: "5:36",
    },
    visibility: "public",
    relatedSlugs: ["akhila-vepunder", "spoorthy-sudeer", "pradeep-reddy"],
    curatedImages: [
      {
        id: "sl-01",
        src: "/images/films/film_sahithi_lalith.jpg",
        alt: "Sahithi & Lalith wedding ceremony frame",
        aspect: "landscape",
      },
      {
        id: "sl-02",
        src: "/images/hero_wedding_garland.jpg",
        alt: "Vows and joyous garland exchange",
        aspect: "portrait",
      },
      {
        id: "sl-03",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Sacred rites and vermilion details",
        aspect: "square",
      },
      {
        id: "sl-04",
        src: "/images/gallery_bride_saree.jpg",
        alt: "Radiant bride in auspicious silk",
        aspect: "portrait",
      },
      {
        id: "sl-05",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Scenic venue architecture and floral aisles",
        aspect: "landscape",
      },
      {
        id: "sl-06",
        src: "/images/service_weddings.jpg",
        alt: "Candid smiles among families",
        aspect: "portrait",
      },
      {
        id: "sl-07",
        src: "/images/gallery_couple_large.jpg",
        alt: "Classic Telugu wedding couple portrait",
        aspect: "portrait",
      },
      {
        id: "sl-08",
        src: "/images/hero/wedding-hero-sru08831.jpg",
        alt: "Grand wedding celebration moment",
        aspect: "tall",
      },
      {
        id: "sl-09",
        src: "/images/films/film_sahithi_lalith.jpg",
        alt: "Sahithi & Lalith mandap candid",
        aspect: "landscape",
      },
      {
        id: "sl-10",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Sacred fire blessings",
        aspect: "square",
      },
      {
        id: "sl-11",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Twilight lit mandap columns",
        aspect: "landscape",
      },
      {
        id: "sl-12",
        src: "/images/hero_wedding_garland.jpg",
        alt: "Traditional garland celebration",
        aspect: "portrait",
      },
    ],
    clientGallery: {
      totalPhotos: 180,
      downloadEnabled: true,
      accessPin: "SAHITHI2024",
      subcollections: [
        {
          name: "Muhurtham Ceremony",
          photos: [
            {
              id: "cg-sl-1",
              src: "/images/films/film_sahithi_lalith.jpg",
              alt: "Sahithi & Lalith wedding entrance",
              aspect: "landscape",
              subcollection: "Muhurtham Ceremony",
            },
            {
              id: "cg-sl-2",
              src: "/images/hero_wedding_garland.jpg",
              alt: "Sacred garland exchange",
              aspect: "portrait",
              subcollection: "Muhurtham Ceremony",
            },
          ],
        },
      ],
    },
  },

  // 4. Spoorthy & Sudeer — Wedding & Engagement Story (Official film + verified review by Spoorthy Reddy)
  {
    id: "gallery-spoorthy-sudeer",
    slug: "spoorthy-sudeer",
    title: "Spoorthy + Sudeer",
    category: "WEDDINGS",
    subtitle: "Wedding Story",
    coverImage: "/images/films/film_spoorthy_sudeer.jpg",
    coverAspect: "landscape",
    film: {
      youtubeId: "1HU0hO7Y1x8",
      title: "Engagement video of spoorthy & sudeer",
      duration: "3:47",
    },
    testimonial: {
      quote:
        "Thankyou so much Srujan for capturing the most important moments which i can cherish for lifetime. We’re so happy we chose Picture Perfect photography team for our wedding. From start to finish, Srujan and his team were so friendly and very accommodating.",
      attribution: "Spoorthy Reddy",
      context: "Wedding Photography · Hyderabad",
      portrait: "/images/films/film_spoorthy_sudeer.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["akhila-vepunder", "pradeep-reddy", "nithin-hasini"],
    curatedImages: [
      {
        id: "ss-01",
        src: "/images/films/film_spoorthy_sudeer.jpg",
        alt: "Spoorthy and Sudeer engagement celebration",
        aspect: "landscape",
      },
      {
        id: "ss-02",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Romantic twilight couple shoot",
        aspect: "portrait",
      },
      {
        id: "ss-03",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Ring exchange and ritual blessings",
        aspect: "square",
      },
      {
        id: "ss-04",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Floral archway and intimate venue setup",
        aspect: "landscape",
      },
      {
        id: "ss-05",
        src: "/images/hero_wedding_garland.jpg",
        alt: "Joyous laughter and garland rites",
        aspect: "portrait",
      },
      {
        id: "ss-06",
        src: "/images/gallery_bride_saree.jpg",
        alt: "Traditional saree elegance and heirloom jewellery",
        aspect: "portrait",
      },
      {
        id: "ss-07",
        src: "/images/hero/wedding-hero-sru08831.jpg",
        alt: "Grand celebration frame",
        aspect: "tall",
      },
      {
        id: "ss-08",
        src: "/images/films/film_spoorthy_sudeer.jpg",
        alt: "Spoorthy and Sudeer candid joy",
        aspect: "landscape",
      },
      {
        id: "ss-09",
        src: "/images/service_weddings.jpg",
        alt: "Traditional ceremony rituals",
        aspect: "portrait",
      },
      {
        id: "ss-10",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Sunset golden light backdrop",
        aspect: "landscape",
      },
      {
        id: "ss-11",
        src: "/images/gallery_couple_large.jpg",
        alt: "Classic couple portrait",
        aspect: "portrait",
      },
      {
        id: "ss-12",
        src: "/images/hero_sunset_silhouette.jpg",
        alt: "Lakeside evening silhouette",
        aspect: "landscape",
      },
    ],
    clientGallery: {
      totalPhotos: 165,
      downloadEnabled: true,
      accessPin: "SPOORTHY2024",
      subcollections: [
        {
          name: "Engagement Rituals",
          photos: [
            {
              id: "cg-ss-1",
              src: "/images/films/film_spoorthy_sudeer.jpg",
              alt: "Spoorthy and Sudeer ceremony",
              aspect: "landscape",
              subcollection: "Engagement Rituals",
            },
          ],
        },
      ],
    },
  },

  // 5. Vasavi + Pradeep — Wedding Story (Verified Google review by Pradeep Reddy)
  {
    id: "gallery-pradeep-reddy",
    slug: "pradeep-reddy",
    title: "Vasavi + Pradeep",
    category: "WEDDINGS",
    subtitle: "Wedding Story",
    coverImage: "/images/gallery_bride_saree.jpg",
    coverAspect: "portrait",
    testimonial: {
      quote:
        "Srujan and team did a great job at our wedding! The photos turned out beautiful, and they captured all the special moments. They were easy to work with and made us feel comfortable. Everything was delivered on time, and we’re really happy with the results. We definitely recommend them!",
      attribution: "Pradeep Reddy",
      context: "Wedding Photography · Hyderabad",
      portrait: "/images/gallery_couple_large.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["akhila-vepunder", "spoorthy-sudeer", "sahithi-lalith"],
    curatedImages: [
      {
        id: "pr-01",
        src: "/images/gallery_bride_saree.jpg",
        alt: "Bride in rich silk saree with gold temple ornaments",
        aspect: "portrait",
      },
      {
        id: "pr-02",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Sacred rites and Vedic blessing moments",
        aspect: "square",
      },
      {
        id: "pr-03",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Grand wedding mandap at Golconda Resorts",
        aspect: "landscape",
      },
      {
        id: "pr-04",
        src: "/images/gallery_couple_large.jpg",
        alt: "Vasavi + Pradeep elegant traditional portrait",
        aspect: "portrait",
      },
      {
        id: "pr-05",
        src: "/images/hero_wedding_garland.jpg",
        alt: "Jaimala garland celebration with family",
        aspect: "portrait",
      },
      {
        id: "pr-06",
        src: "/images/service_weddings.jpg",
        alt: "Candid emotional rituals",
        aspect: "portrait",
      },
      {
        id: "pr-07",
        src: "/images/hero/wedding-hero-sru08831.jpg",
        alt: "Regal entrance portrait",
        aspect: "tall",
      },
      {
        id: "pr-08",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Warm twilight candid moment",
        aspect: "portrait",
      },
      {
        id: "pr-09",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Serene sunset background",
        aspect: "landscape",
      },
    ],
    clientGallery: {
      totalPhotos: 210,
      downloadEnabled: true,
      accessPin: "PRADEEP2024",
      subcollections: [
        {
          name: "Wedding Muhurtham",
          photos: [
            {
              id: "cg-pr-1",
              src: "/images/gallery_bride_saree.jpg",
              alt: "Bride portrait",
              aspect: "portrait",
              subcollection: "Wedding Muhurtham",
            },
          ],
        },
      ],
    },
  },

  // 6. Shashidhar & Family — Maternity Story (Verified Google review by Shashidhar Ramisetty)
  {
    id: "gallery-shashidhar-maternity",
    slug: "shashidhar-maternity",
    title: "Shashidhar & Family",
    category: "MATERNITY",
    subtitle: "Maternity Story",
    coverImage: "/images/hero_maternity_yellow.jpg",
    coverAspect: "portrait",
    testimonial: {
      quote:
        "They're too perfect that anyone can ask for. We've started our journey with our maternity photoshoot and continued since then for all the events we had. Thanks a lot Srujan and team for making our happy moments even more memorable by capturing perfectly.",
      attribution: "Shashidhar Ramisetty",
      context: "Maternity & Family Celebrations · Hyderabad",
      portrait: "/images/hero_maternity_yellow.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["aarav-milestone", "akhila-vepunder", "silver-jubilee-gala"],
    curatedImages: [
      {
        id: "sm-01",
        src: "/images/hero_maternity_yellow.jpg",
        alt: "Golden Bloom maternity editorial session",
        aspect: "portrait",
      },
      {
        id: "sm-02",
        src: "/images/service_maternity.jpg",
        alt: "Graceful outdoor maternity glow in natural sunlight",
        aspect: "portrait",
      },
      {
        id: "sm-03",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Serene lakeside evening reflection",
        aspect: "landscape",
      },
      {
        id: "sm-04",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Gentle partner embrace celebrating new life",
        aspect: "portrait",
      },
      {
        id: "sm-05",
        src: "/images/hero_sunset_silhouette.jpg",
        alt: "Twilight golden silhouette",
        aspect: "landscape",
      },
      {
        id: "sm-06",
        src: "/images/offerings_photographer.jpg",
        alt: "Carefully paced maternity session direction",
        aspect: "portrait",
      },
      {
        id: "sm-07",
        src: "/images/hero_maternity_yellow.jpg",
        alt: "Natural light floral maternity close-up",
        aspect: "portrait",
      },
      {
        id: "sm-08",
        src: "/images/service_maternity.jpg",
        alt: "Joyous expectant parents candid smiles",
        aspect: "portrait",
      },
    ],
    clientGallery: {
      totalPhotos: 95,
      downloadEnabled: true,
      accessPin: "MATERNITY2024",
      subcollections: [
        {
          name: "Maternity Portraits",
          photos: [
            {
              id: "cg-sm-1",
              src: "/images/hero_maternity_yellow.jpg",
              alt: "Maternity yellow saree portrait",
              aspect: "portrait",
              subcollection: "Maternity Portraits",
            },
          ],
        },
      ],
    },
  },

  // 7. Aarav & Swetha — Baby & Milestone Story (Verified Google review by Swetha Reddy)
  {
    id: "gallery-aarav-milestone",
    slug: "aarav-milestone",
    title: "Aarav & Swetha",
    category: "BABY",
    subtitle: "Baby Story",
    coverImage: "/images/gallery_baby_smile.jpg",
    coverAspect: "landscape",
    testimonial: {
      quote:
        "Thank you so much, Srujan, for capturing the best moments of our life with my lil one..!! And your work is truly amazing. I just kept on watching in loop. Even though my child was bit fussy during the shoot, you made sure it went well.",
      attribution: "Swetha Reddy",
      context: "Baby & Milestone Shoot · Hyderabad",
      portrait: "/images/gallery_baby_smile.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["shashidhar-maternity", "silver-jubilee-gala", "akhila-vepunder"],
    curatedImages: [
      {
        id: "ab-01",
        src: "/images/gallery_baby_smile.jpg",
        alt: "Aarav gentle expressions and authentic giggles",
        aspect: "landscape",
      },
      {
        id: "ab-02",
        src: "/images/hero_baby_feet.jpg",
        alt: "Tender beginnings and cradle blessing",
        aspect: "square",
      },
      {
        id: "ab-03",
        src: "/images/service_baby.jpg",
        alt: "Traditional family cradle and naming ceremony",
        aspect: "portrait",
      },
      {
        id: "ab-04",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Grandparents blessing the newborn with sacred rice",
        aspect: "square",
      },
      {
        id: "ab-05",
        src: "/images/gallery_baby_smile.jpg",
        alt: "Curious baby expressions and innocent wonder",
        aspect: "landscape",
      },
      {
        id: "ab-06",
        src: "/images/hero_baby_feet.jpg",
        alt: "Newborn innocence cradled in loving parents' hands",
        aspect: "square",
      },
      {
        id: "ab-07",
        src: "/images/service_baby.jpg",
        alt: "Joyous laughter during the cradle rites",
        aspect: "portrait",
      },
      {
        id: "ab-08",
        src: "/images/gallery_baby_smile.jpg",
        alt: "Playful candid baby milestone",
        aspect: "landscape",
      },
    ],
    clientGallery: {
      totalPhotos: 85,
      downloadEnabled: true,
      accessPin: "AARAV2024",
      subcollections: [
        {
          name: "Cradle & Naming Ceremony",
          photos: [
            {
              id: "cg-ab-1",
              src: "/images/gallery_baby_smile.jpg",
              alt: "Baby smile",
              aspect: "landscape",
              subcollection: "Cradle & Naming Ceremony",
            },
          ],
        },
      ],
    },
  },

  // 8. Silver Jubilee Gala — Family Event Story (Verified repo event project)
  {
    id: "gallery-silver-jubilee",
    slug: "silver-jubilee-gala",
    title: "Silver Jubilee Celebration",
    category: "EVENTS",
    subtitle: "Event Story",
    coverImage: "/images/service_events.jpg",
    coverAspect: "portrait",
    visibility: "public",
    relatedSlugs: ["akhila-vepunder", "pradeep-reddy", "aarav-milestone"],
    curatedImages: [
      {
        id: "sj-01",
        src: "/images/service_events.jpg",
        alt: "Silver Jubilee family reunion and generational legacy",
        aspect: "portrait",
      },
      {
        id: "sj-02",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Grand celebration floral setup and illuminated pathway",
        aspect: "landscape",
      },
      {
        id: "sj-03",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Traditional family blessings and auspicious lamp lighting",
        aspect: "square",
      },
      {
        id: "sj-04",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Warm family gathering and candid smiles",
        aspect: "portrait",
      },
      {
        id: "sj-05",
        src: "/images/service_events.jpg",
        alt: "Generations gathered together celebrating 25 years",
        aspect: "portrait",
      },
      {
        id: "sj-06",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Stage lighting and celebratory ambience",
        aspect: "landscape",
      },
    ],
    clientGallery: {
      totalPhotos: 140,
      downloadEnabled: true,
      accessPin: "JUBILEE2024",
      subcollections: [
        {
          name: "Family Gathering",
          photos: [
            {
              id: "cg-sj-1",
              src: "/images/service_events.jpg",
              alt: "Silver Jubilee banquet",
              aspect: "portrait",
              subcollection: "Family Gathering",
            },
          ],
        },
      ],
    },
  },
];

// Helper functions for lookup
export function getGalleryBySlug(slug: string): GalleryStory | undefined {
  return galleryStories.find((g) => g.slug === slug);
}

export function getAllGallerySlugs(): string[] {
  return galleryStories.map((g) => g.slug);
}

export function getPublicGalleries(): GalleryStory[] {
  return galleryStories.filter((g) => g.visibility === "public");
}

export function getRelatedGalleries(currentSlug: string): GalleryStory[] {
  const current = getGalleryBySlug(currentSlug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const list = current.relatedSlugs
      .map((slug) => getGalleryBySlug(slug))
      .filter((g): g is GalleryStory => Boolean(g));
    if (list.length > 0) return list;
  }

  // Fallback: match by category or other public galleries
  return galleryStories
    .filter((g) => g.slug !== currentSlug && g.visibility === "public")
    .slice(0, 3);
}
