import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
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

const HeaderMenuDOWNLOADS = ({ isDark }: Props) => {
  const location = useLocation();
  const [downloadsOpen, setDownloadsOpen] = useState(false);
  
  const isDownloadsActive = location.pathname.startsWith('/downloads');
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.to;
        const colorClass = isActive 
          ? (isDark ? "text-white" : "text-gray-900")
          : (isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900");
        
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`transition-colors duration-200 ${colorClass}`}
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: "500",
              fontSize: "0.875rem",
              display: "inline-block",
            }}
          >
            {item.label}
          </Link>
        );
      })}
      
      {/* Downloads Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setDownloadsOpen(true)}
        onMouseLeave={() => setDownloadsOpen(false)}
      >
        <Link
          to="/downloads"
          className={`transition-colors duration-200 flex items-center gap-1 ${
            isDownloadsActive 
              ? (isDark ? "text-white" : "text-gray-900")
              : (isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
          }`}
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontWeight: "500",
            fontSize: "0.875rem",
            display: "inline-flex",
          }}
        >
          Downloads
          <ChevronDown size={14} className={`transition-transform duration-200 ${downloadsOpen ? 'rotate-180' : ''}`} />
        </Link>
        
        {/* Dropdown Menu */}
        {downloadsOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-48 z-50">
            {DOWNLOAD_ITEMS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderMenuDOWNLOADS;