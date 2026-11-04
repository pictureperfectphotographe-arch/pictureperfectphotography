"use client";

import React from "react";
import Image from "next/image";

export default function HeroCollage() {
  return (
    <section className="relative w-full bg-white pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative">
        {/* Upper Zone: Metadata corners + Top 3 Floating Photographs */}
        <div className="relative w-full min-h-[140px] sm:min-h-[170px] md:min-h-[190px] flex items-start justify-between">
          {/* Top Left Metadata */}
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111111] select-none z-10 leading-tight">
            <p>WEDDINGS</p>
            <p>CELEBRATIONS</p>
            <p>LIFE EVENTS</p>
          </div>

          {/* Top Floating Photo 1: Couple Portrait */}
          <div className="absolute left-[18%] sm:left-[22%] md:left-[25%] lg:left-[28%] top-0 w-[95px] sm:w-[120px] md:w-[145px] lg:w-[160px] aspect-[4/5] shadow-xs z-10 transition-transform duration-500 hover:scale-102">
            <Image
              src="/images/hero_couple_top_left.jpg"
              alt="Candid couple portrait by Picture Perfect Photographe"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 110px, 160px"
            />
          </div>

          {/* Top Floating Photo 2: Baby Feet in Hands */}
          <div className="absolute left-[41%] sm:left-[43%] md:left-[44%] lg:left-[45%] top-2 md:top-3 w-[85px] sm:w-[105px] md:w-[125px] lg:w-[135px] aspect-[4/3] shadow-xs z-10 transition-transform duration-500 hover:scale-102">
            <Image
              src="/images/hero_baby_feet.jpg"
              alt="Baby cradle ceremony milestone photography"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 95px, 135px"
            />
          </div>

          {/* Top Floating Photo 3: Maternity in Yellow */}
          <div className="absolute right-[18%] sm:right-[20%] md:right-[23%] lg:right-[25%] top-0 w-[90px] sm:w-[115px] md:w-[135px] lg:w-[150px] aspect-[4/5] shadow-xs z-10 transition-transform duration-500 hover:scale-102">
            <Image
              src="/images/hero_maternity_yellow.jpg"
              alt="Maternity photography session in Hyderabad"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 105px, 150px"
            />
          </div>

          {/* Top Right Metadata */}
          <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111111] select-none text-right z-10 leading-tight">
            <p>SINCE 2016</p>
          </div>
        </div>

        {/* Center Zone: Monumental Wordmark + Flanking Lower Photos */}
        <div className="relative w-full my-6 md:my-10 text-center">
          {/* Bottom Left Floating Photo: Sunset Silhouette */}
          <div className="absolute left-[1%] sm:left-[4%] md:left-[6%] lg:left-[8%] top-[25%] md:top-[20%] w-[105px] sm:w-[135px] md:w-[165px] lg:w-[185px] aspect-[4/3] shadow-xs z-10 transition-transform duration-500 hover:scale-102">
            <Image
              src="/images/hero_sunset_silhouette.jpg"
              alt="Pre-wedding sunset silhouette portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 120px, 185px"
            />
          </div>

          {/* Center Monumental Brand Logo */}
          <div className="relative z-20 py-4 md:py-6 select-none flex flex-col items-center justify-center">
            <Image
              src="/logo/PP-Logo-Black-trimmed.png"
              alt="Picture Perfect Photography"
              width={460}
              height={440}
              priority
              className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Bottom Right Floating Photo: Wedding Garland Couple */}
          <div className="absolute right-[1%] sm:right-[4%] md:right-[6%] lg:right-[8%] top-[20%] md:top-[15%] w-[100px] sm:w-[125px] md:w-[150px] lg:w-[170px] aspect-[4/5] shadow-xs z-10 transition-transform duration-500 hover:scale-102">
            <Image
              src="/images/hero_wedding_garland.jpg"
              alt="Indian wedding muhurtham garland photography"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 110px, 170px"
            />
          </div>
        </div>

        {/* Bottom Metadata Row */}
        <div className="flex items-end justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111111] select-none pt-4 md:pt-6 z-10 leading-tight">
          <div>
            <p>HYDERABAD, INDIA /</p>
            <p className="text-[#707070]">AVAILABLE PAN-INDIA</p>
          </div>
          <div className="text-right">
            <p>PHOTOGRAPHY</p>
            <p>FILMS</p>
            <p className="text-[#707070]">STORIES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
