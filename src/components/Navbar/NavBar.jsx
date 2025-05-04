

import { useState } from "react";
import logo from "../../assets/cogent-logo.png";

const NavBar = ({onRegisterClick}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="navBar" className="relative py-4 px-4 lg:px-8">
      {/* Desktop Navigation */}
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="h-20 w-20 md:h-30 md:w-30 lg:h-40 lg:w-40 mt-2 md:mt-5">
          <img src={logo} alt="company-logo" className="ml-0 md:ml-8 lg:ml-12" />
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <button 
          className="md:hidden z-20 text-gray-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex flex-row gap-4 text-gray-100 cursor-pointer relative bottom-10">
          <div className="bg-opacity-100 hover:text-[#00a6ff] transition-colors duration-300">
            <p>Event Overview</p>
          </div>
          <div className="hover:text-[#00a6ff] transition-colors duration-300">
            <p>Agenda</p>
          </div>
        </div>

        {/* Register Button - Hidden on mobile */}
        <div className="hidden md:flex text-gray-400 relative bottom-10">
          <button className="relative
            overflow-hidden
            w-[180px] h-[50px]
            rounded-[10px]
            shadow-[16px_16px_20px_#0000008c]
            before:content-['']
            before:absolute
            before:top-[-200%]
            before:right-[-200%]
            before:bottom-[-200%]
            before:left-[-200%]
            before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
            before:animate-[spin_4s_linear_infinite]
            flex-items-center justify-center
            hover:bg-[#00a6ff]
            transition duration-300 ease-in-out
            cursor-pointer">
            <div className="absolute
              top-[4px] right-[4px] bottom-[4px] left-[4px] rounded-[8px]
              px-4 bg-[#1c1c1c]
              shadow-[20px_20px_20px_#0000008c_inset]
              align-center
              text-white font-semibold
              flex items-center justify-center
              " onClick={onRegisterClick}>
              Register Now
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div 
        className={`fixed top-0 right-0 w-full md:w-3/4 h-full bg-black/95 z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col items-center gap-8 text-gray-100 text-xl">
          <div className="hover:text-[#00a6ff] transition-colors duration-300 cursor-pointer">
            <p>Event Overview</p>
          </div>
          <div className="hover:text-[#00a6ff] transition-colors duration-300 cursor-pointer">
            <p>Agenda</p>
          </div>
          
          {/* Mobile Register Button */}
          <div className="mt-8 text-gray-400">
            <button className="relative
              overflow-hidden
              w-[180px] h-[50px]
              rounded-[10px]
              shadow-[16px_16px_20px_#0000008c]
              before:content-['']
              before:absolute
              before:top-[-200%]
              before:right-[-200%]
              before:bottom-[-200%]
              before:left-[-200%]
              before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
              before:animate-[spin_4s_linear_infinite]
              flex-items-center justify-center
              hover:bg-[#00a6ff]
              transition duration-300 ease-in-out
              cursor-pointer">
              <div className="absolute
                top-[4px] right-[4px] bottom-[4px] left-[4px] rounded-[8px]
                px-4 bg-[#1c1c1c]
                shadow-[20px_20px_20px_#0000008c_inset]
                align-center
                text-white font-semibold
                flex items-center justify-center" onClick={onRegisterClick}>
                Register Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;