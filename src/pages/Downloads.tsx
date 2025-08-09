import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";
import { googleDriveService, GoogleDrivePdf } from "@/utils/googleDriveApi";
import { Skeleton } from "@/components/ui/skeleton";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const Downloads = () => {
  usePageTitle("Downloads");
  const [downloadItems, setDownloadItems] = useState<GoogleDrivePdf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPdfs = async () => {
      try {
        const pdfs = await googleDriveService.fetchPdfs();
        setDownloadItems(pdfs);
      } catch (error) {
        console.error("Failed to load PDF documents:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPdfs();
  }, []);

  return (
    <>
      {/* Header Image Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="New Covenant University"
            className="w-full h-full object-cover"
            loading="eager"
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
      </section>

      {/* Downloads Grid Section */}
      <section className="w-full py-16 bg-background">
        <div className="w-full px-6 sm:px-8 md:px-[60px]">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-roboto font-normal mb-4 text-[#181818] dark:text-white tracking-tight">
              Downloads
            </h1>
            <p className="text-lg md:text-xl font-roboto font-normal max-w-3xl mx-auto text-[#333] dark:text-gray-200">
              Access important documents and resources for your academic journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-none">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 rounded-lg border-2 border-[#B19528]/30 bg-white dark:bg-[#242836]">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-6" />
                  <Skeleton className="h-10 w-full max-w-xs" />
                </div>
              ))
            ) : (
              downloadItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center p-8 rounded-lg border-2 border-[#B19528]/30 bg-white dark:bg-[#242836] hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-roboto font-normal mb-4 text-[#181818] dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-[#333] dark:text-gray-200 font-roboto font-normal mb-6 max-w-sm">
                    View the {item.name} document.
                  </p>
                  <Button asChild variant="default" className="w-full max-w-xs bg-[#046BD2] hover:bg-[#046BD2]/90 text-white">
                    <Link to={`/downloads/${item.slug}`}>
                      View Document
                    </Link>
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <HeroDividerSection />

      {/* Footer Sections */}
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      
      {/* Another Divider */}
      <HeroDividerSection />
      
      {/* Contact Form Section */}
      <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
        <ContactAboutForm />
      </div>
      
      {/* Map Section */}
      <MapSection />
    </>
  );
};

export default Downloads;