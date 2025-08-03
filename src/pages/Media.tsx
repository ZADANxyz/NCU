import React, { useState } from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

// Sample gallery images - these would be managed by the school president
const galleryImages = [
  { id: 1, src: "/lovable-uploads/033cc9e0-07a9-4d43-b011-0d16b20cb8d9.png", alt: "Graduation ceremony" },
  { id: 2, src: "/lovable-uploads/2d48b4a2-c29c-4b51-86c4-5dc45ec36d67.png", alt: "University event" },
  { id: 3, src: "/lovable-uploads/5112ed5b-dfc8-4730-891c-db9b20452df4.png", alt: "Student activities" },
  { id: 4, src: "/lovable-uploads/f34e6004-3e3f-4587-96e4-6e67154b7ca6.png", alt: "Campus life" },
  { id: 5, src: "/lovable-uploads/d162fcf1-b78e-48f1-a9da-ef64c1c89243.png", alt: "Academic ceremonies" },
  { id: 6, src: "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png", alt: "University facilities" },
  { id: 7, src: "/lovable-uploads/7788beff-edb4-4e06-a889-be37c6860148.png", alt: "Student life" },
  { id: 8, src: "/lovable-uploads/aa922b63-f20a-4042-8985-bd50591544e3.png", alt: "Campus events" },
  { id: 9, src: "/lovable-uploads/c5e7ddc6-391b-47f0-8ee5-aedefb060295.png", alt: "Academic achievements" },
  { id: 10, src: "/lovable-uploads/2f0c96d3-b19a-4b83-a1f3-de4da42ecc01.png", alt: "University community" },
  { id: 11, src: "/lovable-uploads/d74aae3a-32f5-4e93-9bae-af5a4a61bff8.png", alt: "Educational activities" },
  { id: 12, src: "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png", alt: "School programs" },
  { id: 13, src: "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png", alt: "University celebrations" },
  { id: 14, src: "/lovable-uploads/a03296b5-6734-433b-93c5-efe5e37623bf.png", alt: "Academic excellence" },
  { id: 15, src: "/lovable-uploads/f88d4d0d-8a44-4768-9377-018c10d02f2f.png", alt: "Student achievements" },
];

const IMAGES_PER_PAGE = 12;

const Media = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-0">
      {/* Hero Image - Same as About/Store pages */}
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="NCU Media"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Gallery Section */}
      <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16">
        <div className="w-full px-6 sm:px-8 md:px-[60px]">
          {/* Gallery Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white tracking-tight">
              Gallery:
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {currentImages.map((image) => (
              <div 
                key={image.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-blue-600 dark:bg-[#B19528] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 dark:hover:bg-[#B19528]/90 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 dark:bg-[#B19528] text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-blue-600 dark:bg-[#B19528] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 dark:hover:bg-[#B19528]/90 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Same sections as Store page */}
      <main>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Media;