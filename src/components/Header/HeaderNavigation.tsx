
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads" },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

interface Props {
  isDark: boolean;
}

const HeaderNavigation: React.FC<Props> = ({ isDark }) => {
  const location = useLocation();

  return (
    <nav className="flex-1 flex items-center justify-center relative z-20" style={{ height: 40 }}>
      <ul className="flex items-center gap-9">
        {NAV_ITEMS.map((item) => {
          const active =
            location.pathname === item.to ||
            (item.to !== "/" && location.pathname.startsWith(item.to));
          const baseStyle =
            "tracking-wide font-sans text-[12.5px] font-normal px-0.5 pb-0.5 rounded-none transition-colors transition-transform duration-150";
          let colorClass = "";
          if (!isDark) {
            colorClass = active
              ? "text-[#046BD2]"
              : "text-gray-700 hover:text-[#B19528]";
          } else {
            colorClass = active
              ? "text-[#B19528]"
              : "text-gray-200 hover:text-[#046BD2]";
          }
          return (
            <li key={item.label} className="flex items-center h-full">
              <Link
                to={item.to}
                className={cn(
                  baseStyle,
                  "hover:scale-105 focus:scale-105",
                  colorClass
                )}
                style={{
                  fontFamily: "system-ui, Segoe UI, sans-serif",
                  textTransform: "none",
                  letterSpacing: "0.01em",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  height: 38,
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
