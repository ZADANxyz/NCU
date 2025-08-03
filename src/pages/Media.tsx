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

// Gallery images managed via Google Drive links
// To add/update images: 
// 1. Upload images to Google Drive
// 2. Right-click image > Get link > Change access to "Anyone with the link"
// 3. Use the direct image link format: https://drive.google.com/uc?export=view&id=FILE_ID
// Where FILE_ID is extracted from the shared link
const galleryImages = [
  { 
    id: 1, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_1", 
    alt: "Graduation ceremony" 
  },
  { 
    id: 2, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_2", 
    alt: "University event" 
  },
  { 
    id: 3, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_3", 
    alt: "Student activities" 
  },
  { 
    id: 4, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_4", 
    alt: "Campus life" 
  },
  { 
    id: 5, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_5", 
    alt: "Academic ceremonies" 
  },
  { 
    id: 6, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_6", 
    alt: "University facilities" 
  },
  { 
    id: 7, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_7", 
    alt: "Student life" 
  },
  { 
    id: 8, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_8", 
    alt: "Campus events" 
  },
  { 
    id: 9, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_9", 
    alt: "Academic achievements" 
  },
  { 
    id: 10, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_10", 
    alt: "University community" 
  },
  { 
    id: 11, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_11", 
    alt: "Educational activities" 
  },
  { 
    id: 12, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_12", 
    alt: "School programs" 
  },
  { 
    id: 13, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_13", 
    alt: "University celebrations" 
  },
  { 
    id: 14, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_14", 
    alt: "Academic excellence" 
  },
  { 
    id: 15, 
    src: "https://drive.google.com/uc?export=view&id=1example_file_id_15", 
    alt: "Student achievements" 
  },
];

const IMAGES_PER_PAGE = 24;

const Media = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  
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

  const openImage = (imageSrc: string, imageIndex: number) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(imageIndex);
  };

  const goToPreviousImage = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex].src);
    }
  };

  const goToNextImage = () => {
    if (selectedImageIndex < galleryImages.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex].src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(-1);
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {currentImages.map((image, index) => (
              <div 
                key={image.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openImage(image.src, startIndex + index)}
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
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Previous Image Arrow */}
            {selectedImageIndex > 0 && (
              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            {/* Next Image Arrow */}
            {selectedImageIndex < galleryImages.length - 1 && (
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            )}
            
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
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