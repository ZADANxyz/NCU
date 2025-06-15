
import React from "react";

/**
 * Official site logo, shown in header (uses uploaded image).
 */
const Logo = () => (
  <div className="flex items-center pl-3 pr-7 min-w-[48px]" style={{ height: 38 }}>
    <img
      src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
      alt="Site Logo"
      className="h-9 w-auto drop-shadow-md"
      style={{ maxHeight: 36 }}
      draggable={false}
    />
  </div>
);

export default Logo;
