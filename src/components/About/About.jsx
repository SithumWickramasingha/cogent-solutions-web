// const About = () => {
//   return(
//     <section className="relative text-white text-center mx-50 p-20">
//       <div className="text-5xl font-bold">
//         <h1>About Finastra</h1>
//       </div>
//       <div className="mt-5">
//         <p>
//         Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
//         </p>
//       </div>
//       <div className="mt-5 text-xl">
//         <p>For more information, visit www.finastra.com.</p>
//       </div>
//     </section>
//   );
// }

// export default About;

const About = () => {
  return (
    <section className="relative text-white text-center px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          About Finastra
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
          Finastra is a global provider of financial services software applications across Lending, Payments, Treasury and Capital Markets, and Universal (retail and digital) Banking. Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to accelerate the future of Open Finance through technology and collaboration, and its pioneering approach is why it is trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
        </p>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300">
          For more information, visit <a href="https://www.finastra.com" target="_blank" rel="noopener noreferrer" className="underline text-[#89A1FF] hover:text-[#FF8BD8] transition">www.finastra.com</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
