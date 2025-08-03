import React from "react";
import { Button } from "@/components/ui/button";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalBIO from "./home/sections/AboutSectionalBIO";
import ContactAndMapSection from "./home/sections/ContactAndMapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";

const HERO_IMAGE = "/lovable-uploads/033cc9e0-07a9-4d43-b011-0d16b20cb8d9.png";

const books = [
  {
    id: 1,
    title: "Think Like a Queen to Be Married to a King",
    author: "Dr. Angel Crites",
    image: "/lovable-uploads/2d48b4a2-c29c-4b51-86c4-5dc45ec36d67.png"
  },
  {
    id: 2,
    title: "21 Things Every Leader Needs to Know",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/5112ed5b-dfc8-4730-891c-db9b20452df4.png"
  },
  {
    id: 3,
    title: "Money Matters",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/f34e6004-3e3f-4587-96e4-6e67154b7ca6.png"
  },
  {
    id: 4,
    title: "Rewired",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/d162fcf1-b78e-48f1-a9da-ef64c1c89243.png"
  },
  {
    id: 5,
    title: "Ministry Moments",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png"
  },
  {
    id: 6,
    title: "Confessions of a Faithful Father",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/7788beff-edb4-4e06-a889-be37c6860148.png"
  },
  {
    id: 7,
    title: "Seasons & Sons",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/aa922b63-f20a-4042-8985-bd50591544e3.png"
  },
  {
    id: 8,
    title: "The Decisions of a Wealthy King",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/c5e7ddc6-391b-47f0-8ee5-aedefb060295.png"
  },
  {
    id: 9,
    title: "10 Golden Keys",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/2f0c96d3-b19a-4b83-a1f3-de4da42ecc01.png"
  },
  {
    id: 10,
    title: "The Law of the Seed",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/d74aae3a-32f5-4e93-9bae-af5a4a61bff8.png"
  },
  {
    id: 11,
    title: "The Apostles Have Landed",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png"
  },
  {
    id: 12,
    title: "The Man Book",
    author: "Dr. Paul Crites",
    image: "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
  }
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="NCU Store"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Store Content */}
      <section className="max-w-6xl mx-auto px-3 md:px-7 py-16">
        {/* Store Description */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl lg:text-2xl text-[#2c2c2c] dark:text-gray-200 leading-relaxed font-normal max-w-5xl mx-auto">
            All books are available as gifts for donations of $15 or more. All donations are used for scholarship funds to help current students of NCU. Please be sure to include your email address at the time of your donation so we may follow up.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-medium italic text-[#2c2c2c] dark:text-gray-200 mb-2 min-h-[3rem] flex items-center">
                {book.title}
              </h3>
              <p className="text-sm text-[#666] dark:text-gray-400 mb-4">
                {book.author}
              </p>
              <Button className="w-full max-w-[200px]">
                Buy Now
              </Button>
            </div>
          ))}
        </div>

        {/* Browse Collection Button */}
        <div className="text-center">
          <Button variant="outline" className="px-8 py-3 text-base">
            Browse The Entire Collection Here
          </Button>
        </div>
      </section>

      {/* Sections matching About page */}
      <HeroDividerSection />
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalBIO />
      <ContactAndMapSection />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Store;