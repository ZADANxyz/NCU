
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Youtube } from "lucide-react";

const SubscribeSection = () => (
  <section className="max-w-3xl mx-auto py-10 md:py-16 px-3 sm:px-7 flex flex-col items-center glass glossy rounded-2xl shadow-lg border border-gold/18 mb-12 md:mb-20 bg-white/95 dark:bg-slate-900/75">
    <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#046BD2] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Stay Connected</h2>
    <p className="text-sm md:text-base text-center text-[#454545] mb-4 font-medium" style={{ fontWeight: 400 }}>
      Subscribe for updates, scholarships, and new course releases.
    </p>
    <form className="flex w-full max-w-lg gap-3 mb-4">
      <input
        type="email"
        required
        className="flex-1 rounded-lg px-5 py-3 border border-gold/50 text-base bg-white/95 dark:bg-slate-900/60 shadow focus:ring-2 focus:ring-[#046BD2] focus:outline-none"
        placeholder="Your email address"
      />
      <Button
        className="px-6 py-3 font-bold glass glossy bg-[#046BD2] text-white border border-[#046BD2]/20 shadow hover:scale-105"
        style={{ background: "linear-gradient(98deg, #046BD2 95%, #0A2965 100%)" }}
        type="submit"
      >
        <Mail size={19} className="mr-2" /> Subscribe
      </Button>
    </form>
    <div className="flex gap-4">
      <a href="https://www.youtube.com/@paulcrites" target="_blank" rel="noopener noreferrer"
        className="text-[#B19528] hover:text-[#046BD2] transition-colors text-[1.9rem]"
        aria-label="YouTube"
      >
        <Youtube size={32} />
      </a>
    </div>
  </section>
);

export default SubscribeSection;
