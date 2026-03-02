import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="text-center mb-10 md:mb-16">
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl 
                     font-bold tracking-tight text-white">
        {title}
      </h2>

      {/* Gradient Divider */}
      <div className="w-16 sm:w-20 md:w-24 
                      h-[2px] 
                      bg-gradient-to-r 
                      from-purple-500 to-blue-500 
                      mx-auto mt-4 md:mt-6 
                      rounded-full">
      </div>

    </div>
  );
}

export default SectionHeader;