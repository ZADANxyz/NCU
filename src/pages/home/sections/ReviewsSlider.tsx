
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
    <section className="max-w-2xl mx-auto my-12 md:my-16 px-3">
      <div className="glass glossy rounded-2xl border border-gold/13 shadow-lg py-9 px-4 md:px-10 flex flex-col items-center bg-white/96 dark:bg-slate-900/80">
        <h2 className="text-lg md:text-xl font-bold text-[#046BD2] mb-5 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          Student Reviews
        </h2>
        <div className="transition-all duration-500 ease-in-out w-full flex flex-col items-center mb-2">
          <div key={REVIEWS[index].name} className="flex flex-col items-center w-full">
            <div className="flex gap-[2.5px] mb-2 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < REVIEWS[index].stars ? "text-[#B19528]" : "text-gray-300 dark:text-slate-500"
                  )}
                  strokeWidth={i < REVIEWS[index].stars ? 2.5 : 2}
                  fill={i < REVIEWS[index].stars ? "#B19528" : "none"}
                />
              ))}
            </div>
            <p className="text-[1.10rem] font-medium text-center mb-1 text-[#2d2d2d] dark:text-gray-100 max-w-lg"
               style={{ fontWeight: 400 }}>{REVIEWS[index].comment}</p>
            <span className="text-base golden font-semibold">{REVIEWS[index].name}</span>
          </div>
        </div>
        <div className="flex mt-4 gap-1.5">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2.5 h-2.5 rounded-full border border-gold transition-all focus:outline-none",
                i === index ? "bg-gold" : "bg-white/70 dark:bg-slate-800/70"
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
