// "use client";
// import React from "react";
// import { MultiStepLoader as Loader } from "../multi-step-loader";
// import reasonImage from "../../assets/reason.jpg"

// const loadingStates = [
//   { text: "Learn From Industry Experts" },
//   { text: "Stay ahead of emerging trends" },
//   { text: "Connect with fellow banking professionals" },
//   { text: "Enhance your knowledge, skills, and network" },
//   { text: "Share your expertise and experience with peers" }
// ];

// export function MultiStepLoader() {
//   return (
//     <section className="flex justify-center flex-row border border-white/80 items-center mx-30 p-10 rounded-[30px]
//     border-white/30 bg-gradient-to-l from-[#1c015d] to-[#8045ce] backdrop-blur-md">
      
//       <div className="text-white">
//         <div className="shadow-[10px_20px_20px_#0000008c]">
//           <img src={reasonImage} alt="reasonImage" className="rounded-[20px]"/>
//         </div>
//       </div>
//       <div className="text-white text-2xl ml-5 font-bold relative">
//         <h1 className="relative bottom-5">TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025</h1>
//         <div className="text-white mt-30 ml-20 ">
//         <Loader
//         loadingStates={loadingStates}
//         loading={true}       /* Always true */
//         duration={2000}      /* Adjust speed here */
//         loop={true}          /* Enable looping */
//         />

//         </div>
//       </div>
//     </section>
   
//   );
// }


"use client";
import React from "react";
import { MultiStepLoader as Loader } from "../multi-step-loader";
import reasonImage from "../../assets/reason.jpg";

const loadingStates = [
  { text: "Learn From Industry Experts" },
  { text: "Stay ahead of emerging trends" },
  { text: "Connect with fellow banking professionals" },
  { text: "Enhance your knowledge, skills, and network" },
  { text: "Share your expertise and experience with peers" }
];

export function MultiStepLoader() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center 
      mx-4 sm:mx-8 md:mx-16 lg:mx-34
      p-4 sm:p-6 md:p-8 lg:p-20 
      rounded-[20px] md:rounded-[30px]
      border border-white/30 
      bg-gradient-to-l from-[#1c015d] to-[#8045ce] 
      backdrop-blur-md
      gap-6 lg:gap-10">
      
      {/* Image Container */}
      <div className="text-white w-full lg:w-2/5 mb-6 lg:mb-0">
        <div className="shadow-[10px_20px_20px_#0000008c] w-full">
          <img 
            src={reasonImage} 
            alt="reasonImage" 
            className="rounded-[20px] w-full h-auto object-cover"
          />
        </div>
      </div>
      
      {/* Text and Loader Container */}
      <div className="text-white w-full lg:w-3/5 flex flex-col items-center lg:items-start">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center lg:text-left mb-18">
          TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN 2025
        </h1>
        
        <div className="w-full flex justify-center lg:justify-start">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl">
            <Loader
              loadingStates={loadingStates}
              loading={true}     /* Always true */
              duration={2000}    /* Adjust speed here */
              loop={true}        /* Enable looping */
            />
          </div>
        </div>
      </div>
    </section>
  );
}