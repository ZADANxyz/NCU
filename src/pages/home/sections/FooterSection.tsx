
import React from "react";
import { Youtube } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Programs", href: "/programs" },
  { label: "Apply", href: "/apply" },
  { label: "Store", href: "/store" },
  { label: "Donate", href: "/donate" }
];

const FooterSection = () => (
  <footer className="w-full bg-[#F6F6FA] dark:bg-[#181C27] pt-10 pb-6 border-t border-gold/11">
    <div className="max-w-7xl mx-auto px-3 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3 mb-3 lg:mb-0">
        <span className="font-extrabold text-[#046BD2] text-2xl" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: 1 }}>
          NCU
        </span>
        <span className="text-gold font-semibold text-base tracking-widest">North Carolina University</span>
      </div>
      <nav className="flex flex-wrap gap-4 md:gap-6">
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-base text-[#333] dark:text-[#eaeaea] hover:text-[#046BD2] transition-colors font-medium px-2"
            style={{ fontWeight: 500, letterSpacing: "0.03em" }}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <a
          href="https://www.youtube.com/@paulcrites"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full text-gold hover:text-[#046BD2] transition-colors"
        >
          <Youtube size={27} strokeWidth={2.2} />
        </a>
      </div>
    </div>
    <div className="text-center mt-6 text-xs text-muted-foreground tracking-wide">
      &copy; {new Date().getFullYear()} North Carolina University. All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
