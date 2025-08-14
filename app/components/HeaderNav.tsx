import React, { useState } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full top-0 lg:px-10 px-4 py-4 lg:p-4 flex justify-between items-center z-50">
      <Link to="/">
        <img src="/images/logo.svg" alt="Logo" className="h-8 lg:h-auto" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex my-auto text-white gap-10">
        <Link to={"/works"}>
          <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">
            Work
          </p>
        </Link>
        <Link to={"/#about"}>
          <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">
            About
          </p>
        </Link>
        <Link to={"/#services"}>
          <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">
            Services
          </p>
        </Link>
        <Link to={"/#contact"}>
          <p className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer">
            Contact
          </p>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1 p-2 transition-transform duration-300"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
        ></span>
        <span
          className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        ></span>
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0B1023]/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Close Button in Overlay */}
        <div className="absolute top-4 right-4 z-60">
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 p-2 transition-transform duration-300"
            aria-label="Close menu"
          >
            <span
              className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-10 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl">
          <Link to={"/works"}>
            <p
              className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </p>
          </Link>
          <Link to={"/#about"}>
            <p
              className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </p>
          </Link>
          <Link to={"/#services"}>
            <p
              className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </p>
          </Link>
          <Link to={"/#contact"}>
            <p
              className="hover:text-[#FE71FF] transition-colors duration-300 cursor-pointer transform hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
