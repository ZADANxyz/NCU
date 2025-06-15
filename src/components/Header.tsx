
import React from "react";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";
import { ShoppingCart, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

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

  const [isDark, setIsDark] = React.useState(() =>
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

  // Icon colors
  const cartSearchBase = "text-slate-700 dark:text-slate-200";
  // Use state for correct hover color: blue in light, gold in dark
  const cartSearchHover = isDark ? "hover:text-[#B19528]" : "hover:text-[#046BD2]";

  // Even smaller icon size
  const iconSize = 16;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40",
          "glassier-header",
          elevate && "shadow-2xl"
        )}
        style={{
          boxShadow: elevate
            ? "0 10px 32px -10px rgba(4,107,210,0.13), 0 1px 0 0 #B19528"
            : "0 2px 12px 0 rgba(4,107,210,0.06)"
        }}
      >
        <div
          className={cn(
            "relative flex items-center justify-between h-13 px-2 sm:px-6" // Reduce height/padding further
          )}
        >
          {/* Left: Logo */}
          <div className="flex items-center" style={{ height: 30 }}>
            <Logo />
          </div>
          {/* Center: Navigation */}
          <nav className="flex-1 flex items-center justify-center relative z-20">
            <ul className="flex items-center gap-3">
              {NAV_ITEMS.map((item) => {
                const active =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                // Menu color logic
                // Light: active=blue, hover=gold. Dark: active=gold, hover=blue
                const baseStyle =
                  "tracking-wide font-sans text-[12.5px] font-normal px-0.5 pb-0.5 rounded-none transition-colors transition-transform duration-150";
                let colorClass = "";
                if (!isDark) {
                  colorClass = active
                    ? "text-[#046BD2]"
                    : "text-gray-700 hover:text-[#B19528]"; // gold hover
                } else {
                  colorClass = active
                    ? "text-[#B19528]"
                    : "text-gray-200 hover:text-[#046BD2]"; // blue hover
                }
                return (
                  <li key={item.label}>
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
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Right: Actions */}
          <div className="flex items-center gap-1 pl-1">
            {/* Search Icon */}
            <button
              className={cn(
                cartSearchBase,
                "ml-1 p-1 group outline-none ring-0 bg-transparent",
                "transition-transform duration-150",
                cartSearchHover,
                "hover:scale-110 focus:scale-110"
              )}
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              type="button"
            >
              <Search size={iconSize} strokeWidth={2.05} />
            </button>
            {/* Cart Icon */}
            <button
              className={cn(
                cartSearchBase,
                "relative mx-0.5 p-1 group outline-none ring-0 bg-transparent",
                "transition-transform duration-150",
                cartSearchHover,
                "hover:scale-110 focus:scale-110"
              )}
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              type="button"
            >
              <ShoppingCart size={iconSize} strokeWidth={2.05} />
              {/* Demo badge */}
              <span className="absolute -top-1 -right-0 bg-[#046BD2] text-[9px] text-white font-bold h-3 w-3 flex items-center justify-center rounded-full ring-2 ring-white shadow">
                3
              </span>
            </button>
            {/* Dark mode toggle */}
            <span className={cn(cartSearchBase, "ml-1")}>
              <ThemeToggle
                className={cn(
                  "transition-transform duration-150 hover:scale-110",
                  cartSearchHover // sync with Search/Cart
                )}
                isDark={isDark}
                iconSize={iconSize}
              />
            </span>
          </div>
        </div>
        {/* Updated Gold Line, thinner, extended fade */}
        <div
          className="w-full"
          style={{
            height: 2,
            background:
              "linear-gradient(90deg,rgba(177,149,40,0.05) 0%, rgba(177,149,40,0.35) 5%, rgba(177,149,40,1) 27%, rgba(177,149,40,1) 73%, rgba(177,149,40,0.35) 95%, rgba(177,149,40,0.05) 100%)",
            boxShadow:
              "0 2px 18px 0 rgba(177,149,40,0.14) inset, 0 2px 10px 0 rgba(177,149,40,0.05)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 50,
          }}
        />
        {/* Expanding SearchBar */}
        <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <div className="h-13" />
      <style>
        {`
        .glassier-header {
          background: rgba(252,252,255,0.93);
          backdrop-filter: blur(11px) saturate(123%);
          -webkit-backdrop-filter: blur(11px) saturate(123%);
          box-shadow: 0 2px 30px 0 rgba(177,149,40,0.11), 0 1px 0 0 #B19528;
          border-bottom-left-radius: 1.1rem;
          border-bottom-right-radius: 1.1rem;
          position: relative;
        }
        .dark .glassier-header {
          background: rgba(35,39,50,0.91); /* lighter dark for better visibility */
          box-shadow: 0 2px 22px -9px rgba(4,107,210,.13), 0 1px 0 0 #B19528;
        }
        .glassier-header::after {
          content: "";
          display: block;
          pointer-events: none;
          position: absolute; 
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 2;
          border-radius: inherit;
          background: linear-gradient(
            to bottom, 
            rgba(255,255,255,0.21) 0%,
            rgba(255,255,255,0.08) 14%, 
            rgba(252,252,255,0.07) 35%, 
            rgba(255,255,255,0.03) 77%,
            rgba(255,255,255,0.00) 100%);
          opacity: 1;
        }
        .dark .glassier-header::after {
          background: linear-gradient(
            to bottom, 
            rgba(255,255,255,0.12) 0%,
            rgba(180,180,200,0.05) 19%, 
            rgba(180,180,200,0.01) 38%, 
            rgba(80,80,80,0.006) 100%);
          opacity: 1;
        }
        `}
      </style>
    </>
  );
};

export default Header;
