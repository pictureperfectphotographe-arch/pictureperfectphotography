"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import {
  createSignedSessionToken,
  validateAccessPin,
} from "@/lib/client-auth";

export interface AuthResult {
  success: boolean;
  error?: string;
}

export async function unlockClientGallery(
  slug: string,
  pin: string
): Promise<AuthResult> {
  if (!slug || !pin) {
    return { success: false, error: "Access PIN is required." };
  }

  const isValid = validateAccessPin(slug, pin);
  if (!isValid) {
    return {
      success: false,
      error: "Invalid access key. Please check your invitation or contact Picture Perfect Photography.",
    };
  }

  const token = createSignedSessionToken(slug);
  const cookieStore = await cookies();

  // Set secure HTTP-only cookie
  cookieStore.set(`pp_client_access_${slug}`, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: `/client-gallery/${slug}`,
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  revalidatePath(`/client-gallery/${slug}`);
  return { success: true };
}

export async function lockClientGallery(slug: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(`pp_client_access_${slug}`);
  revalidatePath(`/client-gallery/${slug}`);
}
