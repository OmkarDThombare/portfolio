import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>

      <div className="w-24 h-[2px] bg-gradient-to-r 
                      from-purple-500 to-blue-500 
                      mx-auto mt-6 rounded-full">
      </div>
    </div>
  );
}

export default SectionHeader;