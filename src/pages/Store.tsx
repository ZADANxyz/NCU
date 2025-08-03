import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";
import { useToast } from "@/hooks/use-toast";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

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
  const [cart, setCart] = useState<any[]>([]);
  const { toast } = useToast();

  const addToCart = (book: any) => {
    setCart(prev => [...prev, { ...book, price: 15 }]);
    toast({
      title: "Added to Cart",
      description: `"${book.title}" has been added to your cart.`,
    });
  };

  return (
    <div className="bg-background min-h-screen pt-0">
      {/* Hero Image - Same as About page */}
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="NCU Store"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Store Content - Full Width */}
      <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16">
        <div className="w-full px-6 sm:px-8 md:px-[60px]">
          {/* Store Description - Two Lines */}
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl lg:text-2xl text-[#2c2c2c] dark:text-gray-200 leading-relaxed font-normal mx-auto">
              All books are available as gifts for donations of $15 or more. All donations are used for scholarship funds to help current students of NCU.<br/>
              Please be sure to include your email address at the time of your donation so we may follow up.
            </p>
          </div>

          {/* Books Grid - Full Width */}
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
                <button 
                  onClick={() => addToCart(book)}
                  className="group block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto w-full max-w-[200px] min-w-[140px] h-12"
                >
                  <span className="relative z-20">Add to Cart</span>
                  <span
                    className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden"
                    aria-hidden="true"
                    style={{
                      zIndex: 3,
                      background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                      boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                      borderRadius: "inherit",
                    }}
                  ></span>
                  <span
                    className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block"
                    aria-hidden="true"
                    style={{
                      zIndex: 3,
                      background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                      boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                      borderRadius: "inherit",
                    }}
                  ></span>
                </button>
              </div>
            ))}
          </div>

          {/* Browse Collection Button - Outline Style */}
          <div className="text-center mt-24 -mb-4">
            <button 
              className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto min-w-[280px] h-12 text-base mx-auto"
            >
              <span className="relative z-20">Browse The Entire Collection Here</span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                  borderRadius: "inherit",
                }}
              ></span>
              <span
                className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block"
                aria-hidden="true"
                style={{
                  zIndex: 3,
                  background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                  boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                  borderRadius: "inherit",
                }}
              ></span>
            </button>
          </div>
        </div>
      </section>

      {/* Same sections as About page */}
      <main>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Store;