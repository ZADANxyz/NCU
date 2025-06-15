
import React, { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const alumniImages = [
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80"
];

const AUTO_SLIDE_INTERVAL = 7400; // slower than before

const AlumniCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const carouselApi = React.useRef<any>(null);
  const timer = React.useRef<any>(null);

  // Auto-slide logic
  useEffect(() => {
    if (!carouselApi.current) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!carouselApi.current) return;
      const nextIdx = (current + 1) % alumniImages.length;
      carouselApi.current.scrollTo(nextIdx);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearTimeout(timer.current);
  }, [current]);

  // Handle carousel api
  function setApi(api: any) {
    carouselApi.current = api;
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }

  return (
    <div className="py-2 w-full flex items-center justify-start md:justify-start">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          containScroll: 'trimSnaps'
        }}
        setApi={setApi}
        className="w-full mx-0" // Remove max-width
        style={{
          marginLeft: 0,
        }}
      >
        <CarouselContent>
          {alumniImages.map((src, idx) => (
            <CarouselItem
              key={idx}
              className={`
                basis-full flex-none transition-all duration-500 ease-in-out
                ${current === idx
                  ? "opacity-100 pointer-events-auto scale-100 z-10"
                  : "opacity-0 pointer-events-none scale-95 z-0"}
              `}
              aria-hidden={current !== idx}
              style={{
                transitionProperty: "opacity, transform",
              }}
            >
              <div
                className="glass glossy"
                style={{
                  borderRadius: "0.38rem",
                  boxShadow: "0 6px 26px 0 rgba(177,149,40,0.12)",
                  width: "100%",
                  margin: "0 auto",
                  background: "linear-gradient(105deg,rgba(255,229,87,0.09) 0%,rgba(255,255,255,0.20) 100%)",
                }}
              >
                <img
                  src={src}
                  alt={`NCU Alumni gallery photo #${idx + 1}`}
                  className="rounded-lg object-cover shadow-md w-full h-[205px] md:h-[295px] lg:h-[355px] border-0 mx-auto transition-all"
                  draggable={false}
                  loading="lazy"
                  style={{
                    marginLeft: 0,
                    width: "100%",
                    maxWidth: "100%",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AlumniCarousel;
