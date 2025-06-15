import React from "react";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";
import { ShoppingCart, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo"; // Use your actual Logo component (see note below)

// Clean NCU wordmark SVG 140px width, fills with currentColor
const NCUWordmark: React.FC = () => (
  <svg
    width={140}
    height={38}
    viewBox="0 0 220 38"
    fill="none"
    aria-label="NCU Logo"
    className="mr-8"
    style={{ minWidth: 120 }}
  >
    <text
      x="0"
      y="28"
      fontFamily="system-ui, Segoe UI, sans-serif"
      fontWeight="600"
      fontSize="32"
      fill="currentColor"
      letterSpacing="5"
      style={{ color: "inherit" }}
    >
      NCU
    </text>
  </svg>
);

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Store", to: "/store" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads" },
  { label: "Donate", to: "/donate" },
  { label: "Apply Now!", to: "/apply" },
];

const Header = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [elevate, setElevate] = React.useState(false);
  React.useEffect(() => {
    const handle = () => setElevate(window.scrollY > 8);
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Icon color (for both modes, adapts via Tailwind dark:)
  const iconColor = "text-slate-700 dark:text-slate-200";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40",
          "glassier-header", // new optimized glass+gloss class
          elevate && "shadow-2xl"
        )}
        style={{
          boxShadow: elevate
            ? "0 10px 32px -10px rgba(4,107,210,0.13), 0 1px 0 0 #B19528"
            : "0 2px 12px 0 rgba(4,107,210,0.06)",
        }}
      >
        {/* Glass/gold/gloss overlay handled with CSS */}
        <div
          className={cn(
            "relative flex items-center justify-between h-20 px-3 sm:px-8",
          )}
        >
          {/* Left: Logo (replace with your actual logo) */}
          <div className="flex items-center" style={{ height: 38 }}>
            {/* Swap out Logo with your image or SVG. Example: */}
            <Logo /> 
            {/* If you have an image: 
              <img src="/path/to/your-logo.svg" alt="Your Logo" className="h-10 w-auto mr-8" />
            */}
          </div>
          {/* Center: Navigation */}
          <nav className="flex-1 flex items-center justify-center relative z-20">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                const active =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={cn(
                        "tracking-wide font-sans",
                        "text-[15px] font-normal", // smaller and normal weight
                        "transition-colors transition-transform duration-150 px-1 pb-0.5 rounded-none",
                        "hover:text-[#B19528] hover:scale-105 focus:text-[#B19528]",
                        active
                          ? "text-[#046BD2]"
                          : "text-gray-700 dark:text-gray-200"
                      )}
                      style={{
                        fontFamily: "system-ui, Segoe UI, sans-serif",
                        textTransform: "none", // not uppercase
                        letterSpacing: "0.01em",
                        fontWeight: 400,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions (Search, Cart, ThemeToggle) */}
          <div className="flex items-center gap-1 pl-2">
            {/* Search Icon */}
            <button
              className={cn(
                iconColor,
                "ml-2 p-1 group outline-none ring-0 bg-transparent",
                "transition-transform duration-150",
                "hover:text-[#046BD2] hover:scale-110 focus:text-[#046BD2]"
              )}
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              type="button"
            >
              <Search size={24} strokeWidth={2.2} />
            </button>
            {/* Cart Icon */}
            <button
              className={cn(
                iconColor,
                "relative mx-1 p-1 group outline-none ring-0 bg-transparent",
                "transition-transform duration-150",
                "hover:text-[#B19528] hover:scale-110 focus:text-[#B19528]"
              )}
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              type="button"
            >
              <ShoppingCart size={24} strokeWidth={2.2} />
              {/* Demo badge */}
              <span className="absolute -top-1 -right-0 bg-[#046BD2] text-[10px] text-white font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white shadow">
                3
              </span>
            </button>
            {/* Dark mode toggle */}
            <span className={cn(iconColor, "ml-1")}>
              <ThemeToggle
                className={cn(
                  "transition-transform duration-150 hover:scale-110 hover:text-[#B19528]"
                )}
              />
            </span>
          </div>
        </div>
        {/* Updated Gold Line, thinner, extended wide fade */}
        <div
          className="w-full"
          style={{
            height: 4, // thinner line
            background:
              "linear-gradient(90deg,rgba(177,149,40,0.08) 0%, rgba(177,149,40,1) 14%, rgba(177,149,40,1) 86%, rgba(177,149,40,0.08) 100%)",
            boxShadow:
              "0 2px 20px 0 rgba(177,149,40,0.18) inset, 0 2px 14px 0 rgba(177,149,40,0.07)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 50,
          }}
        />
        {/* Expanding SearchBar */}
        <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      {/* Cart Drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Header spacer */}
      <div className="h-20" />
      <style>
        {`
        /* Stronger, brighter glass effect for header */
        .glassier-header {
          background: rgba(252,252,255,0.85);
          backdrop-filter: blur(14px) saturate(125%);
          -webkit-backdrop-filter: blur(14px) saturate(125%);
          box-shadow: 0 2px 40px 0 rgba(177,149,40,0.07), 0 1px 0 0 #B19528;
          border-bottom-left-radius: 1.3rem;
          border-bottom-right-radius: 1.3rem;
          position: relative;
        }
        .dark .glassier-header {
          background: rgba(22, 25, 34, 0.86);
          box-shadow: 0 2px 28px -6px rgba(4,107,210,.13), 0 1px 0 0 #B19528;
        }
        .glassier-header::after {
          content: "";
          display: block;
          pointer-events: none;
          position: absolute; 
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 2;
          border-radius: inherit;
          /* Top gloss/highlight gradient */
          background: linear-gradient(
            to bottom, 
            rgba(255,255,255,0.20) 0%,
            rgba(255,255,255,0.13) 12%, 
            rgba(252,252,255,0.08) 33%, 
            rgba(255,255,255,0.03) 72%,
            rgba(255,255,255,0.01) 100%);
          opacity: 1;
        }
        .dark .glassier-header::after {
          background: linear-gradient(
            to bottom, 
            rgba(255,255,255,0.12) 0%,
            rgba(255,255,255,0.09) 12%, 
            rgba(180,180,200,0.04) 36%, 
            rgba(80,80,80,0.04) 68%,
            rgba(40,40,40,0.01) 100%);
          opacity: 1;
        }
        `}
      </style>
    </>
  );
};

export default Header;
