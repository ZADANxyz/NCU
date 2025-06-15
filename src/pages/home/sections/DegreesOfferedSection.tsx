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
      className="text-4xl md:text-5xl font-bold text-center mb-7 tracking-tight"
      style={{
        color: "#181818",
        letterSpacing: "0.01em",
        lineHeight: 1.13,
      }}
    >
      Degrees Offered
    </h2>
    <p className="text-lg md:text-xl text-center font-roboto text-[#222] dark:text-gray-200 mb-6">
      Click on any of the degrees below to learn more about each degree level.
    </p>

    {/* Button Grid */}
    <div className="w-full flex justify-center items-center mb-7">
      <div
        className="
          grid
          gap-7
          w-full max-w-3xl
          grid-cols-1
          sm:grid-cols-2
        "
      >
        {DEGREE_BUTTONS.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={`
              group
              block
              glossy
              bg-[${NCU_BLUE}]
              transition
              duration-150
              border-2 border-transparent
              rounded-2xl
              shadow-xl
              text-white
              font-bold
              text-center
              text-lg md:text-xl
              px-3 py-12
              min-h-[140px]
              flex items-center justify-center
              outline-none
              focus-visible:ring-4 focus-visible:ring-gold/30
              hover:border-gold
              hover:bg-[${NCU_BLUE}]
              active:scale-[.98]
              select-none
            `}
            style={{
              background: NCU_BLUE,
              borderRadius: "1.2rem",
              boxShadow:
                "0 8px 28px 0 rgba(4,107,210,0.12), 0 2px 0 0 #046BD2",
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
                rounded-2xl
              "
              style={{
                background:
                  "linear-gradient(110deg,rgba(177,149,40,0.10) 0%,rgba(228,214,128,0.09) 100%)",
                border: `2px solid ${GOLD}`,
                boxShadow:
                  "0 12px 30px 0 rgba(177,149,40,0.13)",
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
  </section>
);

export default DegreesOfferedSection;
