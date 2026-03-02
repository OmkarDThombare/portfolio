import React from "react";

function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          About Me
        </h2>

        <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r 
                        from-purple-500 to-blue-500 
                        mx-auto mt-4 md:mt-6 mb-8 md:mb-12 rounded-full">
        </div>

        {/* Main Identity Line */}
        <p className="text-lg md:text-2xl font-semibold 
                      text-gray-200 leading-relaxed">
          Full Stack Developer focused on building scalable,
          structured and user-centered web systems.
        </p>

        {/* Supporting Statement */}
        <p className="text-gray-400 text-sm md:text-base 
                      leading-relaxed max-w-2xl mx-auto mt-6">
          I value clean architecture, performance optimization,
          and writing maintainable code. I enjoy turning complex
          requirements into practical and efficient digital solutions.
        </p>

      </div>
    </section>
  );
}

export default About;