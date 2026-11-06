"use client";

import React from "react";
import Image from "next/image";

export default function HeroCollage() {
  return (
    <section className="relative w-full h-[100svh] min-h-[620px] sm:min-h-[680px] md:min-h-[720px] overflow-hidden flex flex-col justify-between select-none">
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
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 via-35% to-black/45 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Zone: Header clearance & Top Corner Metadata */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 pt-[88px] sm:pt-[96px] md:pt-[104px]">
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
      </div>

      {/* Center Zone: Lower-Centered Sky Wordmark */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 text-center my-auto py-2 sm:py-4">
        <h1 className="font-display text-[56px] sm:text-[72px] md:text-[88px] lg:text-[98px] xl:text-[108px] leading-[0.88] tracking-[-0.02em] text-white drop-shadow-md">
          PICTURE
          <br />
          PERFECT
        </h1>
        <p className="font-editorial italic font-normal text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] text-white -mt-2 sm:-mt-2.5 md:-mt-3.5 tracking-tight drop-shadow-md">
          Photography
        </p>
      </div>

      {/* Bottom Zone: Bottom Corner Metadata */}
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
