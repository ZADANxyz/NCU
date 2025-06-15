
// Carousel showing graduation stock photo in glass/glossy frame

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Unsplash stock graduation photo group
const alumniImages = [
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
];

const AlumniCarousel = () => {
  return (
    <div className="glass glossy rounded-xl border border-gold/15 bg-white/90 dark:bg-[#232232]/80 shadow min-h-[200px] md:min-h-[248px] flex items-center px-2 py-3 w-full max-w-xl overflow-hidden">
      <Carousel opts={{ loop: true, align: "center" }}>
        <CarouselContent className="flex gap-5">
          {alumniImages.map((src, idx) => (
            <CarouselItem key={idx} className="basis-1/1 flex-none">
              <img
                src={src}
                alt={`NCU Alumni group`}
                className="rounded-lg object-cover shadow-md w-[280px] md:w-[400px] lg:w-[468px] h-[176px] md:h-[240px] border-2 border-gold mx-auto"
                draggable={false}
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;
