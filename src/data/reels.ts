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
// Connected directly to user's uploaded reels in public/videos/reels/
export const reelsData: ReelItem[] = [
  {
    id: "reel-01",
    title: "Vows of Eternity",
    couple: "Akhila & Vepunder",
    category: "Traditional Telugu Wedding",
    poster: "/images/galleries/akhila-vepunder/CAP04230.jpg",
    videoSrc: "/videos/reels/reel-01.mp4.mp4",
    duration: "0:12",
  },
  {
    id: "reel-02",
    title: "Sacred Jeelakarra Bellam",
    couple: "Akhila & Vepunder",
    category: "Muhurtham Rituals",
    poster: "/images/galleries/akhila-vepunder/SRU08767.jpg",
    videoSrc: "/videos/reels/reel-02.mp4.mov",
    duration: "0:46",
  },
  {
    id: "reel-03",
    title: "The Royal Wedding Portraits",
    couple: "Akhila & Vepunder",
    category: "Bridal Editorial",
    poster: "/images/galleries/akhila-vepunder/CAP04256.jpg",
    videoSrc: "/videos/reels/reel-03.mp4.mp4",
    duration: "0:33",
  },
  {
    id: "reel-04",
    title: "Candid Laughter & Joy",
    couple: "Akhila & Vepunder",
    category: "Candid Moments",
    poster: "/images/galleries/akhila-vepunder/SRU08805.jpg",
    duration: "0:25",
  },
  {
    id: "reel-05",
    title: "Forever & Always",
    couple: "Akhila & Vepunder",
    category: "Wedding Celebration",
    poster: "/images/galleries/akhila-vepunder/SRU08902.jpg",
    duration: "0:30",
  },
  {
    id: "reel-06",
    title: "Bridal Splendour & Jewellery",
    couple: "Akhila & Vepunder",
    category: "Details & Elegance",
    poster: "/images/galleries/akhila-vepunder/CAP04147.jpg",
    duration: "0:22",
  },
];
