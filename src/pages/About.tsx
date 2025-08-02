
import React from "react";
import HeroSection from "./home/sections/HeroSection";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSection from "./home/sections/AboutSection";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";
import AlumniCarousel from "@/components/AlumniCarousel";

const HERO_IMAGE = "/lovable-uploads/aa922b63-f20a-4042-8985-bd50591544e3.png";

const About = () => {
  return (
    <div className="bg-background min-h-screen pt-0">
      {/* Hero Image */}
      <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] relative overflow-hidden">
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

      {/* About Us Section */}
      <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16 px-3 sm:px-6 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column - Title and Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
              About Us:
            </h2>
            <div className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed">
              <p className="mb-6">
                New Covenant University was established in 1987 by Dr. Paul Crites with a founding principle to mentor leaders with a focused strategy of discovering each student's life purpose and strengthen each student's skill set for success in the marketplace of ideas. It all began with Dr. Crites' pragmatic and biblical approach of teaching purpose and order in his "School of Purpose" where hundreds of leaders gathered weekly to hear him. Soon the class notes were published into books and training manuals evolving into a state recognized program. Decades later the vision continues providing students with a leadership and ethics focused education by providing a wide array of undergraduate and graduate programs in Leadership, Education, Theology, Ministry and Counseling.
              </p>
              <p className="mb-6">
                The first international extension campus began in 2008 providing the same undergraduate and graduate programs of New Covenant University under the name: Destiny Christian College and University. Through the guidance of gifted faculty, relevant guest lecturers and the Great Teacher: The Holy Spirit, it is our goal to see society transform from good to better by affirming and teaching principles in the Holy Scriptures, embodied in the person of Jesus Christ and enabled through the power of the Holy Spirit. The Vision of New Covenant University is to train future leaders in a biblical based curriculum to reform society, renew a God consciousness and reproduce leadership of both character and integrity through technologies to deliver instruction to students who are separated from the instructor and to support regular and substantive interaction between the students and the instructor synchronously or asynchronously.
              </p>
              <p>
                New Covenant University has one of the highest retention and satisfaction rating with thousands of graduates serving in education, business, ministry and government leadership professions. With vision backed by faith, innovation and integrity, New Covenant University continues to train the next generation of leadership through accelerated, affordable and available learning resources.
              </p>
            </div>
          </div>

          {/* Right Column - Portrait Image and Slider */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Portrait Image */}
            <div className="w-full h-96 overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
                alt="Dr. Paul Crites"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Horizontal Image Slider */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <AlumniCarousel />
            </div>
          </div>
        </div>

        {/* Apply Today Button */}
        <div className="flex justify-center mt-12">
          <button 
            className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto min-w-[160px] h-12"
            onClick={() => window.location.href = '/apply'}
          >
            <span className="relative z-20">Apply Today</span>
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
      </section>

      {/* Same sections as home page */}
      <main>
        <HeroDividerSection />
        <DegreesOfferedSection />
        <HeroDividerSection />
        <ReviewsSection />
        <HeroDividerSection />
        <AboutSection />
        <MapSection />
      </main>
      
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default About;
