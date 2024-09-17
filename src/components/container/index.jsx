import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mobV:w-[327px] mobH:w-[793px] tabV:w-[720px] tabH:w-[1024px] desc:w-[1312px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
