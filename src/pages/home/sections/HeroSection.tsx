
import React from "react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[470px] pb-8">
    <div className="absolute inset-0 z-0">
      <img
        src={HERO_IMAGE}
        alt="NCU Students"
        className="object-cover w-full h-full rounded-none"
        style={{ minHeight: 320, maxHeight: 600, objectPosition: "center 27%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-transparent dark:from-[#13213C]/80 dark:via-[#09162D33] dark:to-transparent" />
    </div>
    <div className="relative z-10 mt-10 flex flex-col items-center px-5">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#046BD2] drop-shadow-lg text-center mb-4">
        Welcome to North Carolina University
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium golden mb-4 text-center max-w-2xl">
        Empowering the Next Generation of World-Changing Leaders.
      </h2>
      <p className="text-lg text-muted-foreground text-center mb-7 max-w-2xl font-medium">
        Discover your calling. Grow your gifts. Serve your community.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          className="glass glossy px-8 py-3 text-lg font-bold shadow-lg border border-[#046BD2]/25 hover:scale-105 bg-[#046BD2] text-white"
          style={{ background: "linear-gradient(96deg, #046BD2 80%, #0A2965 100%)" }}
          size="lg"
        >
          Apply Now
        </Button>
        <Button
          className="glass glossy px-8 py-3 text-lg font-bold shadow-lg border border-gold hover:scale-105 text-[#046BD2]"
          variant="outline"
          size="lg"
        >
          Explore Programs
        </Button>
      </div>
    </div>
    <div className="h-20" />
  </section>
);

export default HeroSection;
