
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16 px-3 sm:px-6 md:px-[52px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column - Title and Photo Slider */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
            About Us
          </h2>
          <div className="w-full overflow-hidden rounded-lg h-80 md:h-96">
            <AlumniCarousel />
          </div>
        </div>

        {/* Right Column - Content and Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start pr-0 lg:pr-4">
          <div className="text-xl md:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed mb-8 mt-16 lg:mt-20">
            <p>
              New Covenant University was established in 1987 by Dr. Paul Crites with a founding principle to mentor leaders with a focused strategy of discovering each student's life purpose and strengthen each student's skill set for success in the marketplace of ideas. It all began with Dr. Crites' pragmatic and biblical approach of teaching purpose and order in his "School of Purpose" where hundreds of leaders gathered weekly to hear him. Soon the class notes were…{" "}
              <a 
                href="/about" 
                className="text-blue-600 hover:underline dark:text-[#B19528] dark:hover:text-[#B19528]"
              >
                [ read more ]
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="group block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto w-full sm:w-auto min-w-[140px] h-12"
              onClick={() => window.location.href = '/apply'}
            >
              <span className="relative z-20">Apply Today!</span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                  borderRadius: "inherit",
                }}
              ></span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                  borderRadius: "inherit",
                }}
              ></span>
            </button>
            
            <button 
              className="group block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto w-full sm:w-auto min-w-[140px] h-12"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="relative z-20">Contact Us</span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                  borderRadius: "inherit",
                }}
              ></span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                  borderRadius: "inherit",
                }}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
