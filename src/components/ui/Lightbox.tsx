"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MapPin, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface LightboxProps {
  project: Project | null;
  onClose: () => void;
}

function getStorySlug(id: string): string {
  if (id.includes("aarav") || id.includes("steps")) return "aarav-milestone";
  if (id.includes("maternity")) return "shashidhar-maternity";
  if (id.includes("sunset") || id.includes("pastels") || id.includes("palace"))
    return "nithin-hasini";
  if (id.includes("pellikuthuru")) return "pradeep-reddy";
  if (id.includes("silver") || id.includes("anniversary")) return "silver-jubilee-gala";
  return "akhila-vepunder";
}

export default function Lightbox({ project, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const storySlug = getStorySlug(project.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors focus:outline-hidden cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] md:h-[75vh]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            priority
            sizes="90vw"
          />
        </div>

        {/* Metadata Bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white border-t border-neutral-800 pt-3 gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
              {project.category}
            </span>
            <h3 className="font-display text-[22px] md:text-[26px] tracking-tight uppercase text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-neutral-400 text-[12px]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>
            <Link
              href={`/portfolio/${storySlug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-white hover:text-[#B8A27A] transition-colors bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full"
            >
              <span>VIEW FULL STORY</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
