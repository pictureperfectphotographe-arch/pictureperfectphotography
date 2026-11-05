import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { portfolioProjects } from "@/data/projects";
import { ArrowUpRight, ArrowLeft, Phone } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related portfolio projects matching category
  const relatedProjects = portfolioProjects.filter((p) => {
    if (service.category === "wedding") return p.category === "WEDDINGS";
    if (service.category === "pre-wedding") return p.category === "PRE-WEDDINGS";
    if (service.category === "maternity") return p.category === "MATERNITY";
    if (service.category === "baby") return p.category === "BABY";
    return p.category === "EVENTS";
  });

  return (
    <div className="w-full bg-white">
      {/* Top Breadcrumb */}
      <div className="border-b border-[#D8D2CA] py-4">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-wider uppercase text-[#777777] hover:text-[#171717]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
          <span className="text-[12px] font-medium tracking-widest text-[#777777] uppercase">
            SERVICE {service.number} / 05
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-14 md:py-20 border-b border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase block">
                {service.subtitle}
              </span>
              <h1 className="font-display text-[52px] sm:text-[68px] md:text-[84px] leading-[0.92] text-[#171717] uppercase tracking-tight">
                {service.title}
              </h1>
              <p className="font-body text-[16px] md:text-[18px] text-[#555555] leading-relaxed max-w-xl">
                {service.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717] text-white text-[12px] font-medium tracking-wider uppercase hover:bg-neutral-800 transition-colors"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/918919265544?text=${encodeURIComponent(
                    `Hi Picture Perfect, I'm enquiring about your ${service.title} photography services.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#171717] text-[#171717] text-[12px] font-medium tracking-wider uppercase hover:bg-[#FAF9F6] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WHATSAPP CONSULTATION</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-xs">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Deliverable Highlights */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] border-b border-[#D8D2CA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-12">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase block mb-2">
              DELIVERABLES & PROCESS
            </span>
            <h2 className="font-display text-[36px] md:text-[46px] uppercase tracking-tight text-[#171717]">
              WHAT IS INCLUDED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={feature} className="bg-white p-6 border border-[#D8D2CA] space-y-2">
                <span className="text-[12px] font-semibold text-[#999999]">0{i + 1}</span>
                <h3 className="font-display text-[18px] uppercase tracking-tight text-[#171717]">
                  {feature}
                </h3>
                <p className="text-[13px] text-[#777777] font-body leading-relaxed">
                  Carefully coordinated and documented by seasoned professionals equipped with prime glass, high dynamic range sensors, and backup bodies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Portfolio Work */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#777777] uppercase block mb-1">
                  FEATURED WORK
                </span>
                <h2 className="font-display text-[36px] md:text-[48px] uppercase tracking-tight text-[#171717]">
                  RECENT {service.title}
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-[11px] font-semibold tracking-wider uppercase text-[#171717] hover:underline flex items-center gap-1"
              >
                <span>EXPLORE ALL WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <div key={p.id} className="group relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-300">
                      {p.location}
                    </span>
                    <h3 className="font-display text-[18px] uppercase">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Quote Banner */}
      <section className="py-16 bg-[#171717] text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-[32px] md:text-[40px] uppercase tracking-tight">
              PLANNING YOUR {service.title}?
            </h2>
            <p className="text-[#A0A0A0] text-[14px] mt-1 font-body">
              Let&apos;s check date availability and prepare a customized coverage package for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-white text-[#171717] text-[12px] font-semibold tracking-wider uppercase hover:bg-[#FAF9F6] transition-colors"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
