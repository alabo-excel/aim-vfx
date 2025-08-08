import React, { useState } from "react";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full top-0 p-4 lg:p-10 flex justify-between items-center z-50">
      <img src="/images/logo.svg" alt="Logo" className="h-8 lg:h-auto" />
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex my-auto text-white gap-10">
        <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">Work</p>
        <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">About</p>
        <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">Services</p>
        <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">Contact</p>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1 p-2 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <span className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-[#0B1023]/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl">
          <p 
            className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </p>
          <p 
            className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </p>
          <p 
            className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </p>
          <p 
            className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
