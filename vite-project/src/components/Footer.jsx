import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-6">

        {/* Left */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Omkar Thombare. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-6 text-gray-400">

          <a
            href="https://github.com/OmkarDThombare"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://instagram.com/Omkar2.7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://leetcode.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <SiLeetcode size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;