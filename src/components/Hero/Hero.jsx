// import landingImage from '../../assets/hero-page-first.jpg'
// const Hero = () => {
//   return (
//     <section id="hero" className="relative 
//     border 
//     border-white/30 bg-white/8 backdrop-blur-md
//     rounded-[30px] 
//     mx-30 relative 
//     bottom-18
//     h-145
//     shadow-[20px_20px_20px_#0000008c]">
//       {/* Your hero content */}
//       <div className='text-center relative top-5'>
//         <div>
//           <p className='text-white text-opacity-80'>Organized By</p>
//           <h1 className='text-5xl font-bold bg-gradient-to-bl from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent'>FINASTRA</h1>
//         </div>
//         <div className='relative top-5'>
//           <h1 className='text-6xl font-bold text-white'>
//             <span className='text-[#FFFF00]'>Reimagine </span>Banking:<br/> Adapt. Evolve. Thrive.
//           </h1>
//         </div>
//       </div>
//       <div className='w-100 h-80 relative items-center flex justify-center left-60 top-15'>
//         <img src={landingImage} alt="landingImage" className='rounded-[10px] shadow-[5px_5px_20px_#0000008c] ' />
//       </div>
//       <div className='border w-100 p-5 justify-center items-center relative left-180 bottom-40 text-center rounded-[10px] bg-[#FFF9D4] opacity-55'>
//         <p>Date: 9th April 2025</p>
//         <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
//         <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
//       </div>
     
//     </section>
//   );
// };

// export default Hero;


import landingImage from '../../assets/hero-page-first.jpg'
// import backgroundImage from '../../assets/web.png';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative 
      border 
      border-white/30 bg-white/8 backdrop-blur-md
      rounded-[30px]
      mx-4 md:mx-8 lg:mx-16 xl:mx-54
      py-6 md:py-10 lg:py-12
      shadow-[20px_20px_20px_#0000008c]
      overflow-hidden
      flex flex-col md:flex-row md:flex-wrap
      items-center
      mt-[-90px]
      h-145
      mb-10"
    >
      {/* <div className='fixed inset-0 opacity-45'>
        <img src={backgroundImage} alt="webImage" className='w-full h-full object-cover transform rotate-[-3deg] scale-110'/>
      </div> */}

      {/* Header content */}
      <div className='text-center w-full px-4 mb-6 md:mb-8'>
        <div>
          <p className='text-white text-opacity-80'>Organized By</p>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-bl from-[#FF8BD8] to-[#89A1FF] bg-clip-text text-transparent'>FINASTRA</h1>
        </div>
        <div className='mt-4 md:mt-6'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white'>
            <span className='text-[#FFFF00]'>Reimagine </span>Banking:<br/> Adapt. Evolve. Thrive.
          </h1>
        </div>
      </div>

      {/* Flexible container for image and date box */}
      <div className='w-full flex flex-col lg:flex-row items-center justify-center px-4 gap-6 lg:gap-8'>
        {/* Image container */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img 
            src={landingImage} 
            alt="landingImage" 
            className='rounded-[10px] shadow-[5px_5px_20px_#0000008c] w-100 max-w-lg object-cover'
          />
        </div>
        
        {/* Date container */}
        <div className='w-full lg:w-1/3 p-4 md:p-5 text-center rounded-[10px] bg-[#FFF9D4] opacity-55 mb-6 lg:mb-0'>
          <p>Date: 9th April 2025</p>
          <p>Time: 9:30 AM - 2:00 PM GMT+2</p>
          <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;