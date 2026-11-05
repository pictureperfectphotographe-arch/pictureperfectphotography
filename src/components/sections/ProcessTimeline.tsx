"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "ENQUIRE",
    description: "Share your event details with us.",
  },
  {
    number: "02",
    title: "PLAN",
    description: "We discuss your vision and create a coverage plan.",
  },
  {
    number: "03",
    title: "CAPTURE",
    description: "Our team documents every important moment.",
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Relive your story through films, photos and albums.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full bg-[#FAF9F6] py-16 md:py-24 border-t border-[#D8D2CA]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-14 md:mb-20">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-2">
            OUR PROCESS
          </span>
          <h2 className="font-display text-[42px] sm:text-[54px] md:text-[68px] leading-[0.92] text-[#171717] uppercase tracking-[-0.015em]">
            FOUR STEPS TO{" "}
            <span className="font-editorial text-[44px] sm:text-[56px] md:text-[72px] lowercase font-normal italic tracking-normal text-[#171717]">
              forever.
            </span>
          </h2>
        </div>

        {/* Timeline Graphic & Steps */}
        <div className="relative">
          {/* Subtle Connecting Wave Line across desktop */}
          <div className="hidden md:block absolute top-[6px] left-[5%] right-[5%] h-[1px] bg-[#D8D2CA] z-0">
            <svg
              className="absolute -top-3 left-0 w-full h-7 overflow-visible pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 1000 20"
            >
              <path
                d="M 0 10 Q 250 -4 500 10 T 1000 10"
                fill="none"
                stroke="#D8D2CA"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start pt-2">
                {/* Step Indicator Dot */}
                <div className="w-3 h-3 rounded-full bg-[#171717] ring-4 ring-white mb-6" />

                {/* Step Number & Title */}
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mb-1 font-body">
                  {step.number}
                </span>
                <h3 className="font-display text-[22px] md:text-[26px] tracking-tight uppercase text-[#171717] mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#777777] font-body leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
