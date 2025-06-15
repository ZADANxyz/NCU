import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const NCU_ALUMNI_TEXT = (
  <div className="text-[1.38rem] md:text-[1.55rem] leading-relaxed text-[#242424] dark:text-[#eaeaea] font-normal font-roboto">
    <p className="mb-8 font-normal font-roboto" style={{ fontSize: "1.38rem" }}>
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
    <p className="font-normal font-roboto" style={{ fontSize: "1.38rem" }}>
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const EDGE_PADDING = "52px";
const SMALL_EDGE_PADDING = "12px";

const SECTION_MAX_WIDTH = "1240px"; // Content width
const SECTION_HORIZONTAL_PADDING = "52px";

const HeroSection = () => {
  return (
    <>
      {/* HERO IMAGE: ... */}
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
            height: "auto",
            maxHeight: "85vh",
            objectFit: "cover",
            objectPosition: "top center",
            background: "#fff",
            display: "block",
            boxSizing: "border-box",
            position: "relative",
            top: "-50px",
          }}
          draggable={false}
        />
      </div>
      {/* SECTION: ... */}
      <section
        className="relative z-10 bg-[rgba(255,255,255,0.99)] dark:bg-[rgba(28,28,36,0.99)] pt-0 md:pt-10 lg:pt-14 pb-0"
        style={{
          boxShadow: "0 4px 32px 0 rgba(4,107,210,0.04)",
          borderBottomLeftRadius: "1.2rem",
          borderBottomRightRadius: "1.2rem",
          background: "var(--background)",
        }}
      >
        <div
          className="w-full flex flex-col md:flex-row min-h-[500px] items-stretch"
          style={{
            gap: 0,
            padding: 0,
          }}
        >
          {/* Left Section: 3/5 width on desktop */}
          <div
            className="w-full md:w-3/5 flex flex-col justify-start items-start pt-12 md:pt-0"
            style={{
              paddingLeft: EDGE_PADDING,
              paddingRight: "18px",
              minWidth: 0,
            }}
          >
            <h2
              className="text-4xl sm:text-[2.7rem] md:text-[3.2rem] font-bold mb-6 md:mb-10 text-left tracking-tight font-roboto"
              style={{
                color: "#181818",
                letterSpacing: 0.1,
                fontFamily: "Roboto, Arial, sans-serif",
                lineHeight: 1.12,
                fontWeight: 700,
              }}
            >
              Meet Our NCU Alumni
            </h2>
            {/* More space above slider */}
            <div className="h-4 md:h-5" />
            <div className="w-full max-w-[870px]">
              <AlumniCarousel />
            </div>
            {/* More space between slider and paragraph */}
            <div className="h-8 md:h-10" />
            <div className="flex-1 flex flex-col justify-start w-full max-w-[870px]">
              {NCU_ALUMNI_TEXT}
            </div>
          </div>
          {/* Right: Contact tab */}
          <div
            className="w-full md:w-2/5 flex flex-col md:items-end md:justify-start items-stretch justify-start mt-8 md:mt-0"
            style={{
              paddingRight: 0,
              paddingLeft: 0,
              minWidth: 0,
              marginRight: 0,
            }}
          >
            <div className="w-full flex md:justify-end" style={{ marginLeft: 0, marginRight: 0 }}>
              <div
                className="w-full max-w-md hero-contact-padding"
                style={{
                  paddingRight: "18px",
                }}
              >
                <ContactTabBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (min-width: 768px) {
          .hero-contact-padding {
            padding-right: 52px !important;
          }
        }
      `}</style>
      {/* Divider (GOLD BAR): Restrict width to content, match section spacing */}
      <div
        className="w-full flex justify-center"
        style={{
          marginTop: "5.5rem",
          marginBottom: "3.5rem",
        }}
      >
        <div
          className="w-full"
          style={{
            maxWidth: SECTION_MAX_WIDTH,
            marginLeft: "auto",
            marginRight: "auto",
            height: "1.1px",
            background:
              "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
            boxShadow:
              "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
            borderRadius: 3,
            zIndex: 20,
            opacity: 0.99,
            // Add the same left/right padding as section
            paddingLeft: SECTION_HORIZONTAL_PADDING,
            paddingRight: SECTION_HORIZONTAL_PADDING,
          }}
        />
      </div>
      {/* Degrees Offered section goes directly below */}
    </>
  );
};

export default HeroSection;
