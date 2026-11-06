"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Download,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { GalleryStory, GalleryPhoto } from "@/data/galleries";
import { lockClientGallery } from "@/app/client-gallery/actions";
import GalleryLightbox from "@/components/ui/GalleryLightbox";

interface ClientGalleryViewProps {
  story: GalleryStory;
}

export default function ClientGalleryView({ story }: ClientGalleryViewProps) {
  const [activeCollection, setActiveCollection] = useState<string>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLocking, startLockTransition] = useTransition();
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const clientConfig = story.clientGallery;
  if (!clientConfig) return null;

  // Flatten all subcollection photos for "ALL" tab
  const allClientPhotos: GalleryPhoto[] = clientConfig.subcollections.flatMap(
    (col) => col.photos
  );

  const activePhotos =
    activeCollection === "ALL"
      ? allClientPhotos
      : allClientPhotos.filter((p) => p.subcollection === activeCollection);

  const displayedPhotos = activePhotos.slice(0, visibleCount);
  const hasMore = visibleCount < activePhotos.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  const handleLock = () => {
    startLockTransition(async () => {
      await lockClientGallery(story.slug);
    });
  };

  const getAspectClass = (aspect?: string) => {
    switch (aspect) {
      case "tall":
        return "aspect-[2/3]";
      case "landscape":
        return "aspect-[16/10]";
      case "square":
        return "aspect-square";
      case "portrait":
      default:
        return "aspect-[3/4]";
    }
  };

  return (
    <div className="w-full bg-[#FAF9F6] text-[#171717] min-h-screen">
      {/* Top Security & Navigation Bar */}
      <div className="border-b border-[#D8D2CA] py-3.5 bg-white sticky top-0 z-30">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-[#171717] text-[10px] font-semibold tracking-[0.16em] uppercase rounded-full">
              <Lock className="w-3 h-3 text-[#B8A27A]" />
              <span>PRIVATE CLIENT ARCHIVE</span>
            </span>
            <Link
              href={`/portfolio/${story.slug}`}
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase text-[#777777] hover:text-[#171717] transition-colors ml-2"
            >
              <span>VIEW PUBLIC STORY</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleLock}
              disabled={isLocking}
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#777777] hover:text-red-700 transition-colors cursor-pointer"
            >
              {isLocking ? "LOCKING..." : "LOCK ARCHIVE"}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="py-12 md:py-16 max-w-[1600px] mx-auto px-6 md:px-12 border-b border-[#D8D2CA]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.24em] text-[#777777] uppercase mb-2">
              EXCLUSIVE COLLECTION · {clientConfig.totalPhotos} MASTER PHOTOGRAPHS
            </span>
            <h1 className="font-display text-[44px] sm:text-[60px] md:text-[76px] leading-[0.92] text-[#171717] uppercase tracking-tight">
              {story.title}
            </h1>
            <p className="font-body text-[15px] text-[#777777] max-w-2xl mt-4 leading-relaxed">
              Welcome to your private photographic archive. Browse individual subcollections or download high-resolution masters for printing and timeless family keepsakes.
            </p>
          </div>

          {clientConfig.downloadEnabled && (
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="px-6 py-3.5 bg-[#171717] text-white hover:bg-[#333333] transition-colors text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full cursor-pointer inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD MASTER ARCHIVE</span>
              </button>
            </div>
          )}
        </div>

        {/* Subcollection Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-10">
          <button
            onClick={() => {
              setActiveCollection("ALL");
              setVisibleCount(24);
            }}
            className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
              activeCollection === "ALL"
                ? "bg-[#171717] text-white border border-[#171717]"
                : "bg-white text-[#171717] border border-[#D8D2CA] hover:border-[#171717]"
            }`}
          >
            ALL PHOTOGRAPHS ({allClientPhotos.length})
          </button>

          {clientConfig.subcollections.map((col) => {
            const isActive = activeCollection === col.name;
            return (
              <button
                key={col.name}
                onClick={() => {
                  setActiveCollection(col.name);
                  setVisibleCount(24);
                }}
                className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#171717] text-white border border-[#171717]"
                    : "bg-white text-[#171717] border border-[#D8D2CA] hover:border-[#171717]"
                }`}
              >
                {col.name} ({col.photos.length})
              </button>
            );
          })}
        </div>
      </header>

      {/* Photo Grid with Lazy Loading / Pagination */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative w-full ${getAspectClass(
                photo.aspect
              )} bg-[#ECE8E1] overflow-hidden cursor-pointer`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index < 4}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
                <span className="text-[11px] uppercase tracking-wider text-white font-medium truncate max-w-[70%]">
                  {photo.subcollection || photo.alt}
                </span>
                <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs">
                  <Download className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-[#171717] text-white hover:bg-[#333333] transition-colors text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full cursor-pointer"
            >
              LOAD MORE PHOTOGRAPHS (SHOWING {displayedPhotos.length} OF{" "}
              {activePhotos.length})
            </button>
          </div>
        )}
      </main>

      {/* Lightbox for Fullscreen Browsing */}
      <GalleryLightbox
        photos={activePhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        title={`${story.title} - Private Archive`}
      />

      {/* Download Master Archive Modal */}
      {downloadModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-fadeIn"
          onClick={() => setDownloadModalOpen(false)}
        >
          <div
            className="bg-[#FAF9F6] border border-[#D8D2CA] max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 text-[#B8A27A] mb-3">
              <CheckCircle className="w-5 h-5" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
                AUTHORIZED DOWNLOAD READY
              </span>
            </div>

            <h3 className="font-display text-[26px] uppercase text-[#171717]">
              DOWNLOAD MASTER REPOSITORY
            </h3>
            <p className="font-body text-[14px] text-[#777777] mt-3 leading-relaxed">
              Your collection consists of {clientConfig.totalPhotos} original full-resolution RAW-graded images in 300 DPI print quality.
            </p>

            <div className="my-6 p-4 bg-white border border-[#D8D2CA] flex flex-col gap-2 text-[12px] text-[#555555]">
              <div className="flex justify-between">
                <span>Total Collection Size:</span>
                <span className="font-mono font-bold text-[#171717]">~4.2 GB</span>
              </div>
              <div className="flex justify-between">
                <span>Color Profile:</span>
                <span className="font-mono font-bold text-[#171717]">sRGB Editorial</span>
              </div>
              <div className="flex justify-between">
                <span>Print Authorization:</span>
                <span className="font-mono font-bold text-green-700">Unlimited Personal</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={story.curatedImages[0]?.src || "#"}
                download={`${story.slug}-featured-selection.jpg`}
                className="w-full py-3.5 bg-[#171717] text-white hover:bg-[#333333] transition-colors text-center text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CURATED HIGHLIGHTS ZIP</span>
              </a>

              <button
                onClick={() => setDownloadModalOpen(false)}
                className="w-full py-3 border border-[#D8D2CA] text-[#171717] hover:border-[#171717] transition-colors text-center text-[11px] font-semibold tracking-[0.16em] uppercase rounded-full cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
