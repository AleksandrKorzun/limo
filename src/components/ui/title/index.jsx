"use client";

import React from "react";

const Title = ({ text, className }) => {
  return (
    <h2
      className={`font-ebSemiBold text-middle text-footer text-start mb-[56px] tabV:text-center desc:text-center desc:text-big ${className}`}
    >
      {text}
    </h2>
  );
};

export default Title;
