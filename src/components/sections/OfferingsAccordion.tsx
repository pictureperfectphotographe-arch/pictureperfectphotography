"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { productionOfferings } from "@/data/services";

export default function OfferingsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#EFEFEF]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Typographic Accordion (Span 7) */}
          <div className="lg:col-span-7">
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase mb-2">
              OUR OFFERINGS
            </span>
            <h2 className="font-display text-[42px] sm:text-[54px] md:text-[68px] leading-[0.92] text-[#111111] uppercase tracking-[-0.015em] mb-10">
              YOUR DAY,{" "}
              <span className="font-editorial text-[44px] sm:text-[56px] md:text-[72px] lowercase font-normal italic tracking-normal text-[#111111]">
                your way.
              </span>
            </h2>

            {/* Accordion List */}
            <div className="divide-y divide-[#DEDEDE] border-t border-b border-[#DEDEDE]">
              {productionOfferings.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.number} className="py-4 md:py-5">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between text-left group focus:outline-hidden cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-baseline gap-4 md:gap-6">
                        <span className="text-[12px] md:text-[13px] font-medium tracking-widest text-[#707070] font-body">
                          {item.number}
                        </span>
                        <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] uppercase text-[#111111] tracking-tight group-hover:text-neutral-700 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="p-1 rounded-full text-[#111111] transition-transform duration-300">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#111111]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#111111] group-hover:scale-110" />
                        )}
                      </div>
                    </button>

                    {/* Smooth Collapsible Content */}
                    {isOpen && (
                      <div className="pt-4 pb-2 pl-9 md:pl-12 pr-4 text-[#444444] font-body text-[14px] md:text-[15px] leading-relaxed animate-fadeIn">
                        <p className="mb-4">{item.description}</p>
                        <Link
                          href={`/services#${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#111111] hover:underline"
                        >
                          <span>Explore Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Photographer Side Image with Editorial Caption (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden shadow-xs">
              <Image
                src="/images/offerings_photographer.jpg"
                alt="Picture Perfect Photographe Camera and Team in Hyderabad"
                fill
                priority
                loading="eager"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-6 md:p-8 text-white select-none">
                <span className="block w-6 h-[1.5px] bg-white mb-3" />
                <p className="font-display text-[20px] md:text-[24px] uppercase tracking-tight text-white leading-tight max-w-xs">
                  A COMPLETE VISUAL STORY FOR EVERY CELEBRATION.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
