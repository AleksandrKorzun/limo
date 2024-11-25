import PhoneIcon from "@/assets/icons/Phone";
import React from "react";

export const CallButton = () => {
  return (
    <a
      href="tel:+13312602278"
      style={{ zIndex: 200 }}
      className="fixed !z-200 mobV:rounded-none mobV:bottom-0 mobV:left-0 mobV:w-[100%] mobV:px-auto mobV:py-[15px] mobV:h-[50px] z-100 right-[30px] bottom-[30px] w-[70px] h-[70px] p-[20px] rounded-full bg-accent hover:bg-[#FF8C00] cursor-pointer transition-colors duration-300 group"
    >
      <PhoneIcon
        fill="white"
        className="mobV:mx-auto mobV:my-auto mobV:w-[20px]"
      />
    </a>
  );
};
