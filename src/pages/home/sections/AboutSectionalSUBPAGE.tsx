import React from 'react';
import { Link } from 'react-router-dom';

const AboutSectionalSUBPAGE = () => {
  return (
    <section className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#2c2c2c] dark:text-gray-200">
            About New Covenant University
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#2c2c2c] dark:text-gray-200 leading-relaxed font-normal max-w-6xl mx-auto">
            New Covenant University is a leading institution dedicated to providing exceptional Christian education. 
            Our mission is to equip students with both academic excellence and spiritual foundation to make a positive 
            impact in their communities and the world. We offer comprehensive programs designed to nurture both 
            intellectual growth and character development.
          </p>
        </div>
        
        <div className="text-center">
          <Link to="/about">
            <button 
              className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto mx-auto min-w-[200px] h-12"
            >
              <span className="relative z-20">Learn More</span>
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionalSUBPAGE;