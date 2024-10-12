"use client";
import React, { forwardRef, useState } from "react";

const Input = forwardRef(
  ({ label, type, placeholder, values, onChange, className, error }, ref) => {
    const [inputValue, setInputValue] = useState(values);
    const handleChange = (event) => {
      setInputValue(event.target.value);
      onChange(event.target.value);
    };
    return (
      <div className={`flex flex-col gap-[8px] ${className}`}>
        <label className="font-latoBold text-small leading-[24px] text-main">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="p-[8px] bg-input rounded-[8px] outline-none text:black"
          autoComplete="off"
        />
        {error && <p className="text-red-600">error</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
