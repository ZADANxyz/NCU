
import React from "react";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";
import { ShoppingCart, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  { label: "Degrees", to: "/degrees" },
  { label: "Media", to: "/media" },
  { label: "Downloads", to: "/downloads" },
  { label: "Donate", to: "/donate" },
  { label: "Apply", to: "/apply" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Subtle shadow on scroll
  const [elevate, setElevate] = React.useState(false);
  React.useEffect(() => {
    const handle = () => setElevate(window.scrollY > 8);
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Choose icon color adaptively in light/dark mode
  // We'll use Tailwind's text-slate-700/dark:text-slate-200 for icons/etc, except for the active nav link.
  const iconColor = "text-slate-700 dark:text-slate-200";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40",
          "shadow-xl transition-shadow duration-300",
          elevate && "shadow-2xl"
        )}
        style={{
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className={cn(
            "relative flex items-center justify-between h-20 px-3 sm:px-8 bg-white/80 dark:bg-neutral-900/80",
            "backdrop-blur-lg border-b-0"
          )}
          style={{
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: elevate
              ? "0 8px 22px -6px rgba(4,107,210,0.07), 0 1px 0 0 #B19528"
              : "0 2px 8px 0 rgba(4,107,210,0.06)",
          }}
        >
          {/* Left: NCU Wordmark/Logo */}
          <div className="flex items-center" style={{ height: 38 }}>
            <span className="text-[#046BD2] dark:text-[#046BD2]">
              <NCUWordmark />
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="flex-1 flex items-center justify-center relative z-20">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const active =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={cn(
                        "uppercase tracking-wide text-[16px] font-normal font-sans",
                        "transition-all px-2 pb-0.5 rounded",
                        "hover:text-[#B19528] hover:bg-[#046BD2]/5 duration-150",
                        active
                          ? "text-[#046BD2]"
                          : "text-gray-700 dark:text-gray-200"
                      )}
                      style={{ fontFamily: "system-ui, Segoe UI, sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions - order is right->left: Search, Cart, Theme */}
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
                  "transition-transform duration-150 hover:scale-110 hover:text-[#046BD2]"
                )}
              />
            </span>
          </div>
        </div>

        {/* Glassy Gold Line */}
        <div
          className="w-full h-1"
          style={{
            background:
              "linear-gradient(90deg, rgba(177,149,40,0.08) 0%, rgba(177,149,40,1) 35%, rgba(177,149,40,1) 65%, rgba(177,149,40,0.08) 100%)",
            boxShadow:
              "0 2px 8px 0 rgba(177,149,40,0.12) inset, 0 2px 8px 0 rgba(177,149,40,0.10)",
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
    </>
  );
};

export default Header;
