"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface EditorialReview {
  id: string;
  clientName: string;
  heading: string;
  body: string;
  portrait: string;
  portraitAlt: string;
  storySlug?: string;
}

// 100% genuine customer reviews verified directly from Picture Perfect Photography
export const verifiedEditorialReviews: EditorialReview[] = [
  {
    id: "rev-spoorthy",
    clientName: "SPOORTHY REDDY",
    heading: "“We’re so happy we chose Picture Perfect photography team for our wedding.”",
    body: "Thankyou so much Srujan for capturing the most important moments which i can cherish for lifetime. From start to finish, Srujan and his team were so friendly and very accommodating.",
    portrait: "/images/films/film_spoorthy_sudeer.jpg",
    portraitAlt: "Spoorthy & Sudeer couple portrait",
    storySlug: "spoorthy-sudeer",
  },
  {
    id: "rev-vepunder",
    clientName: "VEPUNDER REDDY",
    heading: "“We couldn’t be happier with the results.”",
    body: "We recently hired Picture Perfect Photography for our wedding, and we are extremely happy with the results. The photography was beautiful, capturing every special moment perfectly. Their dedication, professionalism, and attention to detail were exceptional.",
    portrait: "/images/hero/wedding-hero-sru08831.jpg",
    portraitAlt: "Akhila & Vepunder wedding ceremony portrait",
    storySlug: "akhila-vepunder",
  },
  {
    id: "rev-pradeep",
    clientName: "PRADEEP REDDY",
    heading: "“The photos turned out beautiful, capturing all the special moments.”",
    body: "Srujan and team did a great job at our wedding! They were easy to work with and made us feel comfortable. Everything was delivered on time, and we’re really happy with the results. We definitely recommend them!",
    portrait: "/images/gallery_couple_large.jpg",
    portraitAlt: "Vasavi + Pradeep wedding couple portrait",
    storySlug: "pradeep-reddy",
  },
  {
    id: "rev-shashidhar",
    clientName: "SHASHIDHAR RAMISETTY",
    heading: "“They're too perfect that anyone can ask for.”",
    body: "We've started our journey with our maternity photoshoot and continued since then for all the events we had. Thanks a lot Srujan and team for making our happy moments even more memorable by capturing perfectly.",
    portrait: "/images/hero_maternity_yellow.jpg",
    portraitAlt: "Shashidhar & Family maternity portrait",
    storySlug: "shashidhar-maternity",
  },
  {
    id: "rev-swetha",
    clientName: "SWETHA REDDY",
    heading: "“Your work is truly amazing, I just kept on watching in loop.”",
    body: "Thank you so much, Srujan, for capturing the best moments of our life with my lil one..!! Even though my child was bit fussy during the shoot, you made sure it went well.",
    portrait: "/images/gallery_baby_smile.jpg",
    portraitAlt: "Baby Aarav and Swetha milestone portrait",
    storySlug: "aarav-milestone",
  },
];

interface EditorialReviewSectionProps {
  initialSlug?: string;
  className?: string;
}

export default function EditorialReviewSection({
  initialSlug,
  className = "",
}: EditorialReviewSectionProps) {
  const [prevSlug, setPrevSlug] = useState(initialSlug);
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    if (!initialSlug) return 0;
    const idx = verifiedEditorialReviews.findIndex((r) => r.storySlug === initialSlug);
    return idx >= 0 ? idx : 0;
  });

  if (prevSlug !== initialSlug) {
    setPrevSlug(initialSlug);
    const idx = verifiedEditorialReviews.findIndex((r) => r.storySlug === initialSlug);
    setCurrentIndex(idx >= 0 ? idx : 0);
  }

  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = verifiedEditorialReviews.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation when section is hovered/focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only react if within active viewport view
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

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
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentReview = verifiedEditorialReviews[currentIndex];
  const counterText = `${currentIndex + 1}/${total}`;

  return (
    <section
      ref={containerRef}
      className={`w-full bg-[#FAF9F6] border-t border-[#D8D2CA] py-20 sm:py-24 md:py-32 lg:py-36 overflow-hidden ${className}`}
      aria-label="Client Testimonials"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Review Content (Centered horizontally and vertically) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center text-center order-2 lg:order-1">
            <div className="w-full max-w-[720px] mx-auto flex flex-col items-center">
              {/* Review Heading (Bodoni Moda Italic, 36–42px, centered) */}
              <h3 className="font-editorial italic font-normal text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-[1.22] text-[#171717] tracking-tight text-center mb-6 md:mb-8 transition-opacity duration-300">
                {currentReview.heading}
              </h3>

              {/* Review Body (Clean Sans-Serif, 15–16px, line-height ~1.7, #777777, centered) */}
              <p className="font-body text-[15px] md:text-[16px] leading-[1.72] text-[#777777] font-normal text-center max-w-[680px] mb-8 md:mb-10 transition-opacity duration-300">
                {currentReview.body}
              </p>

              {/* Client Name (Clean Sans-Serif, 13–14px, medium weight, uppercase, #171717, centered) */}
              <span className="font-body text-[13px] md:text-[14px] font-medium tracking-[0.2em] uppercase text-[#171717] text-center mb-10 md:mb-12">
                {currentReview.clientName}
              </span>

              {/* Review Navigation (Minimal Left & Right Arrow Controls + Centered Counter) */}
              <div
                className="flex items-center justify-center gap-7 text-[#171717]"
                role="navigation"
                aria-label="Review pagination"
              >
                <button
                  onClick={handlePrev}
                  className="group p-2 text-[#171717] hover:text-[#777777] transition-colors focus:outline-hidden cursor-pointer"
                  aria-label="Previous review"
                >
                  <ArrowLeft className="w-5 h-5 stroke-[1.25] transition-transform duration-200 group-hover:-translate-x-0.5" />
                </button>

                <span className="font-body text-[13px] tracking-[0.22em] font-medium text-[#171717] select-none">
                  {counterText}
                </span>

                <button
                  onClick={handleNext}
                  className="group p-2 text-[#171717] hover:text-[#777777] transition-colors focus:outline-hidden cursor-pointer"
                  aria-label="Next review"
                >
                  <ArrowRight className="w-5 h-5 stroke-[1.25] transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Client Photograph (Tall 3:4 portrait aspect ratio with crisp thin border) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[3/4] bg-[#ECE8E1] border border-[#171717] overflow-hidden select-none">
              <Image
                src={currentReview.portrait}
                alt={currentReview.portraitAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
