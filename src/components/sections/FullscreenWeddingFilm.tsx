"use client";

import React, { useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function FullscreenWeddingFilm() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  return (
    <section
      aria-label="Picture Perfect Photography Cinematic Wedding Film"
      className="relative w-full overflow-hidden bg-[#171717] m-0 p-0 border-0 leading-none h-[60svh] sm:h-[70svh] md:h-[88vh] lg:h-[92vh]"
    >
      {/* High-Resolution Poster Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_wedding_garland.jpg')" }}
      />

      {/* Edge-to-Edge Ambient Fullscreen Video: Akhila & Vepunder Wedding Video 4K (YouTube ID: _vcd55hbiso) */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube-nocookie.com/embed/_vcd55hbiso?autoplay=1&mute=1&loop=1&playlist=_vcd55hbiso&controls=0&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1"
            title="Picture Perfect Photography Cinematic Wedding Film"
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100%] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
          />
        </div>
      )}
    </section>
  );
}
