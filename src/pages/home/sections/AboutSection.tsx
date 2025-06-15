
import React from "react";

const GOLD_BAR_MAX_WIDTH = "97vw";

const AboutSection = () => {
  return (
    <>
      {/* Top gold divider */}
      <div className="w-full bg-background dark:bg-background py-4">
        <div className="w-full flex justify-center">
          <div
            className="w-full"
            style={{
              maxWidth: GOLD_BAR_MAX_WIDTH,
              height: "1.1px",
              background:
                "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
              boxShadow:
                "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
              borderRadius: 3,
              zIndex: 20,
              opacity: 0.99,
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      
      <section className="w-full bg-white/96 dark:bg-slate-900/80 py-16 px-3 sm:px-6 md:px-[52px] glass glossy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
            About New Covenant University
          </h2>
          <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed">
            New Covenant University is committed to training tomorrow's leaders today by equipping students with the theological foundation, practical ministry tools, and academic excellence needed to fulfill their calling. We exist to empower students spiritually, academically, and professionally.
          </p>
        </div>
      </section>

      {/* Bottom gold divider */}
      <div className="w-full bg-background dark:bg-background py-4">
        <div className="w-full flex justify-center">
          <div
            className="w-full"
            style={{
              maxWidth: GOLD_BAR_MAX_WIDTH,
              height: "1.1px",
              background:
                "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
              boxShadow:
                "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
              borderRadius: 3,
              zIndex: 20,
              opacity: 0.99,
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
