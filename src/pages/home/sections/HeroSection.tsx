
import React from "react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/lovable-uploads/ff5bd571-8877-4014-b55a-6226e12e20f5.png";
// Font inspiration: 'Playfair Display' for heading, system-ui for subtext

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[580px] md:min-h-[680px] pt-4 pb-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={HERO_IMAGE}
        alt="NCU Students"
        className="object-cover w-full h-full"
        style={{ minHeight: 360, maxHeight: 700, objectPosition: "center 22%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-transparent dark:from-[#191D28]/80 dark:via-[#181D2F55] dark:to-transparent" />
    </div>
    <div className="relative z-10 flex flex-col items-center px-4 md:px-9 w-full mt-20">
      <h1 className="text-[clamp(2.3rem,6vw,4.2rem)] font-extrabold leading-tight text-[#046BD2] mb-2 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
        North Carolina University
      </h1>
      <span className="block text-xl md:text-3xl text-[#B19528] font-semibold mb-4 text-center tracking-wide" style={{ letterSpacing: "0.01em" }}>
        Empowering The Next Generation of Christian Leaders
      </span>
      <p className="max-w-2xl text-md md:text-lg text-center text-[#353535] dark:text-[#e2e2e2] mb-8 font-medium" style={{ fontWeight: 400 }}>
        Accredited. Affordable. 100% Online. Built for your calling.
      </p>
      <div className="flex flex-wrap gap-4 justify-center w-full mb-4">
        <Button
          className="glass glossy px-10 py-4 text-lg font-extrabold shadow-lg border border-[#046BD2]/25 hover:scale-105 bg-[#046BD2] text-white transition"
          style={{ background: "linear-gradient(96deg, #046BD2 78%, #184281 100%)" }}
          size="lg"
        >
          Apply Now
        </Button>
        <Button
          className="glass glossy px-10 py-4 text-lg font-bold shadow-md border border-gold/70 text-[#046BD2] hover:bg-[#EAF2FB] hover:scale-105 transition"
          variant="outline"
          size="lg"
        >
          Explore Programs
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;

