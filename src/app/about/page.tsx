import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Award, Camera, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Picture Perfect Photographe",
  description:
    "Learn about Picture Perfect Photographe, established in 2016 in Madhapur, Hyderabad. Discover our philosophy, capabilities, and pan-India coverage.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Editorial Page Header */}
      <section className="py-16 md:py-24 border-b border-[#EFEFEF]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase mb-4">
            OUR STORY & CAPABILITIES
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#111111] uppercase tracking-tight max-w-4xl">
            DOCUMENTING LIFE WITH{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              soul.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#555555] max-w-2xl mt-6 leading-relaxed">
            Established in 2016 in Madhapur, Hyderabad, Picture Perfect Photographe is an editorial photography and cinematic filmmaking studio dedicated to capturing genuine emotions, sacred rituals, and joyful family celebrations across India.
          </p>
        </div>
      </section>

      {/* Philosophy & Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-xs">
              <Image
                src="/images/offerings_photographer.jpg"
                alt="Picture Perfect Photographe Camera Production Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <Image
                  src="/logo/PP-Logo-Black-trimmed.png"
                  alt="Picture Perfect Photography"
                  width={140}
                  height={50}
                  className="h-10 w-auto object-contain mb-6"
                />
                <span className="block text-[11px] font-semibold tracking-[0.2em] text-[#707070] uppercase mb-2">
                  ESTABLISHED 2016
                </span>
                <h2 className="font-display text-[36px] sm:text-[44px] uppercase tracking-tight text-[#111111] leading-tight">
                  ARTISTIC VISION, UNCOMPROMISING PRODUCTION
                </h2>
              </div>

              <p className="text-[15px] md:text-[16px] text-[#444444] font-body leading-relaxed">
                We believe that every wedding, ceremony, and milestone possesses its own rhythm. Rather than imposing artificial poses or rigid formulas, our approach is observant, respectful, and deeply empathetic.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E5E5E5]">
                <div>
                  <span className="font-display text-[32px] md:text-[40px] text-[#111111] block">
                    2016
                  </span>
                  <span className="text-[12px] uppercase tracking-wider text-[#707070] font-medium font-body">
                    Established Year
                  </span>
                </div>
                <div>
                  <span className="font-display text-[32px] md:text-[40px] text-[#111111] block">
                    PAN-INDIA
                  </span>
                  <span className="text-[12px] uppercase tracking-wider text-[#707070] font-medium font-body">
                    Destination Travel
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-white text-[12px] font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                >
                  <span>CONNECT WITH OUR TEAM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Standards */}
      <section className="py-16 md:py-24 bg-[#F7F7F7] border-t border-[#EAEAEA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase block mb-2">
              PRODUCTION CAPABILITIES
            </span>
            <h2 className="font-display text-[36px] md:text-[48px] uppercase tracking-tight text-[#111111]">
              WHAT SETS US APART
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#E5E5E5] space-y-4">
              <Camera className="w-8 h-8 text-[#111111] stroke-1" />
              <h3 className="font-display text-[22px] uppercase tracking-tight text-[#111111]">
                FULL PRODUCTION CREW
              </h3>
              <p className="text-[14px] text-[#555555] font-body leading-relaxed">
                Multi-camera cinematic setups, synchronized audio capture, licensed drone cinematography, and dedicated backup equipment for zero-downtime event coverage.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E5E5E5] space-y-4">
              <Award className="w-8 h-8 text-[#111111] stroke-1" />
              <h3 className="font-display text-[22px] uppercase tracking-tight text-[#111111]">
                EDITORIAL COLOR GRADING
              </h3>
              <p className="text-[14px] text-[#555555] font-body leading-relaxed">
                Our in-house post-production artists color grade every deliverable individually, honoring natural skin tones, ceremonial hues, and timeless cinematic color profiles.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E5E5E5] space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#111111] stroke-1" />
              <h3 className="font-display text-[22px] uppercase tracking-tight text-[#111111]">
                ARCHIVAL BACKUP & CARE
              </h3>
              <p className="text-[14px] text-[#555555] font-body leading-relaxed">
                Dual memory card redundancy during shoots, high-speed mirrored cloud backups, and long-term file preservation so your memories remain safe forever.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
