export interface FilmItem {
  id: string;
  title: string;
  category?: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  youtubeUrl: string;
}

// Four approved official YouTube videos for Picture Perfect Photographe
// Video metadata (titles, thumbnails, durations) verified directly from YouTube channel @Pictureperfectphotographe
export const filmsData: FilmItem[] = [
  {
    id: "film-akhila-vepunder",
    title: "Akhila & Vepunder Wedding Video 4K",
    category: "Cinematic Wedding Film",
    duration: "4:14",
    thumbnail: "/images/films/film_akhila_vepunder.jpg",
    youtubeId: "_vcd55hbiso",
    youtubeUrl: "https://youtu.be/_vcd55hbiso",
  },
  {
    id: "film-sahithi-lalith",
    title: "Sahithi & Lalith's wedding",
    category: "Cinematic Wedding Film",
    duration: "5:36",
    thumbnail: "/images/films/film_sahithi_lalith.jpg",
    youtubeId: "5vrbLsaXsrE",
    youtubeUrl: "https://youtu.be/5vrbLsaXsrE",
  },
  {
    id: "film-spoorthy-sudeer",
    title: "Engagement video of spoorthy & sudeer",
    category: "Engagement Film",
    duration: "3:47",
    thumbnail: "/images/films/film_spoorthy_sudeer.jpg",
    youtubeId: "1HU0hO7Y1x8",
    youtubeUrl: "https://youtu.be/1HU0hO7Y1x8",
  },
  {
    id: "film-nithin-hasini",
    title: "Nithin & Hasini's Pre Wedding",
    category: "Pre-Wedding Film",
    duration: "1:28",
    thumbnail: "/images/films/film_nithin_hasini.jpg",
    youtubeId: "6HtRofXsyUE",
    youtubeUrl: "https://youtu.be/6HtRofXsyUE",
  },
];
