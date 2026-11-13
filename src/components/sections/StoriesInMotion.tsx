"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { reelsData, ReelItem } from "@/data/reels";

// Detect user's reduced-motion preference
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

// Detect whether primary pointer supports mouse hover
function subscribeHoverCapability(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getHoverCapabilitySnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getHoverCapabilityServerSnapshot() {
  return false;
}

export default function StoriesInMotion() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [manuallyPausedMap, setManuallyPausedMap] = useState<Record<number, boolean>>({});
  const [videoReadyMap, setVideoReadyMap] = useState<Record<number, boolean>>({});
  const [isSectionInView, setIsSectionInView] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoErrorMap, setVideoErrorMap] = useState<Record<string, boolean>>({});

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const canHover = useSyncExternalStore(
    subscribeHoverCapability,
    getHoverCapabilitySnapshot,
    getHoverCapabilityServerSnapshot
  );

  // IntersectionObserver ONLY manages viewport visibility & resource optimization.
  // It NEVER triggers autoplay.
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSectionInView(entry.isIntersecting);

          // If carousel leaves viewport, pause all playing videos and reset
          if (!entry.isIntersecting) {
            videoRefs.current.forEach((video) => {
              if (video) {
                video.pause();
                try {
                  video.currentTime = 0;
                } catch {
                  // ignore
                }
              }
            });
            setPlayingIndex(null);
            setVideoReadyMap({});
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  // Track the most visible card on scroll to keep activeIndex aligned
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

  // Stop all other reels and ensure only one reel can ever play at once
  const stopAllOtherReels = (exceptIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== exceptIndex) {
        video.pause();
        try {
          video.currentTime = 0;
        } catch {
          // ignore
        }
      }
    });
    setVideoReadyMap((prev) => {
      const next: Record<number, boolean> = {};
      if (prev[exceptIndex]) {
        next[exceptIndex] = true;
      }
      return next;
    });
  };

  // Hover-to-Play: Pointer Enter on Desktop/Laptop
  const handlePointerEnter = (index: number, e: React.PointerEvent) => {
    if (e.pointerType === "touch") return; // Touch devices use tap
    if (!canHover) return;

    setHoveredIndex(index);

    if (prefersReducedMotion) return;

    // A fresh pointer entry clears any previous manual pause for this reel
    if (manuallyPausedMap[index]) {
      setManuallyPausedMap((prev) => ({ ...prev, [index]: false }));
    }

    // Stop and reset all other reels
    stopAllOtherReels(index);

    const targetVideo = videoRefs.current[index];
    if (targetVideo) {
      targetVideo.muted = isMuted;
      try {
        targetVideo.currentTime = 0;
      } catch {
        // ignore
      }
      const playPromise = targetVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Gracefully handle browser restrictions
        });
      }
    }

    setPlayingIndex(index);
    setActiveIndex(index);
  };

  // Pointer Leave: Pause, Restore Thumbnail, Reset to Beginning
  const handlePointerLeave = (index: number, e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (!canHover) return;

    setHoveredIndex((prev) => (prev === index ? null : prev));

    const targetVideo = videoRefs.current[index];
    if (targetVideo) {
      targetVideo.pause();
      try {
        targetVideo.currentTime = 0;
      } catch {
        // ignore
      }
    }

    // Restore thumbnail and reset ready state
    setVideoReadyMap((prev) => ({ ...prev, [index]: false }));

    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  // Manual Play/Pause Toggle (via button or tap)
  const handleTogglePlay = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const isCurrentlyPlaying = playingIndex === index;
    const targetVideo = videoRefs.current[index];

    if (isCurrentlyPlaying) {
      // Manual pause
      if (targetVideo) {
        targetVideo.pause();
      }
      setPlayingIndex(null);
      setManuallyPausedMap((prev) => ({ ...prev, [index]: true }));
    } else {
      // Start / Resume playback
      stopAllOtherReels(index);

      if (targetVideo) {
        targetVideo.muted = isMuted;
        const playPromise = targetVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }

      setPlayingIndex(index);
      setActiveIndex(index);
      setManuallyPausedMap((prev) => ({ ...prev, [index]: false }));
    }
  };

  // Card click (mobile tap to play / desktop click)
  const handleCardClick = (index: number) => {
    handleTogglePlay(index);
  };

  // Video ready/playing callback: hide thumbnail only when video is ready to display
  const handleVideoPlaying = (index: number) => {
    setVideoReadyMap((prev) => ({ ...prev, [index]: true }));
  };

  // Audio mute/unmute toggle across all reels
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => {
      const next = !prev;
      videoRefs.current.forEach((video) => {
        if (video) video.muted = next;
      });
      return next;
    });
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

  // Handle video error gracefully
  const handleVideoError = (reelId: string) => {
    setVideoErrorMap((prev) => ({ ...prev, [reelId]: true }));
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Stories in Motion — Wedding Reels"
      className="relative w-full bg-[#52060F] text-[#FAF9F6] py-[24px] sm:py-[36px] lg:py-[44px] overflow-hidden border-y border-[#FAF9F6]/15 select-none"
    >
      <div className="w-[95vw] mx-auto relative">
        {/* Main Section Heading: Cormorant Garamond SemiBold Normal (Title Case) */}
        <div className="mb-[24px] sm:mb-[28px] md:mb-[30px]">
          <h2 className="font-cormorant font-semibold not-italic text-[42px] md:text-[58px] lg:text-[76px] leading-[1.1] tracking-[-0.02em] text-[#FAF9F6] text-center select-none">
            Stories In Motion
          </h2>
        </div>

        {/* Carousel Wrapper with navigation arrows */}
        <div className="relative group/carousel">
          {/* Left Arrow Navigation */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous wedding reel"
            className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-black/80 backdrop-blur-md text-[#FAF9F6] border border-[#FAF9F6]/25 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF9F6]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
          </button>

          {/* Right Arrow Navigation */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next wedding reel"
            className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-black/80 backdrop-blur-md text-[#FAF9F6] border border-[#FAF9F6]/25 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FAF9F6]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
          </button>

          {/* Horizontal Scrolling Carousel: 9:16 Vertical Video Frames */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full lg:justify-center"
          >
            {reelsData.map((reel: ReelItem, index: number) => {
              const isPlaying = playingIndex === index;
              const isManuallyPaused = Boolean(manuallyPausedMap[index]);
              const isVideoReady = Boolean(videoReadyMap[index]);
              const isShowingVideo = isPlaying && isVideoReady;
              const hasVideo = Boolean(reel.videoSrc) && !videoErrorMap[reel.id];
              const isHovered = hoveredIndex === index;
              const isActive = index === activeIndex;

              return (
                <div
                  key={reel.id}
                  data-reel-card="true"
                  data-reel-index={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onPointerEnter={(e) => handlePointerEnter(index, e)}
                  onPointerLeave={(e) => handlePointerLeave(index, e)}
                  onClick={() => handleCardClick(index)}
                  className={`group relative aspect-[9/16] w-[80vw] max-w-[340px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[335px] shrink-0 snap-center sm:snap-start rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 border border-[#FAF9F6]/15 shadow-xl cursor-pointer transition-all duration-500 ${
                    isActive ? "ring-1 ring-[#FAF9F6]/30 scale-[1.01]" : "opacity-90 hover:opacity-100"
                  }`}
                  aria-label={`${reel.title} wedding reel`}
                >
                  {/* High-Resolution Natural Video-Extracted Poster Thumbnail */}
                  <Image
                    src={reel.poster}
                    alt={`${reel.title} by Picture Perfect Photography`}
                    fill
                    quality={92}
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 260px, (max-width: 1024px) 280px, (max-width: 1536px) 320px, 335px"
                    priority={index < 2}
                    className={`object-cover transition-all duration-500 ease-out group-hover:scale-103 ${
                      isShowingVideo ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  />

                  {/* HTML5 Video Layer */}
                  {hasVideo && (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={reel.videoSrc}
                      poster={reel.poster}
                      muted={isMuted}
                      playsInline
                      loop
                      preload={isHovered || isPlaying || (isActive && isSectionInView) ? "auto" : "none"}
                      onPlaying={() => handleVideoPlaying(index)}
                      onTimeUpdate={(e) => {
                        const v = e.currentTarget;
                        if (!v.paused && v.currentTime > 0) {
                          handleVideoPlaying(index);
                        }
                      }}
                      onError={() => handleVideoError(reel.id)}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isShowingVideo ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}

                  {/* Center Subtle Play Button (Visible when idle / paused) */}
                  {!isShowingVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-300">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md text-[#FAF9F6] border border-white/25 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FAF9F6] text-[#FAF9F6] ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Card Controls Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-between pointer-events-none z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    {/* Left: Play/Pause Indicator & Toggle Button */}
                    <button
                      type="button"
                      onClick={(e) => handleTogglePlay(index, e)}
                      aria-label={isPlaying ? "Pause reel" : isManuallyPaused ? "Resume reel" : "Play reel"}
                      className="pointer-events-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-[#FAF9F6] border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-white"
                    >
                      {isPlaying ? (
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
