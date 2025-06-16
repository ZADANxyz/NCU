import React from "react";

const GOLD_BAR_MAX_WIDTH = "93vw";

const HeroDividerSection = () => {
  return (
    <section className="w-full bg-background dark:bg-background pt-20 pb-8">
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
    </section>
  );
};

export default HeroDividerSection;