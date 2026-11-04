export type GoogleReview = {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  publishedAt: string;
  eventOrContext: string;
  reviewerBadge?: string;
  reviewUrl: string;
  source: "Google";
  verified: boolean;
};

export const googleProfileStats = {
  rating: 5.0,
  reviewCount: 21,
  profileUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
  address: "Sri Sai Nagar, Madhapur, Hyderabad, Telangana 500081, India",
};

// 100% Genuine customer reviews verified directly from Picture Perfect Photography's official Google Business Profile
export const googleReviews: GoogleReview[] = [
  {
    id: "rev-pradeep-reddy",
    reviewerName: "Pradeep Reddy",
    rating: 5,
    text: "Srujan and team did a great job at our wedding! The photos turned out beautiful, and they captured all the special moments. They were easy to work with and made us feel comfortable. Everything was delivered on time, and we’re really happy with the results. We definitely recommend them!",
    publishedAt: "1 year ago",
    eventOrContext: "Wedding Photography",
    reviewerBadge: "4 reviews",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
  {
    id: "rev-shashidhar-ramisetty",
    reviewerName: "Shashidhar Ramisetty",
    rating: 5,
    text: "They're too perfect thay anyone can ask for. We've started our journey with our maternity photoshoot and continued since then for all the events we had. Thanks a lot Srujan and team for making our happy moments even more memorable by capturing perfectly.",
    publishedAt: "2 years ago",
    eventOrContext: "Maternity & Family Celebrations",
    reviewerBadge: "Local Guide · 13 reviews",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
  {
    id: "rev-spoorthy-akiti",
    reviewerName: "spoorthy akiti",
    rating: 5,
    text: "Thankyou so much Srujan for capturing the most important moments which i can cherish for lifetime. We’re so happy we chose Picture Perfect photography team for our wedding. From start to finish, Srujan and his team were so friendly and very accommodating.",
    publishedAt: "8 months ago",
    eventOrContext: "Wedding Photography",
    reviewerBadge: "1 review",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
  {
    id: "rev-vepunder-reddy",
    reviewerName: "Vepunder Reddy",
    rating: 5,
    text: "We recently hired Picture Perfect Photography for our wedding, and we are extremely happy with the results. The photography was beautiful, capturing every special moment perfectly. Their dedication, professionalism, and attention to detail were exceptional.",
    publishedAt: "7 months ago",
    eventOrContext: "Wedding Photography",
    reviewerBadge: "6 reviews",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
  {
    id: "rev-swetha-reddy",
    reviewerName: "Swetha Reddy",
    rating: 5,
    text: "Thank you so much, Srujan, for capturing the best moments of our life with my lil one..!! And your work is truly amazing. I just kept on watching in loop. Even though my child was bit fussy during the shoot, you made sure it went well.",
    publishedAt: "2 years ago",
    eventOrContext: "Baby & Milestone Shoot",
    reviewerBadge: "11 reviews · 4 photos",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
  {
    id: "rev-sivadeep-nallana",
    reviewerName: "sivadeep nallana",
    rating: 5,
    text: "I recently had the pleasure of working with an incredible photography team for my engagement shoot, and I couldn't be happier with the results. From start to finish, the experience was nothing short of amazing.",
    publishedAt: "2 years ago",
    eventOrContext: "Engagement Shoot",
    reviewerBadge: "Local Guide · 13 reviews · 24 photos",
    reviewUrl: "https://share.google/2zTzqZXhJE4oe5Ato",
    source: "Google",
    verified: true,
  },
];
