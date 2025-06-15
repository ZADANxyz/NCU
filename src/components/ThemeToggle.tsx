
import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

const GOLD = "#B19528";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains("dark")
  );
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
    // Initial load from localStorage or system
    const stored = localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
  }, []);

  // Icon and icon color, gold on hover, currentColor default
  const iconProps = {
    size: 24,
    color: hovered ? GOLD : "currentColor",
    className: "transition-transform duration-300",
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className={
        "rounded-full p-2 bg-transparent ring-0 transition-all duration-200 " +
        (className ?? "")
      }
      onClick={() => setDark((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      type="button"
    >
      {dark ? (
        <Sun {...iconProps} />
      ) : (
        <Moon {...iconProps} />
      )}
    </button>
  );
};

export default ThemeToggle;
