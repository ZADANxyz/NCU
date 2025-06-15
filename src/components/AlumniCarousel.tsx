
import React, { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const alumniImages = [
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80"
];

const AUTO_SLIDE_INTERVAL = 5400; // ms (was 3400, now slower)

const AlumniCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const carouselApi = useRef<any>(null);
  const timer = useRef<any>(null);

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
    <div className="py-2 w-full flex items-center justify-center">
      <Carousel
        opts={{
          loop: true,
          align: "center",
          slidesToScroll: 1,
          containScroll: 'trimSnaps' // Hide overflow images
        }}
        setApi={setApi}
        className="w-full max-w-xl"
      >
        <CarouselContent>
          {alumniImages.map((src, idx) => (
            <CarouselItem
              key={idx}
              className={`basis-full flex-none transition-transform duration-500 ease-in-out ${current !== idx ? "hidden" : ""}`}
            >
              <div
                className="glass glossy rounded-2xl shadow-lg border-2 border-[#B19528]/30 bg-white/80 dark:bg-[#232232]/78 px-2 pt-2 pb-1 flex items-center justify-center"
                style={{
                  boxShadow: "0 6px 26px 0 rgba(177,149,40,0.12)",
                  maxWidth: 450,
                  margin: "0 auto",
                  background: "linear-gradient(105deg,rgba(255,229,87,0.09) 0%,rgba(255,255,255,0.20) 100%)",
                }}
              >
                <img
                  src={src}
                  alt={`NCU Alumni gallery photo #${idx + 1}`}
                  className="rounded-lg object-cover shadow-md w-[296px] md:w-[390px] lg:w-[445px] h-[155px] md:h-[224px] border-2 border-gold mx-auto"
                  draggable={false}
                  loading="lazy"
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
