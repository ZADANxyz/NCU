import React from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";

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
  const handleDonationClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-background min-h-screen pt-0">
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
        {/* Donation Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {donationOptions.map((option, index) => (
            <div key={option.name} className="relative">
              {/* Gold highlight for Zeffy */}
              {option.preferred && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B19528] via-[#D4AF37] to-[#B19528] rounded-lg opacity-75"></div>
              )}
              <button
                onClick={() => handleDonationClick(option.url)}
                className={`group relative w-full font-bold py-6 px-8 transition text-center cursor-pointer shadow-lg overflow-hidden rounded border-2 font-roboto h-20 text-xl ${
                  option.preferred
                    ? 'border-[#B19528] text-[#B19528] bg-[#B19528]/10 hover:bg-[#B19528]/20'
                    : 'border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20'
                }`}
              >
                <span className="relative z-20">{option.name}</span>
                <span
                  className={`absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 ${option.preferred ? 'block' : 'dark:hidden'}`}
                  aria-hidden="true"
                  style={{
                    zIndex: 3,
                    background: option.preferred 
                      ? "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)"
                      : "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                    boxShadow: option.preferred
                      ? "0 8px 30px 0 rgba(177,149,40,0.19)"
                      : "0 8px 30px 0 rgba(51,132,245,0.17)",
                    borderRadius: "inherit",
                  }}
                ></span>
                <span
                  className={`absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 ${option.preferred ? 'hidden' : 'hidden dark:block'}`}
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
          ))}
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed">
            New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students. The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
          </p>
        </div>
      </section>

      {/* Same sections as other pages */}
      <main>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Donate;