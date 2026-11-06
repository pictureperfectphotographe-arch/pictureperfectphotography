"use client";

import React, { useState } from "react";
import Image from "next/image";
import { filmsData, FilmItem } from "@/data/films";
import VideoModal from "@/components/ui/VideoModal";
import { Play, ArrowUpRight, Film, Music, Sparkles } from "lucide-react";

export default function FilmsPage() {
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#D8D2CA]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
            CINEMATIC WEDDING FILMS
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight max-w-4xl">
            STORIES IN{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              motion.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#777777] max-w-2xl mt-6 leading-relaxed">
            Our filmmaking philosophy is rooted in cinematic narrative structure, authentic ambient soundscapes, and color science that evokes timeless emotion.
          </p>
        </div>
      </section>

      {/* Video Grid - 2 columns on desktop, 1 on mobile */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filmsData.map((film) => (
              <div
                key={film.id}
                onClick={() => setActiveFilm(film)}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 shadow-sm border border-[#D8D2CA]">
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* Circular Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-black flex items-center justify-center pl-1 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg">
                      <Play className="w-5 h-5 fill-black text-black" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {film.duration && (
                    <span className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-[11px] text-white tracking-widest font-mono">
                      {film.duration}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[22px] md:text-[24px] uppercase tracking-tight text-[#171717] group-hover:text-[#777777] transition-colors">
                      {film.title}
                    </h3>
                    <p className="text-[13px] text-[#777777] font-body mt-0.5">
                      {film.category || "Cinematic Film"}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#171717] shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filmmaking Approach */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-[#D8D2CA]">
        <div className="max-w-[1480px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#D8D2CA] space-y-3">
              <Film className="w-7 h-7 text-[#171717] stroke-1" />
              <h3 className="font-display text-[20px] uppercase text-[#171717]">
                NARRATIVE EDITING
              </h3>
              <p className="text-[13px] text-[#777777] leading-relaxed">
                Rather than generic music video montages, our films are carefully paced narratives built around vows, speeches, and authentic audio.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#D8D2CA] space-y-3">
              <Music className="w-7 h-7 text-[#171717] stroke-1" />
              <h3 className="font-display text-[20px] uppercase text-[#171717]">
                BESPOKE SOUND DESIGN
              </h3>
              <p className="text-[13px] text-[#777777] leading-relaxed">
                Licensed music matched to your taste, coupled with professional multi-track audio capture of priests, vows, and familial laughter.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#D8D2CA] space-y-3">
              <Sparkles className="w-7 h-7 text-[#171717] stroke-1" />
              <h3 className="font-display text-[20px] uppercase text-[#171717]">
                COLOR MASTERY
              </h3>
              <p className="text-[13px] text-[#777777] leading-relaxed">
                Individual shot color grading in DaVinci Resolve, balancing natural skin tones and rich Indian ceremonial palettes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </div>
  );
}
