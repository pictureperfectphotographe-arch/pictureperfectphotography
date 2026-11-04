"use client";

import React, { useState } from "react";
import { GoogleReview } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Star, MessageSquare } from "lucide-react";

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
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <section className="py-16 md:py-24 border-b border-[#EFEFEF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase">
              CLIENT WORDS & EXPERIENCES
            </span>
            <span className="text-[#CCCCCC]">•</span>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5F5F5] border border-[#E5E5E5] text-[11px] font-medium text-[#222222]">
              <span className="font-semibold">{stats.rating.toFixed(1)}</span>
              <div className="flex items-center text-[#111111]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[#666666]">({stats.reviewCount} Reviews on Google)</span>
            </div>
          </div>

          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#111111] uppercase tracking-tight max-w-4xl">
            TRUST EARNED THROUGH{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              memories.
            </span>
          </h1>

          <p className="font-body text-[16px] md:text-[18px] text-[#555555] max-w-2xl mt-6 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#111111] border border-[#DEDEDE] text-[12px] font-medium tracking-wider uppercase hover:border-[#111111] transition-colors"
            >
              <span>LEAVE A GOOGLE REVIEW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Genuine Google Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleReviews.map((item) => (
              <article
                key={item.id}
                className="bg-white p-8 border border-[#E5E5E5] flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#CCCCCC]"
              >
                <div>
                  {/* Top: Actual Star Rating */}
                  <div
                    className="flex items-center space-x-1 text-[#111111] mb-6"
                    aria-label={`${item.rating} out of 5 stars on Google`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating
                            ? "fill-current text-[#111111]"
                            : "text-[#D0D0D0]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Middle: Genuine Customer Review Text */}
                  <blockquote className="font-editorial text-[18px] md:text-[20px] text-[#222222] leading-snug italic">
                    &ldquo;{item.text}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom: Reviewer Name & Available Metadata */}
                <div className="pt-5 border-t border-[#F0F0F0]">
                  <p className="font-display text-[18px] uppercase tracking-tight text-[#111111]">
                    {item.reviewerName}
                  </p>
                  <p className="text-[12px] text-[#707070] font-body mt-0.5">
                    {item.eventOrContext} • {item.publishedAt}
                  </p>
                  {item.reviewerBadge && (
                    <p className="text-[11px] text-[#999999] font-body mt-0.5">
                      {item.reviewerBadge}
                    </p>
                  )}
                  <a
                    href={item.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#888888] hover:text-[#111111] mt-4 tracking-wider uppercase font-medium transition-colors group"
                  >
                    <span>READ ON GOOGLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Reviews Control */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 3, reviews.length))}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-[#DEDEDE] text-[#111111] text-[12px] font-medium tracking-wider uppercase hover:border-[#111111] hover:bg-[#FAFAFA] transition-all cursor-pointer"
              >
                <span>LOAD MORE REVIEWS ({reviews.length - visibleCount} MORE)</span>
              </button>
            </div>
          )}

          {/* Submission CTA */}
          <div className="mt-20 p-8 md:p-12 bg-[#F8F8F8] border border-[#E5E5E5] text-center max-w-2xl mx-auto space-y-4">
            <MessageSquare className="w-8 h-8 mx-auto text-[#111111] stroke-1" />
            <h3 className="font-display text-[24px] sm:text-[28px] uppercase tracking-tight text-[#111111]">
              HAVE WE PHOTOGRAPHED YOUR EVENT?
            </h3>
            <p className="text-[14px] text-[#666666] font-body max-w-lg mx-auto leading-relaxed">
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
