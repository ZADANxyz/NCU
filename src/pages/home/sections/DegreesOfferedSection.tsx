
import React from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Degree image assets mapping—ensure order matches your images & routes
const DEGREE_BUTTONS = [
  {
    alt: "Associate of Arts Degrees",
    img: "/lovable-uploads/f34e6004-3e3f-4587-96e4-6e67154b7ca6.png",
    to: "/degrees/associate",
  },
  {
    alt: "Bachelor of Arts Degrees",
    img: "/lovable-uploads/aa922b63-f20a-4042-8985-bd50591544e3.png",
    to: "/degrees/bachelor",
  },
  {
    alt: "Master of Arts Degrees",
    img: "/lovable-uploads/7788beff-edb4-4e06-a889-be37c6860148.png",
    to: "/degrees/master",
  },
  {
    alt: "Doctorate Degrees",
    img: "/lovable-uploads/5112ed5b-dfc8-4730-891c-db9b20452df4.png",
    to: "/degrees/doctorate",
  },
];

const EDGE_HORIZONTAL_PADDING = "52px";

// Matches the gold bar styles beneath the Florida DOE logo
const GOLD_DIVIDER_STYLE = {
  height: "1.1px",
  background:
    "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
  boxShadow:
    "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
  borderRadius: 3,
  zIndex: 20,
  opacity: 0.99,
  paddingLeft: EDGE_HORIZONTAL_PADDING,
  paddingRight: EDGE_HORIZONTAL_PADDING,
  margin: "0 auto",
  maxWidth: "100%",
};

const DegreesOfferedSection: React.FC = () => (
  <>
    {/* Top gold divider (match bottom) */}
    <div
      className="w-full flex justify-center"
      style={{
        marginTop: "0",
        marginBottom: "2.8rem", // Adds spacing before H2
      }}
    >
      <div
        className="w-full"
        style={GOLD_DIVIDER_STYLE}
      />
    </div>
    <section
      className="w-full bg-background dark:bg-background py-6 md:py-8 px-3 sm:px-6 md:px-[52px] flex flex-col items-center shadow-none"
    >
      <h2
        className="
          text-4xl md:text-5xl text-center mb-4 tracking-tight font-roboto font-normal
          text-[#181818] dark:text-white
        "
        style={{
          letterSpacing: "0.01em",
          lineHeight: 1.13,
          fontWeight: 400,
        }}
      >
        Degrees Offered
      </h2>
      <p className="text-lg md:text-xl text-center font-roboto text-[#222] dark:text-gray-200 font-normal mb-12">
        Click on any of the degrees below to learn more about each degree level.
      </p>
      <div className="w-full flex justify-center items-center mb-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5 md:gap-1 items-stretch w-full"
        >
          {DEGREE_BUTTONS.map(({ alt, img, to }) => (
            <Link
              key={alt}
              to={to}
              className="
                flex flex-col items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-gold/30 rounded-lg transition-transform duration-200 hover:scale-105 p-2 md:p-4
                bg-white
                dark:bg-transparent dark:shadow-none
                w-full h-full
              "
              tabIndex={0}
              aria-label={alt}
              style={{ width: "100%", minHeight: "0" }}
            >
              <AspectRatio ratio={1 / 1} className="w-full flex items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-lg w-full h-full object-cover shadow-md select-none"
                  draggable={false}
                  style={{
                    minHeight: 0,
                    minWidth: 0,
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </div>
      {/* Section Subtext */}
      <div className="max-w-5xl md:max-w-[700px] mx-auto mt-1 mb-3">
        <p
          className="text-[1.16rem] md:text-[1.28rem] lg:text-[1.32rem] text-center text-[#333] dark:text-gray-100 font-roboto font-normal tracking-wide whitespace-normal"
          style={{
            lineHeight: 1.29,
            letterSpacing: "0.003em",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          New Covenant University grants degrees under the authority of the Florida State Board of Independent Colleges and Universities in compliance with section 1005.06(1)(f), Florida Statutes. The letter of compliance is available for review.
        </p>
      </div>
      {/* Department of Education Logo */}
      <div className="flex justify-center mt-7">
        <img
          src="/lovable-uploads/2f0c96d3-b19a-4b83-a1f3-de4da42ecc01.png"
          alt="Florida Department of Education Logo"
          className="w-auto h-18 md:h-24"
          style={{ maxWidth: "330px" }}
        />
      </div>
      {/* Bottom THIN gold divider */}
      <div
        className="w-full flex justify-center"
        style={{
          marginTop: "4.9rem",
          marginBottom: "0",
        }}
      >
        <div
          className="w-full"
          style={GOLD_DIVIDER_STYLE}
        />
      </div>
      {/* No divider below the section */}
    </section>
  </>
);

export default DegreesOfferedSection;
