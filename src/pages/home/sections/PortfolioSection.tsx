
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const PORTFOLIO = [
  {
    title: "Mobile-Ready Learning Portal",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    desc: "Interactive online courses accessible anywhere, anytime."
  },
  {
    title: "Personal Academic Coaching",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    desc: "One-on-one mentorship and support for every student."
  },
  {
    title: "Ministry Partnerships",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    desc: "Collaborations and custom programs for churches and ministries."
  },
  {
    title: "Resource Library",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    desc: "Thousands of digital and print resources for lifelong learning."
  }
];

const PortfolioSection = () => (
  <section className="max-w-5xl mx-auto pt-2 pb-14 px-4">
    <h2 className="text-3xl font-bold text-[#046BD2] mb-6 text-center">Featured Work</h2>
    <Carousel>
      <CarouselContent>
        {PORTFOLIO.map((item) => (
          <CarouselItem
            key={item.title}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
          >
            <div className="glass glossy rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex flex-col flex-1 justify-between">
                <h3 className="font-semibold text-lg text-[#046BD2] mb-1">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);

export default PortfolioSection;
