
import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    photo: "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png",
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
    photo: "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png",
    platform: "Facebook",
    platformLogo: "f",
    date: "1 month ago",
    rating: 5,
    verified: true,
    text: "The flexibility of online learning at NCU allowed me to continue my ministry while pursuing my degree. The quality of education exceeded my expectations."
  },
  {
    id: 3,
    name: "Jennifer Chen",
    photo: "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png",
    platform: "Google",
    platformLogo: "G",
    date: "3 weeks ago",
    rating: 5,
    verified: true,
    text: "Outstanding university with a strong focus on spiritual growth and academic excellence. The professors genuinely care about student success and provide excellent mentorship."
  }
];

const GOLD_BAR_MAX_WIDTH = "97vw";

const ReviewsSection: React.FC = () => {
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
    <section className="w-full bg-background dark:bg-background py-12 md:py-16 px-3 sm:px-6 md:px-[52px] flex flex-col items-center">
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
      
      <p className="text-lg md:text-xl text-center font-roboto text-[#666] dark:text-gray-300 font-light mb-12">
        Real stories from real students
      </p>

      {/* Reviews Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {REVIEWS.map((review) => (
          <Card key={review.id} className="glass glossy bg-white/96 dark:bg-slate-900/80 border border-gold/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
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
                  <div className="w-6 h-6 bg-[#046BD2] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {review.platformLogo}
                  </div>
                </div>
              </div>

              {/* Star rating and verified badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Review text */}
              <p className="text-[#333] dark:text-gray-200 text-sm leading-relaxed">
                {review.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex justify-center mb-12">
        <Button
          asChild
          className="
            bg-[#046BD2] hover:bg-[#046BD2]/90 text-white px-8 py-3 text-lg font-medium
            border-2 border-transparent hover:border-[#B19528] hover:shadow-lg
            transition-all duration-300 rounded-lg
          "
        >
          <a
            href="https://g.page/r/CSs8kB-cZ81zEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Google Review
          </a>
        </Button>
      </div>

      {/* Bottom gold divider */}
      <div
        className="w-full flex justify-center"
      >
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
