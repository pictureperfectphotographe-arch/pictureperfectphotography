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
      aria-label="Picture Perfect Photography Featured Wedding Film"
      className="relative w-full bg-[#0E0E0E] overflow-hidden flex items-center justify-center border-t border-b border-[#222222]"
    >
      {/* Proportional 16:9 Video Player Container with Cinematic Letterboxing on Ultra-Wide screens */}
      <div className="relative w-full aspect-video max-h-[82vh] max-w-[1600px] mx-auto bg-black shadow-2xl flex items-center justify-center">
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
            {/* Uncropped True 16:9 High-Resolution Poster */}
            <Image
              src="/images/films/film_akhila_vepunder.jpg"
              alt="Akhila & Vepunder Wedding Video 4K by Picture Perfect Photography"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              sizes="(max-width: 768px) 100vw, (max-width: 1600px) 100vw, 1600px"
            />

            {/* Subtle Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30 group-hover:from-black/40 group-hover:via-black/5 group-hover:to-black/20 transition-colors duration-300" />

            {/* Top Left Editorial Film Tag */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 select-none">
              <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-white uppercase drop-shadow-sm">
                FEATURED WEDDING FILM 4K
              </span>
            </div>

            {/* Prominent Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-white/90 bg-black/40 backdrop-blur-xs text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-black/60 shadow-2xl">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-white text-white ml-1 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>

            {/* Bottom Left Title Metadata */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex items-end justify-between select-none">
              <div>
                <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/80 font-medium">
                  HYDERABAD, TELANGANA
                </p>
                <h3 className="font-editorial italic font-normal text-[22px] sm:text-[28px] md:text-[36px] text-white tracking-tight drop-shadow-md">
                  Akhila &amp; Vepunder
                </h3>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-white/80 px-2 py-1 bg-black/40 backdrop-blur-xs border border-white/10">
                04:14
              </span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
