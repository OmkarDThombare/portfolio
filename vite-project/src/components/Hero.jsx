import React from "react";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col 
                 items-center justify-center 
                 px-6 text-center overflow-hidden"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-slate-950 via-black to-slate-900 -z-20" />

      {/* Glow */}
      <div className="absolute w-72 h-72 md:w-[28rem] md:h-[28rem]
                      bg-gradient-to-r from-indigo-500/20 to-purple-500/20
                      rounded-full blur-3xl -z-10" />

      {/* Image */}
      <div className="relative group">
        <img
          src="/Omkar.jpg"
          alt="Omkar Thombare"
          className="w-36 h-36 md:w-60 md:h-60 
                     rounded-full object-cover
                     border border-white/10
                     shadow-xl
                     transition duration-500
                     group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="mt-8 text-4xl md:text-6xl 
                     font-extrabold tracking-tight
                     bg-gradient-to-r 
                     from-gray-200 via-white to-gray-300
                     bg-clip-text text-transparent">
        OMKAR THOMBARE
      </h1>

      {/* Identity Line */}
      <p className="mt-4 text-base md:text-xl 
                    text-gray-400 tracking-widest">
        BUILD | STRUCTURE | SCALE
      </p>

      {/* Primary Buttons */}
      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg 
                     bg-white text-black 
                     font-medium
                     hover:opacity-90 transition duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg 
                     border border-white/20
                     text-white font-medium
                     hover:bg-white/10 transition duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Subtle Resume Link */}
      <a
        href="/Omkar_Thombare.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 
                   text-sm text-gray-400 
                   hover:text-white transition duration-300"
      >
        <FaDownload size={14} />
        Download Resume
      </a>

    </section>
  );
}

export default Hero;