import { BOOKING_STEPS } from "@/data/constant";
import React from "react";

const Stepper = ({ step }) => {
  return (
    <div className="mb-[32px]">
      <ul class="w-full relative flex flex-row justify-center mb-[40px]">
        {BOOKING_STEPS.map(({ num, desc }) => (
          <li class="group" key={num}>
            <div class="w-full flex items-center text-medium align-middle desc:mb-[32px]">
              <span
                class={`w-[48px] h-[48px] desc:w-[64px] desc:h-[64px] flex justify-center items-center font-medium text-main rounded-full ${
                  step >= num ? "bg-yellow" : "bg-white"
                }`}
              >
                {num}
              </span>
              <div
                class={`w-[62px] desc:w-[297px] h-[3px] ${
                  step > num ? "bg-yellow" : "bg-white"
                } group-last:hidden`}
              ></div>
            </div>
            <div class="mt-3 mobV:hidden">
              <span
                class={`block text-sm font-medium ${
                  step === num ? "text-main" : "text-[#A9A9A9]"
                }`}
              >
                {desc}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;
