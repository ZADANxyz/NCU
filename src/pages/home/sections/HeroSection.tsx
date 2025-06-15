
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

// Section image
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

// User provided alumni text (long, will wrap to visually fill column)
const NCU_ALUMNI_TEXT = (
  <div className="font-medium text-base md:text-lg text-[#272730] dark:text-[#eaeaea] max-w-2xl mt-2">
    <p className="mb-4">
      New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. New Covenant University is committed to providing an environment of understanding biblical standards of leadership and inspires a deeper relationship with God. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students here, as they take what they have learned from NCU to the marketplace and ministry.
    </p>
    <p>
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const HeroSection = () => {
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
            width: "100%",
            maxWidth: "100vw",
            height: "430px", // Sneak peek, shows above/below hero
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
      {/* Hero section: alumni & contact (matching padding, no extra space) */}
      <section
        className="relative z-10 flex flex-col md:flex-row items-stretch w-full bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(28,28,36,0.97)] pt-0 md:pt-9 lg:pt-10 pb-0 px-3 md:px-7"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.05)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
        }}
      >
        {/* Column: Alumni (left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-start pt-7 md:pt-0 pr-0 md:pr-8" style={{ minWidth: 0 }}>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair golden mb-0 text-left tracking-tight"
            style={{ letterSpacing: 0.1, fontFamily: "'Playfair Display', serif", lineHeight: 1.12 }}
          >
            Meet Our NCU Alumni
          </h2>
          {/* Alumni slider right below header */}
          <AlumniCarousel />
          {/* Text fills remainder, wraps to last line */}
          <div className="flex-1 flex flex-col justify-start">
            {NCU_ALUMNI_TEXT}
          </div>
        </div>
        {/* Column: Contact (right) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-0 md:mt-0 pt-4 md:pt-0 pl-0 md:pl-8" style={{ minWidth: 0 }}>
          <ContactTabBlock />
        </div>
      </section>
      {/* Gold section divider - matches content width */}
      <div
        className="mx-auto w-full max-w-5xl"
        style={{
          marginTop: "-8px",
          marginBottom: "2.5rem",
          height: 3,
          background:
            "linear-gradient(90deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.15) 2.5%, rgba(177,149,40,0.37) 8%, rgba(177,149,40,1) 21%, rgba(177,149,40,1) 79%, rgba(177,149,40,0.37) 92%, rgba(177,149,40,0.15) 97.5%, rgba(177,149,40,0) 100%)",
          boxShadow:
            "0 2px 18px 0 rgba(177,149,40,0.14) inset, 0 2px 10px 0 rgba(177,149,40,0.05)",
          borderRadius: 2,
          zIndex: 20,
        }}
      />
    </>
  );
};

export default HeroSection;
