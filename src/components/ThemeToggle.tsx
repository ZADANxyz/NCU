
import React from "react";
import { Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  // Use class on html element for theme toggling
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains("dark")
  );

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

  return (
    <button
      aria-label="Toggle dark mode"
      className={
        "rounded-full p-2 bg-transparent ring-0 transition-all duration-200 " +
        (className ?? "")
      }
      onClick={() => setDark((v) => !v)}
      tabIndex={0}
      type="button"
    >
      <Moon size={24} color="currentColor" className="transition-transform duration-300" />
    </button>
  );
};

export default ThemeToggle;
