"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#0D0D0D] text-white pt-16 md:pt-24 pb-8 border-t border-[#1C1C1C]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#222222]">
          {/* Column 1: Brand Info & Socials (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <Image
                  src="/logo/PP-Logo-White-trimmed.png"
                  alt="Picture Perfect Photography"
                  width={160}
                  height={54}
                  className="h-11 w-auto object-contain"
                />
              </div>
              <p className="text-[13px] md:text-[14px] text-[#888888] leading-relaxed max-w-sm mb-6 font-body">
                {siteConfig.tagline} Based in Hyderabad, documenting authentic celebrations across India.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 text-[#A0A0A0]">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2E2E2E] flex items-center justify-center hover:border-white hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2E2E2E] flex items-center justify-center hover:border-white hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2E2E2E] flex items-center justify-center hover:border-white hover:text-white transition-colors"
                aria-label="Google Business Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2E2E2E] flex items-center justify-center hover:border-white hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mb-4 font-body">
              QUICK LINKS
            </span>
            <ul className="space-y-2.5 text-[13px] text-[#A0A0A0] font-body">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/films" className="hover:text-white transition-colors">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (Span 3) */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-semibold tracking-[0.2em] text-[#777777] uppercase mb-4 font-body">
              GET IN TOUCH
            </span>
            <ul className="space-y-3 text-[13px] text-[#A0A0A0] font-body">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#777777] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#777777] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors truncate max-w-[200px]"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#777777] shrink-0" />
                <span>Madhapur, Hyderabad</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#777777] shrink-0" />
                <span>India-wide Coverage</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Oversized Editorial Brand Typography (Span 3) */}
          <div className="lg:col-span-3 flex flex-col justify-end pt-6 md:pt-0">
            <div className="font-display uppercase tracking-[-0.02em] leading-[0.88] text-[#444444] text-left text-[clamp(44px,13vw,62px)] md:text-[clamp(36px,4.8vw,46px)] lg:text-[clamp(32px,2.6vw,42px)] xl:text-[clamp(36px,2.9vw,48px)]">
              <span className="block whitespace-nowrap">PICTURE</span>
              <span className="block whitespace-nowrap">PERFECT</span>
              <span className="block whitespace-nowrap">PHOTOGRAPHE</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#666666] font-body gap-4">
          <p>© 2026 Picture Perfect Photographe. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy" className="hover:text-[#999999] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#999999] transition-colors">
              Terms
            </Link>
            <span>•</span>
            <span>Designed with ♥ for your stories</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
