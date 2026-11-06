"use client";

import React from "react";
import Image from "next/image";

export default function HeroCollage() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] sm:min-h-[660px] md:min-h-[720px] -mt-[72px] md:-mt-[80px] overflow-hidden flex flex-col justify-between select-none">
      {/* Background Fullscreen Landscape Wedding Photograph (SRU08831) */}
      <Image
        src="/images/hero/wedding-hero-sru08831.jpg"
        alt="Picture Perfect Photography - Wedding couple holding hands under blue sky"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[54%_center] md:object-[center_82%] motion-safe:transition-opacity motion-safe:duration-700"
      />

      {/* Editorial Vignette Overlay for Sky & Text Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 via-30% to-black/45 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Zone: Metadata & Sky Wordmark */}
     <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pt-[80px] sm:pt-[84px] md:pt-[88px] flex flex-col">
        {/* Top Metadata Row */}
        <div className="w-full flex items-start justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/95 drop-shadow-sm leading-tight">
          {/* Top Left Metadata */}
          <div>
            <p>WEDDINGS</p>
            <p>CELEBRATIONS</p>
            <p className="text-white/75">LIFE EVENTS</p>
          </div>

          {/* Top Right Metadata */}
          <div className="text-right">
            <p>SINCE 2021</p>
          </div>
        </div>

        {/* Center Wordmark in Sky */}
        <div className="text-center mt-3 sm:mt-4 md:mt-3">
          <h1 className="font-display text-[54px] sm:text-[68px] md:text-[80px] lg:text-[88px] xl:text-[96px] leading-[0.88] tracking-[-0.02em] text-white drop-shadow-md">
            PICTURE
            <br />
            PERFECT
          </h1>
          <p className="font-editorial italic font-normal text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] text-white -mt-2 sm:-mt-2.5 md:-mt-3 tracking-tight drop-shadow-md">
            Photography
          </p>
        </div>
      </div>

      {/* Bottom Zone: Metadata Bottom Left & Bottom Right */}
    <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pb-8 sm:pb-9 md:pb-10 flex items-end justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/95 drop-shadow-sm leading-tight">
        {/* Bottom Left Metadata */}
        <div>
          <p>MANIKONDA, HYDERABAD /</p>
          <p className="text-white/75">AVAILABLE PAN-INDIA</p>
        </div>

        {/* Bottom Right Metadata */}
        <div className="text-right">
          <p>PHOTOGRAPHY</p>
          <p>FILMS</p>
          <p className="text-white/75">STORIES</p>
        </div>
      </div>
    </section>
  );
}
