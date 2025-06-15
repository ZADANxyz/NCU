import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

// Section image
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

// User provided alumni text (long, will wrap to visually fill column)
const NCU_ALUMNI_TEXT = (
  <div className="text-[1.22rem] md:text-[1.35rem] leading-relaxed text-[#242424] dark:text-[#eaeaea] max-w-2xl mt-4 mb-1 md:mb-2 font-normal">
    <p className="mb-6 font-normal">
      New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. New Covenant University is committed to providing an environment of understanding biblical standards of leadership and inspires a deeper relationship with God. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students{" "}
      <a href="/donate" className="font-bold underline text-blue-700 hover:text-blue-900 transition-colors" style={{ fontWeight: 800 }}>
        here
      </a>
      , as they take what they have learned from NCU to the marketplace and ministry.
    </p>
    <p className="font-normal">
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const HeroSection = () => {
  // Padding: match header (same as px-3 md:px-7, which is 0.75rem / 1.75rem = 12px / 28px).
  // We'll increase to px-4 md:px-8 to ensure visual consistency with header.
  return (
    <>
      {/* Header image: Edge-to-edge */}
      <div
        className="w-full relative"
        style={{
          margin: 0,
          padding: 0,
          borderRadius: 0,
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="New Covenant University Hero"
          className="w-full"
          style={{
            margin: 0,
            padding: 0,
            borderRadius: 0,
            width: "100vw",
            maxWidth: "100vw",
            height: "430px",
            maxHeight: "430px",
            objectFit: "contain",
            objectPosition: "top center",
            background: "#fff",
            display: "block",
            boxSizing: "border-box",
          }}
          draggable={false}
        />
      </div>
      {/* Hero section: alumni & contact */}
      <section
        className="relative z-10 flex flex-col md:flex-row items-stretch w-full bg-[rgba(255,255,255,0.99)] dark:bg-[rgba(28,28,36,0.99)] pt-0 md:pt-10 lg:pt-14 pb-0 px-4 md:px-8"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.04)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          background: "var(--background)", // use same bg everywhere for consistency
        }}
      >
        {/* Column: Alumni (left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-start pt-8 md:pt-0 pr-0 md:pr-10" style={{ minWidth: 0 }}>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-1 text-left tracking-tight"
            style={{
              color: "#181818",
              letterSpacing: 0.1,
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.12,
            }}
          >
            Meet Our NCU Alumni
          </h2>
          {/* Space between header and slider */}
          <div className="h-2" />
          {/* Alumni slider right below header */}
          <AlumniCarousel />
          {/* Space between slider and text */}
          <div className="h-4" />
          {/* Text fills remainder, wraps to last line */}
          <div className="flex-1 flex flex-col justify-start">
            {NCU_ALUMNI_TEXT}
          </div>
        </div>
        {/* Column: Contact (right) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-0 md:mt-0 pt-6 md:pt-0 pl-0 md:pl-10" style={{ minWidth: 0 }}>
          <ContactTabBlock />
        </div>
      </section>
      {/* Gold section divider - lighter & thinner */}
      <div
        className="mx-auto w-full max-w-5xl"
        style={{
          marginTop: "2.5rem",
          marginBottom: "3.5rem",
          height: 2, // thinner
          background:
            "linear-gradient(90deg,rgba(177,149,40,0.04) 0%, rgba(177,149,40,0.16) 2.5%, rgba(177,149,40,0.30) 10%, rgba(177,149,40,0.50) 25%, rgba(177,149,40,0.50) 75%, rgba(177,149,40,0.30) 90%, rgba(177,149,40,0.16) 97.5%, rgba(177,149,40,0.04) 100%)",
          boxShadow:
            "0 2px 10px 0 rgba(177,149,40,0.05) inset, 0 2px 2px 0 rgba(177,149,40,0.03)",
          borderRadius: 1,
          zIndex: 20,
        }}
      />
    </>
  );
};

export default HeroSection;
