"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects, Project } from "@/data/projects";
import Lightbox from "@/components/ui/Lightbox";

const filterCategories = [
  "ALL",
  "WEDDINGS",
  "PRE-WEDDINGS",
  "MATERNITY",
  "BABY",
  "EVENTS",
] as const;

export default function FeaturedGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "ALL"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  // Reference layout specific projects:
  const coupleLarge = portfolioProjects.find((p) => p.id === "sanjana-karthik-wedding");
  const sunsetTree = portfolioProjects.find((p) => p.id === "gandipet-sunset-story");
  const babySmile = portfolioProjects.find((p) => p.id === "aarav-first-milestone");
  const couplePink = portfolioProjects.find((p) => p.id === "shamshabad-pastels");
  const handsRitual = portfolioProjects.find((p) => p.id === "vedic-rituals-detail");
  const brideSaree = portfolioProjects.find((p) => p.id === "pellikuthuru-radiance");
  const mandapVenue = portfolioProjects.find((p) => p.id === "garden-mandap-aisle");

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#D8D2CA]">
      <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-2">
              OUR WORK
            </span>
            <h2 className="font-display text-[42px] sm:text-[54px] md:text-[68px] leading-[0.92] text-[#171717] uppercase tracking-[-0.015em]">
              THE GOOD{" "}
              <span className="font-editorial text-[44px] sm:text-[56px] md:text-[72px] lowercase font-normal italic tracking-normal text-[#171717]">
                stuff.
              </span>
            </h2>
          </div>

          <div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] text-[#171717] uppercase hover:text-[#777777] transition-colors"
            >
              <span>EXPLORE FULL GALLERY</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#171717] text-white border border-[#171717]"
                    : "bg-white text-[#171717] border border-[#D8D2CA] hover:border-[#171717]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* If filtered to ALL: Render the exact asymmetric editorial reference composition */}
        {activeFilter === "ALL" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-start">
            {/* Left Column (Span 5) */}
            <div className="md:col-span-5 flex flex-col gap-4 lg:gap-5">
              {coupleLarge && (
                <div
                  onClick={() => setSelectedProject(coupleLarge)}
                  className="group relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 cursor-pointer"
                >
                  <Image
                    src={coupleLarge.image}
                    alt={coupleLarge.title}
                    fill
                    priority
                    loading="eager"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                    <span className="text-white text-[12px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider font-medium">
                      {coupleLarge.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Sub-row with two detail shots */}
              <div className="grid grid-cols-12 gap-4 lg:gap-5">
                {handsRitual && (
                  <div
                    onClick={() => setSelectedProject(handsRitual)}
                    className="col-span-5 group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 cursor-pointer min-h-[110px]"
                  >
                    <Image
                      src={handsRitual.image}
                      alt={handsRitual.title}
                      fill
                      priority
                      loading="eager"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 18vw"
                    />
                  </div>
                )}
                {brideSaree && (
                  <div
                    onClick={() => setSelectedProject(brideSaree)}
                    className="col-span-7 group relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 cursor-pointer min-h-[110px]"
                  >
                    <Image
                      src={brideSaree.image}
                      alt={brideSaree.title}
                      fill
                      priority
                      loading="eager"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 24vw"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Center Column (Span 4) */}
            <div className="md:col-span-4 flex flex-col gap-4 lg:gap-5">
              {sunsetTree && (
                <div
                  onClick={() => setSelectedProject(sunsetTree)}
                  className="group relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 cursor-pointer"
                >
                  <Image
                    src={sunsetTree.image}
                    alt={sunsetTree.title}
                    fill
                    priority
                    loading="eager"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {babySmile && (
                <div
                  onClick={() => setSelectedProject(babySmile)}
                  className="group relative w-full aspect-[16/9] overflow-hidden bg-neutral-100 cursor-pointer min-h-[110px]"
                >
                  <Image
                    src={babySmile.image}
                    alt={babySmile.title}
                    fill
                    priority
                    loading="eager"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {mandapVenue && (
                <div
                  onClick={() => setSelectedProject(mandapVenue)}
                  className="group relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 cursor-pointer min-h-[140px]"
                >
                  <Image
                    src={mandapVenue.image}
                    alt={mandapVenue.title}
                    fill
                    priority
                    loading="eager"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
            </div>

            {/* Right Column (Span 3) */}
            <div className="md:col-span-3 flex flex-col gap-5 lg:gap-6">
              {couplePink && (
                <div
                  onClick={() => setSelectedProject(couplePink)}
                  className="group relative w-full aspect-[4/5] overflow-hidden bg-neutral-100 cursor-pointer"
                >
                  <Image
                    src={couplePink.image}
                    alt={couplePink.title}
                    fill
                    priority
                    loading="eager"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                    <span className="text-white text-[12px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider font-medium">
                      {couplePink.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Editorial Statement matching reference */}
              <div className="pt-6 pb-2 border-t border-[#D8D2CA] flex flex-col justify-start">
                <span className="block w-6 h-[1.5px] bg-[#171717] mb-4" />
                <h3 className="font-display text-[22px] md:text-[24px] lg:text-[28px] uppercase tracking-tight text-[#171717] leading-[1.05]">
                  A COLLECTION
                  <br />
                  OF MOMENTS
                  <br />
                  THAT MATTER.
                </h3>
                <p className="font-body text-[13px] text-[#777777] mt-3 leading-relaxed">
                  Every celebration documented with natural light, honest emotions, and intentional editorial composition.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-104"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-300">
                    {project.category}
                  </span>
                  <h4 className="font-display text-[18px] uppercase">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full-screen Lightbox */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
