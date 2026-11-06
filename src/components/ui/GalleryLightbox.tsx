"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/data/galleries";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  title?: string;
}

export default function GalleryLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
  title,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(prevIndex);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(nextIndex);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];
  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(photos.length).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title ? title + " - " : ""}Photograph ${currentIndex + 1} of ${photos.length}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0C]/97 backdrop-blur-md select-none animate-fadeIn"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Counter & Close */}
      <div
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 md:py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-white">
          <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-neutral-300">
            {formattedCurrent} <span className="text-neutral-500">/</span> {formattedTotal}
          </span>
          {title && (
            <>
              <span className="hidden sm:inline text-neutral-600 text-xs">•</span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-medium truncate max-w-xs md:max-w-md">
                {title}
              </span>
            </>
          )}
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="p-2.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-hidden focus:ring-1 focus:ring-white/40 cursor-pointer"
          aria-label="Close fullscreen viewer (ESC)"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative w-full h-full max-w-[94vw] max-h-[85vh] md:max-h-[88vh] flex items-center justify-center p-2 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt || "Portfolio photograph"}
            fill
            priority
            className="object-contain transition-opacity duration-200"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/80 transition-all focus:outline-hidden focus:ring-1 focus:ring-white/40 cursor-pointer"
        aria-label="Previous image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/80 transition-all focus:outline-hidden focus:ring-1 focus:ring-white/40 cursor-pointer"
        aria-label="Next image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Bottom Caption Bar */}
      {currentPhoto.alt && (
        <div
          className="absolute bottom-4 left-6 right-6 md:left-12 md:right-12 text-center pointer-events-none"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="inline-block px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xs text-[11px] md:text-[12px] text-neutral-300 font-body max-w-xl truncate">
            {currentPhoto.alt}
          </p>
        </div>
      )}
    </div>
  );
}
