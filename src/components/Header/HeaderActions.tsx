
import React from "react";
import { ShoppingCart, Search, Person } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { cn } from "@/lib/utils";

interface Props {
  isDark: boolean;
  onCartOpen: () => void;
  onSearchOpen: () => void;
  cartCount: number;
}

const HeaderActions: React.FC<Props> = ({
  isDark,
  onCartOpen,
  onSearchOpen,
  cartCount,
}) => {
  // Icon classes
  const cartSearchBase = "text-slate-700 dark:text-slate-200";
  const cartSearchHover = isDark
    ? "hover:text-[#B19528]"
    : "hover:text-[#046BD2]";
  const iconSize = 16;

  return (
    <div
      className="flex items-center gap-1 pl-1"
      style={{ height: 40, alignItems: "center", display: "flex" }}
    >
      {/* Search Icon */}
      <button
        className={cn(
          cartSearchBase,
          "ml-1 p-1 group outline-none ring-0 bg-transparent",
          "transition-transform duration-150",
          cartSearchHover,
          "hover:scale-110 focus:scale-110",
          "dark:hover:text-[#B19528]"
        )}
        aria-label="Search"
        onClick={onSearchOpen}
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
          "hover:scale-110 focus:scale-110",
          "dark:hover:text-[#B19528]"
        )}
        aria-label="Open cart"
        onClick={onCartOpen}
        type="button"
      >
        <ShoppingCart size={iconSize} strokeWidth={2.05} />
        <span className="absolute -top-1 -right-0 bg-[#046BD2] text-[9px] text-white font-bold h-3 w-3 flex items-center justify-center rounded-full ring-2 ring-white shadow">
          {cartCount}
        </span>
      </button>

      {/* Person Icon */}
      <button
        className={cn(
          cartSearchBase,
          "ml-2 p-1 group outline-none ring-0 bg-transparent",
          "transition-transform duration-150",
          cartSearchHover,
          "hover:scale-110 focus:scale-110",
          "dark:hover:text-[#B19528]"
        )}
        aria-label="User"
        type="button"
        tabIndex={0}
      >
        <Person size={iconSize} strokeWidth={2.05} />
      </button>

      {/* Dark mode toggle */}
      <span className={cn(cartSearchBase, "ml-1")}>
        <ThemeToggle
          className={cn(
            "transition-transform duration-150 hover:scale-110",
            cartSearchHover
          )}
          isDark={isDark}
          iconSize={iconSize}
        />
      </span>
    </div>
  );
};

export default HeaderActions;
