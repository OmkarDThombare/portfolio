import React from "react";
import SectionHeader from "./SectionHeader";

function Skills() {
  const skills = [
    { name: "Java", gradient: "from-orange-500 to-red-500" },
    { name: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
    { name: "React.js", gradient: "from-cyan-400 to-blue-500" },
    { name: "Node.js", gradient: "from-green-400 to-emerald-600" },
    { name: "Express.js", gradient: "from-gray-400 to-gray-600" },
    { name: "MongoDB", gradient: "from-emerald-400 to-green-700" },
    { name: "SQL", gradient: "from-blue-400 to-indigo-600" },
    { name: "Tailwind CSS", gradient: "from-sky-400 to-cyan-600" },
  ];

  return (
    <section id="skills" className="py-12 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <SectionHeader title="Skills" />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 md:px-6 py-2 
                          rounded-lg text-xs md:text-sm 
                          font-semibold text-white
                          bg-gradient-to-r ${skill.gradient}
                          shadow-lg shadow-white/10
                          hover:shadow-2xl hover:scale-105 hover:-translate-y-1
                          transition duration-300`}
            >
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;