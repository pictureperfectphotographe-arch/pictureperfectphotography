import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { galleryStories, getGalleryBySlug } from "@/data/galleries";
import { isClientAuthorized } from "@/lib/client-auth";
import ClientAccessGate from "@/components/client-gallery/ClientAccessGate";
import ClientGalleryView from "@/components/client-gallery/ClientGalleryView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Strictly disallow search engine indexing of private client archives
export const metadata: Metadata = {
  title: "Private Client Archive | Picture Perfect Photography",
  description: "Secure, confidential client gallery archive.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export async function generateStaticParams() {
  return galleryStories
    .filter((story) => Boolean(story.clientGallery))
    .map((story) => ({
      slug: story.slug,
    }));
}

export default async function ClientGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getGalleryBySlug(slug);

  if (!story || !story.clientGallery) {
    notFound();
  }

  const authorized = await isClientAuthorized(slug);

  if (!authorized) {
    return (
      <ClientAccessGate
        slug={story.slug}
        galleryTitle={story.title}
        gallerySubtitle={story.subtitle}
      />
    );
  }

  return <ClientGalleryView story={story} />;
}
