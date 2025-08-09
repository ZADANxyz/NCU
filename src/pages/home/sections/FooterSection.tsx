import React, { useState } from "react";
import { Youtube, Facebook, Instagram, Twitter, Mail, Search } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";

// TikTok icon component since it's not available in Lucide
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// HubSpot icon component
const HubSpotIcon = () => (
  <img 
    src="/lovable-uploads/a03296b5-6734-433b-93c5-efe5e37623bf.png" 
    alt="HubSpot" 
    width="16" 
    height="16" 
    className="object-contain"
  />
);

const FooterSection = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <footer id="site-footer" className="w-full apple-glass-footer relative">
      {/* Gold line visual (same as header but above footer) */}
      <div
        className="mx-auto"
        style={{
          width: "98%",
          height: 2,
          marginBottom: -2,
          background:
            "linear-gradient(90deg,rgba(177,149,40,0) 0%, rgba(177,149,40,0.15) 2.5%, rgba(177,149,40,0.37) 8%, rgba(177,149,40,1) 21%, rgba(177,149,40,1) 79%, rgba(177,149,40,0.37) 92%, rgba(177,149,40,0.15) 97.5%, rgba(177,149,40,0) 100%)",
          boxShadow:
            "0 2px 18px 0 rgba(177,149,40,0.14) inset, 0 2px 10px 0 rgba(177,149,40,0.05)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: 2,
          zIndex: 50,
        }}
      />
      
      <div className="relative h-[96px] px-3 sm:px-6 md:px-[52px]">
        {/* Top row - Logo left, Social icons right */}
        <div className="absolute top-3 left-3 sm:left-6 md:left-[52px] right-3 sm:right-6 md:right-[52px] flex items-center justify-between z-30">
          {/* Logo - left side */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Social Media Icons - right side */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/newcovenantu"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/newcovenantuniversity"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://x.com/NewCovenantU"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.youtube.com/@newcovenantuniversity808"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@newcovenantuniversity"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://ncu.education/webmail"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://crm.ncu.education"
              aria-label="HubSpot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-[#B19528]/80 transition-colors"
            >
              <HubSpotIcon />
            </a>
          </div>
        </div>

        {/* Center - Copyright Information */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30">
          <div className="text-sm mb-1">
            Copyright © {new Date().getFullYear()} - <span className="text-[#046BD2] dark:text-[#B19528] font-semibold">NEW COVENANT UNIVERSITY</span>
            <br />
            All Rights Reserved - <a href="/sitemap" className="text-[#046BD2] dark:text-[#B19528] hover:underline">Sitemap</a>
          </div>
          <div className="text-sm mt-3">
            <span>Designed & Hosted By: </span>
            <a 
              href="https://zathenaventures.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#046BD2] dark:text-[#B19528] font-semibold hover:underline"
            >
              ZATHENA VENTURES 🦁
            </a>
          </div>
        </div>

        {/* Bottom right - Search and Theme Toggle */}
        <div className="absolute bottom-3 right-3 sm:right-6 md:right-[52px] flex items-center gap-2 z-30">
          <Search 
            size={16} 
            className="text-[#181818] dark:text-white cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <ThemeToggle iconSize={16} />
        </div>

        {/* Search Bar - positioned above footer and gold line */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full z-50">
          <SearchBar open={searchOpen} onClose={() => setSearchOpen(false)} />
        </div>
      </div>
    </footer>

    <style>
      {`
      .apple-glass-footer {
        background: rgba(255,255,255,0.86);
        backdrop-filter: blur(21px) saturate(160%);
        -webkit-backdrop-filter: blur(21px) saturate(160%);
        box-shadow: 0 -6px 40px 0 rgba(4,107,210,0.12), 0 -1px 0 0 #B19528;
        border-top-left-radius: 0.38rem;
        border-top-right-radius: 0.38rem;
        position: relative;
        transition: background 0.38s, box-shadow 0.28s;
      }
      .apple-glass-footer::after {
        content: "";
        display: block;
        pointer-events: none;
        position: absolute; 
        top: 0; left: 0; width: 100%; height: 100%;
        z-index: 2;
        border-radius: inherit;
        background: linear-gradient(
          110deg, 
          rgba(255,255,255,0.20) 0%, 
          rgba(255,255,255,0.05) 48%, 
          rgba(255,255,255,0.12) 92%,
          rgba(255,255,255,0.02) 100%
        );
        opacity: 1;
      }
      .dark .apple-glass-footer {
        background: rgba(8, 17, 37, 0.84);
        box-shadow: 0 -6px 42px -5px rgba(4,107,210,0.24), 0 -1.5px 0 0 #B19528;
        backdrop-filter: blur(22px) saturate(220%);
        -webkit-backdrop-filter: blur(22px) saturate(220%);
      }
      .dark .apple-glass-footer::after {
        background: linear-gradient(
          120deg, 
          rgba(185,200,235,0.08) 6%,
          rgba(110,120,160,0.07) 44%,
          rgba(255,255,255,0.06) 90%,
          rgba(20,30,70,0.03) 100%
        );
        opacity: 1;
      }
      `}
    </style>
    </>
  );
};

export default FooterSection;