"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { filmsData } from "@/data/films";

export default function CinematicFilms() {
  const [playingFilmId, setPlayingFilmId] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#D8D2CA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-2">
              OUR FILMS
            </span>
            <h2 className="font-display text-[42px] sm:text-[54px] md:text-[68px] leading-[0.92] text-[#171717] uppercase tracking-[-0.015em]">
              PRESS PLAY ON{" "}
              <span className="font-editorial text-[44px] sm:text-[56px] md:text-[72px] lowercase font-normal italic tracking-normal text-[#171717]">
                love.
              </span>
            </h2>
          </div>

          <div>
            <Link
              href="/films"
              className="group inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] text-[#171717] uppercase hover:text-[#777777] transition-colors"
            >
              <span>WATCH ALL FILMS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Film Gallery Grid: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filmsData.map((film) => {
            const isPlaying = playingFilmId === film.id;

            return (
              <div key={film.id} className="flex flex-col">
                {/* 16:9 Video Box: Plays inline directly inside the thumbnail */}
                {isPlaying ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-black shadow-xs border border-[#D8D2CA]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&enablejsapi=1&rel=0&fs=1`}
                      title={film.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayingFilmId(film.id)}
                    className="group relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer shadow-xs border border-[#D8D2CA] text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#171717]"
                    aria-label={`Play ${film.title}`}
                  >
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Subtle Dark Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Centered Translucent Play Button matching the Vows by Siddhu Soma screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/90 bg-black/25 backdrop-blur-xs flex items-center justify-center pl-0.5 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-black/40 shadow-sm">
                        <Play className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      </div>
                    </div>
                  </button>
                )}

                {/* Elegant Bodoni Moda Italic Film Title Underneath */}
                <h3 className="font-editorial italic font-normal text-[20px] sm:text-[22px] md:text-[24px] text-[#171717] text-center mt-4 md:mt-5 tracking-tight leading-snug">
                  {film.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Link matching the reference screenshot */}
        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/films"
            className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-semibold tracking-[0.2em] uppercase text-[#171717] border-b border-[#171717] pb-1 hover:text-[#777777] hover:border-[#777777] transition-colors"
          >
            <span>ENTER THE GALLERY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
