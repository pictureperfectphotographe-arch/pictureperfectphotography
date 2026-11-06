import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/client-auth";
import { getGalleryBySlug } from "@/data/galleries";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("gallery");
  const photoId = searchParams.get("photo");

  if (!slug || !photoId) {
    return NextResponse.json(
      { error: "Missing parameters: gallery and photo are required." },
      { status: 400 }
    );
  }

  // Verify server-side authorization cookie
  const cookieName = `pp_client_access_${slug}`;
  const token = req.cookies.get(cookieName)?.value;

  if (!verifySessionToken(slug, token)) {
    return NextResponse.json(
      { error: "Unauthorized. Please authenticate with valid gallery credentials." },
      { status: 401 }
    );
  }

  const story = getGalleryBySlug(slug);
  if (!story || !story.clientGallery) {
    return NextResponse.json({ error: "Gallery not found." }, { status: 404 });
  }

  // Find photo in client gallery subcollections
  const allPhotos = story.clientGallery.subcollections.flatMap((col) => col.photos);
  const photo = allPhotos.find((p) => p.id === photoId);

  if (!photo) {
    return NextResponse.json({ error: "Photo not found in collection." }, { status: 404 });
  }

  // In production with AWS S3 / Cloudflare R2, redirect to a presigned S3 URL:
  // return NextResponse.redirect(await getPresignedUrl(photo.s3Key));

  // Redirect to the authorized asset
  return NextResponse.redirect(new URL(photo.src, req.url));
}
