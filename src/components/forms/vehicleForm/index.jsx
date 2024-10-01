import PassengerIcon from "@/assets/icons/Passenger";
import SuitcaseIcon from "@/assets/icons/Suicase";
import Select from "@/components/ui/select";
import { BOOKING_STEPS, FLEET, VEHICLES_FORM } from "@/data/constant";
import { Formik } from "formik";
import Image from "next/image";
import React from "react";

const VehicleForm = ({ step }) => {
  return (
    <Formik
      initialValues={{ passengers: 1, suitcase: 1, child_seat: 1, type: "" }}
    >
      <form className="flex flex-col gap-[40px] desc:w-[654px]">
        <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] border-b-[1.5px] border-b-solid border-b-[#D8D8D8]">
          {BOOKING_STEPS[step - 1].title}
        </p>
        <div className="flex justify-between gap-[24px] desc:pb-[32px] border-b-[#DBDBDB] border-b-[1.5px] border-b-solid">
          {VEHICLES_FORM.map(({ label, options, placeholder }) => (
            <Select
              label={label}
              options={options}
              placeholder={placeholder}
              type="select"
              key={label}
            />
          ))}
        </div>
        <ul className="flex flex-col justify-between gap-[32px] w-full">
          {FLEET.map(({ img, passengers, title, suitcase }) => (
            <li key={passengers} className="flex items-center">
              <Image
                src={img}
                width={225}
                height={128}
                className="mr-[32px]"
                alt="car"
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="font-latoBlack text-medium text-main mb-[24px]">
                    {title}
                  </h3>
                  <div className="flex items-center gap-[4px]">
                    <PassengerIcon />
                    <p className="font-latoRegular text-small text-main">
                      {passengers}
                    </p>
                  </div>
                  <div className="flex item-center gap-[4px]">
                    <SuitcaseIcon />
                    <p className="font-latoRegular text-small text-main">
                      {suitcase}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-auto border-[2px] border-solid border-main px-[24px] py-[8px] rounded-[8px] font-latoBlack text-small"
                >
                  Select
                </button>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </Formik>
  );
};

export default VehicleForm;
