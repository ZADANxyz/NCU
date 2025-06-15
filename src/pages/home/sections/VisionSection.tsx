
import React from "react";

const VisionSection = () => (
  <section className="flex flex-col items-center justify-center my-14 px-6">
    <div className="glass glossy rounded-2xl shadow-md py-9 md:px-16 px-5 max-w-3xl bg-white/90 border border-gold/15">
      <h2 className="text-xl md:text-2xl font-bold golden mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h2>
      <p className="text-base md:text-lg text-center text-[#313131] dark:text-gray-200 font-normal leading-relaxed">
        We believe every student holds untapped potential and a calling to impact their world. <br className="hidden md:inline" />
        Our mission: equip Christian servant-leaders for today’s challenges, through academic excellence, faith, and personal care.
      </p>
    </div>
  </section>
);

export default VisionSection;
