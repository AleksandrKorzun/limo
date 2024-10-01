import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type, placeholder, value, onChange, className }, ref) => {
    console.log("ref", ref);
    return (
      <div className={`flex flex-col gap-[8px] ${className}`}>
        <label className="font-latoBold text-small leading-[24px] text-main">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`p-[8px] bg-input rounded-[8px] outline-none`}
          autoComplete="off"
        />
        <p className="text-red-600">error</p>
      </div>
    );
  }
);

export default Input;