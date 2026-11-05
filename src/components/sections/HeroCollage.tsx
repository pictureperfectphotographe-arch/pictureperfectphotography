"use client";

import React from "react";
import Image from "next/image";

export default function HeroCollage() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] sm:min-h-[660px] md:min-h-[720px] -mt-[72px] md:-mt-[80px] overflow-hidden flex flex-col justify-between select-none">
      {/* Background Fullscreen Landscape Image */}
      <Image
        src="/images/films/film_sahithi_lalith.jpg"
        alt="Picture Perfect Photography - Editorial Wedding Photography Hyderabad"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center motion-safe:transition-opacity motion-safe:duration-700"
      />

      {/* Subtle Editorial Gradient Overlay for Typography Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/65 pointer-events-none"
        aria-hidden="true"
      />

      {/* Upper Zone: Metadata Top Left & Top Right */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pt-[88px] sm:pt-[96px] md:pt-[104px] flex items-start justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 leading-tight">
        {/* Top Left Metadata */}
        <div>
          <p>WEDDINGS</p>
          <p>CELEBRATIONS</p>
          <p className="text-white/70">LIFE EVENTS</p>
        </div>

        {/* Top Right Metadata */}
        <div className="text-right">
          <p>SINCE 2021</p>
        </div>
      </div>

      {/* Center Zone: Monumental Brand Wordmark */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 text-center my-auto py-4">
        <h1 className="font-display text-[60px] sm:text-[88px] md:text-[118px] lg:text-[144px] leading-[0.88] tracking-[-0.02em] text-white drop-shadow-md">
          PICTURE
          <br />
          PERFECT
        </h1>
        <p className="font-editorial italic font-normal text-[38px] sm:text-[54px] md:text-[74px] lg:text-[90px] text-white -mt-2.5 sm:-mt-5 md:-mt-7 lg:-mt-9 tracking-tight drop-shadow-md">
          Photography
        </p>
      </div>

      {/* Bottom Zone: Metadata Bottom Left & Bottom Right */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-8 sm:pb-10 md:pb-12 flex items-end justify-between text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/90 leading-tight">
        {/* Bottom Left Metadata */}
        <div>
          <p>MANIKONDA, HYDERABAD /</p>
          <p className="text-white/70">AVAILABLE PAN-INDIA</p>
        </div>

        {/* Bottom Right Metadata */}
        <div className="text-right">
          <p>PHOTOGRAPHY</p>
          <p>FILMS</p>
          <p className="text-white/70">STORIES</p>
        </div>
      </div>
    </section>
  );
}
