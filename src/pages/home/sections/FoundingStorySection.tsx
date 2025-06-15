
import React from "react";
const HERO_IMAGE = "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png";
const FoundingStorySection = () => (
  <section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 mb-16">
    <div className="flex-1 order-2 md:order-1">
      <h2 className="text-2xl font-bold golden mb-3">Founding Story</h2>
      <p className="text-base md:text-lg text-muted-foreground">
        NCU was founded by Paul Crites out of a vision to create a faith-driven university empowering students for profound impact both locally and globally. From a single classroom, we’ve grown into a vibrant global community, always putting personal connection and spiritual growth first.
      </p>
    </div>
    <div className="flex-1 order-1 md:order-2 flex justify-center">
      <img
        src={HERO_IMAGE}
        alt="Paul Crites"
        className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-gold"
      />
    </div>
  </section>
);

export default FoundingStorySection;
