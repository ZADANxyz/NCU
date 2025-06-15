
import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const NCU_ALUMNI_TEXT = (
  <div className="text-[0.99rem] md:text-[1.08rem] leading-relaxed text-[#242424] dark:text-[#eaeaea] max-w-2xl mt-4 mb-1 md:mb-2 font-normal font-roboto">
    <p className="mb-6 font-normal font-roboto" style={{ fontSize: "0.99rem" }}>
      New Covenant University believes in the proper and extensive training for Christian Leaders called to Ministry, Entrepreneurship, and Education. New Covenant University is committed to providing an environment of understanding biblical standards of leadership and inspires a deeper relationship with God. Each graduate is supported by a mentor and is prepared to meet the rigorous demands of their calling. Please consider sowing into one of our scholarship programs or sponsoring one of our students{" "}
      <a
        href="/donate"
        className="font-bold underline font-roboto"
        style={{ color: "#181818" }}
      >
        here
      </a>
      , as they take what they have learned from NCU to the marketplace and ministry.
    </p>
    <p className="font-normal font-roboto" style={{ fontSize: "0.99rem" }}>
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <>
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
      <section
        className="relative z-10 flex flex-col md:flex-row items-stretch justify-center w-full bg-[rgba(255,255,255,0.99)] dark:bg-[rgba(28,28,36,0.99)] pt-0 md:pt-10 lg:pt-14 pb-0 px-4 md:px-8"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.04)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          background: "var(--background)",
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-start pt-8 md:pt-0 pr-0 md:pr-5" style={{ minWidth: 0 }}>
          <h2
            className="text-4xl sm:text-[2.7rem] md:text-[3.2rem] font-semibold mb-4 md:mb-8 text-left tracking-tight font-roboto"
            style={{
              color: "#181818",
              letterSpacing: 0.1,
              fontFamily: "Roboto, Arial, sans-serif",
              lineHeight: 1.12,
            }}
          >
            Meet Our NCU Alumni
          </h2>
          <div className="h-2" />
          <AlumniCarousel />
          <div className="h-4" />
          <div className="flex-1 flex flex-col justify-start">
            {NCU_ALUMNI_TEXT}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-0 md:mt-0 pt-6 md:pt-0 pl-0 md:pl-5 md:pr-0" style={{ minWidth: 0 }}>
          <ContactTabBlock />
        </div>
      </section>
      <div
        className="mx-auto w-full max-w-5xl"
        style={{
          marginTop: "4.3rem", // more space above line
          marginBottom: "3.5rem",
          height: 2, // thinner divider line
          background:
            "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
          boxShadow:
            "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
          borderRadius: 3,
          zIndex: 20,
          opacity: 0.99,
        }}
      />
    </>
  );
};

export default HeroSection;
