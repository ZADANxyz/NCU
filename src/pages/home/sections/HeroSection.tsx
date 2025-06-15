
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock, { GoldBar } from "@/components/ContactTabBlock";

// Flush header image, controlled height sneak peek
const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const NCU_ALUMNI_TEXT = (
  <>
    <p className="font-medium text-base md:text-lg text-[#272730] dark:text-[#eaeaea] mb-3 md:mb-6 max-w-2xl">
      At New Covenant University, our alumni stand as living testaments to the possibilities unlocked by faith-driven education.
      From business and ministry, to health, creative arts, and beyond, NCU graduates lead with integrity and vision in their communities around the globe.
      <br className="hidden md:block"/>
      <br />
      Explore the stories and accomplishments of our vibrant alumni—and discover how your journey could inspire the next chapter.
    </p>
  </>
);

const HeroSection = () => {
  return (
    <>
      {/* Header image, with sneak preview (controlled height) */}
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
            height: "430px", // lowered height for sneak peek (was 415-600)
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
      {/* Hero content section */}
      <section
        className="relative z-10 flex flex-col md:flex-row items-stretch w-full bg-[rgba(255,255,255,0.92)] dark:bg-[rgba(28,28,36,0.97)] py-0 md:py-9 lg:py-10 px-2 md:px-0"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.05)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center pb-9 md:pb-0 pt-7 md:pt-0 md:pr-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair golden text-left mb-2 md:mb-3 tracking-tight"
            style={{ letterSpacing: 0.1, fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our NCU Alumni
          </h2>
          <div className="mb-4">{NCU_ALUMNI_TEXT}</div>
          <AlumniCarousel />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <ContactTabBlock />
        </div>
      </section>
      {/* Gold bar floats below the contact form, outside its border */}
      <div className="flex w-full justify-center">
        <GoldBar />
      </div>
    </>
  );
};

export default HeroSection;

