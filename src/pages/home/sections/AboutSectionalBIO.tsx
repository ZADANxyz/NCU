import React from "react";

const AboutSectionalBIO = () => {
  return (
    <section className="w-full bg-white dark:bg-[#242836] pt-16 pb-16 px-3 sm:px-6 md:px-[52px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column - Title and Portrait Image */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight">
            Meet Our President:
          </h2>
          <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/d162fcf1-b78e-48f1-a9da-ef64c1c89243.png"
              alt="Dr. Angel L. Crites"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column - Content and Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start pr-0 lg:pr-4">
          <div className="text-xl md:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 leading-relaxed mb-8 mt-16 lg:mt-20">
            <h3 className="text-xl md:text-2xl font-roboto font-bold text-[#333] dark:text-gray-200 mb-4">
              Angel L. Crites, Ed.D; D.Th
            </h3>
            <p>
              Dr. Crites has had over three decades of experience in the field of education and 15 years of experience with higher education. Her unique biblical perspectives inspire others pursuing their call to ministry and leadership. She holds a B.A. in Classical Christian Education, M.A. in Christian Leadership and Organizational Management, M.A. in Counseling from Destiny Christian College and University, Nashville, Tennessee campus. As well as a Doctorate in Christian Education from New Covenant University, Jacksonville, Florida and a Doctorate in Theology from Vineyard Harvester Seminary and Bible College based out of Georgia.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="group block font-bold py-3 px-6 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-[#B19528] dark:border-[#B19528] dark:hover:bg-[#B19528]/90 dark:hover:border-[#B19528]/90 font-roboto w-full sm:w-auto min-w-[140px] h-12"
              onClick={() => window.location.href = '/apply'}
            >
              <span className="relative z-20">Apply Today!</span>
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
      </div>
    </section>
  );
};

export default AboutSectionalBIO;