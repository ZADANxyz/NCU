import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { googleDriveService, type GoogleDriveImage } from "@/utils/googleDriveApi";

const AUTO_SLIDE_INTERVAL = 7400; // slower than before

const AlumniCarousel = () => {
  const [current, setCurrent] = React.useState(0);
  const [alumniImages, setAlumniImages] = useState<GoogleDriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const carouselApi = React.useRef<any>(null);
  const timer = React.useRef<any>(null);

  // Fetch alumni images from Google Drive
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await googleDriveService.fetchImagesFromFolder('alumni');
        setAlumniImages(images);
      } catch (error) {
        console.error('Failed to fetch alumni images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (!carouselApi.current || loading || alumniImages.length === 0) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (!carouselApi.current) return;
      const nextIdx = (current + 1) % alumniImages.length;
      carouselApi.current.scrollTo(nextIdx);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearTimeout(timer.current);
  }, [current, loading, alumniImages.length]);

  // Handle carousel api
  function setApi(api: any) {
    carouselApi.current = api;
    api?.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }

  if (loading) {
    return (
      <div className="py-0 w-full flex items-center justify-center h-[275px] md:h-[370px] lg:h-[415px]">
        <div className="text-gray-500">Loading alumni images...</div>
      </div>
    );
  }

  if (alumniImages.length === 0) {
    return (
      <div className="py-0 w-full flex items-center justify-center h-[275px] md:h-[370px] lg:h-[415px]">
        <div className="text-gray-500">No alumni images found.</div>
      </div>
    );
  }

  return (
    <div className="py-0 w-full flex items-center justify-start md:justify-start">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          slidesToScroll: 1,
          containScroll: 'trimSnaps'
        }}
        setApi={setApi}
        className="w-full max-w-[870px] md:max-w-[870px] lg:max-w-[870px] mx-0"
        style={{
          marginLeft: 0,
        }}
      >
        <CarouselContent>
          {alumniImages.map((image, idx) => (
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
                style={{
                  borderRadius: "0.38rem",
                  boxShadow: "0 6px 26px 0 rgba(177,149,40,0.12)",
                  width: "100%",
                  maxWidth: "870px",
                  margin: "0 auto",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg object-cover shadow-md w-full md:w-[700px] lg:w-[870px] max-w-[870px] h-[275px] md:h-[370px] lg:h-[415px] border-0 mx-auto transition-all"
                  draggable={false}
                  loading="lazy"
                  style={{
                    marginLeft: 0,
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