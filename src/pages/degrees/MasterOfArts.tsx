import React from "react";
import HeaderMenuDEGREES from "@/components/HeaderMenuDEGREES";
import HeroSection from "@/pages/home/sections/HeroSection";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAndMapSection from "@/pages/home/sections/ContactAndMapSection";
import FooterSection from "@/pages/home/sections/FooterSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MASTER_COURSES = [
  {
    title: "Master of Christian Counseling",
    path: "/degrees/master-of-arts/christian-counseling"
  },
  {
    title: "Master of Christian Leadership & Organizational Management", 
    path: "/degrees/master-of-arts/christian-leadership-organizational-management"
  },
  {
    title: "Master of Divinity",
    path: "/degrees/master-of-arts/divinity"
  },
  {
    title: "Master of Practical Theology",
    path: "/degrees/master-of-arts/practical-theology"
  }
];

const MasterOfArts = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenuDEGREES currentDegreeLevel="master" />
      <HeroSection />
      
      {/* Course Selection Section */}
      <section className="w-full bg-background dark:bg-background py-12 px-6 sm:px-8 md:px-[60px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-roboto font-normal text-[#181818] dark:text-white mb-8">
            Master of Arts Degrees:
          </h2>
          
          <div className="space-y-4">
            {MASTER_COURSES.map((course) => (
              <Link key={course.path} to={course.path} className="block">
                <Button
                  variant="outline"
                  className="w-full text-left justify-start h-auto py-6 px-6 text-lg font-medium"
                >
                  {course.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <HeroDividerSection />
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      <ContactAndMapSection />
      <FooterSection />
    </div>
  );
};

export default MasterOfArts;