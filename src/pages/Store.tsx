import React from "react";
import { Button } from "@/components/ui/button";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCart } from "@/contexts/CartContext";
import { bookInventory } from "@/data/bookInventory";
import { usePageTitle } from "@/hooks/usePageTitle";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const books = [
  { id: 1, title: "Think Like a Queen to Be Married to a King", author: "Dr. Angel Crites", image: "/lovable-uploads/f6a209b9-33ce-4341-a4b2-e6f72e9e8258.png" },
  { id: 2, title: "21 Things Every Leader Needs to Know", author: "Dr. Paul Crites", image: "/lovable-uploads/af2d99f6-cd34-4b13-856d-94fbb9e77196.png" },
  { id: 3, title: "Money Matters", author: "Dr. Paul Crites", image: "/lovable-uploads/f541daf2-f08f-4b19-a805-710e2125de05.png" },
  { id: 4, title: "Rewired", author: "Dr. Paul Crites", image: "/lovable-uploads/920eed9e-4f95-4252-a39c-26d09d229961.png" },
  { id: 5, title: "Ministry Moments", author: "Dr. Paul Crites", image: "/lovable-uploads/74fb2e7d-641c-4afa-903d-f49190fe99d4.png" },
  { id: 6, title: "Confessions of a Faithful Father", author: "Dr. Paul Crites", image: "/lovable-uploads/2c985979-5ae0-41c5-8b38-213a5f90c86b.png" },
  { id: 7, title: "Seasons & Sons", author: "Dr. Paul Crites", image: "/lovable-uploads/bb84dfe6-5b64-494e-bd78-497ec0c70cdc.png" },
  { id: 8, title: "The Decisions of a Wealthy King", author: "Dr. Paul Crites", image: "/lovable-uploads/1f73dd87-3e04-4063-9cca-3a86f0fe1737.png" },
  { id: 9, title: "10 Golden Keys", author: "Dr. Paul Crites", image: "/lovable-uploads/c969fc67-71fc-40aa-b274-a122d07e40db.png" },
  { id: 10, title: "The Law of the Seed", author: "Dr. Paul Crites", image: "/lovable-uploads/a0a54c8b-1141-4d85-bb7b-8280e02b7160.png" },
  { id: 11, title: "The Apostles Have Landed", author: "Dr. Paul Crites", image: "/lovable-uploads/06ce7626-99b6-4765-864e-2d59e50d359f.png" },
  { id: 12, title: "The Man Book", author: "Dr. Paul Crites", image: "/lovable-uploads/78f9f130-73f5-4db1-98da-4ba220e81779.png" }
];

const Store = () => {
  usePageTitle("Store");
  const { toast } = useToast();
  const { addToCart, cart, openCart } = useCart();

  const handleAddToCart = (book: any) => {
    const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newTotal = cartTotal + 15;

    addToCart({ id: book.id, title: book.title, author: book.author, image: book.image, price: 15 });
    toast({
      title: "Added to Cart",
      description: (
        <div className="flex items-center gap-4">
          <img src={book.image} alt={book.title} className="w-12 h-12 object-contain rounded" />
          <div>
            <p>"{book.title}" added.</p>
            <p className="font-bold">Your updated total is: ${newTotal.toFixed(2)}</p>
          </div>
        </div>
      ),
      action: ( <ToastAction altText="View Cart" onClick={openCart}> View Cart </ToastAction> ),
    });
  };

  return (
    <>
      <div className="w-full h-[300px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img src={HERO_IMAGE} alt="NCU Store" className="w-full h-full object-cover" loading="eager" style={{ objectPosition: "center center" }} />
      </div>

      <section className="w-full bg-white dark:bg-[#242836] pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="w-full px-4 sm:px-6 md:px-[60px]">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-base md:text-xl lg:text-2xl text-[#2c2c2c] dark:text-gray-200 leading-relaxed font-normal mx-auto max-w-4xl">
              All books are available as gifts for donations of $15 or more. All donations are used for scholarship funds to help current students of NCU.<br className="hidden md:block"/>
              Please be sure to include your email address at the time of your donation so we may follow up.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 mb-12">
            {books.map((book) => {
              const inventory = bookInventory.find(item => item.id === book.id);
              const status = inventory?.status || 'in-stock';
              const isSoldOut = status === 'sold-out';
              const getBadgeClasses = () => {
                switch (status) {
                  case 'sold-out': return 'bg-red-600';
                  case 'on-sale': return 'bg-green-600';
                  case 'exclusive': return 'bg-purple-600';
                  default: return 'bg-blue-600';
                }
              };

              return (
                <div key={book.id} className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-[3/4] mb-4 flex items-center justify-center">
                    <img src={book.image} alt={book.title} className="max-w-full max-h-full object-contain drop-shadow-lg" />
                    <span className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded-full ${getBadgeClasses()}`}>
                      {status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-medium italic text-[#2c2c2c] dark:text-gray-200 mb-2 min-h-[3rem] flex items-center">
                    {book.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#666] dark:text-gray-400 mb-4">
                    {book.author}
                  </p>
                  <button onClick={() => handleAddToCart(book)} disabled={isSoldOut} className="group block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto w-full max-w-[200px] min-w-[140px] h-12 disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="relative z-20">{isSoldOut ? 'Sold Out' : 'Add to Cart'}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-24 -mb-4">
            <button className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto w-full max-w-xs md:min-w-[280px] h-12 text-base mx-auto">
              <span className="relative z-20">Browse The Entire Collection Here</span>
              <span className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden" aria-hidden="true" style={{ zIndex: 3, background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)", boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)", borderRadius: "inherit" }}></span>
              <span className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block" aria-hidden="true" style={{ zIndex: 3, background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)", boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)", borderRadius: "inherit" }}></span>
            </button>
          </div>
        </div>
      </section>

      <>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-4 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </>
    </>
  );
};

export default Store;