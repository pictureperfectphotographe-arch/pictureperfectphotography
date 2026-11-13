export interface ReelItem {
  id: string;
  title: string;
  couple?: string;
  category?: string;
  poster: string;
  videoSrc?: string;
  duration?: string;
}

// Approved Picture Perfect Photography wedding reels data structure
// Easily add, remove, or reorder reels below.
export const reelsData: ReelItem[] = [
  {
    id: "reel-akhila-vepunder-vows",
    title: "Eternal Vows & Grace",
    couple: "Akhila & Vepunder",
    category: "Traditional Telugu Wedding",
    poster: "/images/galleries/akhila-vepunder/CAP04230.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-vows.mp4",
    duration: "0:30",
  },
  {
    id: "reel-akhila-vepunder-rituals",
    title: "Sacred Jeelakarra Bellam",
    couple: "Akhila & Vepunder",
    category: "Muhurtham Rituals",
    poster: "/images/galleries/akhila-vepunder/SRU08767.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-rituals.mp4",
    duration: "0:28",
  },
  {
    id: "reel-akhila-vepunder-laughter",
    title: "Candid Laughter & Joy",
    couple: "Akhila & Vepunder",
    category: "Candid Moments",
    poster: "/images/galleries/akhila-vepunder/SRU08805.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-laughter.mp4",
    duration: "0:25",
  },
  {
    id: "reel-akhila-vepunder-portraits",
    title: "Royal Couple Portraits",
    couple: "Akhila & Vepunder",
    category: "Bridal Editorial",
    poster: "/images/galleries/akhila-vepunder/CAP04256.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-portraits.mp4",
    duration: "0:32",
  },
  {
    id: "reel-akhila-vepunder-celebration",
    title: "Forever & Always",
    couple: "Akhila & Vepunder",
    category: "Wedding Celebration",
    poster: "/images/galleries/akhila-vepunder/SRU08902.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-celebration.mp4",
    duration: "0:30",
  },
  {
    id: "reel-akhila-vepunder-details",
    title: "Bridal Splendour & Jewellery",
    couple: "Akhila & Vepunder",
    category: "Details & Elegance",
    poster: "/images/galleries/akhila-vepunder/CAP04147.jpg",
    videoSrc: "/videos/reels/akhila-vepunder-details.mp4",
    duration: "0:22",
  },
];
