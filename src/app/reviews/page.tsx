import React from "react";
import Link from "next/link";
import { googleReviews } from "@/data/reviews";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Star, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Client Reviews | Picture Perfect Photographe",
  description:
    "Read genuine reviews and client feedback for Picture Perfect Photographe from weddings, cradle ceremonies, and milestone celebrations in Hyderabad.",
};

export default function ReviewsPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#EFEFEF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase mb-4">
            CLIENT WORDS & EXPERIENCES
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#111111] uppercase tracking-tight max-w-4xl">
            TRUST EARNED THROUGH{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              memories.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#555555] max-w-2xl mt-6 leading-relaxed">
            Every celebration entrusted to us is treated with genuine care. Read authentic words from families and couples who allowed us to document their most meaningful days.
          </p>

          {/* Google Business Profile Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.socials.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
            >
              <span>VIEW GOOGLE REVIEWS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socials.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#111111] border border-[#DEDEDE] text-[12px] font-medium tracking-wider uppercase hover:border-[#111111] transition-colors"
            >
              <span>LEAVE A GOOGLE REVIEW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews Editorial Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          {googleReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {googleReviews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white p-8 border border-[#E5E5E5] flex flex-col justify-between space-y-6"
                >
                  <div>
                    {/* Top: Actual Star Rating */}
                    <div
                      className="flex items-center space-x-1 text-[#111111] mb-6"
                      aria-label={`${item.rating} out of 5 stars`}
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

                  {/* Bottom: Reviewer Name, Date & Google Link */}
                  <div className="pt-4 border-t border-[#F0F0F0]">
                    <p className="font-display text-[18px] uppercase tracking-tight text-[#111111]">
                      {item.reviewerName}
                    </p>
                    {item.publishedAt && (
                      <p className="text-[12px] text-[#707070] font-body mt-0.5">
                        {item.publishedAt}
                      </p>
                    )}
                    <a
                      href={item.reviewUrl || siteConfig.socials.googleBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#888888] hover:text-black flex items-center gap-1 mt-3 tracking-wider uppercase font-medium transition-colors"
                    >
                      <span>READ ON GOOGLE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-12 px-8 border border-dashed border-[#D0D0D0] text-center max-w-2xl mx-auto space-y-4">
              <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase">
                OFFICIAL GOOGLE BUSINESS PROFILE
              </span>
              <h3 className="font-display text-[26px] uppercase text-[#111111]">
                AWAITING VERIFIED REVIEWS
              </h3>
              <p className="text-[14px] text-[#666666] font-body leading-relaxed">
                In strict adherence to authenticity, placeholder reviews have been completely removed. Genuine reviews from our official Google Business Profile are being synchronized.
              </p>
              <div className="pt-2">
                <a
                  href={siteConfig.socials.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                >
                  <span>READ ALL REVIEWS DIRECTLY ON GOOGLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Submission CTA */}
          <div className="mt-16 p-8 bg-[#F8F8F8] border border-[#E5E5E5] text-center max-w-xl mx-auto space-y-3">
            <MessageSquare className="w-7 h-7 mx-auto text-[#111111] stroke-1" />
            <h3 className="font-display text-[22px] uppercase text-[#111111]">
              HAVE WE PHOTOGRAPHED YOUR EVENT?
            </h3>
            <p className="text-[13px] text-[#666666] font-body">
              Your feedback means the world to our team. We invite you to share your experience on our official Google Business profile.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#111111] hover:underline"
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
