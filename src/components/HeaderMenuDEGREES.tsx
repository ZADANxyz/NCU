import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useFooterVisible } from "./Header/useFloatingHeader";
import HeaderActions from "./Header/HeaderActions";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface HeaderMenuDEGREESProps {
  currentDegreeLevel?: "associate" | "bachelor" | "master" | "doctorate" | null;
}

const DEGREE_LEVELS = [
  { label: "Associate of Arts", path: "/degrees/associate-of-arts" },
  { label: "Bachelor of Arts", path: "/degrees/bachelor-of-arts" },
  { label: "Master of Arts", path: "/degrees/master-of-arts" },
  { label: "Doctorate", path: "/degrees/doctorate" },
];

const DEGREE_COURSES = {
  associate: [
    { label: "Associate of Biblical Studies", path: "/degrees/associate-of-arts/biblical-studies" },
    { label: "Associate of Christian Leadership", path: "/degrees/associate-of-arts/christian-leadership" },
  ],
  bachelor: [
    { label: "Bachelor of Christian Counseling", path: "/degrees/bachelor-of-arts/christian-counseling" },
    { label: "Bachelor of Christian Leadership & Organizational Management", path: "/degrees/bachelor-of-arts/christian-leadership-organizational-management" },
    { label: "Bachelor of Theology", path: "/degrees/bachelor-of-arts/theology" },
    { label: "Bachelor of Classical Education", path: "/degrees/bachelor-of-arts/classical-education" },
  ],
  master: [
    { label: "Master of Christian Counseling", path: "/degrees/master-of-arts/christian-counseling" },
    { label: "Master of Christian Leadership & Organizational Management", path: "/degrees/master-of-arts/christian-leadership-organizational-management" },
    { label: "Master of Divinity", path: "/degrees/master-of-arts/divinity" },
    { label: "Master of Practical Theology", path: "/degrees/master-of-arts/practical-theology" },
  ],
  doctorate: [
    { label: "Doctor of Christian Education", path: "/degrees/doctorate/christian-education" },
    { label: "Doctor of Ministry", path: "/degrees/doctorate/ministry" },
    { label: "Doctor of Covenant Leadership", path: "/degrees/doctorate/covenant-leadership" },
    { label: "Doctor of Theology", path: "/degrees/doctorate/theology" },
  ],
};

