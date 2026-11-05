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

  const isHome = pathname === "/";
  // On the homepage, header starts transparent over the fullscreen hero and transitions on scroll
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change during render
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isTransparent
          ? "bg-transparent py-4 text-white border-b border-transparent"
          : scrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#D8D2CA] text-[#171717]"
          : "bg-[#FAF9F6] py-4 border-b border-[#D8D2CA] text-[#171717]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center py-0.5">
          <Image
            src={isTransparent ? "/logo/PP-Logo-White-trimmed.png" : "/logo/PP-Logo-Black-trimmed.png"}
            alt="Picture Perfect Photography"
            width={160}
            height={52}
            priority
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[12px] lg:text-[13px] font-medium tracking-[0.14em] font-body"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isTransparent
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-white/85 hover:text-white"
                    : isActive
                    ? "text-[#171717] font-semibold"
                    : "text-[#777777] hover:text-[#171717]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                      isTransparent ? "bg-white" : "bg-[#171717]"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full border text-[12px] font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
              isTransparent
                ? "border-white text-white hover:bg-white hover:text-[#171717]"
                : "border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white"
            }`}
          >
            <span>GET A QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-hidden transition-colors ${
            isTransparent ? "text-white" : "text-[#171717]"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#FAF9F6] text-[#171717] z-40 px-6 py-8 flex flex-col justify-between md:hidden border-t border-[#D8D2CA] animate-fadeIn">
          <div>
            <div className="flex items-center pb-6 border-b border-[#D8D2CA] mb-6">
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
                    pathname === item.href ? "text-[#171717] underline underline-offset-8" : "text-[#777777] hover:text-[#171717]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#D8D2CA] space-y-4">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#171717] text-white text-[13px] font-medium tracking-wider uppercase rounded-sm"
            >
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 border border-[#171717] text-[#171717] text-[13px] font-medium tracking-wider uppercase rounded-sm hover:bg-[#FAF9F6]"
            >
              <Phone className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <div className="text-center text-[12px] text-[#777777] pt-2">
              Manikonda, Hyderabad • Pan-India Coverage
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
