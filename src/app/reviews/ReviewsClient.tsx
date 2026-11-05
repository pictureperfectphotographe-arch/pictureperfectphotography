"use client";

import React from "react";
import { GoogleReview } from "@/data/reviews";
import { ArrowUpRight, Star, MessageSquare } from "lucide-react";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";

interface ReviewsClientProps {
  reviews: GoogleReview[];
  stats: {
    rating: number;
    reviewCount: number;
    profileUrl: string;
    address: string;
  };
}

export default function ReviewsClient({ reviews, stats }: ReviewsClientProps) {
  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-[#E5E5E5]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#737373] uppercase">
              CLIENT WORDS & EXPERIENCES
            </span>
            <span className="text-[#CCCCCC]">•</span>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F7F7] border border-[#E5E5E5] text-[11px] font-medium text-[#111111]">
              <span className="font-semibold">{stats.rating.toFixed(1)}</span>
              <div className="flex items-center text-[#B8A27A]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[#737373]">({stats.reviewCount} Reviews on Google)</span>
            </div>
          </div>

          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#111111] uppercase tracking-tight max-w-4xl">
            TRUST EARNED THROUGH{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              memories.
            </span>
          </h1>

          <p className="font-body text-[16px] md:text-[18px] text-[#737373] max-w-2xl mt-6 leading-relaxed">
            Every celebration entrusted to us is treated with genuine care. Read authentic words from families and couples who allowed us to document their most meaningful days.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
            >
              <span>VIEW GOOGLE REVIEWS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={stats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111111] border border-[#E5E5E5] text-[12px] font-medium tracking-wider uppercase hover:border-[#111111] transition-colors"
            >
              <span>LEAVE A GOOGLE REVIEW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Premium Horizontal Sliding Reviews Carousel */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <ReviewsCarousel reviews={reviews} />

          {/* Submission CTA */}
          <div className="mt-20 p-8 md:p-12 bg-[#F7F7F7] border border-[#E5E5E5] text-center max-w-2xl mx-auto space-y-4">
            <MessageSquare className="w-8 h-8 mx-auto text-[#111111] stroke-1" />
            <h3 className="font-display text-[24px] sm:text-[28px] uppercase tracking-tight text-[#111111]">
              HAVE WE PHOTOGRAPHED YOUR EVENT?
            </h3>
            <p className="text-[14px] text-[#737373] font-body max-w-lg mx-auto leading-relaxed">
              Your feedback means the world to our team. We invite you to share your genuine experience on our official Google Business profile.
            </p>
            <div className="pt-2">
              <a
                href={stats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
              >
                <span>LEAVE A GOOGLE REVIEW</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
