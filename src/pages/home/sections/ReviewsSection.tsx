import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import chrisIsbellImg from "../../../../../public/lovable-uploads/chris-isbell.png";

// Fallback reviews with realistic person photos
const FALLBACK_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=150&h=150&ixlib=rb-4.0.3",
    platform: "Google",
    platformLogo: "G", 
    date: "2 weeks ago",
    rating: 5,
    verified: true,
    text: "NCU provided me with an exceptional educational experience. The faculty is knowledgeable and supportive, and the curriculum is both challenging and relevant to today's ministry needs."
  },
  {
    id: 2,
    name: "Michael Rodriguez", 
    photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=150&h=150&ixlib=rb-4.0.3",
    platform: "Google",
    platformLogo: "G",
    date: "1 month ago", 
    rating: 5,
    verified: true,
    text: "The flexibility of online learning at NCU allowed me to continue my ministry while pursuing my degree. The quality of education exceeded my expectations."
  },
  {
    id: 3,
    name: "Chris Isbell",
    photo: chrisIsbellImg,
    platform: "Google",
    platformLogo: "G",
    date: "Apr 1, 2025",
    rating: 5,
    verified: true,
    text: "This is an amazing University!! The classes are well thought out and the tuition is affordable for most everyone."
  }
];

const GOLD_BAR_MAX_WIDTH = "97vw";

// Verified green checkmark icon (same as before)
const VerifiedCheckmark = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#34A853"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Platform SVG logos (without circle backgrounds)
const GoogleLogo = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="#4285F4" d="M21.6 12.227c0-.814-.07-1.595-.2-2.347H12v4.444h5.415a4.637 4.637 0 0 1-2 3.042v2.526h3.23c1.89-1.742 2.955-4.31 2.955-7.665z" />
    <path fill="#34A853" d="M12 21.6c2.7 0 4.963-.9 6.617-2.44l-3.23-2.527c-.9.605-2.06.964-3.387.964-2.605 0-4.813-1.76-5.607-4.123H3.024v2.587A9.6 9.6 0 0 0 12 21.6z" />
    <path fill="#FBBC05" d="M6.393 14.494a5.778 5.778 0 0 1 0-3.03V8.877H3.024a9.593 9.593 0 0 0 0 6.243l3.37-2.626z" />
    <path fill="#EA4335" d="M12 6.374c1.47 0 2.79.504 3.827 1.494l2.867-2.867A9.594 9.594 0 0 0 12 3.6a9.6 9.6 0 0 0-8.976 6.277l3.37 2.627c.794-2.364 3.002-4.13 5.606-4.13z" />
  </svg>
);

const FacebookLogo = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#1877F2"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.099 2.796.142v3.243l-1.918.001c-1.505 0-1.797.716-1.797 1.766v2.317h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.673V1.326C24 .6 23.4 0 22.675 0z" />
  </svg>
);

// Map platform names to logo components
const platformLogos: Record<string, React.FC<{ size?: number }>> = {
  Google: GoogleLogo,
  Facebook: FacebookLogo,
  // Add other platforms here if needed
};

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);
  const [loading, setLoading] = useState(false); // Set to false since we're not fetching for now

  // Commenting out the Google Places API call for now
  // Uncomment and set up GOOGLE_PLACES_API_KEY in Supabase when ready
  /*
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('fetch-google-reviews');
        
        if (error) {
          console.error('Error fetching reviews:', error);
          setReviews(FALLBACK_REVIEWS);
        } else if (data?.success && data?.reviews?.length > 0) {
          setReviews(data.reviews);
        } else {
          console.log('No reviews found, using fallback');
          setReviews(FALLBACK_REVIEWS);
        }
      } catch (error) {
        console.error('Error calling reviews function:', error);
        setReviews(FALLBACK_REVIEWS);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);
  */

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-[#B19528] fill-[#B19528]" : "text-gray-300"
        }`}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <section
      className="
        w-full bg-background dark:bg-background 
        pt-4 pb-12 md:pt-6 md:pb-16
        px-3 sm:px-6 md:px-[52px]
        flex flex-col items-center
      "
    >
      {/* Section Title */}
      <h2
        className="
          text-4xl md:text-5xl text-center mb-3 tracking-tight font-roboto font-normal
          text-[#181818] dark:text-white
        "
        style={{
          letterSpacing: "0.01em",
          lineHeight: 1.13,
          fontWeight: 400,
        }}
      >
        What Our Students Are Saying
      </h2>

      <p className="text-lg md:text-xl text-center font-roboto text-[#666] dark:text-gray-300 font-light mb-6">
        Real stories from real students
      </p>

      {/* Reviews Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 3 }).map((_, index) => (
            <Card
              key={`skeleton-${index}`}
              className="
                glass glossy
                bg-white/96 dark:bg-slate-900/80
                border border-transparent dark:border-gold/10
                shadow-lg
                min-h-[320px]
              "
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          reviews.map((review) => {
            const PlatformLogo = platformLogos[review.platform] || (() => <span className="text-white text-xs font-bold">{review.platformLogo}</span>);

            return (
              <Card
                key={review.id}
                className="
                  glass glossy
                  bg-white/96 dark:bg-slate-900/80
                  border border-transparent dark:border-gold/10
                  shadow-lg hover:shadow-xl
                  hover:border-transparent dark:hover:border-gold/20
                  transition-shadow duration-300
                  min-h-[320px]
                "
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header with photo and platform */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.photo}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-[#181818] dark:text-white text-base">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <PlatformLogo size={20} />
                    </div>
                  </div>

                  {/* Star rating and verified badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                    {review.verified && (
                      <div
                        className="flex items-center gap-1 text-[#34A853]"
                        aria-label="Verified review"
                      >
                        <VerifiedCheckmark size={16} />
                        <span className="text-xs font-medium text-[#34A853]">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Review text */}
                  <p className="text-[#333] dark:text-gray-200 text-sm leading-relaxed flex-grow">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center mb-6">
        <Button
          asChild
          className="
            flex items-center gap-3
            bg-gradient-to-r from-blue-600 to-blue-500
            hover:from-blue-700 hover:to-blue-600
            text-white px-8 py-3 text-lg font-medium
            border-2 border-blue-600
            hover:border-blue-700
            transition-all duration-300 rounded-lg
            dark:bg-gradient-to-r dark:from-[#B19528] dark:to-[#D4AF37]
            dark:hover:from-[#D4AF37] dark:hover:to-[#B19528]
            dark:border-[#B19528] dark:hover:border-[#D4AF37]
          "
        >
          <a
            href="https://g.page/r/CSs8kB-cZ81zEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <GoogleLogo size={24} />
            <span>Leave a Google Review</span>
          </a>
        </Button>
      </div>

      {/* Bottom gold divider */}
      <div className="w-full flex justify-center mt-6 md:mt-8">
        <div
          className="w-full"
          style={{
            maxWidth: GOLD_BAR_MAX_WIDTH,
            height: "1.1px",
            background:
              "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
            boxShadow:
              "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
            borderRadius: 3,
            zIndex: 20,
            opacity: 0.99,
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
};

export default ReviewsSection;