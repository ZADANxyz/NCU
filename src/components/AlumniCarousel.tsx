
// Carousel displaying horizontal scrolling alumni photos, styled glass/gloss, auto-sliding

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Example alumni images (replace with real alumni images as needed)
const alumniImages = [
  "/lovable-uploads/alumni1.jpg",
  "/lovable-uploads/alumni2.jpg",
  "/lovable-uploads/alumni3.jpg",
  "/lovable-uploads/alumni4.jpg",
  "/lovable-uploads/alumni5.jpg",
];

const AlumniCarousel = () => {
  // Auto-slide carousel via CSS animation or embla plugin, simplified for demo
  // Use embla carousel API for real implementation if needed
  return (
    <div className="glass glossy rounded-xl border border-gold/15 bg-white/90 dark:bg-[#232232]/80 shadow md:min-h-[315px] min-h-[220px] flex items-center px-2 py-3 w-full max-w-xl overflow-hidden">
      <Carousel opts={{ loop: true, align: "center" }}>
        <CarouselContent className="flex gap-5">
          {alumniImages.map((src, idx) => (
            <CarouselItem key={idx} className="basis-1/3 flex-none">
              <img
                src={src}
                alt={`NCU Alumni ${idx + 1}`}
                className="rounded-lg object-cover shadow-md w-[120px] h-[120px] md:w-[150px] md:h-[150px] border-2 border-gold mx-auto"
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;

