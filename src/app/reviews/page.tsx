import React from "react";
import { googleReviews, googleProfileStats } from "@/data/reviews";
import ReviewsClient from "./ReviewsClient";

export const metadata = {
  title: "Client Reviews | Picture Perfect Photographe",
  description:
    "Read 100% genuine customer reviews for Picture Perfect Photographe verified directly from our official Google Business Profile in Hyderabad.",
};

export default function ReviewsPage() {
  return <ReviewsClient reviews={googleReviews} stats={googleProfileStats} />;
}
