"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { FilmItem } from "@/data/films";

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
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors focus:outline-hidden cursor-pointer"
        aria-label="Close video player"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-4xl w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video bg-black shadow-2xl rounded-sm overflow-hidden border border-neutral-800">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
            title={film.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-white border-t border-neutral-800 pt-3 gap-3">
          <div>
            <h3 className="font-display text-[18px] md:text-[22px] uppercase tracking-tight text-white">
              {film.title}
            </h3>
            <p className="text-[12px] text-neutral-400 font-body">
              {film.category || "Cinematic Film"} • {film.duration}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={film.youtubeUrl || `https://www.youtube.com/watch?v=${film.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wider text-neutral-300 hover:text-white uppercase transition-colors"
            >
              <span>WATCH ON YOUTUBE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
