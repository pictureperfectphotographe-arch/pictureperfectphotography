export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  event: string;
  location: string;
  source: string;
  sourceUrl?: string;
}

// Verified client feedback; editable data-driven structure
export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Picture Perfect Photographe captured our wedding rituals so naturally. Looking through our album brings back every emotion and smile just as it happened.",
    clientName: "Srujan & Keerthi",
    event: "Wedding & Reception",
    location: "Hyderabad",
    source: "Google Business Review",
    sourceUrl: "https://share.google/tDO6SchxhahxFcaMf",
  },
  {
    id: "test-2",
    quote:
      "The team was extraordinarily patient during our baby cradle ceremony. They never rushed us, made the baby feel completely comfortable, and delivered extraordinary photographs.",
    clientName: "Priyanka & Rajesh",
    event: "Cradle Ceremony",
    location: "Madhapur, Hyderabad",
    source: "Google Business Review",
    sourceUrl: "https://share.google/tDO6SchxhahxFcaMf",
  },
  {
    id: "test-3",
    quote:
      "Their cinematic wedding film was breathtaking. The music sync, the color tones, and the candid family moments were preserved with true editorial mastery.",
    clientName: "Deepak & Sneha",
    event: "Destination Wedding & Pre-Wedding",
    location: "Pan-India Coverage",
    source: "Direct Client Feedback",
  },
];
