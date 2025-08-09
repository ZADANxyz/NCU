import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const NCU_ALUMNI_TEXT = (
  <div className="text-base md:text-[1.55rem] leading-relaxed font-normal font-roboto transition-colors"
    style={{
      color: "inherit"
    }}
  >
    <p className="mb-8 font-normal font-roboto dark:text-white text-base md:text-[1.38rem]">
      New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. New Covenant University is committed to providing an environment of understanding biblical standards of leadership and inspires a deeper relationship with God. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students{" "}
      <a
        href="/donate"
        className="font-bold underline font-roboto transition-colors dark:text-white"
        style={{ color: "inherit" }}
      >
        here
      </a>
      , as they take what they have learned from NCU to the marketplace and ministry.
    </p>
    <p className="font-normal font-roboto dark:text-white text-base md:text-[1.38rem]">
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
    <style>
      {`
      .dark .font-roboto, 
      .dark .font-normal, 
      .dark p, 
      .dark a {
        color: #fff !important;
      }
      `}
    </style>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-[300px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="New Covenant University Campus"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>
      <section
        className="relative z-10 bg-[rgba(255,255,255,0.99)] dark:bg-[rgba(28,28,36,0.99)] py-10 md:pt-10 lg:pt-14 pb-0"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.04)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          background: "var(--background)",
        }}
      >
        <div
          className="w-full flex flex-col md:flex-row min-h-[500px] items-stretch px-4 md:px-0"
        >
          <div
            className="w-full md:w-3/5 flex flex-col justify-start items-start md:pt-0"
          >
            <div className="md:pl-[52px] md:pr-[18px] w-full">
                <h2
                className="text-3xl sm:text-4xl md:text-[3.2rem] font-bold mb-6 text-left tracking-tight font-roboto transition-colors"
                style={{
                    color: "var(--h2-color, #181818)",
                    letterSpacing: 0.1,
                    fontFamily: "Roboto, Arial, sans-serif",
                    lineHeight: 1.12,
                    fontWeight: 700,
                }}
                >
                <span className="dark:text-white transition-colors">Meet Our NCU Alumni</span>
                </h2>
            </div>
            <div className="h-4 md:h-5" />
            <div className="w-full">
              <AlumniCarousel />
            </div>
            <div className="h-8 md:h-10" />
            <div className="flex-1 flex flex-col justify-start w-full md:pl-[52px] md:pr-[18px]">
              <div className="text-lg md:text-[1.55rem] leading-relaxed font-normal font-roboto transition-colors"
                   style={{ color: "inherit" }}>
                {NCU_ALUMNI_TEXT}
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-2/5 flex flex-col items-stretch justify-start mt-12 md:mt-0"
          >
            <div className="w-full flex md:justify-end">
              <div
                className="w-full max-w-md md:pr-[52px]"
              >
                <ContactTabBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;