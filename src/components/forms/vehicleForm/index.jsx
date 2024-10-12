"use client";
import EditIcon from "@/assets/icons/Edit";
import PassengerIcon from "@/assets/icons/Passenger";
import SuitcaseIcon from "@/assets/icons/Suicase";
import CustomButton from "@/components/ui/customButton";
import Select from "@/components/ui/select";
import { BOOKING_STEPS, FLEET, VEHICLES_FORM } from "@/data/constant";
import { Formik } from "formik";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const VehicleForm = ({ form, setForm, step, setStep }) => {
  return (
    <motion.div
      className="flex flex-col gap-[40px] justify-between"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex mobV:flex-col tabV:flex-col gap-[32px]">
        <Formik
          initialValues={{
            passengers: 1,
            suitcase: 1,
            child_seat: 1,
            type: form.type,
          }}
        >
          {({ handleSubmit, handleChange, values, setFieldValue, errors }) => (
            <form className="flex flex-col gap-[40px] w-full desc:w-[654px]">
              <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] border-b-[1.5px] border-b-solid border-b-[#D8D8D8]">
                {BOOKING_STEPS[step - 1].title}
              </p>
              <div className="flex mobV:flex-col mobV:w-full justify-between gap-[24px] desc:pb-[32px] border-b-[#DBDBDB] border-b-[1.5px] border-b-solid">
                {VEHICLES_FORM.map(({ label, options, name, placeholder }) => (
                  <Select
                    label={label}
                    options={options}
                    placeholder={placeholder}
                    type="select"
                    key={label}
                    value={form[name]}
                    onChange={(v) => {
                      setFieldValue(name, v);
                      setForm({ ...form, [name]: v });
                    }}
                  />
                ))}
              </div>
              <ul className="flex flex-col justify-between gap-[16px] w-full">
                {FLEET.map(({ img, passengers, title, suitcase }) => (
                  <li
                    key={passengers}
                    className={`flex mobV:flex-col items-center p-[16px] rounded-[16px] ${
                      title === form.type
                        ? "border-main border-[2px]"
                        : "border-none"
                    }`}
                  >
                    <Image
                      src={img}
                      width={225}
                      height={128}
                      className="desc:mr-[32px]"
                      alt="car"
                    />
                    <div className="flex mobV:flex-col justify-between items-center w-full">
                      <div>
                        <h3 className="font-latoBlack text-medium text-main mb-[24px]">
                          {title}
                        </h3>
                        <div className="flex items-center gap-[4px] mobV:mb-[16px]">
                          <PassengerIcon />
                          <p className="font-latoRegular text-small text-main">
                            {passengers}
                          </p>
                        </div>
                        <div className="flex items-center gap-[4px] mobV:mb-[16px]">
                          <SuitcaseIcon />
                          <p className="font-latoRegular text-small text-main">
                            {suitcase}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFieldValue("type", title);
                          setForm({ ...form, type: title });
                        }}
                        className={`mt-auto border-[2px] border-solid border-main px-[24px] py-[8px] rounded-[8px] font-latoBlack text-small hover:bg-main hover:text-white transition-colors duration-300 ${
                          title === form.type
                            ? "bg-main text-accent"
                            : "bg-transparent text-main"
                        }`}
                      >
                        Select
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className="flex gap-[24px]">
              <CustomButton
                text="Go Back"
                onClick={() => setStep(1)}
                className="w-[192px] border-[2px] border-main border-solid bg-transparent shadow-none hover:bg-main hover:text-white"
              />
              <CustomButton
                text="Enter Contact Details"
                onClick={() => setStep(3)}
                className="w-[192px]"
              />
            </div> */}
            </form>
          )}
        </Formik>
        <div className="desc:w-[402px] h-fit px-[16px] py-[32px] desc:block shadow-map rounded-xl bg-white">
          <div className="flex w-auto justify-between items-center pb-[8px] mb-[32px] border-b-[1px] border-input border-solid">
            <h3 className="font-latoMedium text-middle text-main">Summary</h3>
            <button
              className="flex items-center font-latoBlack text-small text-accent"
              onClick={() => setStep(1)}
            >
              <EditIcon className="mr-[8px]" /> Edit
            </button>
          </div>
          <div className="flex justify-between items-center gap-[8px] mb-[24px]">
            <p className="font-latoBold text-small text-main">
              Type of transfer:
            </p>
            <p className="font-latoRegular text-small text-disabled">
              {form.type_transfer}
            </p>
          </div>
          <div className="flex justify-between items-center gap-[8px] mb-[24px]">
            <p className="font-latoBold text-small text-main">Pick-Up Date:</p>
            <p className="font-latoRegular text-small text-disabled">
              {form.date}
            </p>
          </div>
          <div className="flex justify-between items-center gap-[8px] mb-[24px]">
            <p className="font-latoBold text-small text-main">Pick-Up Time:</p>
            <p className="font-latoRegular text-small text-disabled">
              {form.time}
            </p>
          </div>
          <div className="flex justify-between items-center gap-[8px] mb-[24px]">
            <p className="font-latoBold text-small text-main">
              Pick-Up Location:
            </p>
            <p className="font-latoRegular text-small text-disabled">
              {form.pick_up_location}
            </p>
          </div>
          <div className="flex justify-between items-center gap-[8px]">
            <p className="font-latoBold text-small text-main">
              Drop-Off Location:
            </p>
            <p className="font-latoRegular text-small text-disabled">
              {form.drop_off_location}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[24px] mobV:flex-col tabV:mx-auto">
        <CustomButton
          text="Go Back"
          onClick={() => setStep(1)}
          variant="black"
          className="w-[192px] mobV:w-full border-[2px] border-main border-solid bg-transparent shadow-none hover:bg-main hover:text-white"
        />
        <CustomButton
          text="Enter Contact Details"
          onClick={() => setStep(3)}
          className="w-[192px] mobV:w-full"
        />
      </div>
    </motion.div>
  );
};

export default VehicleForm;
