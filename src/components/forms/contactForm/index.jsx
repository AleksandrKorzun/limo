"use client";
import EditIcon from "@/assets/icons/Edit";
import CustomButton from "@/components/ui/customButton";
import Input from "@/components/ui/fieldInput";
import { BOOKING_STEPS, FLEET, VEHICLES_FORM } from "@/data/constant";
import { Formik } from "formik";
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

const ContactForm = ({ step, setStep, form, setForm }) => {
  return (
    <motion.div
      className="flex justify-between tabV:flex-col tabV:gap-[32px]"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Formik
        initialValues={{
          first_name: "",
          second_name: "",
          email_address: "",
          phone_number: "",
          comments: "",
          contact_by_phone: false,
          contact_by_email: true,
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <form className="flex flex-col gap-[40px] desc:w-[654px] w-full">
            <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] border-b-[1.5px] border-b-solid border-b-[#D8D8D8]">
              {BOOKING_STEPS[step - 1].title}
            </p>
            <div className="flex flex-col justify-between gap-[24px] ">
              <div className="w-full flex mobV:flex-col items-center justify-between gap-[40px]">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  values={form.first_name}
                  onChange={(v) => {
                    setFieldValue("first_name", v);
                    setForm({ ...form, first_name: v });
                  }}
                  className="w-[100%]"
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your first name"
                  values={form.second_name}
                  onChange={(v) => {
                    setFieldValue("second_name", v);
                    setForm({ ...form, second_name: v });
                  }}
                  className="w-[100%]"
                />
              </div>
              <div className="w-full flex mobV:flex-col items-center justify-between gap-[40px]">
                <Input
                  label="Email adress"
                  type="text"
                  placeholder="limo@gmail.com"
                  values={form.email_address}
                  onChange={(v) => {
                    setFieldValue("email_address", v);
                    setForm((prev) => ({
                      ...prev,
                      email_address: v,
                    }));
                  }}
                  className="w-[100%]"
                />
                <Input
                  label="Phone number"
                  type="text"
                  placeholder="+15 123 122 1236"
                  values={form.phone_number}
                  onChange={(v) => {
                    setFieldValue("phone_number", v);
                    setForm((prev) => ({
                      ...prev,
                      phone_number: v,
                    }));
                  }}
                  className="w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ">
                <label className="font-latoBold text-small leading-[24px] text-main">
                  Comment
                </label>
                <textarea
                  className="p-[8px] bg-input rounded-[8px] outline-none"
                  value={form.comments}
                  onChange={(e) => {
                    setFieldValue("comments", e.target.value);
                    setForm((prev) => ({
                      ...prev,
                      comments: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="flex mobV:flex-col mobV:items-start items-center gap-[16px]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={form.contact_by_email}
                    value={form.contact_by_email}
                    onChange={() => {
                      setFieldValue(
                        "contact_by_email",
                        !values.contact_by_email
                      );
                      setForm((prev) => ({
                        ...prev,
                        contact_by_email: values.contact_by_email,
                      }));
                    }}
                    className={`w-[20px] h-[20px] mr-[10px] border-black border-solid border-[2px] rounded-[8px] focus:ring-input dark:ring-offset-gray-800 focus:ring-2 ${
                      values.contact_by_email
                        ? "bg-[#FFA500] text-white"
                        : "bg-[#DBDBDB] text-transparent"
                    }`}
                  />
                  <p className="text-small font-latoRegular text-main">
                    Contact me by email
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={form.contact_by_phone}
                    onChange={() =>
                      setFieldValue(
                        "contact_by_email",
                        !values.contact_by_phone
                      )
                    }
                    className={`w-[20px] h-[20px] mr-[10px] border-black border-solid border-[2px] rounded-[8px] focus:ring-input dark:ring-offset-gray-800 focus:ring-2 ${
                      values.contact_by_email
                        ? "bg-[#FFA500] text-white"
                        : "bg-[#DBDBDB] text-transparent"
                    }`}
                  />
                  <p className="text-small font-latoRegular text-main">
                    Сontact me by phone
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mobV:flex-col gap-[24px] tabV:mx-auto">
              <CustomButton
                text="Go Back"
                variant="black"
                onClick={() => setStep(2)}
                className="w-[192px] mobV:w-full border-[2px] border-main border-solid bg-transparent shadow-none hover:bg-main hover:text-white"
              />
              <CustomButton
                text="Enter Contact Details"
                onClick={() => setStep(4)}
                className="w-[192px] mobV:w-full"
              />
            </div>
          </form>
        )}
      </Formik>
      <div className="desc:w-[402px] h-fit px-[16px] py-[32px] hidden tabV:block desc:block shadow-map rounded-xl bg-white">
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
          <p className="font-latoBold text-small text-main mb-[24px]">
            Drop-Off Location:
          </p>
          <p className="font-latoRegular text-small text-disabled">
            {form.drop_off_location}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px]">
          <p className="font-latoBold text-small text-main">Vehicle:</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
