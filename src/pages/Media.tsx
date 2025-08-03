import React, { useState, useEffect } from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

// Gallery images - now automatically managed via Zapier integration
// Main Google Drive folder: https://drive.google.com/drive/folders/1FDYQplYRsIjqJqYuAHHDBglmy7t_Ar94?usp=share_link

// Initial gallery images (will be replaced by Zapier webhook data)
const initialGalleryImages = [
  { 
    id: 1, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_1", 
    alt: "University Photo 1" 
  },
  { 
    id: 2, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_2", 
    alt: "University Photo 2" 
  },
  { 
    id: 3, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_3", 
    alt: "University Photo 3" 
  },
  { 
    id: 4, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_4", 
    alt: "University Photo 4" 
  },
  { 
    id: 5, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_5", 
    alt: "University Photo 5" 
  },
  { 
    id: 6, 
    src: "https://drive.google.com/uc?export=view&id=REPLACE_WITH_ACTUAL_FILE_ID_6", 
    alt: "University Photo 6" 
  },
];

const IMAGES_PER_PAGE = 24;

const Media = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const [galleryImages, setGalleryImages] = useState(initialGalleryImages);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Load saved webhook URL and gallery data from localStorage
  useEffect(() => {
    const savedWebhookUrl = localStorage.getItem("mediaGalleryWebhookUrl");
    const savedGalleryImages = localStorage.getItem("mediaGalleryImages");
    
    if (savedWebhookUrl) {
      setWebhookUrl(savedWebhookUrl);
    }
    
    if (savedGalleryImages) {
      try {
        const parsedImages = JSON.parse(savedGalleryImages);
        setGalleryImages(parsedImages);
      } catch (error) {
        console.error("Error parsing saved gallery images:", error);
      }
    }
  }, []);

  // Set up webhook endpoint listener
  useEffect(() => {
    const handleWebhookData = (event: MessageEvent) => {
      if (event.data.type === 'ZAPIER_GALLERY_UPDATE') {
        const newImages = event.data.images;
        setGalleryImages(newImages);
        localStorage.setItem("mediaGalleryImages", JSON.stringify(newImages));
        toast({
          title: "Gallery Updated",
          description: `${newImages.length} images loaded from Google Drive`,
        });
      }
    };

    window.addEventListener('message', handleWebhookData);
    return () => window.removeEventListener('message', handleWebhookData);
  }, [toast]);
  
  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handleWebhookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your Zapier webhook URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    localStorage.setItem("mediaGalleryWebhookUrl", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          action: "get_gallery_images",
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Webhook URL Saved",
        description: "The webhook URL has been saved. Your Zapier automation should now update the gallery when you add images to Google Drive.",
      });
      
      setIsSettingsOpen(false);
    } catch (error) {
      console.error("Error testing webhook:", error);
      toast({
        title: "Webhook URL Saved",
        description: "The webhook URL has been saved locally. Make sure your Zapier automation is set up correctly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          {/* Gallery Title & Settings */}
          <div className="mb-12 flex justify-between items-center">
            <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white tracking-tight">
              Gallery:
            </h2>
            
            {/* Admin Settings Button */}
            <Collapsible open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border">
                  <h3 className="text-lg font-medium mb-4 text-[#181818] dark:text-white">
                    Zapier Webhook Configuration
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Set up your Zapier webhook to automatically update the gallery when you add images to Google Drive.
                  </p>
                  
                  <form onSubmit={handleWebhookSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
                      <Input
                        id="webhookUrl"
                        type="url"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                        placeholder="https://hooks.zapier.com/hooks/catch/..."
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Webhook URL"}
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                      Setup Instructions:
                    </h4>
                    <ol className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                      <li>1. Create a Zapier automation with "Google Drive - New File in Folder" trigger</li>
                      <li>2. Set the folder to your Google Drive gallery folder</li>
                      <li>3. Add a "Webhooks - POST" action step</li>
                      <li>4. Set the webhook URL to send image data to this website</li>
                      <li>5. Configure the payload to include file ID and name for each image</li>
                      <li>6. Test by uploading an image to your Google Drive folder</li>
                    </ol>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
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