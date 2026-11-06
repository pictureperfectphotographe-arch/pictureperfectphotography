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
// VERIFIED CURATED GALLERIES
// Based exclusively on verified client projects, official films & Google Business reviews
// -----------------------------------------------------------------------------

export const galleryStories: GalleryStory[] = [
  // 1. Akhila & Vepunder — Wedding Story (Has matching film + verified review by Vepunder Reddy)
  {
    id: "gallery-akhila-vepunder",
    slug: "akhila-vepunder",
    title: "Akhila & Vepunder",
    category: "WEDDINGS",
    subtitle: "Wedding Story",
    coverImage: "/images/gallery_couple_large.jpg",
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
      portrait: "/images/hero/wedding-hero-sru08831.jpg",
      rating: 5,
    },
    visibility: "public",
    relatedSlugs: ["sahithi-lalith", "nithin-hasini", "spoorthy-sudeer"],
    curatedImages: [
      {
        id: "av-01",
        src: "/images/gallery_couple_large.jpg",
        alt: "Akhila and Vepunder traditional wedding couple portrait",
        aspect: "portrait",
      },
      {
        id: "av-02",
        src: "/images/gallery_bride_saree.jpg",
        alt: "Pelli Koothuru & Haldi Grace in traditional yellow silk",
        aspect: "portrait",
      },
      {
        id: "av-03",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Jeelakarra Bellam and sacred Vedic marriage rites",
        aspect: "square",
      },
      {
        id: "av-04",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Open-air floral mandap architecture and aisle",
        aspect: "landscape",
      },
      {
        id: "av-05",
        src: "/images/hero/wedding-hero-sru08831.jpg",
        alt: "Akhila and Vepunder grand ceremonial wedding moment",
        aspect: "tall",
      },
      {
        id: "av-06",
        src: "/images/hero_wedding_garland.jpg",
        alt: "High-spirited Jaimala garland exchange and blessing",
        aspect: "portrait",
      },
      {
        id: "av-07",
        src: "/images/films/film_akhila_vepunder.jpg",
        alt: "Akhila & Vepunder candid muhurtham joy",
        aspect: "landscape",
      },
      {
        id: "av-08",
        src: "/images/service_weddings.jpg",
        alt: "Traditional wedding blessing and floral petals shower",
        aspect: "portrait",
      },
      {
        id: "av-09",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Intimate twilight conversation portrait",
        aspect: "portrait",
      },
      {
        id: "av-10",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Sunset golden hour silhouette beneath ancient branches",
        aspect: "landscape",
      },
      {
        id: "av-11",
        src: "/images/hero_sunset_silhouette.jpg",
        alt: "Lakeside sunset silhouette reflection",
        aspect: "landscape",
      },
      {
        id: "av-12",
        src: "/images/offerings_photographer.jpg",
        alt: "Deliberate editorial lighting and framing by Picture Perfect team",
        aspect: "portrait",
      },
      {
        id: "av-13",
        src: "/images/gallery_couple_large.jpg",
        alt: "Akhila & Vepunder timeless candid laughter",
        aspect: "square",
      },
      {
        id: "av-14",
        src: "/images/gallery_hands_ritual.jpg",
        alt: "Sacred fire and Vedic wedding vows",
        aspect: "square",
      },
      {
        id: "av-15",
        src: "/images/gallery_mandap_venue.jpg",
        alt: "Evening reception stage lighting and floral ambience",
        aspect: "landscape",
      },
      {
        id: "av-16",
        src: "/images/gallery_bride_saree.jpg",
        alt: "Bridal jewellery and silk saree texture detail",
        aspect: "portrait",
      },
      {
        id: "av-17",
        src: "/images/hero/wedding-hero-sru08831.jpg",
        alt: "Editorial bride and groom entrance",
        aspect: "tall",
      },
      {
        id: "av-18",
        src: "/images/films/film_akhila_vepunder.jpg",
        alt: "Akhila and Vepunder joyful garland celebration",
        aspect: "landscape",
      },
      {
        id: "av-19",
        src: "/images/hero_wedding_garland.jpg",
        alt: "Family blessings during sacred muhurtham",
        aspect: "portrait",
      },
      {
        id: "av-20",
        src: "/images/service_weddings.jpg",
        alt: "Candid emotional moment with parents",
        aspect: "portrait",
      },
      {
        id: "av-21",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Evening reception celebration portrait",
        aspect: "portrait",
      },
      {
        id: "av-22",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Golden hour reflection and serene landscape",
        aspect: "landscape",
      },
    ],
    clientGallery: {
      totalPhotos: 248,
      downloadEnabled: true,
      accessPin: "VEPUNDER2024",
      subcollections: [
        {
          name: "Haldi & Pelli Koothuru",
          photos: [
            {
              id: "cg-av-h1",
              src: "/images/gallery_bride_saree.jpg",
              alt: "Pelli Koothuru haldi ritual ceremony",
              aspect: "portrait",
              subcollection: "Haldi & Pelli Koothuru",
            },
            {
              id: "cg-av-h2",
              src: "/images/gallery_hands_ritual.jpg",
              alt: "Turmeric pastes and blessing hands",
              aspect: "square",
              subcollection: "Haldi & Pelli Koothuru",
            },
            {
              id: "cg-av-h3",
              src: "/images/gallery_mandap_venue.jpg",
              alt: "Haldi open-air floral backdrop",
              aspect: "landscape",
              subcollection: "Haldi & Pelli Koothuru",
            },
            {
              id: "cg-av-h4",
              src: "/images/hero_wedding_garland.jpg",
              alt: "Family celebration and yellow silks",
              aspect: "portrait",
              subcollection: "Haldi & Pelli Koothuru",
            },
            {
              id: "cg-av-h5",
              src: "/images/gallery_couple_large.jpg",
              alt: "Haldi candid laughter with siblings",
              aspect: "portrait",
              subcollection: "Haldi & Pelli Koothuru",
            },
          ],
        },
        {
          name: "Muhurtham & Sacred Rites",
          photos: [
            {
              id: "cg-av-m1",
              src: "/images/hero/wedding-hero-sru08831.jpg",
              alt: "Grand wedding muhurtham ceremony",
              aspect: "tall",
              subcollection: "Muhurtham & Sacred Rites",
            },
            {
              id: "cg-av-m2",
              src: "/images/gallery_hands_ritual.jpg",
              alt: "Jeelakarra Bellam sacred moment",
              aspect: "square",
              subcollection: "Muhurtham & Sacred Rites",
            },
            {
              id: "cg-av-m3",
              src: "/images/hero_wedding_garland.jpg",
              alt: "Mangalsutra dharana and vows",
              aspect: "portrait",
              subcollection: "Muhurtham & Sacred Rites",
            },
            {
              id: "cg-av-m4",
              src: "/images/service_weddings.jpg",
              alt: "Talambralu sacred rice shower",
              aspect: "portrait",
              subcollection: "Muhurtham & Sacred Rites",
            },
            {
              id: "cg-av-m5",
              src: "/images/films/film_akhila_vepunder.jpg",
              alt: "Candid emotional smiles at mandap",
              aspect: "landscape",
              subcollection: "Muhurtham & Sacred Rites",
            },
            {
              id: "cg-av-m6",
              src: "/images/gallery_mandap_venue.jpg",
              alt: "Mandap architectural overview",
              aspect: "landscape",
              subcollection: "Muhurtham & Sacred Rites",
            },
          ],
        },
        {
          name: "Reception & Portraits",
          photos: [
            {
              id: "cg-av-r1",
              src: "/images/gallery_couple_large.jpg",
              alt: "Reception couple formal editorial",
              aspect: "portrait",
              subcollection: "Reception & Portraits",
            },
            {
              id: "cg-av-r2",
              src: "/images/gallery_couple_pink.jpg",
              alt: "Evening cocktail portraits",
              aspect: "portrait",
              subcollection: "Reception & Portraits",
            },
            {
              id: "cg-av-r3",
              src: "/images/gallery_sunset_tree.jpg",
              alt: "Post-wedding sunset session",
              aspect: "landscape",
              subcollection: "Reception & Portraits",
            },
            {
              id: "cg-av-r4",
              src: "/images/hero_sunset_silhouette.jpg",
              alt: "Lakeside twilight silhouette",
              aspect: "landscape",
              subcollection: "Reception & Portraits",
            },
          ],
        },
      ],
    },
  },

  // 2. Nithin & Hasini — Pre-Wedding Story (Has matching official film in repo)
  {
    id: "gallery-nithin-hasini",
    slug: "nithin-hasini",
    title: "Nithin & Hasini",
    category: "PRE-WEDDINGS",
    subtitle: "Pre-Wedding Story",
    coverImage: "/images/films/film_nithin_hasini.jpg",
    coverAspect: "landscape",
    film: {
      youtubeId: "6HtRofXsyUE",
      title: "Nithin & Hasini's Pre Wedding",
      duration: "1:28",
    },
    // No fabricated review: only real client reviews used
    visibility: "public",
    relatedSlugs: ["akhila-vepunder", "spoorthy-sudeer", "sahithi-lalith"],
    curatedImages: [
      {
        id: "nh-01",
        src: "/images/films/film_nithin_hasini.jpg",
        alt: "Nithin & Hasini pre-wedding cinematic frame",
        aspect: "landscape",
      },
      {
        id: "nh-02",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Golden hour sunset under ancient banyan branches",
        aspect: "landscape",
      },
      {
        id: "nh-03",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Pastel twilight editorial portrait in Shamshabad",
        aspect: "portrait",
      },
      {
        id: "nh-04",
        src: "/images/hero_sunset_silhouette.jpg",
        alt: "Dramatic heritage fort sunset silhouette",
        aspect: "landscape",
      },
      {
        id: "nh-05",
        src: "/images/service_preweddings.jpg",
        alt: "Intimate relaxed candid laughter",
        aspect: "portrait",
      },
      {
        id: "nh-06",
        src: "/images/hero_couple_top_left.jpg",
        alt: "Romantic close-up gaze under ambient light",
        aspect: "portrait",
      },
      {
        id: "nh-07",
        src: "/images/films/film_nithin_hasini.jpg",
        alt: "Sunset glow embracing the couple",
        aspect: "landscape",
      },
      {
        id: "nh-08",
        src: "/images/gallery_couple_pink.jpg",
        alt: "Soft evening breezes and natural interaction",
        aspect: "portrait",
      },
      {
        id: "nh-09",
        src: "/images/gallery_sunset_tree.jpg",
        alt: "Wide landscape perspective at Gandipet Lake",
        aspect: "landscape",
      },
      {
        id: "nh-10",
        src: "/images/service_preweddings.jpg",
        alt: "Serene lakeside whispers",
        aspect: "portrait",
      },
      {
        id: "nh-11",
        src: "/images/hero_sunset_silhouette.jpg",
        alt: "Twilight dusk skyline",
        aspect: "landscape",
      },
      {
        id: "nh-12",
        src: "/images/hero_couple_top_left.jpg",
        alt: "Golden hour warm embrace",
        aspect: "portrait",
      },
    ],
    clientGallery: {
      totalPhotos: 120,
      downloadEnabled: true,
      accessPin: "HASINI2024",
      subcollections: [
        {
          name: "Lakeside Golden Hour",
          photos: [
            {
              id: "cg-nh-1",
              src: "/images/films/film_nithin_hasini.jpg",
              alt: "Lakeside golden hour walk",
              aspect: "landscape",
              subcollection: "Lakeside Golden Hour",
            },
            {
              id: "cg-nh-2",
              src: "/images/gallery_sunset_tree.jpg",
              alt: "Banyan tree shadows",
              aspect: "landscape",
              subcollection: "Lakeside Golden Hour",
            },
          ],
        },
        {
          name: "Twilight Editorial",
          photos: [
            {
              id: "cg-nh-3",
              src: "/images/gallery_couple_pink.jpg",
              alt: "Twilight pastel dress portrait",
              aspect: "portrait",
              subcollection: "Twilight Editorial",
            },
            {
              id: "cg-nh-4",
              src: "/images/hero_sunset_silhouette.jpg",
              alt: "Dusk silhouette by the water",
              aspect: "landscape",
              subcollection: "Twilight Editorial",
            },
          ],
        },
      ],
    },
  },

  // 3. Sahithi & Lalith — Wedding Story (Has matching official film in repo)
  {
    id: "gallery-sahithi-lalith",
    slug: "sahithi-lalith",
    title: "Sahithi & Lalith",
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
    title: "Spoorthy & Sudeer",
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

  // 5. Pradeep & Sindhu — Wedding Story (Verified Google review by Pradeep Reddy)
  {
    id: "gallery-pradeep-reddy",
    slug: "pradeep-reddy",
    title: "Pradeep & Sindhu",
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
        alt: "Pradeep & Sindhu elegant traditional portrait",
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
