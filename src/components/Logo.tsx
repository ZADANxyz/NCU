
import React from "react";

/**
 * Official NCU Logo, shown in header.
 */
const Logo = () => (
  <div className="flex items-center pl-3 pr-8 min-w-[55px]" style={{ height: 38 }}>
    {/* Responsive image - update src if new logo supplied */}
    <img
      src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
      alt="New Covenant University Logo"
      className="h-10 w-auto drop-shadow-md"
      style={{ maxHeight: 38 }}
      draggable={false}
    />
  </div>
);

export default Logo;

