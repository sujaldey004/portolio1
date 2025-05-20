import React from "react";

const TechIcon = ({ icon }) => {
  return (
    <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-center gradient-border hover:-translate-y-3 transition-all duration-700 marquee-item flex-none">
      <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
    </div>
  );
};

export default TechIcon;
