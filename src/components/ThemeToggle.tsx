
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  isDark?: boolean; // Still allowed for controlled render, but prefers context
  iconSize?: number;
}

const GOLD = "#B19528";
const BLUE = "#046BD2";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, isDark, iconSize = 21 }) => {
  const { theme, isDark: dark, toggleTheme } = useTheme();

  // Use controlled prop only if explicitly provided, otherwise context
  const effectiveIsDark = typeof isDark === "boolean" ? isDark : dark;

  const [hovered, setHovered] = React.useState(false);

  // On hover: sun/moon is blue in light mode, gold in dark mode, else currentColor
  const hoveredColor = hovered
    ? (effectiveIsDark ? GOLD : BLUE)
    : "currentColor";

  const iconProps = {
    size: iconSize,
    color: hoveredColor,
    className: "transition-transform duration-300"
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className={
        "rounded-full p-1.5 bg-transparent ring-0 transition-all duration-200 " +
        (className ?? "")
      }
      onClick={toggleTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      type="button"
    >
      {effectiveIsDark ? <Sun {...iconProps} /> : <Moon {...iconProps} />}
    </button>
  );
};

export default ThemeToggle;
