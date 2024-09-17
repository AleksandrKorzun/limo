import React from "react";

const Text = ({ text, className }) => {
  return (
    <p className={`font-latoRegular text-small text-black ${className}`}>
      {text}
    </p>
  );
};

export default Text;
