
import React from "react";
import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Degrees", href: "/degrees" },
  { label: "Media", href: "/media" },
  { label: "Downloads", href: "/downloads" },
  { label: "Donate", href: "/donate" },
  { label: "Apply", href: "/apply" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal" }
];

const FooterSection = () => (
  <footer id="site-footer" className="w-full bg-[#071224] pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-[52px]">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="font-extrabold text-[#B19528] text-3xl cursor-pointer"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: 1 }}
              onClick={() => window.location.href = '/'}
            >
              NCU
            </span>
          </div>
          <p className="text-white text-sm leading-relaxed max-w-sm">
            New Covenant University is committed to training tomorrow's leaders today by equipping students with the theological foundation needed to fulfill their calling.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-1">
          <h3 className="text-[#B19528] font-semibold text-lg mb-4">Quick Links</h3>
          <nav className="grid grid-cols-2 gap-2">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white hover:text-[#B19528] transition-colors text-sm py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact and Social */}
        <div className="md:col-span-1">
          <h3 className="text-[#B19528] font-semibold text-lg mb-4">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.youtube.com/@paulcrites"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B19528] hover:text-white transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#B19528] hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#B19528] hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#B19528] hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
          <p className="text-white text-sm">
            Phone: <a href="tel:863-268-5600" className="text-[#B19528] hover:text-white transition-colors">863-268-5600</a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#B19528]/20 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white text-sm">
            &copy; {new Date().getFullYear()} New Covenant University. All rights reserved.
          </div>
          <div className="text-sm">
            <span className="text-white">Powered by </span>
            <a 
              href="https://zathenaventures.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#ff0001] font-semibold hover:underline"
            >
              ZATHENA VENTURES
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
