import React from "react";

const CustomButton = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`font-latoBlack text-small fw-black leading-[125%] h-[48px] rounded-[8px] bg-accent shadow-button hover:bg-yellow cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
