import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center 
                 justify-center px-6 text-center pt-32"
    >
      
      {/* Soft Background Glow */}
      <div className="absolute w-72 h-72 md:w-[26rem] md:h-[26rem]
                      bg-gradient-to-r from-purple-500/20 to-blue-500/20
                      rounded-full blur-3xl -z-10">
      </div>

      {/* Profile Image */}
      <div className="relative group">
        <img
          src="/Omkar.jpg"
          alt="Omkar Thombare"
          className="w-40 h-40 md:w-56 md:h-56 
                     rounded-full object-cover
                     border-4 border-white/20
                     shadow-2xl
                     transition duration-500
                     group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="mt-10 text-4xl md:text-6xl 
                     font-extrabold tracking-tight">
        OMKAR THOMBARE
      </h1>

      {/* Subtitle */}
      <p
        className="mt-4 text-lg md:text-2xl font-semibold 
                   bg-gradient-to-r from-sky-400 to-indigo-500 
                   bg-clip-text text-transparent"
      >
        FULL STACK DEVELOPER
      </p>

      {/* Divider Line */}
      <div className="w-24 h-[2px] bg-gradient-to-r 
                      from-purple-500 to-blue-500 
                      mt-8 rounded-full">
      </div>

    </section>
  );
}

export default Hero;