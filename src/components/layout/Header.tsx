"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E5E5E5]"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center py-0.5">
          <Image
            src="/logo/PP-Logo-Black-trimmed.png"
            alt="Picture Perfect Photography"
            width={160}
            height={52}
            priority
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[12px] lg:text-[13px] font-medium tracking-[0.14em] font-body text-[#111111]"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? "text-[#111111] font-semibold" : "text-[#737373] hover:text-[#111111]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full border border-[#111111] text-[12px] font-medium tracking-[0.1em] text-[#111111] uppercase hover:bg-[#111111] hover:text-white transition-all duration-300"
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] focus:outline-hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-white z-40 px-6 py-8 flex flex-col justify-between md:hidden border-t border-[#E5E5E5] animate-fadeIn">
          <div>
            <div className="flex items-center pb-6 border-b border-[#E5E5E5] mb-6">
              <Image
                src="/logo/PP-Logo-Black-trimmed.png"
                alt="Picture Perfect Photography"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </div>

            <nav className="flex flex-col space-y-5 text-left">
              {siteConfig.navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-display text-[26px] tracking-tight uppercase ${
                    pathname === item.href ? "text-[#111111] underline underline-offset-8" : "text-[#737373] hover:text-[#111111]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E5E5E5] space-y-4">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-white text-[13px] font-medium tracking-wider uppercase rounded-sm"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 border border-[#111111] text-[#111111] text-[13px] font-medium tracking-wider uppercase rounded-sm hover:bg-neutral-50"
            >
              <Phone className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <div className="text-center text-[12px] text-[#707070] pt-2">
              Madhapur, Hyderabad • Pan-India Coverage
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
