import React from "react";
import HeaderMenuDEGREES from "@/components/HeaderMenuDEGREES";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "@/pages/home/sections/MapSection";
import FooterSection from "@/pages/home/sections/FooterSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const BACHELOR_COURSES = [
  {
    title: "Bachelor of Christian Counseling",
    path: "/degrees/bachelor-of-arts/christian-counseling"
  },
  {
    title: "Bachelor of Christian Leadership & Organizational Management", 
    path: "/degrees/bachelor-of-arts/christian-leadership-organizational-management"
  },
  {
    title: "Bachelor of Theology",
    path: "/degrees/bachelor-of-arts/theology"
  },
  {
    title: "Bachelor of Classical Education",
    path: "/degrees/bachelor-of-arts/classical-education"
  }
];

const BachelorOfArts = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenuDEGREES currentDegreeLevel="bachelor" />
      
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
            Bachelor of Arts Degrees:
          </h2>
          
          <div className="space-y-4">
            {BACHELOR_COURSES.map((course) => (
              <Link key={course.path} to={course.path} className="block" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full text-left justify-start h-auto py-6 px-6 text-lg font-medium border-2 border-[#046BD2] text-[#046BD2] hover:bg-[#046BD2] hover:text-white"
                >
                  {course.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
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
      
      <FooterSection />
    </div>
  );
};

export default BachelorOfArts;