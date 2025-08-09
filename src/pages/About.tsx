import React from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalBIO from "./home/sections/AboutSectionalBIO";
import MapSection from "./home/sections/MapSection";
import AboutAlumniCarousel from "@/components/AboutAlumniCarousel";
import ContactAboutForm from "@/components/ContactAboutForm";
import { usePageTitle } from "@/hooks/usePageTitle";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const About = () => {
  usePageTitle("About Us");

  return (
    <>
      <div className="w-full h-[300px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="New Covenant University Campus"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      <section className="w-full bg-white dark:bg-[#242836] pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-stretch">
          <div className="w-full lg:w-2/3 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-6 md:mb-8 tracking-tight">
              About Us:
            </h2>
            <div className="text-lg md:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-loose flex-grow flex flex-col justify-center">
              <div className="space-y-8">
                <p>
                  New Covenant University was established in 1987 by Dr. Paul Crites with a founding principle to mentor leaders with a focused strategy of discovering each student's life purpose and strengthen each student's skill set for success in the marketplace of ideas. It all began with Dr. Crites' pragmatic and biblical approach of teaching purpose and order in his "School of Purpose" where hundreds of leaders gathered weekly to hear him. Soon the class notes were published into books and training manuals evolving into a state recognized program. Decades later the vision continues providing students with a leadership and ethics focused education by providing a wide array of undergraduate and graduate programs in Leadership, Education, Theology, Ministry and Counseling.
                </p>
                <p>
                  The first international extension campus began in 2008 providing the same undergraduate and graduate programs of New Covenant University under the name: Destiny Christian College and University. Through the guidance of gifted faculty, relevant guest lecturers and the Great Teacher: The Holy Spirit, it is our goal to see society transform from good to better by affirming and teaching principles in the Holy Scriptures, embodied in the person of Jesus Christ and enabled through the power of the Holy Spirit. The Vision of New Covenant University is to train future leaders in a biblical based curriculum to reform society, renew a God consciousness and reproduce leadership of both character and integrity through technologies to deliver instruction to students who are separated from the instructor and to support regular and substantive interaction between the students and the instructor synchronously or asynchronously.
                </p>
                <p>
                  New Covenant University has one of the highest retention and satisfaction rating with thousands of graduates serving in education, business, ministry and government leadership professions. With vision backed by faith, innovation and integrity, New Covenant University continues to train the next generation of leadership through accelerated, affordable and available learning resources.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 mt-8 lg:mt-0">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/2d48b4a2-c29c-4b51-86c4-5dc45ec36d67.png"
                alt="Paul Crites"
                className="w-full h-auto object-cover rounded-lg"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            
            <div className="w-full overflow-hidden rounded-lg">
              <AboutAlumniCarousel />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button 
            className="group block font-bold py-3 px-8 md:py-4 md:px-16 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto w-full max-w-xs md:max-w-none md:min-w-[220px] h-12 md:h-14 text-base md:text-lg"
            onClick={() => window.location.href = '/apply'}
          >
            <span className="relative z-20">Apply Today!</span>
            <span className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden" aria-hidden="true" style={{ zIndex: 3, background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)", boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)", borderRadius: "inherit" }}></span>
            <span className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block" aria-hidden="true" style={{ zIndex: 3, background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)", boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)", borderRadius: "inherit" }}></span>
          </button>
        </div>
      </section>

      <>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalBIO />
        <HeroDividerSection />
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-4 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        <MapSection />
      </>
    </>
  );
};

export default About;