"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 md:py-24 border-t border-[#D8D2CA]">
      <div className="max-w-[1480px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7">
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
              OUR PHILOSOPHY —
            </span>
            <h2 className="font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[0.92] text-[#171717] uppercase tracking-[-0.015em]">
              REAL.
              <br />
              EMOTIONAL.
              <br />
              TIMELESS{" "}
              <span className="font-editorial text-[48px] sm:text-[62px] md:text-[76px] lg:text-[84px] lowercase font-normal italic tracking-normal text-[#B4777C]">
                stories.
              </span>
            </h2>
          </div>

          {/* Right Column: Thoughtful copy & circle link */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between pt-2 lg:pt-8">
            <div className="max-w-md lg:text-left space-y-6">
              <p className="font-body text-[15px] md:text-[16px] text-[#444444] leading-[1.65]">
                From weddings to the smallest milestones, we capture genuine emotions and turn them into lasting memories.
              </p>
              <div>
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D8D2CA] text-[#171717] transition-all duration-300 hover:border-[#57000F] hover:bg-[#57000F] hover:text-white"
                  aria-label="Learn more about our philosophy"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
