import { BOOKING_STEPS } from "@/data/constant";
import React from "react";

const Stepper = ({ step }) => {
  return (
    <div className="mb-[32px] flex flex-col">
      <ul className="w-full relative flex flex-row justify-center mb-[32px]">
        {BOOKING_STEPS.map(({ num, desc }) => (
          <li className="group" key={`step-${num}-step`}>
            <div className="w-full flex items-center text-medium align-middle">
              <span
                className={`w-[48px] h-[48px] desc:w-[64px] desc:h-[64px] flex justify-center items-center font-medium text-main rounded-full ${
                  step >= num ? "bg-yellow" : "bg-white"
                }`}
              >
                {num}
              </span>
              <div
                className={`w-[62px] tabV:w-[240px] desc:w-[297px] h-[3px] ${
                  step > num ? "bg-yellow" : "bg-white"
                } group-last:hidden`}
              ></div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex justify-between desc:px-[120px]">
        {BOOKING_STEPS.map(({ num, desc }) => (
          <div
            className="mt-3 mobV:hidden text-center"
            key={`title-${num}-step`}
          >
            <span
              className={`block text-small font-medium ${
                step === num ? "text-main" : "text-[#A9A9A9]"
              }`}
            >
              {desc}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
