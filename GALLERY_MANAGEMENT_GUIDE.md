# Picture Perfect Photography — Gallery Management Guide

This document is a practical guide for adding, updating, and managing client galleries and private client archives in Picture Perfect Photography.

---

## 1. Quick Overview

The gallery system is entirely **data-driven**, scalable, and type-safe. You never need to write custom HTML or create new React components for new couples.

All galleries are defined in:
📁 `src/data/galleries.ts`

Any gallery added to this file automatically:
- Appears on the main `/portfolio` page with filter support.
- Creates a dedicated editorial story page at `/portfolio/[slug]`.
- Creates a secure private client archive at `/client-gallery/[slug]`.
- Generates dynamic SEO meta tags, OpenGraph previews, and canonical links.

---

## 2. How to Add a New Couple / Event Story (Step-by-Step)

### Step 1: Place Your High-Resolution Photographs
Place your optimized web photographs in the `public/images/` folder (or organize them into subfolders such as `public/images/galleries/ananya-rohit/`).

Recommended image dimensions:
- **Portraits (Tall / 3:4 / 2:3):** 1600 × 2133 px or 1200 × 1600 px (JPEG / WebP, 85% quality).
- **Landscapes (Wide / 16:10 / 16:9):** 2000 × 1250 px or 1920 × 1080 px.
- **Squares (1:1):** 1400 × 1400 px.

### Step 2: Open `src/data/galleries.ts`
Add a new gallery object into the `galleryStories` array:

```typescript
{
  id: "gallery-ananya-rohit",
  slug: "ananya-rohit",
  title: "Ananya & Rohit",
  category: "WEDDINGS", // Options: "WEDDINGS" | "PRE-WEDDINGS" | "MATERNITY" | "BABY" | "EVENTS"
  subtitle: "Wedding Story",
  coverImage: "/images/galleries/ananya-rohit/cover.jpg",
  coverAspect: "portrait",

  // Curated Story Photographs (In display order)
  curatedImages: [
    {
      id: "ar-01",
      src: "/images/galleries/ananya-rohit/ceremony-01.jpg",
      alt: "Ananya and Rohit sacred muhurtham blessing",
      aspect: "portrait", // "portrait" | "landscape" | "square" | "tall" | "wide"
    },
    {
      id: "ar-02",
      src: "/images/galleries/ananya-rohit/mandap-overview.jpg",
      alt: "Floral mandap architecture at Golconda Resorts",
      aspect: "landscape",
    },
    {
      id: "ar-03",
      src: "/images/galleries/ananya-rohit/jeelakarra-bellam.jpg",
      alt: "Sacred Jeelakarra Bellam ritual",
      aspect: "square",
    },
    // Add 20–50 selected story images...
  ],

  // Optional: Cinematic Wedding Film from YouTube
  film: {
    youtubeId: "VIDEO_ID_HERE", // e.g., "_vcd55hbiso"
    title: "Ananya & Rohit Wedding Film 4K",
    duration: "4:32",
  },

  // Optional: Client Testimonial (Displayed at bottom with portrait)
  // Omit this entire block if no client review exists yet
  testimonial: {
    quote: "Srujan and the Picture Perfect team were extraordinary. Every photograph looks like fine art.",
    attribution: "Ananya Reddy",
    context: "Wedding Photography · Hyderabad",
    portrait: "/images/galleries/ananya-rohit/couple-portrait.jpg",
    rating: 5,
  },

  visibility: "public", // "public" | "private"
  relatedSlugs: ["akhila-vepunder", "sahithi-lalith"],

  // Private Full Client Gallery (Password-protected for client only)
  clientGallery: {
    totalPhotos: 340,
    downloadEnabled: true,
    accessPin: "ANANYA2026", // The secret passcode given to the couple
    subcollections: [
      {
        name: "Pelli Koothuru & Haldi",
        photos: [
          /* Array of photos */
        ],
      },
      {
        name: "Muhurtham Ceremony",
        photos: [
          /* Array of photos */
        ],
      },
      {
        name: "Reception & Portraits",
        photos: [
          /* Array of photos */
        ],
      },
    ],
  },
}
```

---

## 3. How to Update, Reorder, or Remove a Gallery

- **To Reorder Galleries on `/portfolio`:** Change the order of items inside the `galleryStories` array. The first item in the array appears first on the page.
- **To Change Cover Photograph:** Update the `coverImage` path.
- **To Hide a Gallery Temporarily:** Set `visibility: "private"`. It will no longer show on the public `/portfolio` page.
- **To Remove a Gallery:** Delete its entry from `galleryStories`.

---

## 4. Private Client Gallery Security & Setup

Full client galleries (`/client-gallery/[slug]`) are built with server-side access control:
1. When a client visits `/client-gallery/ananya-rohit`, they are presented with a luxury passcode entry screen.
2. The entered passcode is verified server-side with constant-time equality checks.
3. Upon successful verification, a cryptographically signed HMAC HTTP-only cookie is issued, unlocking the gallery for 7 days.
4. Private client galleries include `noindex, nofollow` headers so search engines will never index them.

### Production Cloud Storage Integration (Optional)
For ultra-large galleries (500+ uncompressed images):
- You can store full-size ZIP archives and RAW exports in an AWS S3 bucket or Cloudflare R2 bucket.
- The `/api/client-gallery/download` route can be linked to your cloud storage bucket using presigned download URLs.
- No paid subscription is required to run the current system—it works out-of-the-box with your current Vercel deployment.
