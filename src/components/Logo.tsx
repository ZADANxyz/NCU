
import React from "react";

/**
 * Official site logo, shown in header (light: gold/blue, dark: silver seal).
 */
const LIGHT_LOGO_SRC = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";
const DARK_LOGO_SRC = "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png";

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

  // Adjust logo min height to ~32, matching header
  return (
    <div className="flex items-center pl-3 pr-6 min-w-[38px]" style={{ height: 32 }}>
      <img
        src={src}
        alt={alt}
        className={
          isDark
            ? "h-8 w-auto drop-shadow transition-all duration-200"
            : "h-8 w-auto drop-shadow-md transition-all duration-200"
        }
        style={{ maxHeight: 30 }}
        draggable={false}
      />
    </div>
  );
};

export default Logo;

