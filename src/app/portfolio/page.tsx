"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { galleryStories, GalleryCategory, isCoupleStory } from "@/data/galleries";

const categories: ("ALL" | GalleryCategory)[] = [
  "ALL",
  "WEDDINGS",
  "PRE-WEDDINGS",
  "MATERNITY",
  "BABY",
  "EVENTS",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | GalleryCategory>("ALL");

  const filteredStories =
    activeFilter === "ALL"
      ? galleryStories.filter((s) => s.visibility === "public")
      : galleryStories.filter(
          (s) => s.visibility === "public" && s.category === activeFilter
        );

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 border-b border-[#D8D2CA]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
            CURATED STORIES
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight max-w-4xl">
            A CURATED ARCHIVE OF{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px] text-[#B4777C]">
              emotions.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#777777] max-w-2xl mt-6 leading-relaxed">
            Every celebration documented as a unique photographic story. Explore authentic couple galleries, family milestones, and sacred ceremonies captured with natural light and deliberate editorial composition.
          </p>

          {/* Minimal Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-10">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#57000F] text-white border border-[#57000F]"
                      : "bg-white text-[#171717] border border-[#D8D2CA] hover:border-[#57000F] hover:text-[#57000F]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Collections Grid: 3-column desktop, 2-column tablet, 1-column mobile */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredStories.map((story, index) => (
              <article key={story.id} className="group flex flex-col">
                <Link
                  href={`/portfolio/${story.slug}`}
                  className="block focus:outline-hidden focus:ring-1 focus:ring-[#171717]"
                  aria-label={`View story: ${story.title} - ${story.subtitle}`}
                >
                  {/* Clean Cover Photograph (No Title Overlays, Subtle Scale on Hover) */}
                  <div className="relative w-full aspect-[4/5] bg-[#ECE8E1] overflow-hidden">
                    <Image
                      src={story.coverImage}
                      alt={`${story.title} photography cover`}
                      fill
                      priority={index < 3}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Couple / Event Details BELOW the photograph */}
                  <div className="pt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2
                        className={
                          isCoupleStory(story)
                            ? "font-cormorant italic font-normal text-[26px] sm:text-[28px] text-[#171717] leading-tight transition-colors duration-200 group-hover:text-[#555555]"
                            : "font-display text-[22px] sm:text-[24px] uppercase tracking-tight text-[#171717] leading-tight transition-colors duration-200 group-hover:text-[#555555]"
                        }
                      >
                        {story.title}
                      </h2>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-[#777777] font-medium mt-1">
                        {story.subtitle}
                      </span>
                    </div>

                    <div className="pt-0.5">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#171717] transition-all duration-200 group-hover:text-[#57000F] group-hover:translate-x-0.5 whitespace-nowrap">
                        <span>VIEW STORY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#57000F]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-display text-[24px] uppercase text-[#171717]">
                No stories found in this category
              </p>
              <button
                onClick={() => setActiveFilter("ALL")}
                className="mt-4 px-5 py-2 text-[11px] font-semibold tracking-[0.16em] uppercase bg-[#171717] text-white rounded-full hover:bg-[#333333] transition-colors cursor-pointer"
              >
                VIEW ALL STORIES
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
