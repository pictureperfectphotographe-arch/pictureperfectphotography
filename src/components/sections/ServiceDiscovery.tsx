"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServiceDiscovery() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#E5E5E5]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#111111] uppercase">
            EXPLORE OUR SERVICES
          </span>
          <Link
            href="/services"
            className="group flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] text-[#111111] uppercase hover:text-neutral-600 transition-colors"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 5 Vertical Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative block aspect-[3/5] w-full overflow-hidden bg-neutral-900 transition-transform duration-500 hover:-translate-y-1.5"
            >
              {/* Photograph */}
              <Image
                src={service.image}
                alt={`${service.title} by Picture Perfect Photographe`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />

              {/* Gradient Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Card Content at bottom */}
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end text-white select-none">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase mb-1">
                  {service.number}
                </span>
                <h3 className="font-display text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[0.95] tracking-tight uppercase text-white mb-3 whitespace-pre-line">
                  {service.titleDisplay || service.title}
                </h3>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
