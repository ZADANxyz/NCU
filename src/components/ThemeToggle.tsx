
import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  isDark?: boolean;
  iconSize?: number; // new prop for icon size
}

const GOLD = "#B19528";
const BLUE = "#046BD2";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, isDark, iconSize = 21 }) => {
  const [dark, setDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  const controlledDark = typeof isDark === "boolean" ? isDark : dark;

  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
  }, []);

  // Correct hover color for icon
  const hoveredColor = hovered
    ? (controlledDark ? GOLD : BLUE)
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
      onClick={() => setDark((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      type="button"
    >
      {controlledDark ? <Sun {...iconProps} /> : <Moon {...iconProps} />}
    </button>
  );
};

export default ThemeToggle;
