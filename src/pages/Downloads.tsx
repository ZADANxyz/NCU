import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const Downloads = () => {
  const downloadItems = [
    {
      title: "Student Handbook",
      to: "/downloads/student-handbook",
      description: "Complete guide for student policies and procedures"
    },
    {
      title: "Tuition & Fees",
      to: "/downloads/tuition-fees", 
      description: "Current tuition rates and fee schedules"
    },
    {
      title: "Graduate Studies Notebook", 
      to: "/downloads/graduate-studies",
      description: "Graduate program requirements and guidelines"
    },
    {
      title: "Course Catalogue",
      to: "/downloads/course-catalogue",
      description: "Complete listing of available courses and programs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 flex-1">
        {/* Header Image Section */}
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                Downloads
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-muted-foreground">
                Access important documents and resources for your academic journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloadItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 rounded-lg border-2 border-[#B19528]/30 bg-card hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    {item.description}
                  </p>
                  <Button asChild className="w-full max-w-xs">
                    <Link to={item.to}>
                      View Document
                    </Link>
                  </Button>
                </div>
              ))}
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
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Downloads;