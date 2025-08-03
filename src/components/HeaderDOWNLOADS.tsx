import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import HeaderMenuDOWNLOADS from "./HeaderMenuDOWNLOADS";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";
import { useFooterVisible } from "./Header/useFloatingHeader";

const NCUWordmark = () => (
  <svg
    width="60"
    height="32"
    viewBox="0 0 120 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-current"
  >
    {/* N */}
    <path d="M8 12 L8 52 L12 52 L12 20 L24 52 L28 52 L28 12 L24 12 L24 44 L12 12 Z" fill="currentColor"/>
    {/* C */}
    <path d="M40 12 C46 12 52 18 52 32 C52 46 46 52 40 52 C34 52 28 46 28 32 C28 18 34 12 40 12 Z M40 16 C36 16 32 22 32 32 C32 42 36 48 40 48 C44 48 48 42 48 32 C48 22 44 16 40 16 Z" fill="currentColor"/>
    {/* U */}
    <path d="M64 12 L64 36 C64 44 68 48 76 48 C84 48 88 44 88 36 L88 12 L84 12 L84 36 C84 40 82 44 76 44 C70 44 68 40 68 36 L68 12 Z" fill="currentColor"/>
  </svg>
);

const HeaderDOWNLOADS = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const [elevate, setElevate] = useState(false);
  const footerVisible = useFooterVisible();

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`apple-glass-header ${elevate ? 'elevated' : ''} ${isDark ? 'dark' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <NCUWordmark />
              </Link>
              <HeaderMenuDOWNLOADS isDark={isDark} />
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDark 
                    ? "text-gray-300 hover:text-white hover:bg-white/10" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDark 
                    ? "text-gray-300 hover:text-white hover:bg-white/10" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <ShoppingCart size={20} />
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDark 
                    ? "text-gray-300 hover:text-white hover:bg-white/10" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className="gold-gradient-line"
          style={{
            height: "1.1px",
            background:
              "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
            boxShadow:
              "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
            borderRadius: 3,
            zIndex: 20,
            opacity: 0.99,
          }}
        />
      </header>

      <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      <style>{`
        .apple-glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .apple-glass-header.dark {
          background: rgba(17, 24, 39, 0.8);
          border-bottom: 1px solid rgba(55, 65, 81, 0.3);
        }

        .apple-glass-header.elevated {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        .apple-glass-header.elevated.dark {
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        }

        .gold-gradient-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>
    </>
  );
};

export default HeaderDOWNLOADS;