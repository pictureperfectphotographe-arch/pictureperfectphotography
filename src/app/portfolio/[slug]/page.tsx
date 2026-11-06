import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  galleryStories,
  getGalleryBySlug,
  getRelatedGalleries,
} from "@/data/galleries";
import GalleryClientView from "@/components/gallery/GalleryClientView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return galleryStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getGalleryBySlug(slug);

  if (!story) {
    return {
      title: "Story Not Found | Picture Perfect Photography",
    };
  }

  const title = `Picture Perfect Photography | ${story.title} ${story.subtitle}`;
  const description = `${story.title} ${story.subtitle.toLowerCase()} documented by Picture Perfect Photography in Hyderabad and destination locations. Candid editorial photography with natural light and timeless composition.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: story.coverImage,
          width: 1200,
          height: 800,
          alt: `${story.title} photography story`,
        },
      ],
    },
    alternates: {
      canonical: `https://pictureperfectphotographe.com/portfolio/${story.slug}`,
    },
  };
}

export default async function GalleryStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getGalleryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = getRelatedGalleries(story.slug);

  return <GalleryClientView story={story} relatedStories={relatedStories} />;
}
