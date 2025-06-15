import React from "react";
import AlumniCarousel from "@/components/AlumniCarousel";
import ContactTabBlock from "@/components/ContactTabBlock";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const NCU_ALUMNI_TEXT = (
  <div className="text-[1.28rem] md:text-[1.38rem] leading-relaxed text-[#242424] dark:text-[#eaeaea] max-w-2xl mt-4 mb-1 md:mb-2 font-normal font-roboto">
    <p className="mb-6 font-normal font-roboto" style={{ fontSize: "1.28rem" }}>
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
    <p className="font-normal font-roboto" style={{ fontSize: "1.28rem" }}>
      The most important person in your life is one who inspires your faith when you need it the most. Thank you for helping us to inspire another!
    </p>
  </div>
);

const EDGE_PADDING = "28px"; // match left/right at large screens (1.75rem)
const SMALL_EDGE_PADDING = "12px"; // for small screens

const HeroSection = () => {
  return (
    <>
      {/* HERO IMAGE: Edge to edge, max height 85vh, moved up so full text always shows */}
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
            top: "-50px", // Move image up further so full HEADER TEXT is always visible
          }}
          draggable={false}
        />
      </div>
      {/* SECTION: Remove max-w-screen-2xl/mx-auto so flex parents stretch edge-to-edge */}
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
            padding: 0, // no internal padding on the container, only children
          }}
        >
          {/* Left: Edge-pinned on left with padding, never restrict with max width parent */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-start items-start pt-8 md:pt-0"
            style={{
              paddingLeft: EDGE_PADDING,
              paddingRight: "18px",
              minWidth: 0,
            }}
          >
            <h2
              className="text-4xl sm:text-[2.7rem] md:text-[3.2rem] font-bold mb-4 md:mb-8 text-left tracking-tight font-roboto"
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
            <div className="h-2" />
            <AlumniCarousel />
            <div className="h-4" />
            <div className="flex-1 flex flex-col justify-start">
              {NCU_ALUMNI_TEXT}
            </div>
          </div>
          {/* Right: flush to the right edge, no left or right padding, flex child justify-end */}
          <div
            className="w-full md:w-1/2 flex flex-col md:items-end md:justify-start items-stretch justify-start mt-8 md:mt-0"
            style={{
              paddingRight: 0,
              paddingLeft: 0,
              minWidth: 0,
              marginRight: 0,
            }}
          >
            <div className="w-full flex md:justify-end" style={{ marginLeft: 0, marginRight: 0 }}>
              <div className="w-full max-w-md" style={{ marginRight: 0 }}>
                <ContactTabBlock />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider: unchanged */}
      <div
        className="w-full"
        style={{
          marginTop: "5.5rem",
          marginBottom: "3.5rem",
          height: "1.1px",
          background:
            "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
          boxShadow:
            "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
          borderRadius: 3,
          zIndex: 20,
          opacity: 0.99,
        }}
      />
      {/* Degrees Offered section goes directly below */}
    </>
  );
};

export default HeroSection;
