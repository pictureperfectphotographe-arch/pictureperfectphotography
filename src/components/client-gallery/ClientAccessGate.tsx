"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, ArrowLeft } from "lucide-react";
import { unlockClientGallery } from "@/app/client-gallery/actions";

interface ClientAccessGateProps {
  slug: string;
  galleryTitle: string;
  gallerySubtitle: string;
}

export default function ClientAccessGate({
  slug,
  galleryTitle,
  gallerySubtitle,
}: ClientAccessGateProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) {
      setError("Please enter your private gallery access key.");
      return;
    }

    setError(null);
    startTransition(async () => {
      const result = await unlockClientGallery(slug, pin);
      if (!result.success) {
        setError(result.error || "Access denied. Invalid credentials.");
      }
    });
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-6 py-20 bg-[#FAF9F6]">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Lock Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#171717] text-white mb-6">
          <Lock className="w-6 h-6 stroke-[1.75]" />
        </div>

        <span className="block text-[11px] font-semibold tracking-[0.24em] text-[#777777] uppercase mb-2">
          CONFIDENTIAL CLIENT ARCHIVE
        </span>

        <h1 className="font-display text-[36px] sm:text-[44px] uppercase tracking-tight text-[#171717] leading-tight">
          {galleryTitle}
        </h1>
        <p className="text-[13px] uppercase tracking-[0.18em] text-[#777777] font-medium mt-1 mb-8">
          {gallerySubtitle}
        </p>

        <p className="font-body text-[14px] text-[#777777] leading-relaxed mb-8">
          This collection contains the complete, private high-resolution photographic record. Please enter the secure access key provided by Picture Perfect Photography.
        </p>

        {/* Access Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                if (error) setError(null);
              }}
              placeholder="ENTER ACCESS KEY"
              autoComplete="off"
              className="w-full px-5 py-4 text-center tracking-[0.25em] font-mono text-[16px] uppercase bg-white border border-[#D8D2CA] focus:border-[#171717] focus:outline-hidden transition-colors rounded-none placeholder:font-sans placeholder:tracking-widest placeholder:text-[12px] placeholder:text-[#999999]"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[12px] font-medium leading-relaxed">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-4 bg-[#171717] text-white hover:bg-[#333333] transition-colors text-[11px] font-semibold tracking-[0.22em] uppercase cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
          >
            <span>{isPending ? "VERIFYING CREDENTIALS..." : "ACCESS ARCHIVE"}</span>
            {!isPending && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        {/* Security Notice */}
        <div className="mt-10 pt-8 border-t border-[#D8D2CA] flex items-center justify-center gap-2 text-[#777777] text-[11px] tracking-wider uppercase">
          <ShieldCheck className="w-4 h-4 text-[#B8A27A]" />
          <span>Server-Side Encrypted Client Access</span>
        </div>

        <div className="mt-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#777777] hover:text-[#171717] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO PUBLIC PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
