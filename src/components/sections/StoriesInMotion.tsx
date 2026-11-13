"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { reelsData, ReelItem } from "@/data/reels";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function StoriesInMotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSectionInView, setIsSectionInView] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoErrorMap, setVideoErrorMap] = useState<Record<string, boolean>>({});

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // IntersectionObserver to observe when section is in viewport
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // Update active video playback state based on section visibility & user pause state
  useEffect(() => {
    if (prefersReducedMotion) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        if (isSectionInView && !isUserPaused) {
          video.muted = isMuted;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Gracefully handle browser autoplay restrictions
            });
          }
        } else {
          video.pause();
        }
      } else {
        // Only one reel plays at a time
        video.pause();
      }
    });
  }, [activeIndex, isSectionInView, isUserPaused, isMuted, prefersReducedMotion]);

  // Track the most visible card on scroll to update activeIndex
  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex]);

  // Navigation handlers
  const scrollToIndex = (index: number) => {
    const card = cardRefs.current[index];
    if (card && carouselRef.current) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : reelsData.length - 1;
    scrollToIndex(prev);
  };

  const handleNext = () => {
    const next = activeIndex < reelsData.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(next);
  };

  // Card click: either toggle play/pause on active, or select non-active
  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      setIsUserPaused((prev) => !prev);
    } else {
      scrollToIndex(index);
      setIsUserPaused(false);
    }
  };

  // Audio mute/unmute toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  // Fullscreen toggle
  const handleFullscreen = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    if (!document.fullscreenElement) {
      cardEl.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  // Handle video error (e.g. video file not yet on disk)
  const handleVideoError = (reelId: string) => {
    setVideoErrorMap((prev) => ({ ...prev, [reelId]: true }));
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Stories in Motion — Autoplay Wedding Reels"
      className="relative w-full bg-[#570D1C] text-[#FAF9F6] py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden border-y border-[#FAF9F6]/15 select-none"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative">
        {/* Main Section Heading: Cormorant Garamond SemiBold Italic (600) */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="font-cormorant font-semibold italic text-[38px] md:text-[52px] lg:text-[72px] leading-[1.08] tracking-tight text-[#FAF9F6] text-center">
            STORIES IN MOTION
          </h2>
        </div>

        {/* Carousel Wrapper with minimal navigation arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow Navigation */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous wedding reel"
            className="absolute -left-3 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-[#FAF9F6]/25 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF9F6]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
          </button>

          {/* Right Arrow Navigation */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next wedding reel"
            className="absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-[#FAF9F6]/25 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF9F6]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
          </button>

          {/* Horizontal Scrolling Carousel: 9:16 Vertical Video Frames */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reelsData.map((reel: ReelItem, index: number) => {
              const isActive = index === activeIndex;
              const hasVideo = Boolean(reel.videoSrc) && !videoErrorMap[reel.id];
              const isCurrentlyPlaying = isActive && isSectionInView && !isUserPaused && hasVideo;

              return (
                <div
                  key={reel.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => handleCardClick(index)}
                  className={`group relative aspect-[9/16] w-[78vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-center sm:snap-start rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 border border-[#FAF9F6]/15 shadow-xl cursor-pointer transition-all duration-500 ${
                    isActive ? "ring-1 ring-[#FAF9F6]/30 scale-[1.01]" : "opacity-85 hover:opacity-100"
                  }`}
                  aria-label={`${reel.title} wedding reel`}
                >
                  {/* High-Resolution Natural Wedding Poster: Pristine natural colors, no filters */}
                  <Image
                    src={reel.poster}
                    alt={`${reel.title} by Picture Perfect Photography`}
                    fill
                    quality={92}
                    sizes="(max-width: 640px) 78vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* HTML5 Autoplay Video Layer */}
                  {reel.videoSrc && !videoErrorMap[reel.id] && (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={reel.videoSrc}
                      poster={reel.poster}
                      muted={isMuted}
                      playsInline
                      loop
                      preload={isActive ? "auto" : "metadata"}
                      onError={() => handleVideoError(reel.id)}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isCurrentlyPlaying ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}

                  {/* Minimal Card Controls Overlay: Sleek, non-intrusive pill */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-between pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                    {/* Left: Minimal Play/Pause Indicator Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(index);
                      }}
                      aria-label={isCurrentlyPlaying ? "Pause reel" : "Play reel"}
                      className="pointer-events-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-white"
                    >
                      {isCurrentlyPlaying ? (
                        <Pause className="w-4 h-4 fill-white text-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                      )}
                    </button>

                    {/* Right: Sound & Fullscreen Controls */}
                    <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute reel" : "Mute reel"}
                        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-white"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-white" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleFullscreen(index, e)}
                        aria-label="View reel in fullscreen"
                        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-white"
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
