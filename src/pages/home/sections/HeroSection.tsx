
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

// Flush hero image directly under the header, no overlay, no spacing above
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const HeroSection = () => {
  return (
    <>
      {/* Flush header image, no overlay, 0 margin and 0 padding top/bottom */}
      <div className="w-full relative" style={{ marginTop: 0, paddingTop: 0, paddingBottom: 0 }}>
        <img
          src={HERO_IMAGE}
          alt="New Covenant University Hero"
          className="w-full max-w-none h-auto block object-cover object-center"
          style={{
            margin: 0,
            padding: 0,
            display: "block",
            maxHeight: 460,  // Matches ncu.education at desktop, adjust if needed.
            minHeight: 320,  // Helps on smaller screens.
            width: "100vw",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          draggable={false}
        />
      </div>
      {/* Hero section below the image */}
      <section
        className="relative z-10 flex flex-col items-center w-full bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(28,28,36,0.97)] py-0 md:py-6 lg:py-8 px-1 md:px-0"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.05)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
        }}
      >
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair golden text-center mb-3 md:mb-5 tracking-tight"
          style={{ letterSpacing: 0.1, fontFamily: "'Playfair Display', serif" }}
        >
          Meet Our NCU Alumni
        </h2>
        {/* Main hero content: alumni carousel left, contact form right */}
        <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-5xl gap-5 md:gap-10 p-1">
          <div className="w-full md:w-[53%] flex justify-center">
            <AlumniCarousel />
          </div>
          <div className="w-full md:w-[47%] flex justify-center">
            <ContactTabBlock />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
