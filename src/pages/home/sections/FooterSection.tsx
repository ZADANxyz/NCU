
import React from "react";
import { Youtube, Facebook, Instagram, Twitter, Mail, Search } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

// TikTok icon component since it's not available in Lucide
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// HubSpot icon component
const HubSpotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.164 7.931V5.829c0-.792-.268-1.494-.713-2.058.267-.4.426-.894.426-1.429C17.877.903 16.955 0 15.86 0s-2.017.903-2.017 2.342c0 .535.159 1.029.426 1.429-.445.564-.713 1.266-.713 2.058v2.102c-1.297.307-2.262 1.483-2.262 2.892 0 1.408.965 2.585 2.262 2.892v7.943c0 .792.268 1.494.713 2.058-.267.4-.426.894-.426 1.429 0 1.439.922 2.342 2.017 2.342s2.017-.903 2.017-2.342c0-.535-.159-1.029-.426-1.429.445-.564.713-1.266.713-2.058v-7.943c1.297-.307 2.262-1.484 2.262-2.892 0-1.409-.965-2.585-2.262-2.892zM15.86 1.463c.466 0 .842.393.842.879 0 .486-.376.879-.842.879-.466 0-.842-.393-.842-.879 0-.486.376-.879.842-.879zm0 21.074c-.466 0-.842-.393-.842-.879 0-.486.376-.879.842-.879.466 0 .842.393.842.879 0 .486-.376.879-.842.879zm0-10.714c-.961 0-1.738-.811-1.738-1.812s.777-1.812 1.738-1.812 1.738.811 1.738 1.812-.777 1.812-1.738 1.812z"/>
  </svg>
);

const FooterSection = () => (
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left - Logo only */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Center - Copyright Information */}
          <div className="flex-1 text-center">
            <div className="text-sm mb-2">
              Copyright © {new Date().getFullYear()} - <span className="text-[#B19528] dark:text-[#B19528] font-semibold">NEW COVENANT UNIVERSITY</span>
              <br />
              All Rights Reserved - <a href="/sitemap" className="text-[#046BD2] dark:text-[#B19528] hover:underline">Sitemap</a>
            </div>
            <div className="text-sm">
              <span>Designed & Hosted By: </span>
              <a 
                href="https://zathenaventures.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#046BD2] dark:text-[#B19528] font-semibold hover:underline"
              >
                ZATHENA VENTURES 🚀
              </a>
            </div>
          </div>

          {/* Right - Social Media Icons and Controls */}
          <div className="flex flex-col items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/@paulcrites"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <TikTokIcon />
              </a>
              <a
                href="mailto:info@ncu.edu"
                aria-label="Email"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                aria-label="HubSpot"
                className="w-10 h-10 bg-[#046BD2] dark:bg-[#B19528] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
              >
                <HubSpotIcon />
              </a>
            </div>

            {/* Search and Theme Toggle */}
            <div className="flex items-center gap-3">
              <Search size={24} className="text-[#046BD2] dark:text-[#B19528] cursor-pointer hover:opacity-80 transition-opacity" />
              <ThemeToggle iconSize={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>

    <style jsx>{`
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
    `}</style>
  </>
);

export default FooterSection;
