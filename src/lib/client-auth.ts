import crypto from "crypto";
import { cookies } from "next/headers";
import { getGalleryBySlug } from "@/data/galleries";

// In production, configure CLIENT_GALLERY_SECRET in Vercel environment variables.
// Fallback to a consistent workspace salt for local development without requiring external setup.
const AUTH_SECRET =
  process.env.CLIENT_GALLERY_SECRET ||
  "picture-perfect-editorial-archive-auth-salt-2026";

/**
 * Creates an HMAC signature for a client gallery access token
 */
export function createSignedSessionToken(slug: string): string {
  const payload = `${slug}:${Date.now()}`;
  const hmac = crypto
    .createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("hex");
  return Buffer.from(`${payload}:${hmac}`).toString("base64");
}

/**
 * Server-side verification of a client session token
 */
export function verifySessionToken(slug: string, token: string | undefined): boolean {
  if (!token) return false;

  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [tokenSlug, timestampStr, signature] = decoded.split(":");
    if (!tokenSlug || !timestampStr || !signature) return false;

    // Check slug matches
    if (tokenSlug !== slug) return false;

    // Verify HMAC signature
    const expectedPayload = `${tokenSlug}:${timestampStr}`;
    const expectedHmac = crypto
      .createHmac("sha256", AUTH_SECRET)
      .update(expectedPayload)
      .digest("hex");

    const validSig = crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expectedHmac, "hex")
    );

    if (!validSig) return false;

    // Session valid for 7 days
    const timestamp = parseInt(timestampStr, 10);
    const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > maxAgeMs) return false;

    return true;
  } catch {
    return false;
  }
}

/**
 * Helper to check current request's session cookie
 */
export async function isClientAuthorized(slug: string): Promise<boolean> {
  const cookieStore = await cookies();
  const cookieName = `pp_client_access_${slug}`;
  const token = cookieStore.get(cookieName)?.value;
  return verifySessionToken(slug, token);
}

/**
 * Validates access passcode against gallery's configured PIN on server
 */
export function validateAccessPin(slug: string, pin: string): boolean {
  const story = getGalleryBySlug(slug);
  if (!story || !story.clientGallery) return false;

  const expectedPin = story.clientGallery.accessPin.trim().toUpperCase();
  const enteredPin = pin.trim().toUpperCase();

  if (expectedPin.length !== enteredPin.length) return false;

  return crypto.timingSafeEqual(
    Buffer.from(expectedPin, "utf-8"),
    Buffer.from(enteredPin, "utf-8")
  );
}
