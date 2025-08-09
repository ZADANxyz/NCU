import React, { useState, useEffect } from "react";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "@/pages/home/sections/MapSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";
import { googleDriveService, GoogleDrivePdf } from "@/utils/googleDriveApi";
import { Skeleton } from "@/components/ui/skeleton";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const AssociateOfArts = () => {
  usePageTitle("Associate of Arts");
  const [courses, setCourses] = useState<GoogleDrivePdf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const pdfs = await googleDriveService.fetchPdfsForDegree('associate');
        setCourses(pdfs);
      } catch (error) {
        console.error("Failed to load associate courses:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
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
      
      {/* Course Selection Section */}
      <section className="w-full bg-background dark:bg-background py-16 px-3 sm:px-6 md:px-[52px]">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-12 text-left tracking-tight">
            Associate of Arts Degrees:
          </h2>
          
          <div className="space-y-4">
            {loading ? (
              <>
                <Skeleton className="w-full h-20" />
                <Skeleton className="w-full h-20" />
              </>
            ) : (
              courses.map((course) => (
                <Link key={course.id} to={`/degrees/associate-of-arts/${course.slug}`} className="block">
                  <Button
                    variant="outline"
                    className="w-full text-left justify-start h-auto py-6 px-6 text-lg font-medium border-2 border-[#046BD2] text-[#046BD2] hover:bg-[#046BD2] hover:text-white"
                  >
                    {course.name}
                  </Button>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      
      {/* Divider */}
      <HeroDividerSection />
      
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      
      {/* Divider */}
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

export default AssociateOfArts;