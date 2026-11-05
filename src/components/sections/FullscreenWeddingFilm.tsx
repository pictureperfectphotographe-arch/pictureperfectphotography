"use client";

import React, { useEffect, useRef } from "react";

export default function FullscreenWeddingFilm() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // Section is in view: attempt playback
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay may be restricted by browser until interaction; silent fallback
              });
            }
          } else {
            // Section is out of view: pause playback to preserve system performance
            video.pause();
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5],
      }
    );

    observer.observe(section);

    // Pause when switching tabs, resume when active and still in view
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && !prefersReducedMotion) {
          video.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Picture Perfect Photography Wedding Film"
      className="relative w-full overflow-hidden bg-[#171717] m-0 p-0 border-0 leading-none"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero_wedding_garland.jpg"
        className="block w-full h-[60svh] sm:h-[70svh] md:h-[88vh] lg:h-[92vh] object-cover"
      >
        <source src="/videos/wedding-showreel.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
