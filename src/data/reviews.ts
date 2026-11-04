export type GoogleReview = {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  publishedAt?: string;
  reviewUrl?: string;
  source: "Google";
  verified: boolean;
};

// Manually verified Google reviews populated directly from genuine reviews on Picture Perfect Photographe's official Google Business Profile.
// No fictional, AI-generated, or placeholder reviews allowed.
export const googleReviews: GoogleReview[] = [];
