import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Privacy Policy | Picture Perfect Photography",
  description: "Privacy policy, image copyright, and client data handling policies of Picture Perfect Photography.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[840px] mx-auto px-6 md:px-12 space-y-10">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#737373] uppercase block mb-2 font-body">
            CLIENT CONFIDENTIALITY & DATA
          </span>
          <h1 className="font-display text-[44px] md:text-[60px] uppercase tracking-tight text-[#111111] leading-tight">
            PRIVACY POLICY
          </h1>
          <p className="text-[13px] text-[#737373] font-body mt-2">
            Last updated: November 2026 • Picture Perfect Photography, Manikonda, Hyderabad
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-[15px] text-[#444444] font-body leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              1. Information We Collect
            </h2>
            <p>
              When you enquire with Picture Perfect Photography via our website, quotation form, or WhatsApp, we collect details necessary to provide you with an accurate quote and service plan. This includes your name, phone number, email address, event dates, event venues, and specific service preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              2. Photography & Client Privacy
            </h2>
            <p>
              We deeply respect your family&apos;s privacy and intimacy. We never publish private ceremonies or sensitive family moments on our website, social media, or marketing materials without explicit client consent. If you prefer a completely private assignment where photographs are strictly delivered to you without public portfolio display, we honor that in our coverage agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              3. Data Security & Archival Storage
            </h2>
            <p>
              Your personal contact information is never sold, rented, or shared with third-party advertisers. All client raw footage and finished high-resolution edits are preserved on secure redundant storage arrays for safety and archival retrieval.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-[22px] uppercase text-[#111111]">
              4. Contact Us
            </h2>
            <p>
              If you have any questions regarding your data or image usage, please contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-black underline">
                {siteConfig.contact.email}
              </a>{" "}
              or via WhatsApp at{" "}
              <a href={siteConfig.contact.whatsappLink} className="text-black underline">
                {siteConfig.contact.phoneDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
