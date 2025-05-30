"use client";
import React from "react";

const CustomButton = ({
  onClick,
  text,
  className,
  name,
  variant,
  isLoad,
  isDisabled,
}) => {
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
      disabled={isDisabled}
      className={`font-latoBlack flex items-center justify-center text-small text-black leading-[125%] h-[48px] rounded-[8px] bg-accent shadow-button  cursor-pointer transition-colors duration-300 ${className} ${
        variant === "black"
          ? "hover:bg-main hover:text-white"
          : "hover:bg-yellow"
      } ${isDisabled || isLoad ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoad ? (
        <svg
          className="animate-spin h-5 w-5 text-white mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      ) : null}
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
