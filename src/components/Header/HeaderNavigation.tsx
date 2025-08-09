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
          const active = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
          const baseStyle = "tracking-wide font-sans text-[12.5px] font-normal px-0.5 pb-0.5 rounded-none transition-colors transition-transform duration-150";
          
          let colorClass = "";
          if (!isDark) {
            colorClass = active
              ? "text-ncu-blue"
              : "text-gray-700 hover:text-ncu-gold";
          } else {
            colorClass = active
              ? "text-ncu-gold"
              : "text-gray-200 hover:text-ncu-blue";
          }

          if (item.label === "Downloads" && isDownloadsActive) {
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