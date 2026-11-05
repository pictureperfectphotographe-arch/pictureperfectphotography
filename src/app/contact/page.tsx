import React from "react";
import LeadEnquiry from "@/components/sections/LeadEnquiry";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export const metadata = {
  title: "Contact Us | Picture Perfect Photography",
  description:
    "Get in touch with Picture Perfect Photography in Manikonda, Hyderabad. Request a quotation for weddings, events, pre-weddings, films, or connect directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 border-b border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
            START THE CONVERSATION
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight max-w-4xl">
            LET&apos;S TALK ABOUT YOUR{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              story.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#777777] max-w-2xl mt-6 leading-relaxed">
            Whether you are planning a multi-day Telugu wedding, an intimate cradle ceremony, or a cinematic pre-wedding shoot, we would love to hear from you.
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#D8D2CA]">
            <div className="p-6 bg-white border border-[#D8D2CA] space-y-2">
              <Phone className="w-5 h-5 text-[#171717]" />
              <span className="text-[11px] uppercase tracking-wider text-[#777777] block font-body">
                Call / WhatsApp
              </span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-display text-[18px] uppercase text-[#171717] hover:underline block"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="p-6 bg-white border border-[#D8D2CA] space-y-2">
              <Mail className="w-5 h-5 text-[#171717]" />
              <span className="text-[11px] uppercase tracking-wider text-[#777777] block font-body">
                Email Directly
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-display text-[14px] uppercase text-[#171717] hover:underline block truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="p-6 bg-white border border-[#D8D2CA] space-y-2">
              <MapPin className="w-5 h-5 text-[#171717]" />
              <span className="text-[11px] uppercase tracking-wider text-[#777777] block font-body">
                Base Studio
              </span>
              <span className="font-display text-[18px] uppercase text-[#171717] block">
                Manikonda, Hyderabad
              </span>
            </div>

            <div className="p-6 bg-white border border-[#D8D2CA] space-y-2">
              <Globe className="w-5 h-5 text-[#171717]" />
              <span className="text-[11px] uppercase tracking-wider text-[#777777] block font-body">
                Coverage
              </span>
              <span className="font-display text-[18px] uppercase text-[#171717] block">
                Available Pan-India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Lead Enquiry Section */}
      <LeadEnquiry />
    </div>
  );
}
