
import React from "react";
import { Moon } from "lucide-react";

const ThemeToggle = () => {
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
      className="rounded-full p-2 bg-white/40 dark:bg-black/40 ring-1 ring-white/40 dark:ring-black/40 backdrop-blur-sm shadow hover:scale-105 hover:bg-white/70 dark:hover:bg-black/60 transition-all duration-200 mr-2"
      onClick={() => setDark((v) => !v)}
      tabIndex={0}
      type="button"
    >
      <Moon size={22} color="#046BD2" className="transition-transform duration-300" />
    </button>
  );
};

export default ThemeToggle;
