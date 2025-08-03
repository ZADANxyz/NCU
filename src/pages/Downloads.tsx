import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeaderDOWNLOADS from "@/components/HeaderDOWNLOADS";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAndMapSection from "./home/sections/ContactAndMapSection";
import FooterSection from "./home/sections/FooterSection";

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
    <div className="min-h-screen flex flex-col">
      <HeaderDOWNLOADS />
      
      <main className="flex-1 pt-16">
        {/* Header Image Section */}
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/angel-crites.png"
              alt="New Covenant University"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Downloads
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                Access important documents and resources for your academic journey
              </p>
            </div>
          </div>
        </section>

        {/* Downloads Grid Section */}
        <section className="w-full py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {downloadItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    {item.description}
                  </p>
                  <Button variant="outline" asChild className="w-full max-w-xs">
                    <Link to={item.to}>
                      View Document
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Sections */}
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <ContactAndMapSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Downloads;