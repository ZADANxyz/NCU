
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

// Custom blue/glassy button styling, matches site style
const blueGlassyButtonClasses =
  "glossy bg-[#046BD2]/85 text-white font-bold ring-2 ring-[#046BD2]/15 border-2 border-[#046BD2] shadow-md px-7 py-4 md:py-5 transition-all duration-170 hover:bg-[#046BD2]/95 hover:border-gold hover:ring-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/30 active:bg-[#0356a9] text-lg md:text-xl rounded-[0.55rem] md:rounded-[0.48rem] cursor-pointer select-none";

const DegreesOfferedSection: React.FC = () => (
  <section
    className="relative z-20 w-full bg-transparent py-12 md:py-16 px-3 md:px-7"
    style={{
      marginTop: "0", // No extra gap; Hero's divider handles separation.
    }}
  >
    <div className="max-w-5xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight text-center font-roboto mb-8 md:mb-12"
        style={{
          color: "#181818",
          lineHeight: 1.13,
        }}
      >
        Degrees Offered
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full">
        {DEGREE_BUTTONS.map(({ label, to }) => (
          <Link
            to={to}
            className={blueGlassyButtonClasses + " w-full sm:w-auto text-center"}
            key={label}
            style={{
              minWidth: 200,
              maxWidth: 270,
              borderRadius: "0.55rem",
              boxShadow: "0 4px 24px rgba(4,107,210,0.10)",
              fontFamily: "Roboto, Arial, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.01em",
            }}
            tabIndex={0}
            aria-label={label}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default DegreesOfferedSection;
