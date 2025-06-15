
import React from "react";
import { Link } from "react-router-dom";

const DEGREE_BUTTONS = [
  {
    label: "Associate of Arts",
    to: "/degrees/associate",
  },
  {
    label: "Bachelor of Arts",
    to: "/degrees/bachelor",
  },
  {
    label: "Master of Arts",
    to: "/degrees/master",
  },
  {
    label: "Doctorate of Arts",
    to: "/degrees/doctorate",
  },
];

// NCU Blue
const NCU_BLUE = "#046BD2";
const GOLD = "#B19528";

const DegreesOfferedSection: React.FC = () => (
  <section className="w-full bg-white dark:bg-[rgba(32,32,36,0.99)] py-12 md:py-16 px-3 md:px-7 flex flex-col items-center shadow-none">
    {/* Section Title */}
    <h2
      className="text-4xl md:text-5xl font-bold text-center mb-2 md:mb-3 font-playfair"
      style={{
        color: "#181818",
        lineHeight: 1.13,
        letterSpacing: 0.2,
      }}
    >
      Degrees Offered
    </h2>
    <p className="text-lg md:text-xl text-center font-roboto text-[#222] dark:text-gray-200 mb-6">
      Click on any of the degrees below to learn more about each degree level.
    </p>

    {/* Button Grid */}
    <div
      className="
        w-full
        flex
        justify-center
        items-center
        mb-7
      "
    >
      <div
        className="
          grid
          gap-7
          w-full max-w-6xl
          sm:grid-cols-2
          lg:grid-cols-4
        "
        style={{}}
      >
        {DEGREE_BUTTONS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={`
              group
              block
              relative
              glossy
              bg-[${NCU_BLUE}]
              transition-colors
              duration-150
              ring-1 ring-[#0257ab]/30
              border-2 border-transparent
              shadow-lg
              rounded-[1.1rem]
              overflow-hidden
              cursor-pointer
              text-white
              font-bold
              text-center
              text-lg md:text-xl
              px-5 py-10
              min-h-[190px]
              flex items-center justify-center
              outline-none
              focus-visible:ring-4 focus-visible:ring-[${GOLD}]/30
              hover:shadow-xl hover:-translate-y-1
              hover:border-gold
              hover:bg-[${NCU_BLUE}]
              active:scale-[.98]
              select-none
            `}
            style={{
              background: NCU_BLUE,
              borderRadius: "1.1rem",
              boxShadow: "0 8px 28px 0 rgba(4,107,210,0.11), 0 2px 0 0 #046BD2",
              fontWeight: 700,
            }}
            tabIndex={0}
            aria-label={label}
          >
            <span className="relative z-10 text-white text-xl md:text-2xl font-bold">
              {label}
            </span>
            <span
              className="
                pointer-events-none absolute inset-0 z-0
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                rounded-[1.1rem]
              "
              style={{
                background:
                  "linear-gradient(110deg,rgba(177,149,40,0.10) 0%,rgba(228,214,128,0.10) 100%)",
                border: `2px solid ${GOLD}`,
                boxShadow:
                  "0 12px 30px 0 rgba(177,149,40,0.16)",
              }}
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
    {/* Section Subtext */}
    <div className="max-w-3xl mx-auto mt-1 mb-7">
      <p className="text-lg md:text-xl text-center text-[#333] dark:text-gray-100 font-roboto">
        New Covenant University grants degrees under the authority of the Florida State Board of Independent Colleges and Universities in compliance with section 1005.06(1)(f), Florida Statutes. The letter of compliance is available for review.
      </p>
    </div>
    {/* Optional - Florida DOE logo, only add if requested
    <div className="flex justify-center items-center mt-5">
      <img
        src="/path/to/florida-doe-logo.png"
        alt="Florida Department of Education"
        style={{ height: 60 }}
      />
    </div>
    */}
  </section>
);

export default DegreesOfferedSection;
