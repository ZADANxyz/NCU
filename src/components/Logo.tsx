
import React from "react";

/**
 * Official site logo, shown in header (light: gold/blue, dark: silver seal).
 */
const LIGHT_LOGO_SRC = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";
const DARK_LOGO_SRC = "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png";

// Slightly increased logo width for more prominence
const LOGO_WIDTH = 54; // px, was 44

const Logo = () => {
  // SSR-safe dark mode detection
  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => obs.disconnect();
  }, []);

  // Choose logo based on mode
  const src = isDark ? DARK_LOGO_SRC : LIGHT_LOGO_SRC;
  const alt = isDark ? "New Covenant University Seal" : "Site Logo";

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
          src={src}
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

