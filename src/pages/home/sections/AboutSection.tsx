import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-[#242836] pt-0 pb-16 px-3 sm:px-6 md:px-[52px]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
          About New Covenant University
        </h2>
        <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed">
          New Covenant University is committed to training tomorrow's leaders today by equipping students with the theological foundation, practical ministry tools, and academic excellence needed to fulfill their calling. We exist to empower students spiritually, academically, and professionally.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;