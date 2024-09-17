import React from "react";

const CustomButton = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`font-latoBlack text-small fw-black leading-[125%] h-[48px] rounded-[8px] bg-accent shadow-button ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
