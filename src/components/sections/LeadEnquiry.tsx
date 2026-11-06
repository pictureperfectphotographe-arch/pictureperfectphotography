"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";

export default function LeadEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    eventDate: "",
    eventLocation: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name and phone number so we can reach you.");
      return;
    }

    setStatus("submitting");

    // Simulate lead submission and save to local state
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <section id="enquiry" className="w-full bg-[#171717] text-white py-20 md:py-28">
      <div className="max-w-[1480px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#B5B5B5] uppercase mb-3">
                LET&apos;S CREATE TOGETHER
              </span>
              <h2 className="font-display text-[48px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[0.92] text-white uppercase tracking-[-0.015em] mb-6">
                YOUR STORY,
                <br />
                <span className="font-editorial lowercase italic font-normal text-[52px] sm:text-[66px] md:text-[80px] lg:text-[88px] text-[#B4777C] inline-flex items-center gap-2">
                  next?
                  <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 stroke-[1.5] text-[#B4777C] inline-block -mt-2" />
                </span>
              </h2>
              <p className="font-body text-[15px] md:text-[16px] text-[#B5B5B5] leading-relaxed max-w-sm mb-8">
                Tell us about your event and get a personalised quotation from our creative team in Hyderabad.
              </p>
            </div>

            {/* Direct WhatsApp Pill */}
            <div className="pt-6 border-t border-[#2A2A2A]">
              <span className="block text-[11px] uppercase tracking-wider text-[#B5B5B5] mb-3">
                Prefer immediate response?
              </span>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#444444] text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-[12px] font-medium tracking-wider uppercase"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CHAT DIRECTLY ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Premium Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 sm:p-10 lg:p-12 border border-[#2E2E2E] shadow-xl">
            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fadeIn">
                <CheckCircle2 className="w-14 h-14 text-white mb-4 stroke-1" />
                <h3 className="font-display text-[28px] uppercase tracking-tight text-white mb-2">
                  THANK YOU, {formData.name.toUpperCase()}!
                </h3>
                <p className="text-[15px] text-[#B5B5B5] max-w-md mx-auto mb-6">
                  Your enquiry has been received. Our lead coordinator in Manikonda, Hyderabad will review your event details and respond within 24 hours.
                </p>
                <a
                  href={`https://wa.me/918919265544?text=${encodeURIComponent(
                    `Hi Picture Perfect, I just submitted a website enquiry for my ${formData.eventType} on ${formData.eventDate || "an upcoming date"}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-[12px] font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-[13px] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sanjana Rao"
                      className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white placeholder-white/35 text-[15px] focus:outline-hidden transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white placeholder-white/35 text-[15px] focus:outline-hidden transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white text-[15px] focus:outline-hidden transition-all duration-200 cursor-pointer"
                    >
                      <option value="Wedding" className="bg-[#1A1A1A] text-white">Wedding (Muhurtham & Reception)</option>
                      <option value="Pre-Wedding" className="bg-[#1A1A1A] text-white">Pre-Wedding Shoot</option>
                      <option value="Maternity" className="bg-[#1A1A1A] text-white">Maternity & Seemantham</option>
                      <option value="Cradle Ceremony" className="bg-[#1A1A1A] text-white">Baby Cradle & Naming Ceremony</option>
                      <option value="Event / Family" className="bg-[#1A1A1A] text-white">Family Event / Celebration</option>
                      <option value="Cinematic Films" className="bg-[#1A1A1A] text-white">Cinematic Wedding Film</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white text-[15px] focus:outline-hidden transition-all duration-200 [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad, Secunderabad, or Destination"
                    className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white placeholder-white/35 text-[15px] focus:outline-hidden transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CCCCCC] mb-1.5">
                    Message / Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event scale, required services (photography, films, drone, albums), or questions..."
                    className="w-full bg-[#222222]/60 hover:bg-[#222222]/90 focus:bg-[#242424] px-3.5 py-2.5 border-b-2 border-[#444444] focus:border-white text-white placeholder-white/35 text-[15px] focus:outline-hidden transition-all duration-200 resize-none"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-[#57000F] hover:bg-[#43000C] text-white font-semibold text-[13px] tracking-[0.16em] uppercase flex items-center justify-center gap-2 active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md"
                  >
                    <span>{status === "submitting" ? "SENDING ENQUIRY..." : "GET A QUOTE"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-[11px] text-[#A0A0A0] text-center mt-3 font-body">
                    We respect your privacy. No spam. Direct response from our creative directors.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
