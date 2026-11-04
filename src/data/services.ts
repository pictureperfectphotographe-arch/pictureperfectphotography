export interface Service {
  id: string;
  number: string;
  title: string;
  titleDisplay?: string;
  slug: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  category: "wedding" | "pre-wedding" | "maternity" | "baby" | "events" | "films" | "production";
}

export const servicesData: Service[] = [
  {
    id: "weddings",
    number: "01",
    title: "WEDDINGS",
    titleDisplay: "WEDDINGS",
    slug: "weddings",
    subtitle: "Candid, Traditional & Contemporary Wedding Photography",
    description:
      "Capturing the sacred rituals, spontaneous glances, and deep emotional connections of your wedding day with artistic, timeless editorial precision.",
    features: [
      "Lead Creative & Candid Photographers",
      "Traditional Ceremony & Ritual Coverage",
      "Full Day Muhurtham & Reception Documentation",
      "High-Resolution Color Graded Digital Deliverables",
      "Dedicated Client Gallery & Archival Backup",
    ],
    image: "/images/service_weddings.jpg",
    category: "wedding",
  },
  {
    id: "pre-weddings",
    number: "02",
    title: "PRE-WEDDINGS",
    titleDisplay: "PRE-\nWEDDINGS",
    slug: "pre-weddings",
    subtitle: "Cinematic Couple Portraits & Concept Shoots",
    description:
      "Intimate, relaxed, and artfully directed portrait sessions designed around your dynamic, shot in handpicked outdoor landscapes and heritage venues.",
    features: [
      "Location Scouting & Moodboard Direction",
      "Sunset & Twilight Golden Hour Sessions",
      "Concept Storyboarding & Wardrobe Consultation",
      "Short Teaser Film for Social Invitations",
      "Signature Color Graded Editorial Stills",
    ],
    image: "/images/service_preweddings.jpg",
    category: "pre-wedding",
  },
  {
    id: "maternity",
    number: "03",
    title: "MATERNITY",
    titleDisplay: "MATERNITY",
    slug: "maternity",
    subtitle: "Maternity Portraits & Seemantham Celebrations",
    description:
      "Celebrating new beginnings with grace, warmth, and natural beauty—from serene studio and outdoor maternity portraits to vibrant family Seemantham rituals.",
    features: [
      "Comfort-First Pacing & Rest Intervals",
      "Outdoor Golden Hour & Studio Aesthetics",
      "Family & Partner Inclusion",
      "Traditional Seemantham Puja Documentation",
      "Artistic Fine-Art Retouching",
    ],
    image: "/images/service_maternity.jpg",
    category: "maternity",
  },
  {
    id: "baby-cradles",
    number: "04",
    title: "BABY & CRADLES",
    titleDisplay: "BABY &\nCRADLES",
    slug: "baby-cradles",
    subtitle: "Cradle Ceremonies, Naming Ceremonies & Milestones",
    description:
      "Gentle, patient documentation of your newborn's first milestones, candid baby smiles, and traditional family cradle celebrations.",
    features: [
      "Calm & Non-Intrusive Shooting Style",
      "Cradle & Uyyala Ceremony Rituals",
      "Naming Ceremony (Namakaran) Stills",
      "Tender Moments with Grandparents & Family",
      "High-Resolution Keepsake Gallery",
    ],
    image: "/images/service_baby.jpg",
    category: "baby",
  },
  {
    id: "events-family",
    number: "05",
    title: "EVENTS & FAMILY",
    titleDisplay: "EVENTS &\nFAMILY",
    slug: "events-family",
    subtitle: "Birthdays, Anniversaries & Landmark Celebrations",
    description:
      "Comprehensive photographic coverage of birthdays, family reunions, engagements, and cultural milestones with vivid storytelling.",
    features: [
      "Full Ambient Event & Decor Documentation",
      "Energetic Candid Moments & Guest Interactions",
      "Formal Stage Portraits & Group Compositions",
      "Rapid Turnaround Teasers",
      "Comprehensive Digital Archive",
    ],
    image: "/images/service_events.jpg",
    category: "events",
  },
];

export const productionOfferings = [
  {
    number: "01",
    title: "CANDID PHOTOGRAPHY",
    slug: "candid-photography",
    description:
      "Unposed, authentic moments captured as they unfold naturally. Our photographers blend seamlessly into your celebrations to capture raw emotions, stolen glances, and tearful smiles without disrupting the flow of the ceremony.",
  },
  {
    number: "02",
    title: "VIDEOGRAPHY & CINEMATIC FILMS",
    slug: "videography-cinematic-films",
    description:
      "High-definition filmmaking with cinema-grade color grading, professional audio capture, and masterfully edited narrative trailers that bring every emotional beat back to life.",
  },
  {
    number: "03",
    title: "DRONE COVERAGE",
    slug: "drone-coverage",
    description:
      "Licensed aerial cinematography delivering sweeping establishing shots of your wedding venues, outdoor mandaps, processions, and scenic celebrations from dramatic perspectives.",
  },
  {
    number: "04",
    title: "ALBUMS & PRINTING",
    slug: "albums-printing",
    description:
      "Handcrafted heirloom photo albums featuring archival photographic paper, lay-flat panoramic binding, genuine leather or linen covers, and bespoke typography layouts.",
  },
  {
    number: "05",
    title: "EVENT COVERAGE",
    slug: "event-coverage",
    description:
      "End-to-end multi-camera production for large-scale Indian celebrations, corporate gatherings, and multi-day festivities with synchronized teams and dedicated production management.",
  },
];
