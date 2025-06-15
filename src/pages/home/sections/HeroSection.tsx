
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

// Full bleed, override side paddings for the hero photo
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";
const HERO_IMAGE_HEIGHT = 430;

// User provided alumni text (with donate link)
const NCU_ALUMNI_TEXT = (
  <div className="font-semibold text-[1.11rem] sm:text-lg md:text-xl text-[#272730] dark:text-[#eaeaea] max-w-2xl mt-2 leading-relaxed">
    <p className="mb-4">
      New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. New Covenant University is committed to providing an environment of understanding biblical standards of leadership and inspires a deeper relationship with God. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students{" "}
      <a href="/donate" className="font-bold underline hover:text-blue-700 transition-colors" style={{ fontWeight: 800 }}>here</a>
      , as they take what they have learned from NCU to the marketplace and ministry.
    </p>
    <p>
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <>
      {/* Header image: edge-to-edge */}
      <div
        className="w-full relative"
        style={{
          margin: "0 -50vw", // overdraw for edge-to-edge
          padding: 0,
          borderRadius: 0,
          overflow: "hidden",
          lineHeight: 0,
          position: "relative",
          left: "50%",
          right: "50%",
          width: "100vw",
          minWidth: "100vw",
          transform: "translateX(-50%)",
          background: "#fff"
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
            height: `${HERO_IMAGE_HEIGHT}px`,
            maxHeight: `${HERO_IMAGE_HEIGHT}px`,
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
            boxSizing: "border-box",
            background: "#fff",
            minWidth: "100vw"
          }}
          draggable={false}
        />
      </div>
      {/* Hero section: two equal columns, matching padding, crisp visual divider */}
      <section
        className="relative z-10 flex flex-col md:flex-row items-stretch w-full bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(28,28,36,0.97)] pt-0 md:pt-12 pb-0 px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.06)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          maxWidth: "100vw",
        }}
      >
        {/* Left col: Alumni */}
        <div className="w-full md:w-1/2 flex flex-col justify-start pt-8 pb-8 md:pb-0 pr-0 md:pr-8" style={{ minWidth: 0 }}>
          <div className="flex flex-col" style={{ height: "100%" }}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-0 text-left tracking-tight"
              style={{
                color: "#000",
                letterSpacing: 0.1,
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.12,
                marginBottom: "0.25em",
                marginTop: 0,
                alignSelf: "flex-start"
              }}
            >
              Meet Our NCU Alumni
            </h2>
            {/* Alumni gallery/slider */}
            <div style={{ marginTop: "0.45em", marginBottom: "1em" }}>
              <AlumniCarousel />
            </div>
            {/* Rest of vertical space: alumni blurb */}
            <div className="flex-1 flex flex-col justify-start" style={{ minHeight: 180 }}>
              {NCU_ALUMNI_TEXT}
            </div>
          </div>
        </div>
        {/* Right col: Contact */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-0 md:mt-0 pt-4 md:pt-0 pl-0 md:pl-8" style={{ minWidth: 0 }}>
          <ContactTabBlock />
        </div>
      </section>
      {/* Section divider: gold line beneath section, width constrained to columns */}
      <div
        className="mx-auto w-full max-w-6xl"
        style={{
          marginTop: "-8px",
          marginBottom: "2.5rem",
          height: 3,
          background:
            "linear-gradient(90deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.14) 2.5%, rgba(177,149,40,0.36) 8%, rgba(177,149,40,1) 22%, rgba(177,149,40,1) 78%, rgba(177,149,40,0.36) 94%, rgba(177,149,40,0.14) 97.5%, rgba(177,149,40,0) 100%)",
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
