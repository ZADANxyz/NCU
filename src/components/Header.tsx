import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useFooterVisible } from "./Header/useFloatingHeader";
import HeaderNavigation from "./Header/HeaderNavigation";
import HeaderActions from "./Header/HeaderActions";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

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

const Header = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [elevate, setElevate] = React.useState(false);
  const { cart, isCartOpen, openCart, closeCart } = useCart();

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

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

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
          <HeaderNavigation isDark={isDark} />
          {/* Actions */}
          <HeaderActions
            isDark={isDark}
            onCartOpen={openCart}
            onSearchOpen={() => setSearchOpen((v) => !v)}
            cartCount={cartCount}
          />
        </div>
        {/* Gold line visual (unchanged) */}
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
      <CartDrawer open={isCartOpen} onClose={closeCart} />
      {/* REMOVE spacer for hero image flush with menu */}
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

export default Header;