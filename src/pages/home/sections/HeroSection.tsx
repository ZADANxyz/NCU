
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

// Use the exact uploaded header photo. No overlays, no text, no extra spacing.
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const HeroSection = () => {
  return (
    <>
      {/* Flush header image, absolutely no gap above, no overlay/text */}
      <div
        className="w-full relative"
        style={{
          margin: 0,
          padding: 0,
          borderRadius: 0,
          // Ensure no gap between menu and the image: force top alignment
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="New Covenant University Hero"
          className="w-full h-auto block"
          style={{
            display: "block",
            margin: 0,
            padding: 0,
            borderRadius: 0,
            width: "100%",
            height: "auto",
            maxWidth: "100vw",
            // OBJECT-FIT: contain ensures full image is shown, not cropped
            objectFit: "contain",
            objectPosition: "top center",
            background: "#fff", // fallback color for any empty bar area
            boxSizing: "border-box",
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
