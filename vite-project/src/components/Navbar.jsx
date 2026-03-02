import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    backdrop-blur-lg bg-black/20 
                    border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 
                      flex items-center justify-between">

        {/* ODT Logo */}
        <div className="w-10 h-10 
                        rounded-full 
                        bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
                        flex items-center justify-center
                        text-white text-sm font-bold tracking-widest
                        shadow-lg hover:scale-105 transition duration-300">
          ODT
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 
                        text-gray-300 font-medium">

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg 
                        border-t border-white/10">

          <div className="flex flex-col items-center gap-8 py-10 
                          text-gray-300 font-medium text-lg">

            <a href="#projects" onClick={() => setIsOpen(false)}
               className="hover:text-white transition">
              Projects
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}
               className="hover:text-white transition">
              Skills
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}
               className="hover:text-white transition">
              About
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}
               className="hover:text-white transition">
              Contact
            </a>

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;