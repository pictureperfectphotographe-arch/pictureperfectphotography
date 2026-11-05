import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Picture Perfect Photography | Wedding & Editorial Photography Hyderabad",
  description:
    "Picture Perfect Photography (Est. 2021, Manikonda, Hyderabad) crafts artistic wedding photography, cinematic wedding films, candid moments, pre-weddings, maternity & cradle ceremonies across India.",
  keywords: [
    "Wedding photography Hyderabad",
    "Best wedding photographers Hyderabad",
    "Candid photography Manikonda",
    "Pre-wedding shoot Hyderabad",
    "Cinematic wedding films Hyderabad",
    "Maternity photoshoot Hyderabad",
    "Cradle ceremony photography Hyderabad",
    "Picture Perfect Photography",
  ],
  authors: [{ name: "Picture Perfect Photography" }],
  creator: "Picture Perfect Photography",
  publisher: "Picture Perfect Photography",
  metadataBase: new URL("https://pictureperfectphotographe.com"),
  openGraph: {
    title: "Picture Perfect Photography | Editorial Photography & Films",
    description:
      "Capturing genuine emotions and timeless stories. Weddings, Celebrations & Life Events in Hyderabad & Pan-India.",
    siteName: "Picture Perfect Photography",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero_wedding_garland.jpg",
        width: 1200,
        height: 800,
        alt: "Picture Perfect Photography Wedding Photography",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
