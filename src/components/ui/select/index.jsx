"use client";
import React from "react";

const Select = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  options,
  className,
}) => {
  console.log("value", value);
  return (
    <div className={`flex flex-col gap-[8px] w-[100%]  ${className}`}>
      <label className="font-latoBold text-small leading-[24px] text-main">
        {label}
      </label>
      <select
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={`p-[8px] bg-input rounded-[8px] h-[40px] `}
      >
        {options.map(({ title, value }) => (
          <option value={value} key={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
