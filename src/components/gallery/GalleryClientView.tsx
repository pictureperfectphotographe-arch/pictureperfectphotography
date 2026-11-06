"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { GalleryStory, GalleryPhoto, isCoupleStory } from "@/data/galleries";
import { FilmItem } from "@/data/films";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import VideoModal from "@/components/ui/VideoModal";
import EditorialReviewSection from "@/components/ui/EditorialReviewSection";

interface GalleryClientViewProps {
  story: GalleryStory;
  relatedStories: GalleryStory[];
}

export default function GalleryClientView({
  story,
  relatedStories,
}: GalleryClientViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilm, setActiveFilm] = useState<FilmItem | null>(null);

  // Group images into 3 columns for desktop genuine masonry
  // Column 0, Column 1, Column 2
  const col1: GalleryPhoto[] = [];
  const col2: GalleryPhoto[] = [];
  const col3: GalleryPhoto[] = [];

  story.curatedImages.forEach((img, idx) => {
    if (idx % 3 === 0) col1.push(img);
    else if (idx % 3 === 1) col2.push(img);
    else col3.push(img);
  });

  const getAspectClass = (aspect?: string) => {
    switch (aspect) {
      case "tall":
        return "aspect-[2/3]";
      case "landscape":
        return "aspect-[16/10]";
      case "square":
        return "aspect-square";
      case "wide":
        return "aspect-[16/9]";
      case "portrait":
      default:
        return "aspect-[3/4]";
    }
  };

  const findPhotoIndex = (photoId: string) => {
    return story.curatedImages.findIndex((p) => p.id === photoId);
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#171717] min-h-screen">
      {/* A. Editorial Breadcrumb Bar */}
      <div className="border-b border-[#D8D2CA] py-4 bg-[#FAF9F6]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#777777]">
            <Link href="/" className="hover:text-[#171717] transition-colors">
              HOME
            </Link>
            <span className="text-[#D8D2CA]">/</span>
            <Link href="/portfolio" className="hover:text-[#171717] transition-colors">
              PORTFOLIO
            </Link>
            <span className="text-[#D8D2CA]">/</span>
            <span className="text-[#171717] font-semibold">{story.category}</span>
          </nav>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#777777] hover:text-[#171717] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">BACK TO PORTFOLIO</span>
            <span className="sm:hidden">BACK</span>
          </Link>
        </div>
      </div>

      {/* B. Minimal Gallery Header */}
      {/* Clean, minimal, compact so visitors reach the photography immediately */}
      <header className="pt-12 pb-8 md:pt-16 md:pb-10 max-w-[1600px] mx-auto px-6 md:px-12">
        <span className="block text-[11px] md:text-[12px] font-semibold tracking-[0.24em] text-[#777777] uppercase mb-2">
          {story.subtitle.toUpperCase()}
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1
            className={
              isCoupleStory(story)
                ? "font-cormorant italic font-normal text-[46px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1.02] text-[#171717] tracking-normal"
                : "font-display text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.92] text-[#171717] uppercase tracking-tight"
            }
          >
            {story.title}
          </h1>

          {/* Optional Film Link if available */}
          {story.film && (
            <button
              onClick={() =>
                setActiveFilm({
                  id: `film-${story.slug}`,
                  title: story.film?.title || `${story.title} Wedding Film`,
                  youtubeId: story.film?.youtubeId || "",
                  youtubeUrl: `https://youtu.be/${story.film?.youtubeId}`,
                  thumbnail: story.coverImage,
                  duration: story.film?.duration || "4K",
                  category: "Cinematic Film",
                })
              }
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white transition-all text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full cursor-pointer self-start md:self-auto mb-2"
              aria-label={`Watch cinematic film for ${story.title}`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>WATCH FILM ({story.film.duration || "4K"})</span>
            </button>
          )}
        </div>
      </header>

      {/* C. Continuous Masonry Photo Gallery */}
      {/* Inspired directly by the Vows by Siddhu Soma visual reference: 
          - 3 columns desktop, 2 columns tablet, 1 column mobile
          - Tight, consistent gaps
          - Natural variation in image heights */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
        {/* Desktop 3-Column Masonry */}
        <div className="hidden lg:grid grid-cols-3 gap-3 xl:gap-4 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 xl:gap-4">
            {col1.map((photo) => {
              const globalIdx = findPhotoIndex(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(globalIdx)}
                  style={
                    photo.width && photo.height
                      ? { aspectRatio: `${photo.width} / ${photo.height}` }
                      : undefined
                  }
                  className={`group relative w-full ${
                    photo.width && photo.height ? "" : getAspectClass(photo.aspect)
                  } bg-[#ECE8E1] overflow-hidden cursor-pointer`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 xl:gap-4">
            {col2.map((photo) => {
              const globalIdx = findPhotoIndex(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(globalIdx)}
                  style={
                    photo.width && photo.height
                      ? { aspectRatio: `${photo.width} / ${photo.height}` }
                      : undefined
                  }
                  className={`group relative w-full ${
                    photo.width && photo.height ? "" : getAspectClass(photo.aspect)
                  } bg-[#ECE8E1] overflow-hidden cursor-pointer`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              );
            })}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 xl:gap-4">
            {col3.map((photo) => {
              const globalIdx = findPhotoIndex(photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => setLightboxIndex(globalIdx)}
                  style={
                    photo.width && photo.height
                      ? { aspectRatio: `${photo.width} / ${photo.height}` }
                      : undefined
                  }
                  className={`group relative w-full ${
                    photo.width && photo.height ? "" : getAspectClass(photo.aspect)
                  } bg-[#ECE8E1] overflow-hidden cursor-pointer`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet 2-Column Masonry */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 items-start">
          <div className="flex flex-col gap-3">
            {story.curatedImages
              .filter((_, idx) => idx % 2 === 0)
              .map((photo) => {
                const globalIdx = findPhotoIndex(photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(globalIdx)}
                    className={`group relative w-full ${getAspectClass(
                      photo.aspect
                    )} bg-[#ECE8E1] overflow-hidden cursor-pointer`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col gap-3">
            {story.curatedImages
              .filter((_, idx) => idx % 2 === 1)
              .map((photo) => {
                const globalIdx = findPhotoIndex(photo.id);
                return (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(globalIdx)}
                    className={`group relative w-full ${getAspectClass(
                      photo.aspect
                    )} bg-[#ECE8E1] overflow-hidden cursor-pointer`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* Mobile 1-Column Feed */}
        <div className="grid sm:hidden grid-cols-1 gap-3">
          {story.curatedImages.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              style={
                photo.width && photo.height
                  ? { aspectRatio: `${photo.width} / ${photo.height}` }
                  : undefined
              }
              className={`group relative w-full ${
                photo.width && photo.height ? "" : getAspectClass(photo.aspect)
              } bg-[#ECE8E1] overflow-hidden cursor-pointer`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={idx < 2}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      {/* E. Client Testimonial Section — AFTER ALL PHOTOGRAPHS */}
      {/* Editorial layout matching Reference Image 1 with minimal navigation and centered typography */}
      {story.testimonial && (
        <EditorialReviewSection initialSlug={story.slug} />
      )}

      {/* F. Gallery Footer: Explore More Stories & Enquiry */}
      <footer className="border-t border-[#D8D2CA] py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Top Actions Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#D8D2CA]">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#171717] hover:text-[#777777] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO ALL PORTFOLIO STORIES</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 bg-[#171717] text-white text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full hover:bg-[#333333] transition-colors inline-flex items-center gap-2"
            >
              <span>ENQUIRE ABOUT YOUR EVENT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div className="pt-12">
              <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-8">
                EXPLORE MORE STORIES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedStories.map((rel) => (
                  <article key={rel.id} className="group flex flex-col">
                    <Link
                      href={`/portfolio/${rel.slug}`}
                      className="block focus:outline-hidden"
                    >
                      <div className="relative w-full aspect-[4/5] bg-[#ECE8E1] overflow-hidden">
                        <Image
                          src={rel.coverImage}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                      </div>
                      <div className="pt-4 flex items-start justify-between">
                        <div>
                          <h3
                            className={
                              isCoupleStory(rel)
                                ? "font-cormorant italic font-normal text-[24px] sm:text-[26px] text-[#171717] leading-tight"
                                : "font-display text-[20px] uppercase text-[#171717] leading-tight"
                            }
                          >
                            {rel.title}
                          </h3>
                          <span className="block text-[11px] uppercase tracking-wider text-[#777777] mt-0.5">
                            {rel.subtitle}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold uppercase text-[#171717] group-hover:translate-x-0.5 transition-transform flex items-center">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </footer>

      {/* Fullscreen Photo Lightbox */}
      <GalleryLightbox
        photos={story.curatedImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        title={story.title}
      />

      {/* Optional Film Modal */}
      {story.film && (
        <VideoModal
          film={activeFilm}
          onClose={() => setActiveFilm(null)}
        />
      )}
    </div>
  );
}
