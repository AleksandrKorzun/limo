"use client";
import React from "react";

const CustomButton = ({ onClick, text, className, name }) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("book-form");
    if (formElement && name === "booked") {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={name === "booked" ? scrollToForm : onClick}
      type="button"
      name={name}
      className={`font-latoBlack text-small fw-black leading-[125%] h-[48px] rounded-[8px] bg-accent shadow-button hover:bg-yellow cursor-pointer transition-colors duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
