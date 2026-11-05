"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects, Project } from "@/data/projects";
import Lightbox from "@/components/ui/Lightbox";

const categories = ["ALL", "WEDDINGS", "PRE-WEDDINGS", "MATERNITY", "BABY", "EVENTS"] as const;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "ALL"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
            FEATURED PORTFOLIO
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight max-w-4xl">
            A CURATED ARCHIVE OF{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              emotions.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#777777] max-w-2xl mt-6 leading-relaxed">
            Explore authentic moments documented across Hyderabad, Telangana, and destination locations across India. Every photograph is captured with natural lighting and deliberate editorial composition.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-10">
            {categories.map((cat) => {
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
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer shadow-xs"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-300 mb-1">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="font-display text-[20px] uppercase tracking-tight text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-neutral-300 font-body line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
