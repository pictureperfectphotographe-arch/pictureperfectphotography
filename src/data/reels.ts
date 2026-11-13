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
// Each reel references its matching web-optimized MP4 video and video-extracted poster
export const reelsData: ReelItem[] = [
  {
    id: "reel-01",
    title: "Vows of Eternity",
    couple: "Akhila & Vepunder",
    category: "Traditional Telugu Wedding",
    poster: "/images/reels/reel-01.webp",
    videoSrc: "/videos/reels/reel-01.mp4",
    duration: "0:12",
  },
  {
    id: "reel-02",
    title: "Sacred Jeelakarra Bellam",
    couple: "Akhila & Vepunder",
    category: "Muhurtham Rituals",
    poster: "/images/reels/reel-02.webp",
    videoSrc: "/videos/reels/reel-02.mp4",
    duration: "0:46",
  },
  {
    id: "reel-03",
    title: "The Royal Wedding Portraits",
    couple: "Akhila & Vepunder",
    category: "Bridal Editorial",
    poster: "/images/reels/reel-03.webp",
    videoSrc: "/videos/reels/reel-03.mp4",
    duration: "0:33",
  },
];
