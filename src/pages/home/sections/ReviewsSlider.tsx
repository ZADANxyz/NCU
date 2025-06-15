
import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const REVIEWS = [
  {
    name: "Sarah P.",
    stars: 5,
    comment: "NCU helped me grow spiritually and academically. The faculty truly cares!"
  },
  {
    name: "James M.",
    stars: 5,
    comment: "Flexible classes fit my ministry schedule and gave me amazing tools."
  },
  {
    name: "Priya D.",
    stars: 4,
    comment: "The online learning portal is so easy to use. Highly recommend!"
  }
];

const ReviewsSlider = () => {
  const [index, setIndex] = useState(0);
  const timer = useRef<any>(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 5000);
    return () => clearTimeout(timer.current);
  }, [index]);

  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <div className="glass glossy rounded-2xl shadow-lg py-10 px-5 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#046BD2] mb-5 text-center">
          What Our Students Say
        </h2>
        <div className="transition-all duration-500 ease-in-out w-full flex flex-col items-center">
          <div key={REVIEWS[index].name} className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < REVIEWS[index].stars ? "text-[#B19528]" : "text-gray-300"
                  )}
                  strokeWidth={i < REVIEWS[index].stars ? 2.8 : 2}
                  fill={i < REVIEWS[index].stars ? "#B19528" : "none"}
                />
              ))}
            </div>
            <p className="text-lg font-medium text-center max-w-md mb-2">{REVIEWS[index].comment}</p>
            <span className="text-base golden font-semibold">{REVIEWS[index].name}</span>
          </div>
        </div>
        <div className="flex mt-4 gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-3 h-3 rounded-full border border-gold transition-all",
                i === index ? "bg-gold" : "bg-white/80"
              )}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
