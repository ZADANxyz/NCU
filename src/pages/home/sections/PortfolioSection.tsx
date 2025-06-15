
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const PORTFOLIO = [
  {
    title: "On-Demand Online Courses",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=450&q=80",
    desc: "Self-paced learning, accessible anytime on any device."
  },
  {
    title: "1-on-1 Academic Coaching",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=450&q=80",
    desc: "Expert faculty mentoring every step of your journey."
  },
  {
    title: "Ministry & Market Partnerships",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=450&q=80",
    desc: "Custom learning packages for organizations & churches."
  },
  {
    title: "Digital Resource Library",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=450&q=80",
    desc: "Thousands of resources at your fingertips for lifelong growth."
  }
];

const PortfolioSection = () => (
  <section className="max-w-6xl mx-auto pt-3 pb-16 px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-[#046BD2] mb-7 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
      Featured Work
    </h2>
    <Carousel>
      <CarouselContent>
        {PORTFOLIO.map((item) => (
          <CarouselItem
            key={item.title}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
          >
            <div className="glass glossy rounded-lg border border-gold/8 bg-white/80 dark:bg-slate-900/70 shadow-md flex flex-col h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="font-semibold text-base md:text-lg text-[#046BD2] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);

export default PortfolioSection;
