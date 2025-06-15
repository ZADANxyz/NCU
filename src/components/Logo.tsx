
import React from "react";

/**
 * Official site logo, shown in header (uses uploaded image).
 */
const Logo = () => (
  // Increase min height of logo to ~32, matching header
  <div className="flex items-center pl-3 pr-6 min-w-[38px]" style={{ height: 32 }}>
    <img
      src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
      alt="Site Logo"
      className="h-8 w-auto drop-shadow-md"
      style={{ maxHeight: 30 }}
      draggable={false}
    />
  </div>
);

export default Logo;
