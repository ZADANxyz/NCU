
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Youtube } from "lucide-react";

const SubscribeSection = () => (
  <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col items-center glass glossy rounded-2xl shadow-lg mb-16">
    <h2 className="text-2xl font-bold mb-3 text-[#046BD2]">Subscribe for Updates</h2>
    <p className="text-base text-center text-muted-foreground mb-5">Get news, event updates, and scholarships.</p>
    <form className="flex w-full max-w-xl gap-3 mb-5">
      <input
        type="email"
        required
        className="flex-1 rounded-lg px-5 py-3 border border-gold text-base bg-white/80 dark:bg-slate-900/60 shadow focus:ring-2 focus:ring-[#046BD2] focus:outline-none"
        placeholder="Your email address"
      />
      <Button
        className="px-6 py-3 font-bold glass glossy bg-[#046BD2] text-white border border-[#046BD2]/20 shadow hover:scale-105"
        style={{ background: "linear-gradient(98deg, #046BD2 90%, #0A2965 100%)" }}
        type="submit"
      >
        <Mail size={19} className="mr-2" /> Subscribe
      </Button>
    </form>
    <div className="flex gap-5">
      <a href="https://www.youtube.com/@paulcrites" target="_blank" rel="noopener noreferrer"
        className="text-[#B19528] hover:text-[#046BD2] transition-colors text-2xl"
        aria-label="YouTube"
      >
        <Youtube size={32} />
      </a>
    </div>
  </section>
);

export default SubscribeSection;
