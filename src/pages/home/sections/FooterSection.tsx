
import React from "react";
import { Youtube, Facebook, Instagram, Twitter, Mail, Search } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
  <footer id="site-footer" className="w-full bg-[#2c3e50] pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
        {/* Left - Logo and Description */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="font-extrabold text-[#B19528] text-3xl cursor-pointer"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: 1 }}
              onClick={() => window.location.href = '/'}
            >
              NCU
            </span>
          </div>
          <p className="text-white text-sm leading-relaxed">
            New Covenant University is committed to training tomorrow's leaders today by equipping students with the theological foundation needed to fulfill their calling.
          </p>
        </div>

        {/* Center - Social Media Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://www.youtube.com/@paulcrites"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <TikTokIcon />
          </a>
          <a
            href="mailto:info@ncu.edu"
            aria-label="Email"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="#"
            aria-label="HubSpot"
            className="w-10 h-10 bg-[#B19528] rounded-full flex items-center justify-center text-white hover:bg-[#B19528]/80 transition-colors"
          >
            <HubSpotIcon />
          </a>
        </div>

        {/* Right - Search and Theme Toggle */}
        <div className="flex items-center gap-3">
          <Search size={24} className="text-[#B19528] cursor-pointer hover:text-white transition-colors" />
          <ThemeToggle iconSize={24} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#B19528]/20 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-white text-sm">
            Copyright © {new Date().getFullYear()} - <span className="text-[#B19528] font-semibold">NEW COVENANT UNIVERSITY</span>
            <br />
            All Rights Reserved - <a href="/sitemap" className="text-[#B19528] hover:underline">Sitemap</a>
          </div>
          <div className="text-sm">
            <span className="text-white">Designed & Hosted By: </span>
            <a 
              href="https://zathenaventures.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B19528] font-semibold hover:underline"
            >
              ZATHENA VENTURES 🚀
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
