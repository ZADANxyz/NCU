import React from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import { useTheme } from "@/components/ThemeProvider";
import { usePageTitle } from "@/hooks/usePageTitle";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const donationOptions = [
  {
    name: "ZEFFY",
    url: "https://www.zeffy.com/en-US/donation-form/e493e803-c728-4abc-933d-d7d321cbbdb1",
    preferred: true
  },
  {
    name: "PAYPAL",
    url: "https://www.paypal.com/donate?hosted_button_id=3TWPYQH7WT5GS",
    preferred: false
  },
  {
    name: "CASHAPP",
    url: "https://cash.app/$NCUniversity",
    preferred: false
  },
  {
    name: "VENMO",
    url: "https://venmo.com/u/NCUniversity",
    preferred: false
  }
];

const Donate = () => {
  usePageTitle("Donate");
  const { isDark } = useTheme();

  const handleDonationClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hero Image - Same as other pages */}
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Support New Covenant University"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Donation Options Section */}
      <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16 px-3 sm:px-6 md:px-[52px]">
        <div className="w-full">
        {/* Donation Buttons Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {donationOptions.map((option) => {
            const isPreferred = option.preferred;
            const preferredClasses = isDark
              ? 'border-blue-500 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
              : 'border-[#B19528] text-blue-800 bg-blue-100/10 hover:bg-blue-200/20';
            const nonPreferredClasses = 'border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20';

            return (
              <button
                key={option.name}
                onClick={() => handleDonationClick(option.url)}
                className={`group w-full font-bold py-6 px-8 transition text-center cursor-pointer shadow-lg overflow-hidden rounded border-2 font-roboto h-20 text-xl ${
                  isPreferred ? preferredClasses : nonPreferredClasses
                }`}
              >
                <span className="relative z-20">{option.name}</span>
              </button>
            );
          })}
        </div>

        {/* Description Text */}
        <div className="w-full max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed mb-6">
            New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students.
          </p>
          <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed">
            The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
          </p>
        </div>
        </div>
      </section>

      {/* Same sections as other pages */}
      <>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </>
    </>
  );
};

export default Donate;