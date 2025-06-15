
import React from "react";
import { cn } from "@/lib/utils";

const demoSuggestions = [
  "Admissions",
  "Scholarships",
  "Alumni Events",
  "Virtual Tour",
  "Online Degree Programs",
  "Faculty Directory",
  "Tuition Payment",
  "Campus Map",
  "News & Media"
];

const SearchBar: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [query, setQuery] = React.useState("");
  const [suggest, setSuggest] = React.useState<string[]>(demoSuggestions);

  React.useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  React.useEffect(() => {
    setSuggest(
      demoSuggestions.filter((s) =>
        s.toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [query]);

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "absolute left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-xl px-3 z-50",
        open
          ? "opacity-100 pointer-events-auto animate-fade-in"
          : "opacity-0 pointer-events-none"
      )}
      style={{ transition: "opacity 0.2s" }}
    >
      <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-lg border border-gold/60 rounded-2xl shadow-xl p-3 flex flex-col">
        <input
          autoFocus={open}
          type="text"
          placeholder="Search site..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClose();
              // TODO: route to search results or set query globally
            }
          }}
          className="w-full bg-transparent outline-none text-lg font-medium text-[#046BD2] placeholder:text-gold/80"
        />
        <div className="mt-2">
          {open && query && suggest.length > 0 && (
            <ul className="bg-white/85 dark:bg-black/80 rounded-xl shadow p-2">
              {suggest.map((s) => (
                <li key={s}>
                  <button
                    className="w-full text-left px-3 py-1 rounded hover:bg-gold/10 text-sm transition"
                    onClick={() => {
                      setQuery(s);
                      onClose();
                    }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {open && query && suggest.length === 0 && (
            <div className="px-3 py-2 text-sm text-gray-400">No suggestions...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
