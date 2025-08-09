import React from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { cn } from "@/lib/utils";

interface Props {
  isDark: boolean;
  onCartOpen: () => void;
  onSearchOpen: () => void;
  onProfileOpen: () => void;
  onMobileMenuOpen: () => void;
  cartCount: number;
  onHero: boolean;
}

const HeaderActions: React.FC<Props> = ({
  isDark,
  onCartOpen,
  onSearchOpen,
  onProfileOpen,
  onMobileMenuOpen,
  cartCount,
  onHero,
}) => {
  const iconSize = 18;
  const buttonClasses = cn(
    "p-1.5 group outline-none ring-0 bg-transparent",
    "transition-transform duration-150",
    onHero ? "text-white" : "text-slate-700 dark:text-slate-200",
    onHero ? "hover:text-gray-200" : "hover:text-ncu-blue dark:hover:text-ncu-gold",
    "hover:scale-110 focus:scale-110"
  );

  return (
    <div
      className="flex items-center gap-1 pl-1"
      style={{ height: 40, alignItems: "center", display: "flex" }}
    >
      <button
        className={buttonClasses}
        aria-label="Search"
        onClick={onSearchOpen}
        type="button"
      >
        <Search size={iconSize} strokeWidth={2} />
      </button>

      <button
        className={cn(buttonClasses, "relative")}
        aria-label="Open cart"
        onClick={onCartOpen}
        type="button"
      >
        <ShoppingCart size={iconSize} strokeWidth={2} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-ncu-blue text-[10px] text-white font-bold min-w-[1.1rem] h-[1.1rem] px-1 flex items-center justify-center rounded-full ring-2 ring-white dark:ring-gray-800 shadow">
            {cartCount}
          </span>
        )}
      </button>

      <button
        className={buttonClasses}
        aria-label="User Profile"
        onClick={onProfileOpen}
        type="button"
        tabIndex={0}
      >
        <User size={iconSize} strokeWidth={2} />
      </button>

      <ThemeToggle
        className={cn("transition-transform duration-150 hover:scale-110 p-1.5", onHero ? "text-white" : "text-slate-700 dark:text-slate-200")}
        isDark={isDark}
        iconSize={iconSize}
      />

      <button
        className={cn(buttonClasses, "md:hidden")}
        aria-label="Open menu"
        onClick={onMobileMenuOpen}
        type="button"
      >
        <Menu size={24} strokeWidth={2} />
      </button>
    </div>
  );
};

export default HeaderActions;