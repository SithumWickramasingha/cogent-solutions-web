import backgroundImage from '../../assets/web.png';


const Overview = () => {
  return (
    <section className="relative mb-80">
      <div className="absolute inset-0 opacity-45">
        <img
          src={backgroundImage}
          alt="webImage"
          className="w-screen h-screen object-cover transform rotate-[-3deg] scale-110"
        />
      </div>

      <div
        className="border-2 border-white/50 bg-white/8 backdrop-blur-md rounded-[30px] 
                   p-6 sm:p-8 md:p-10 mx-4 sm:mx-10 md:mx-20 
                   relative top-20 sm:top-32 md:top-40"
      >
        <div className="border bg-[#FFFF00] w-40 p-3 rounded-[20px] text-center mb-6 sm:mb-8 md:mb-10">
          <h1>Event Overview</h1>
        </div>

        <div className="text-white text-sm sm:text-base leading-relaxed">
          <p>
            Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          </p>
          <br />
          <p>
            Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
          </p>
          <br />
          <p>
            Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
          </p>
          <br />
          <p>
            Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;



// import backgroundImage from '../../assets/web.png';

// const Overview = () => {
//   return (
//     <section className="relative mb-40 sm:mb-60 md:mb-80">
//       {/* Background Image */}
//       <div className="absolute inset-0 opacity-45 -z-10">
//         <img
//           src={backgroundImage}
//           alt="webImage"
//           className="w-full h-full object-cover transform rotate-[-3deg] scale-110"
//         />
//       </div>

//       {/* Content Box */}
//       <div
//         className="border-2 border-white/50 bg-white/10 backdrop-blur-md rounded-[20px] 
//         px-6 py-8 sm:p-10 mx-4 sm:mx-10 md:mx-20 relative top-20 sm:top-32"
//       >
//         {/* Heading */}
//         <div className="bg-[#FFFF00] w-fit px-5 py-2 rounded-[20px] text-center mb-6 shadow-md">
//           <h1 className="text-black text-base sm:text-lg font-semibold">Event Overview</h1>
//         </div>

//         {/* Description */}
//         <div className="text-white text-sm sm:text-base leading-relaxed space-y-4">
//           <p>
//             Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum,
//             <strong> "Reimagine Banking: Adapt. Evolve. Thrive."</strong> This exclusive event is
//             designed to help you navigate and excel in the rapidly evolving banking landscape.
//           </p>

//           <p>
//             Our forum will bring together business and technology experts, industry leaders, and
//             visionaries to share their insights on the latest trends and challenges in the banking
//             sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of
//             volatility, globalization challenges, persistent supply chain issues, recession threats,
//             shifts in competitive dynamics, and evolving regulations.
//           </p>

//           <p>
//             Each session will delve into the implications, challenges, and opportunities these topics
//             present, providing you with practical strategies to leverage the latest technologies and
//             capitalize on emerging opportunities. This is a unique chance to learn from the best in the
//             industry, stay ahead of the curve, and connect with fellow retail banking professionals.
//           </p>

//           <p>
//             Don’t miss this opportunity to enhance your knowledge, skills, and network in the finance
//             and banking sector. Register today and secure your place at this must-attend event!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Overview;
