"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HeroCollage() {
  return (
    <section className="relative w-full bg-white pt-5 pb-16 md:pt-8 md:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
        {/* Top Metadata Row: Guaranteed zero collision on mobile */}
        <div className="flex items-start justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#171717] select-none leading-tight z-30 relative">
          <div>
            <p>WEDDINGS</p>
            <p>CELEBRATIONS</p>
            <p>LIFE EVENTS</p>
          </div>
          <div className="text-right">
            <p>SINCE 2021</p>
          </div>
        </div>

        {/* Upper Zone: 3 Floating Photographs */}
        <div className="relative w-full h-[95px] sm:h-[135px] md:h-[165px] lg:h-[185px] mt-2 sm:mt-0">
          {/* Top Floating Photo 1: Couple Portrait (Portrait 4/5, -1.5deg rotation) */}
          <div className="absolute left-[4%] sm:left-[18%] md:left-[22%] lg:left-[26%] top-0 w-[68px] sm:w-[100px] md:w-[125px] lg:w-[150px] aspect-[4/5] shadow-xs border border-white/60 z-10 -rotate-[1.5deg] transition-all duration-500 ease-out hover:scale-103 hover:rotate-0 hover:shadow-md animate-fadeIn">
            <Image
              src="/images/hero_couple_top_left.jpg"
              alt="Candid couple portrait by Picture Perfect Photography"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100px, 150px"
            />
          </div>

          {/* Top Floating Photo 2: Baby Feet in Hands (Landscape 4/3, +1deg rotation) */}
          <div className="absolute left-[38%] sm:left-[42%] md:left-[44%] lg:left-[45%] top-1 md:top-2 w-[65px] sm:w-[90px] md:w-[110px] lg:w-[130px] aspect-[4/3] shadow-xs border border-white/60 z-10 rotate-[1deg] transition-all duration-500 ease-out hover:scale-103 hover:rotate-[2deg] hover:shadow-md animate-fadeIn">
            <Image
              src="/images/hero_baby_feet.jpg"
              alt="Baby milestone photography session"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90px, 130px"
            />
          </div>

          {/* Top Floating Photo 3: Maternity in Yellow (Portrait 4/5, -1deg rotation) */}
          <div className="absolute right-[4%] sm:right-[18%] md:right-[22%] lg:right-[24%] top-0 w-[68px] sm:w-[96px] md:w-[120px] lg:w-[142px] aspect-[4/5] shadow-xs border border-white/60 z-10 -rotate-[1deg] transition-all duration-500 ease-out hover:scale-103 hover:rotate-0 hover:shadow-md animate-fadeIn">
            <Image
              src="/images/hero_maternity_yellow.jpg"
              alt="Maternity photography session in Hyderabad"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 96px, 142px"
            />
          </div>
        </div>

        {/* Center Zone: Monumental Wordmark + Flanking Lower Photos */}
        <div className="relative w-full my-4 sm:my-6 md:my-8 text-center">
          {/* Bottom Left Floating Photo: Sunset Silhouette (Landscape 4/3, +1.5deg rotation) */}
          <div className="hidden sm:block absolute left-0 md:left-[1%] lg:left-[3%] xl:left-[6%] top-[25%] md:top-[16%] w-[105px] md:w-[125px] lg:w-[155px] xl:w-[170px] aspect-[4/3] shadow-xs border border-white/60 z-10 rotate-[1.5deg] transition-all duration-500 ease-out hover:scale-103 hover:rotate-[2deg] hover:shadow-md animate-fadeIn">
            <Image
              src="/images/hero_sunset_silhouette.jpg"
              alt="Pre-wedding sunset silhouette portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 125px, 170px"
            />
          </div>

          {/* Center Monumental Display Wordmark & Content */}
          <div className="relative z-20 py-2 sm:py-4 md:py-6 select-none flex flex-col items-center">
            <h1 className="font-display text-[54px] sm:text-[76px] md:text-[90px] lg:text-[116px] xl:text-[144px] leading-[0.88] tracking-[-0.02em] text-[#171717]">
              PICTURE
              <br />
              PERFECT
            </h1>
            <p className="font-editorial italic font-normal text-[32px] sm:text-[46px] md:text-[54px] lg:text-[70px] xl:text-[84px] text-[#171717] -mt-1.5 sm:-mt-3 md:-mt-5 lg:-mt-7 tracking-tight">
              Photography
            </p>

            {/* Studio Tagline */}
            <p className="font-editorial italic text-[14px] sm:text-[16px] md:text-[18px] text-[#777777] mt-2.5 sm:mt-3 md:mt-4 max-w-md">
              Timeless imagery. Honest emotions.
            </p>

            {/* Minimal Editorial CTA */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[11px] md:text-[12px] font-semibold tracking-[0.16em] uppercase text-[#171717] border-b border-[#171717] pb-0.5 hover:text-[#777777] hover:border-[#777777] transition-colors group mt-3 sm:mt-4 md:mt-5"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Bottom Right Floating Photo: Wedding Garland Couple (Primary specialty, Portrait 4/5, -1.5deg rotation) */}
          <div className="hidden sm:block absolute right-0 md:right-[1%] lg:right-[3%] xl:right-[6%] top-[18%] md:top-[10%] w-[110px] md:w-[130px] lg:w-[160px] xl:w-[175px] aspect-[4/5] shadow-xs border border-white/60 z-10 -rotate-[1.5deg] transition-all duration-500 ease-out hover:scale-103 hover:rotate-0 hover:shadow-md animate-fadeIn">
            <Image
              src="/images/hero_wedding_garland.jpg"
              alt="Indian wedding muhurtham garland photography"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 140px, 175px"
            />
          </div>

          {/* Mobile-Only Subtle Flanking Wedding Highlight Photo below the CTA for balanced editorial feel without obscuring text */}
          <div className="sm:hidden flex items-center justify-center gap-4 mt-4">
            <div className="relative w-[72px] aspect-[4/3] shadow-xs border border-white/60 rotate-[1.5deg] overflow-hidden">
              <Image
                src="/images/hero_sunset_silhouette.jpg"
                alt="Pre-wedding sunset silhouette portrait"
                fill
                className="object-cover"
                sizes="72px"
              />
            </div>
            <div className="relative w-[76px] aspect-[4/5] shadow-xs border border-white/60 -rotate-[1.5deg] overflow-hidden">
              <Image
                src="/images/hero_wedding_garland.jpg"
                alt="Indian wedding muhurtham garland photography"
                fill
                className="object-cover"
                sizes="76px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Metadata Row */}
        <div className="flex items-end justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#171717] select-none pt-4 md:pt-6 z-10 leading-tight">
          <div>
            <p>MANIKONDA, HYDERABAD /</p>
            <p className="text-[#777777]">AVAILABLE PAN-INDIA</p>
          </div>
          <div className="text-right">
            <p>PHOTOGRAPHY</p>
            <p>FILMS</p>
            <p className="text-[#777777]">STORIES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
