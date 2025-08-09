import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroDividerSection from "../home/sections/HeroDividerSection";
import DegreesOfferedSection from "../home/sections/DegreesOfferedSection";
import ReviewsSection from "../home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "../home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "../home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";
import { googleDriveService, GoogleDrivePdf } from "@/utils/googleDriveApi";
import { Skeleton } from "@/components/ui/skeleton";

const DownloadViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [pdf, setPdf] = useState<GoogleDrivePdf | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const findPdf = async () => {
      if (!slug) {
        setError("No document specified.");
        setLoading(false);
        return;
      }
      try {
        const allPdfs = await googleDriveService.fetchPdfs();
        const foundPdf = allPdfs.find(p => p.slug === slug);
        if (foundPdf) {
          setPdf(foundPdf);
        } else {
          setError("Document not found.");
        }
      } catch (err) {
        setError("Failed to load documents.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    findPdf();
  }, [slug]);

  usePageTitle(pdf ? pdf.name : "Download");

  const handleDownload = () => {
    if (pdf) {
      window.open(pdf.embedUrl.replace('/preview', ''), '_blank');
    }
  };

  if (loading) {
    return (
      <div className="pt-20">
        <section className="w-full pt-2 pb-2 bg-background">
          <div className="w-full px-3 sm:px-6 md:px-[52px]">
            <div className="flex justify-between items-center mb-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-10 w-36" />
            </div>
            <Skeleton className="w-full h-[1000px]" />
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-destructive mb-4">{error}</h2>
        <p className="text-muted-foreground mb-6">The document you are looking for could not be found.</p>
        <Button onClick={() => navigate('/downloads')}>Back to Downloads</Button>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* PDF Section */}
      <section className="w-full pt-2 pb-2 bg-background">
        <div className="w-full px-3 sm:px-6 md:px-[52px]">
          {/* Download Button */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-foreground">{pdf?.name}</h1>
            <Button 
              onClick={handleDownload} 
              className="flex items-center gap-2 bg-[#046BD2] hover:bg-[#046BD2]/90 dark:bg-[#B19528] dark:hover:bg-[#B19528]/90 text-white font-roboto"
            >
              <Download size={20} />
              Download PDF
            </Button>
          </div>

          {/* PDF Embed */}
          <div className="w-full flex justify-center">
            <iframe 
              src={pdf?.embedUrl}
              width="100%" 
              height="1000px" 
              allow="autoplay"
              style={{ border: "none", display: "block" }}
              title={`${pdf?.name} PDF`}
            />
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
    </div>
  );
};

export default DownloadViewer;