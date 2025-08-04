import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { googleDriveService, type GoogleDriveImage } from "@/utils/googleDriveApi";

const AUTO_SLIDE_INTERVAL = 7400;

const PresidentCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const [presidentImages, setPresidentImages] = useState<GoogleDriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselApi = React.useRef<any>(null);
  const timer = React.useRef<any>(null);

  // Fetch president images from Google Drive
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await googleDriveService.fetchImagesFromFolder('president');
        setPresidentImages(images);
      } catch (error) {
        console.error('Failed to fetch president images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (!carouselApi.current || loading || presidentImages.length === 0) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!carouselApi.current) return;
      const nextIdx = (current + 1) % presidentImages.length;
      carouselApi.current.scrollTo(nextIdx);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearTimeout(timer.current);
  }, [current, loading, presidentImages.length]);

  // Handle carousel api
  function setApi(api: any) {
    carouselApi.current = api;
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }

  if (loading) {
    return (
      <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading president images...</div>
      </div>
    );
  }

  if (presidentImages.length === 0) {
    return (
      <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg flex items-center justify-center">
        <div className="text-gray-500">No president images found.</div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          containScroll: 'trimSnaps'
        }}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {presidentImages.map((image, idx) => (
            <CarouselItem
              key={idx}
              className={`
                basis-full flex-none transition-all duration-500 ease-in-out h-full
                ${current === idx
                  ? "opacity-100 pointer-events-auto scale-100 z-10"
                  : "opacity-0 pointer-events-none scale-95 z-0"}
              `}
              aria-hidden={current !== idx}
              style={{
                transitionProperty: "opacity, transform",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
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

export default PresidentCarousel;