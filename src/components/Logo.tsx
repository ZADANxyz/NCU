import React from "react";

/**
 * Official site logo, shown in header.
 */
const LOGO_SRC = "/ncu-seal.png";

// Slightly increased logo width for more prominence
const LOGO_WIDTH = 54; // px, was 44

const Logo = () => {
  const alt = "New Covenant University Seal";

  // Adjusted for bigger logo
  return (
    <div
      className="flex items-center pl-3 pr-6"
      style={{
        height: 38, // was 32
        minWidth: LOGO_WIDTH + 10, // +padding
        width: LOGO_WIDTH + 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: LOGO_WIDTH,
          height: 36, // was 30
        }}
      >
        <img
          src={LOGO_SRC}
          alt={alt}
          className={
            "h-9 w-auto max-w-full block transition-all duration-200 drop-shadow-md"
          }
          style={{
            maxHeight: 36,
            maxWidth: LOGO_WIDTH,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Logo;