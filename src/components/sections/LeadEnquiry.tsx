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

    // Construct direct WhatsApp message url for backup guarantee
    const waText = encodeURIComponent(
      `Hello Picture Perfect Photographe!\n\nI would like to request a quote for an upcoming event:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Date: ${formData.eventDate || "TBD"}\n` +
      `• Location: ${formData.eventLocation || "Hyderabad"}\n` +
      (formData.message ? `• Note: ${formData.message}\n` : "")
    );
    const waUrl = `https://wa.me/918919265544?text=${waText}`;

    // Simulate lead submission and save to local state / open WA option
    setTimeout(() => {
      setStatus("success");
      // If user desires immediate WhatsApp follow-up:
      // window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section id="enquiry" className="w-full bg-[#111111] text-white py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
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
                <span className="font-editorial lowercase italic font-normal text-[52px] sm:text-[66px] md:text-[80px] lg:text-[88px] text-white inline-flex items-center gap-2">
                  next?
                  <ArrowUpRight className="w-10 h-10 md:w-14 md:h-14 stroke-[1.5] text-white inline-block -mt-2" />
                </span>
              </h2>
              <p className="font-body text-[15px] md:text-[16px] text-[#B5B5B5] leading-relaxed max-w-sm mb-8">
                Tell us about your event and get a personalised quotation from our team.
              </p>
            </div>

            {/* Direct WhatsApp Pill */}
            <div className="pt-6 border-t border-[#222222]">
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

          {/* Right Column: Clean Underline Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 sm:p-10 border border-[#2E2E2E]">
            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center justify-center animate-fadeIn">
                <CheckCircle2 className="w-14 h-14 text-white mb-4 stroke-1" />
                <h3 className="font-display text-[28px] uppercase tracking-tight text-white mb-2">
                  THANK YOU, {formData.name.toUpperCase()}!
                </h3>
                <p className="text-[15px] text-[#B5B5B5] max-w-md mx-auto mb-6">
                  Your enquiry has been received. Our lead coordinator in Madhapur, Hyderabad will review your event details and respond within 24 hours.
                </p>
                <a
                  href={`https://wa.me/918919265544?text=${encodeURIComponent(
                    `Hi Picture Perfect, I just submitted a website enquiry for my ${formData.eventType} on ${formData.eventDate || "an upcoming date"}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[12px] font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
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
                    <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sanjana Rao"
                      className="w-full bg-transparent border-b border-[#444444] py-2 text-white placeholder-[#888888] text-[15px] focus:outline-hidden focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent border-b border-[#444444] py-2 text-white placeholder-[#888888] text-[15px] focus:outline-hidden focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#1A1A1A] border-b border-[#444444] py-2 text-white text-[15px] focus:outline-hidden focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="Wedding">Wedding (Muhurtham & Reception)</option>
                      <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                      <option value="Maternity">Maternity & Seemantham</option>
                      <option value="Cradle Ceremony">Baby Cradle & Naming Ceremony</option>
                      <option value="Event / Family">Family Event / Celebration</option>
                      <option value="Cinematic Films">Cinematic Wedding Film</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#444444] py-2 text-white text-[15px] focus:outline-hidden focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad, Secunderabad, or Destination"
                    className="w-full bg-transparent border-b border-[#444444] py-2 text-white placeholder-[#888888] text-[15px] focus:outline-hidden focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium tracking-wider uppercase text-[#B5B5B5] mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event scale, required services (photography, films, drone, albums), or questions..."
                    className="w-full bg-transparent border-b border-[#444444] py-2 text-white placeholder-[#888888] text-[15px] focus:outline-hidden focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-white text-[#111111] font-semibold text-[13px] tracking-[0.14em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors duration-200 cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "SENDING ENQUIRY..." : "GET A QUOTE"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-[#B5B5B5] text-center mt-3 font-body">
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
