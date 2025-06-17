
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16 px-3 sm:px-6 md:px-[52px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Column - Title and Photo Slider */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
              About Us
            </h2>
            <div className="w-full">
              <AlumniCarousel />
            </div>
          </div>

          {/* Right Column - Content and Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <div className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed mb-8">
              <p>
                New Covenant University was established in 1987 by Dr. Paul Crites with a founding principle to mentor leaders with a focused strategy of discovering each student's life purpose and strengthen each student's skill set for success in the marketplace of ideas. It all began with Dr. Crites' pragmatic and biblical approach of teaching purpose and order in his "School of Purpose" where hundreds of leaders gathered weekly to hear him. Soon the class notes were…{" "}
                <a 
                  href="/about" 
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  [ read more ]
                </a>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded font-roboto"
                asChild
              >
                <a href="/apply">Apply Today!</a>
              </Button>
              
              <button 
                className="block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden group rounded border-2 border-blue-700 dark:border-gold text-blue-800 dark:text-gold bg-blue-100/10 dark:bg-gold/10 hover:bg-blue-200/20 dark:hover:bg-gold/20 font-roboto"
                onClick={() => window.location.href = '/contact'}
              >
                <span className="relative z-20">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
