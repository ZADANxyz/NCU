
import React from "react";

/**
 * NCU Logo Placeholder: Replace with official branding when available.
 */
const Logo = () => (
  <div className="flex items-center pl-4 pr-8">
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-label="NCU Logo"
      className="drop-shadow-md"
    >
      <circle cx="24" cy="24" r="23" fill="#fff" stroke="#B19528" strokeWidth="2" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="20"
        letterSpacing="2"
        fill="#046BD2"
        fontFamily="serif"
        dominantBaseline="middle"
      >
        NCU
      </text>
    </svg>
  </div>
);

export default Logo;
