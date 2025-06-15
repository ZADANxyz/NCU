
import React from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import CartDrawer from "./CartDrawer";
import SearchBar from "./SearchBar";
import { ShoppingCart, Search } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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

  // Cart & Search UI state
  const [cartOpen, setCartOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  // Mobile nav state
  const [navOpen, setNavOpen] = React.useState(false);

  // Glassy shadow fix on scroll
  const [elevate, setElevate] = React.useState(false);
  React.useEffect(() => {
    const handle = () => setElevate(window.scrollY > 8);
    window.addEventListener("scroll", handle);
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Responsive: if mobile, collapse menu (mobile breakpoint 900px)
  const isMobile = window.innerWidth < 900;

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
        {/* Glass Header Main */}
        <div
          className={cn(
            "relative flex items-center justify-between h-20 px-2 sm:px-8 bg-white/80 dark:bg-neutral-900/80",
            "backdrop-blur-lg border-b-0",
            "transition-all duration-300"
          )}
          style={{
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: elevate
              ? "0 8px 22px -6px rgba(4,107,210,0.07), 0 1px 0 0 #B19528"
              : "0 2px 8px 0 rgba(4,107,210,0.06)",
          }}
        >
          {/* Left: Logo */}
          <Logo />

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
                        "uppercase font-semibold tracking-wide text-base transition-all px-2 pb-1 rounded hover:text-[#B19528] hover:bg-[#046BD2]/5 duration-150",
                        active ? "text-[#046BD2]" : "text-gray-700 dark:text-gray-200"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-1 pr-4">
            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Cart Icon */}
            <button
              className={cn(
                "relative rounded-full p-2 mx-1 bg-white/40 dark:bg-black/40 ring-1 ring-gold/50 backdrop-blur-md shadow hover:scale-105 hover:bg-gold/20 transition-all duration-200",
                cartOpen && "scale-110 bg-gold/10"
              )}
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              type="button"
            >
              <ShoppingCart
                size={22}
                color="#B19528"
                className="pointer-events-none"
              />
              {/* Cart badge (demo) */}
              <span className="absolute -top-1 -right-1 bg-[#046BD2] text-[10px] text-white font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white shadow">
                3
              </span>
            </button>

            {/* Search Icon */}
            <button
              className={cn(
                "rounded-full p-2 ml-1 bg-white/40 dark:bg-black/40 ring-1 ring-gold/40 backdrop-blur-md shadow hover:scale-105 hover:bg-gold/30 transition-all duration-200",
                searchOpen && "scale-105"
              )}
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              type="button"
            >
              <Search size={22} color="#046BD2" className="pointer-events-none" />
            </button>
          </div>

          {/* Mobile menu toggle (Hamburger) */}
          {/* Hidden for now - implementation for mobile nav can be added as next step */}
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
