import React, { useState, useEffect } from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { googleDriveService, GoogleDriveImage } from "@/utils/googleDriveApi";
import { usePageTitle } from "@/hooks/usePageTitle";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

// Gallery images managed via Google Drive API
// Main Google Drive folder: https://drive.google.com/drive/folders/1FDYQplYRsIjqJqYuAHHDBglmy7t_Ar94?usp=share_link

// Initial placeholder images (will be replaced by Google Drive API data)
const initialGalleryImages: GoogleDriveImage[] = [
  { 
    id: 1, 
    src: "https://drive.google.com/uc?export=view&id=PLACEHOLDER", 
    alt: "Loading images from Google Drive...",
    name: "placeholder",
    fileId: "placeholder"
  }
];

const IMAGES_PER_PAGE = 24;

const Media = () => {
  usePageTitle("Media");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const [galleryImages, setGalleryImages] = useState<GoogleDriveImage[]>(initialGalleryImages);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Load gallery images on component mount
  useEffect(() => {
    const savedGalleryImages = localStorage.getItem("mediaGalleryImages");
    
    if (savedGalleryImages) {
      try {
        const parsedImages = JSON.parse(savedGalleryImages);
        setGalleryImages(parsedImages);
      } catch (error) {
        console.error("Error parsing saved gallery images:", error);
      }
    }
    
    // Auto-load fresh images from Google Drive
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    setIsLoading(true);
    try {
      const images = await googleDriveService.fetchGalleryImages();
      setGalleryImages(images);
      localStorage.setItem("mediaGalleryImages", JSON.stringify(images));
      toast({
        title: "Gallery Updated",
        description: `${images.length} images loaded from Google Drive`,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast({
        title: "Error Loading Images",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };


  // Calculate pagination values
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
    <>
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
      <>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </>
    </>
  );
};

export default Media;