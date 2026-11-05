"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function FullscreenWeddingFilm() {
  const [isPlaying, setIsPlaying] = useState(false);

  // The approved official Picture Perfect Photography wedding film
  const youtubeVideoId = "_vcd55hbiso";

  return (
    <section
      aria-label="Picture Perfect Photography Cinematic Wedding Film"
      className="relative w-full aspect-video bg-[#171717] overflow-hidden m-0 p-0 border-0"
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1&playsinline=1&fs=1&rel=0&enablejsapi=1`}
          title="Picture Perfect Photography Cinematic Wedding Film — Akhila & Vepunder"
          className="w-full h-full border-0 block"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play Akhila & Vepunder Wedding Video 4K"
          className="group relative w-full h-full block cursor-pointer select-none text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
        >
          {/* High-Resolution Thumbnail Poster */}
          <Image
            src="/images/films/film_akhila_vepunder.jpg"
            alt="Akhila & Vepunder Wedding Video 4K by Picture Perfect Photography"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            sizes="100vw"
          />

          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

          {/* Prominent Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-white/90 bg-black/35 backdrop-blur-xs text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-black/55 shadow-2xl">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-white text-white ml-1.5 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        </button>
      )}
    </section>
  );
}
