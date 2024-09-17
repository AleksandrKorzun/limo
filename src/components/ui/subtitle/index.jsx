import React from "react";

const Subtitle = ({ text, className }) => {
  return (
    <h3
      className={`font-latoMedium text-medium text-black mb-[8px] mt-[24px] ${className}`}
    >
      {text}
    </h3>
  );
};

export default Subtitle;
