import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Terms & Conditions | Picture Perfect Photographe",
  description: "Terms and conditions, booking guidelines, and deliverables for Picture Perfect Photographe.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[840px] mx-auto px-6 md:px-12 space-y-10">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#707070] uppercase block mb-2 font-body">
            SERVICE AGREEMENT & GUIDELINES
          </span>
          <h1 className="font-display text-[44px] md:text-[60px] uppercase tracking-tight text-[#111111] leading-tight">
            TERMS & CONDITIONS
          </h1>
          <p className="text-[13px] text-[#707070] font-body mt-2">
            Picture Perfect Photographe • Madhapur, Hyderabad, Telangana
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-[15px] text-[#444444] font-body leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              1. Booking & Retainers
            </h2>
            <p>
              Dates are officially reserved upon receipt of an agreed advance retainer deposit and signed coverage agreement. Because we only accept a limited number of weddings and events per date to guarantee artistic standards, dates cannot be held without an advance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              2. Delivery Schedules
            </h2>
            <p>
              Our post-production timeline prioritizes hand-curated editorial quality:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[14px]">
              <li>Sneak-peek teaser stills: Delivered within 5–7 working days post-event.</li>
              <li>Complete color-graded high-resolution still library: 4–6 weeks.</li>
              <li>Cinematic teaser film and highlight trailer: 6–8 weeks.</li>
              <li>Heirloom albums: Dispatched within 3–4 weeks following final layout approval.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              3. Pan-India Travel & Logistics
            </h2>
            <p>
              For destination weddings and assignments outside Hyderabad/Telangana, travel, airport transfers, and lodging for the crew are arranged in mutual agreement with the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              4. Contact & Inquiries
            </h2>
            <p>
              For custom contracts or specific production inquiries, reach out at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-black underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