const HeaderMenuDEGREES: React.FC<HeaderMenuDEGREESProps> = ({ currentDegreeLevel }) => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [elevate, setElevate] = React.useState(false);
  const location = useLocation();

  // Floating header position when footer visible
  const footerVisible = useFooterVisible("site-footer");

  // track dark mode
  const [isDark, setIsDark] = React.useState(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  React.useEffect(() => {
    const obs = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const handle = () => setElevate(window.scrollY > 8);
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const cartCount = 3;

  const isActive = (path: string) => location.pathname === path;
  const isDegreesActive = location.pathname.startsWith("/degrees");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40",
          "apple-glass-header",
          elevate && "shadow-2xl"
        )}
        style={{
          borderBottomLeftRadius: "0.38rem",
          borderBottomRightRadius: "0.38rem",
          transition: "top 0.12s cubic-bezier(.4,0,.2,1), box-shadow 0.28s",
          top: footerVisible
            ? `calc(100vh - 60px - var(--footer-height,96px))`
            : 0,
        }}
      >
        <div
          className={cn(
            "relative flex items-center justify-between h-[80px] px-3 sm:px-7"
          )}
          style={{
            minHeight: 80,
            alignItems: "center",
            display: "flex"
          }}
        >
          {/* Logo */}
          <div className="flex items-center" style={{ height: 40, alignItems: "center", display: "flex" }}>
            <Logo />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/about")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              About Us
            </Link>
            <Link
              to="/store"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/store")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Store
            </Link>
            
            {/* Degrees Dropdown */}
            <div className="relative group">
              <Link
                to="/degrees"
                className={cn(
                  "flex items-center text-sm font-medium font-roboto transition-colors duration-200",
                  isDegreesActive
                    ? isDark
                      ? "text-[#B19528]"
                      : "text-[#046BD2]"
                    : isDark
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                Degrees
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>
              
              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className={cn(
                  "w-80 rounded-lg shadow-lg border",
                  isDark 
                    ? "bg-gray-800 border-gray-700" 
                    : "bg-white border-gray-200"
                )}>
                  <div className="p-4 space-y-3">
                    {DEGREE_LEVELS.map((level, index) => {
                      const levelKey = level.path.split('/')[2].split('-')[0] as keyof typeof DEGREE_COURSES;
                      const shouldShowCourses = !currentDegreeLevel || currentDegreeLevel === levelKey;
                      
                      return (
                        <div key={level.path} className="relative group/level">
                          <Link
                            to={level.path}
                            className={cn(
                              "flex items-center justify-between text-sm font-medium transition-colors duration-200 p-2 rounded",
                              isDark 
                                ? "text-gray-200 hover:text-white hover:bg-gray-700" 
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            )}
                          >
                            {level.label}
                            {shouldShowCourses && <ChevronDown className="ml-1 h-3 w-3" />}
                          </Link>
                          
                          {/* Course Submenu */}
                          {shouldShowCourses && DEGREE_COURSES[levelKey] && (
                            <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover/level:opacity-100 group-hover/level:visible transition-all duration-200">
                              <div className={cn(
                                "w-72 rounded-lg shadow-lg border",
                                isDark 
                                  ? "bg-gray-800 border-gray-700" 
                                  : "bg-white border-gray-200"
                              )}>
                                <div className="p-3 space-y-1">
                                  {DEGREE_COURSES[levelKey].map((course) => (
                                    <Link
                                      key={course.path}
                                      to={course.path}
                                      className={cn(
                                        "block text-sm transition-colors duration-200 p-2 rounded",
                                        isDark 
                                          ? "text-gray-300 hover:text-white hover:bg-gray-700" 
                                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                      )}
                                    >
                                      {course.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              to="/downloads"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/downloads")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Downloads
            </Link>
            <Link
              to="/donate"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/donate")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Donate
            </Link>
            <Link
              to="/apply"
              className={cn(
                "text-sm font-medium font-roboto transition-colors duration-200",
                isActive("/apply")
                  ? isDark
                    ? "text-[#B19528]"
                    : "text-[#046BD2]"
                  : isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Apply Now!
            </Link>
          </nav>
          
          {/* Actions */}
          <HeaderActions
            isDark={isDark}
            onCartOpen={() => setCartOpen(true)}
            onSearchOpen={() => setSearchOpen((v) => !v)}
            cartCount={cartCount}
          />
        </div>
        
        {/* Gold line visual */}
        <div
          className="mx-auto"
          style={{
            width: "98%",
            height: 2,
            marginTop: -2,
            background:
              "linear-gradient(90deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.15) 2.5%, rgba(177,149,40,0.37) 8%, rgba(177,149,40,1) 21%, rgba(177,149,40,1) 79%, rgba(177,149,40,0.37) 92%, rgba(177,149,40,0.15) 97.5%, rgba(177,149,40,0) 100%)",
            boxShadow:
              "0 2px 18px 0 rgba(177,149,40,0.14) inset, 0 2px 10px 0 rgba(177,149,40,0.05)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            borderRadius: 2,
            zIndex: 50,
          }}
        />
        <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <div style={{ height: 0 }} />
      <style>
        {`
        .apple-glass-header {
          background: rgba(255,255,255,0.86);
          backdrop-filter: blur(21px) saturate(160%);
          -webkit-backdrop-filter: blur(21px) saturate(160%);
          box-shadow: 0 6px 40px 0 rgba(4,107,210,0.12), 0 1px 0 0 #B19528;
          border-bottom-left-radius: 0.38rem;
          border-bottom-right-radius: 0.38rem;
          position: relative;
          transition: background 0.38s, box-shadow 0.28s;
        }
        .apple-glass-header::after {
          content: "";
          display: block;
          pointer-events: none;
          position: absolute; 
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 2;
          border-radius: inherit;
          background: linear-gradient(
            110deg, 
            rgba(255,255,255,0.20) 0%, 
            rgba(255,255,255,0.05) 48%, 
            rgba(255,255,255,0.12) 92%,
            rgba(255,255,255,0.02) 100%
          );
          opacity: 1;
        }
        .dark .apple-glass-header {
          background: rgba(8, 17, 37, 0.84);
          box-shadow: 0 6px 42px -5px rgba(4,107,210,0.24), 0 1.5px 0 0 #B19528;
          backdrop-filter: blur(22px) saturate(220%);
          -webkit-backdrop-filter: blur(22px) saturate(220%);
        }
        .dark .apple-glass-header::after {
          background: linear-gradient(
            120deg, 
            rgba(185,200,235,0.08) 6%,
            rgba(110,120,160,0.07) 44%,
            rgba(255,255,255,0.06) 90%,
            rgba(20,30,70,0.03) 100%
          );
          opacity: 1;
        }
        `}
      </style>
    </>
  );
};

export default HeaderMenuDEGREES;