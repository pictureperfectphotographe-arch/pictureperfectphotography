import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData, productionOfferings } from "@/data/services";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Picture Perfect Photography",
  description:
    "Explore our complete photography and cinematic film services in Hyderabad: Weddings, Pre-Weddings, Maternity, Baby & Cradle Ceremonies, Drone & Heirloom Albums.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-16 md:py-24 border-b border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase mb-4">
            OUR DISCIPLINES & SERVICES
          </span>
          <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight max-w-4xl">
            CRAFTED FOR YOUR{" "}
            <span className="font-editorial lowercase italic font-normal text-[56px] sm:text-[76px] md:text-[96px]">
              milestones.
            </span>
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#777777] max-w-2xl mt-6 leading-relaxed">
            From multi-day Telugu wedding celebrations to intimate cradle ceremonies, our multidisciplinary team provides comprehensive photographic and cinematic documentation.
          </p>
        </div>
      </section>

      {/* Main Services Deep-Dive */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-20">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Card */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 overflow-hidden shadow-xs">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-103"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div>
                    <span className="text-[12px] font-medium tracking-widest text-[#777777] uppercase font-body">
                      SERVICE {service.number}
                    </span>
                    <h2 className="font-display text-[36px] sm:text-[44px] uppercase tracking-tight text-[#171717] leading-none mt-1">
                      {service.title}
                    </h2>
                    <p className="font-editorial text-[20px] md:text-[22px] text-[#444444] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-[15px] text-[#555555] font-body leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#D8D2CA]">
                    <span className="block text-[11px] font-semibold tracking-wider text-[#171717] uppercase">
                      INCLUDED IN COVERAGE:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#444444] font-body">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#171717] shrink-0 stroke-[2]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#171717] text-white text-[11px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#171717] hover:underline"
                    >
                      <span>REQUEST QUOTE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Production Offerings List */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-t border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-12">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase block mb-2">
              EQUIPMENT & CAPABILITIES
            </span>
            <h2 className="font-display text-[38px] md:text-[50px] uppercase tracking-tight text-[#171717] leading-none">
              PRODUCTION OFFERINGS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionOfferings.map((item) => (
              <div key={item.number} className="bg-white p-6 border border-[#D8D2CA] space-y-3">
                <span className="text-[12px] font-semibold tracking-widest text-[#777777]">
                  {item.number}
                </span>
                <h3 className="font-display text-[20px] uppercase tracking-tight text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#555555] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
