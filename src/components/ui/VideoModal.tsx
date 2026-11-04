"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { FilmItem } from "@/data/projects";

interface VideoModalProps {
  film: FilmItem | null;
  onClose: () => void;
}

export default function VideoModal({ film, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (film) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={film.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors focus:outline-hidden"
        aria-label="Close video player"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-4xl w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video bg-black shadow-2xl rounded-sm overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
            title={film.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="w-full mt-4 flex items-center justify-between text-white border-t border-neutral-800 pt-3">
          <div>
            <h3 className="font-display text-[20px] md:text-[24px] uppercase tracking-tight text-white">
              {film.title}
            </h3>
            <p className="text-[12px] text-neutral-400 font-body">
              {film.couple} • {film.location}
            </p>
          </div>
          <span className="text-[11px] font-medium tracking-wider text-neutral-400 uppercase">
            {film.duration}
          </span>
        </div>
      </div>
    </div>
  );
}
