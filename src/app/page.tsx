import HeroCollage from "@/components/sections/HeroCollage";
import Philosophy from "@/components/sections/Philosophy";
import ServiceDiscovery from "@/components/sections/ServiceDiscovery";
import FeaturedGallery from "@/components/sections/FeaturedGallery";
import CinematicFilms from "@/components/sections/CinematicFilms";
import OfferingsAccordion from "@/components/sections/OfferingsAccordion";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import LeadEnquiry from "@/components/sections/LeadEnquiry";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* SECTION 02: Floating Collage Hero */}
      <HeroCollage />

      {/* SECTION 03: Editorial Brand Philosophy */}
      <Philosophy />

      {/* SECTION 04: Explore Our Services */}
      <ServiceDiscovery />

      {/* SECTION 05: The Good Stuff (Featured Gallery) */}
      <FeaturedGallery />

      {/* SECTION 06: Press Play on Love (Cinematic Films) */}
      <CinematicFilms />

      {/* SECTION 07: Your Day, Your Way (Offerings Accordion) */}
      <OfferingsAccordion />

      {/* SECTION 08: Four Steps to Forever (Process Timeline) */}
      <ProcessTimeline />

      {/* SECTION 09: Lead Enquiry (Your Story, Next?) */}
      <LeadEnquiry />
    </div>
  );
}
