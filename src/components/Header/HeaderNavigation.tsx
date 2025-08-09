import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
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

const DOWNLOAD_ITEMS = [
  { label: "Student Handbook", to: "/downloads/student-handbook" },
  { label: "Tuition & Fees", to: "/downloads/tuition-fees" },
  { label: "Graduate Studies Notebook", to: "/downloads/graduate-studies" },
  { label: "Course Catalogue", to: "/downloads/course-catalogue" },
];

interface Props {
  isDark: boolean;
}

const HeaderNavigation: React.FC<Props> = ({ isDark }) => {
  const location = useLocation();
  const [downloadsOpen, setDownloadsOpen] = useState(false);
  
  const isDownloadsActive = location.pathname.startsWith('/downloads');

  return (
    <nav className="hidden md:flex flex-1 items-center justify-center relative z-20" style={{ height: 40 }}>
      <ul className="flex items-center gap-9">
        {NAV_ITEMS.map((item) => {
          // Special handling for Downloads item
          if (item.label === "Downloads") {
            const active = location.pathname.startsWith('/downloads');
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
            
            // Show dropdown only on downloads pages
            if (isDownloadsActive) {
              return (
                <li 
                  key={item.label}
                  className="flex items-center h-full relative"
                  onMouseEnter={() => setDownloadsOpen(true)}
                  onMouseLeave={() => setDownloadsOpen(false)}
                >
                  <Link
                    to={item.to}
                    className={cn(
                      baseStyle,
                      "hover:scale-105 focus:scale-105 flex items-center gap-1",
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
                    <ChevronDown size={12} className={`transition-transform duration-200 ${downloadsOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {downloadsOpen && (
                    <div className="absolute top-full left-0 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-48 z-50">
                      {DOWNLOAD_ITEMS.map((downloadItem) => {
                        const isActive = location.pathname === downloadItem.to;
                        return (
                          <Link
                            key={downloadItem.to}
                            to={downloadItem.to}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                          >
                            {downloadItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            } else {
              // Regular Downloads link without dropdown
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
            }
          }
          
          // Regular nav items
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