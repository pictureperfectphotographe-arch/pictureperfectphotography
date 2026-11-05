"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { GoogleReview } from "@/data/reviews";
import { Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface ReviewsCarouselProps {
  reviews: GoogleReview[];
}

// Helpers for useSyncExternalStore
const subscribeResize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getVisibleCards = () => {
  if (typeof window === "undefined") return 3;
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};

const subscribeReducedMotion = (callback: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const subscribeVisibility = (callback: () => void) => {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
};

const getVisibilitySnapshot = () => {
  if (typeof document === "undefined") return true;
  return document.visibilityState === "visible";
};

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const total = reviews.length; // 6 reviews

  // Triple array for seamless infinite sliding: [clones(0..5), main(6..11), clones(12..17)]
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  // External store subscriptions (idiomatic React 19)
  const visibleCards = useSyncExternalStore(subscribeResize, getVisibleCards, () => 3);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  const isTabVisible = useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    () => true
  );

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(total); // Start at index 6 (first item of main set)
  const [isAnimated, setIsAnimated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const isTransitioningRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchDeltaXRef = useRef(0);
  const touchDeltaYRef = useRef(0);
  const isDraggingRef = useRef(false);

  // Advance to next card
  const handleNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsAnimated(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Advance to previous card
  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsAnimated(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Jump to specific logical review index (0..5)
  const goToLogicalIndex = useCallback(
    (targetLogical: number) => {
      if (isTransitioningRef.current) return;
      const currentLogical = ((currentIndex % total) + total) % total;
      let delta = targetLogical - currentLogical;

      // Shortest path around 6 items
      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;

      if (delta === 0) return;

      isTransitioningRef.current = true;
      setIsAnimated(true);
      setCurrentIndex((prev) => prev + delta);
    },
    [currentIndex, total]
  );

  // Transition end: silently normalize index back into middle set [total, 2*total - 1]
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;

    setCurrentIndex((current) => {
      let normalized = current;
      while (normalized >= total * 2) {
        normalized -= total;
      }
      while (normalized < total) {
        normalized += total;
      }

      if (normalized !== current) {
        setIsAnimated(false);
        return normalized;
      }
      return current;
    });
  };

  // Autoplay: 4.5s advance timing, paused on hover/drag/tab hidden/reduced motion
  useEffect(() => {
    if (isHovered || isInteracting || !isTabVisible || prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, isInteracting, isTabVisible, prefersReducedMotion, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setIsInteracting(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchDeltaXRef.current = 0;
    touchDeltaYRef.current = 0;
    isDraggingRef.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
    touchDeltaYRef.current = e.touches[0].clientY - touchStartYRef.current;
  };

  const onTouchEnd = () => {
    setIsInteracting(false);
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const deltaX = touchDeltaXRef.current;
    const deltaY = touchDeltaYRef.current;

    // Distinguish horizontal swipe from vertical page scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchDeltaXRef.current = 0;
    touchDeltaYRef.current = 0;
  };

  // Logical index for active indicator (0..5)
  const activeLogicalIndex = ((currentIndex % total) + total) % total;

  // Slide percentage width
  const stepPercent = 100 / visibleCards;
  const translateX = -(currentIndex * stepPercent);

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={() => setIsInteracting(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Genuine Google Client Reviews"
    >
      {/* Top Header Controls Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D8D2CA]">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase">
            VERIFIED EXPERIENCES
          </span>
          <span className="text-[#D8D2CA]">•</span>
          <span className="text-[12px] font-medium text-[#171717]">
            0{activeLogicalIndex + 1} / 0{total}
          </span>
        </div>

        {/* Minimal Previous / Next Arrow Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Previous review card"
            className="w-10 h-10 border border-[#D8D2CA] bg-white flex items-center justify-center text-[#171717] hover:border-[#171717] hover:text-[#171717] hover:bg-[#FAF9F6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#171717]"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            type="button"
            aria-label="Next review card"
            className="w-10 h-10 border border-[#D8D2CA] bg-white flex items-center justify-center text-[#171717] hover:border-[#171717] hover:text-[#171717] hover:bg-[#FAF9F6] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#171717]"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div
        className="overflow-hidden w-full -mx-3 sm:-mx-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex will-change-transform"
          style={{
            transform: `translate3d(${translateX}%, 0, 0)`,
            transition:
              isAnimated && !prefersReducedMotion
                ? "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedReviews.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-4 flex flex-col"
              aria-hidden={
                idx < currentIndex || idx >= currentIndex + visibleCards
              }
            >
              {/* Minimal Bordered Review Card */}
              <article className="h-full flex flex-col justify-between bg-white p-7 sm:p-8 md:p-9 border border-[#D8D2CA] transition-colors hover:border-[#777777]">
                <div>
                  {/* TOP: Actual Star Rating in #B8A27A Muted Champagne Gold */}
                  <div
                    className="flex items-center space-x-1 mb-6 text-[#B8A27A]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 fill-[#B8A27A] text-[#B8A27A]"
                      />
                    ))}
                  </div>

                  {/* MIDDLE: Genuine Customer Review Quotation */}
                  <blockquote className="font-editorial text-[17px] sm:text-[18px] md:text-[19px] leading-[1.65] text-[#171717] italic">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                </div>

                {/* BOTTOM: Reviewer Display Name (DM Sans SemiBold) & Subtle Google Link */}
                <div className="pt-6 mt-6 border-t border-[#D8D2CA] flex flex-col gap-1.5">
                  <p className="font-sans font-semibold text-[15px] md:text-[16px] text-[#171717] tracking-[0.01em]">
                    {item.displayName}
                  </p>
                  <a
                    href={item.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.08em] text-[#777777] hover:text-[#171717] uppercase transition-colors group w-fit"
                    title={`Read original Google review by ${item.reviewerName}`}
                    aria-label={`Read original Google review by ${item.reviewerName} on Google Business Profile`}
                  >
                    <span>Google Review</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Indicators */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {reviews.map((rev, i) => {
          const isActive = activeLogicalIndex === i;
          return (
            <button
              key={rev.id}
              onClick={() => goToLogicalIndex(i)}
              type="button"
              aria-label={`Go to review ${i + 1} of ${total}: ${rev.displayName}`}
              className={`h-2 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#171717] ${
                isActive
                  ? "w-6 bg-[#B8A27A] rounded-full"
                  : "w-2 bg-[#D8D2CA] hover:bg-[#777777] rounded-full"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
