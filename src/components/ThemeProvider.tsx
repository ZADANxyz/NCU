
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Sync theme with <html> class and localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Listen for changes to theme from other tabs/windows
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if(e.key === "theme" && (e.newValue === "dark" || e.newValue === "light"))
        setThemeState(e.newValue);
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const setTheme = (value: Theme) => setThemeState(value);
  const toggleTheme = () => setThemeState(t => t === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      isDark: theme === "dark", 
      setTheme, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Simple hook for components
export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
