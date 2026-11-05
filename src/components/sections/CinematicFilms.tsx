"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { filmsData, FilmItem } from "@/data/films";
import VideoModal from "@/components/ui/VideoModal";

export default function CinematicFilms() {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#737373] uppercase mb-2">
              OUR FILMS
            </span>
            <h2 className="font-display text-[42px] sm:text-[54px] md:text-[68px] leading-[0.92] text-[#111111] uppercase tracking-[-0.015em]">
              PRESS PLAY ON{" "}
              <span className="font-editorial text-[44px] sm:text-[56px] md:text-[72px] lowercase font-normal italic tracking-normal text-[#111111]">
                love.
              </span>
            </h2>
          </div>

          <div>
            <Link
              href="/films"
              className="group inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] text-[#111111] uppercase hover:text-neutral-600 transition-colors"
            >
              <span>WATCH ALL FILMS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 4 Video Thumbnails Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {filmsData.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              className="group relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 cursor-pointer shadow-xs"
            >
              <Image
                src={film.thumbnail}
                alt={film.title}
                fill
                priority
                loading="eager"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Central Minimal Play Glyph */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/85 text-black flex items-center justify-center pl-0.5 backdrop-blur-xs transition-all duration-300 group-hover:bg-white group-hover:scale-110 shadow-sm">
                  <Play className="w-4 h-4 fill-black text-black" />
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between text-white text-[10px] tracking-wider uppercase font-medium">
                <span className="truncate max-w-[75%]">{film.title}</span>
                <span className="text-neutral-400 shrink-0 font-mono text-[9px]">{film.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </section>
  );
}
