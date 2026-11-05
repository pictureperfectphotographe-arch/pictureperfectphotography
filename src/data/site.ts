export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  established: number;
  location: {
    city: string;
    area: string;
    state: string;
    country: string;
    label: string;
    coverage: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
  };
  socials: {
    instagram: string;
    youtube: string;
    googleBusiness: string;
    linkedin: string;
  };
  navLinks: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Picture Perfect Photographe",
  shortName: "PICTURE PERFECT",
  tagline: "Revisiting photography, cinematic films & exclusive coverage.",
  established: 2021,
  location: {
    city: "Hyderabad",
    area: "Madhapur",
    state: "Telangana",
    country: "India",
    label: "Madhapur, Hyderabad",
    coverage: "Available Pan-India",
  },
  contact: {
    phone: "+918919265544",
    phoneDisplay: "+91 8919265544",
    whatsapp: "+918919265544",
    whatsappLink: "https://wa.me/918919265544",
    email: "pictureperfectphotographe@gmail.com",
  },
  socials: {
    instagram: "https://www.instagram.com/pictureperfectphotographe/",
    youtube: "https://www.youtube.com/@Pictureperfectphotographe",
    googleBusiness: "https://share.google/2zTzqZXhJE4oe5Ato",
    linkedin: "https://www.linkedin.com/in/srujan-patha-2924533a7/",
  },
  navLinks: [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "FILMS", href: "/films" },
    { label: "ABOUT", href: "/about" },
    { label: "REVIEWS", href: "/reviews" },
  ],
};
