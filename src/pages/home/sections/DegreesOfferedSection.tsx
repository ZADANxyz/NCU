
import React from "react";
import { Link } from "react-router-dom";

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

const DegreesOfferedSection: React.FC = () => (
  <section
    className="w-full bg-white dark:bg-[rgba(32,32,36,0.99)] py-12 md:py-16 px-0 flex flex-col items-center shadow-none"
    style={{}}
  >
    {/* Section Title */}
    <h2
      className="
        text-4xl md:text-5xl text-center mb-4 tracking-tight font-roboto font-normal
      "
      style={{
        color: "#181818",
        letterSpacing: "0.01em",
        lineHeight: 1.13,
        fontWeight: 400,
      }}
    >
      Degrees Offered
    </h2>
    {/* Section Subtitle */}
    <p className="text-lg md:text-xl text-center font-roboto text-[#222] dark:text-gray-200 font-normal mb-12">
      Click on any of the degrees below to learn more about each degree level.
    </p>
    {/* Button Grid - Fills section edge to edge (like gold bar) */}
    <div className="w-full flex justify-center items-center mb-10">
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 w-full
        "
        style={{
          maxWidth: "100vw",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        {DEGREE_BUTTONS.map(({ alt, img, to }) => (
          <Link
            key={alt}
            to={to}
            className="flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-gold/30 rounded-xl transition-shadow hover:shadow-2xl"
            tabIndex={0}
            aria-label={alt}
            style={{ width: "100%" }}
          >
            <img
              src={img}
              alt={alt}
              className="rounded-xl w-full h-auto object-cover shadow-md transition-transform duration-150 hover:scale-[1.025] border border-[#d3c797] dark:border-[#2f2f2f] select-none max-h-56 md:max-h-64"
              style={{ minHeight: "170px", maxHeight: "18rem" }}
            />
          </Link>
        ))}
      </div>
    </div>
    {/* Section Subtext */}
    <div className="max-w-3xl mx-auto mt-1 mb-3">
      <p className="text-[1.23rem] md:text-[1.28rem] text-center text-[#333] dark:text-gray-100 font-roboto font-normal leading-snug">
        New Covenant University grants degrees under the authority of the Florida State Board of Independent Colleges and Universities in compliance with section 1005.06(1)(f), Florida Statutes. The letter of compliance is available for review.
      </p>
    </div>
    {/* Department of Education Logo */}
    <div className="flex justify-center mt-6">
      <img
        src="/lovable-uploads/2f0c96d3-b19a-4b83-a1f3-de4da42ecc01.png"
        alt="Florida Department of Education Logo"
        className="w-auto h-16 md:h-20"
        style={{ maxWidth: "310px" }}
      />
    </div>
  </section>
);
export default DegreesOfferedSection;
