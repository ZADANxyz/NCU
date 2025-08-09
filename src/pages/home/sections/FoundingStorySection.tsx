import React from "react";
const HERO_IMAGE = "/lovable-uploads/2d48b4a2-c29c-4b51-86c4-5dc45ec36d67.png";
const FoundingStorySection = () => (
  <section className="max-w-6xl mx-auto px-3 md:px-7 flex flex-col md:flex-row items-center gap-10 mb-18 md:mb-24">
    <div className="flex-1 order-2 md:order-1">
      <h2 className="text-xl md:text-2xl font-bold golden mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Founding Story</h2>
      <p className="text-base md:text-lg text-[#2c2c2c] dark:text-gray-200 leading-relaxed font-normal">
        NCU was born out of a simple vision: Open the doors of biblical education to every believer called to leadership.
        Founded by Paul Crites, our focus remains deeply personal—combining spiritual growth, relevant academics, and global connection. From a single classroom, we have grown into a vibrant, international online community.
      </p>
    </div>
    <div className="flex-1 order-1 md:order-2 flex justify-center">
      <img
        src={HERO_IMAGE}
        alt="Paul Crites"
        className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl border-4 border-gold"
      />
    </div>
  </section>
);

export default FoundingStorySection;