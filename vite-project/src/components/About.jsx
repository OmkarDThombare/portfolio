import React from "react";

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          About
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r 
                        from-purple-500 to-blue-500 
                        mx-auto mt-6 mb-16 rounded-full">
        </div>

        {/* Main Statement */}
        <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I BUILD
          <span className="block bg-gradient-to-r 
                           from-cyan-400 to-blue-600 
                           bg-clip-text text-transparent">
            SCALABLE
          </span>
          WEB SYSTEMS.
        </h3>

        {/* Supporting Line */}
        <p className="text-gray-300 text-lg md:text-xl 
                      max-w-3xl mx-auto mt-10 leading-relaxed">
          Full Stack Developer focused on performance,
          clean architecture, and production-ready
          applications built with the MERN stack.
        </p>

      </div>
    </section>
  );
}

export default About;