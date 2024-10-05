import EditIcon from "@/assets/icons/Edit";
import PassengerIcon from "@/assets/icons/Passenger";
import SuitcaseIcon from "@/assets/icons/Suicase";
import CustomButton from "@/components/ui/customButton";
import Input from "@/components/ui/fieldInput";
import Select from "@/components/ui/select";
import { BOOKING_STEPS, FLEET, VEHICLES_FORM } from "@/data/constant";
import { Formik } from "formik";
import Image from "next/image";
import React from "react";

const ContactForm = ({ step, setStep }) => {
  return (
    <div className="flex justify-between">
      <Formik
        initialValues={{
          first_name: "",
          second_name: "",
          email_address: "",
          phone_number: "",
          comments: "",
          contact_by_phone: false,
          contact_by_email: false,
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <form className="flex flex-col gap-[40px] desc:w-[654px]">
            <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] border-b-[1.5px] border-b-solid border-b-[#D8D8D8]">
              {BOOKING_STEPS[step - 1].title}
            </p>
            <div className="flex flex-col justify-between gap-[24px] ">
              <div className="w-full flex items-center justify-between gap-[40px]">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  values={values.first_name}
                  onChange={() =>
                    setFieldValue("first_name", values.first_name)
                  }
                  className="w-[100%]"
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Enter your first name"
                  values={values.first_name}
                  onChange={() =>
                    setFieldValue("first_name", values.first_name)
                  }
                  className="w-[100%]"
                />
              </div>
              <div className="w-full flex items-center justify-between gap-[40px]">
                <Input
                  label="Email adress"
                  type="text"
                  placeholder="Enter your first name"
                  values={values.first_name}
                  onChange={() =>
                    setFieldValue("first_name", values.first_name)
                  }
                  className="w-[100%]"
                />
                <Input
                  label="Phone number"
                  type="text"
                  placeholder="Enter your first name"
                  values={values.first_name}
                  onChange={() =>
                    setFieldValue("first_name", values.first_name)
                  }
                  className="w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-[8px] ">
                <label className="font-latoBold text-small leading-[24px] text-main">
                  Comment
                </label>
                <textarea className="p-[8px] bg-input rounded-[8px] outline-none" />
              </div>
              <div className="flex items-center gap-[16px]">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    value={values.contact_by_email}
                    onChange={() =>
                      setFieldValue(
                        "contact_by_email",
                        !values.contact_by_email
                      )
                    }
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
                    value={values.contact_by_phone}
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

            <div className="flex gap-[24px]">
              <CustomButton
                text="Go Back"
                onClick={() => setStep(2)}
                className="w-[192px] border-[2px] border-main border-solid bg-transparent shadow-none"
              />
              <CustomButton
                text="Enter Contact Details"
                onClick={() => setStep(4)}
                className="w-[192px]"
              />
            </div>
          </form>
        )}
      </Formik>
      <div className="desc:w-[402px] h-fit px-[16px] py-[32px] hidden desc:block shadow-map rounded-xl bg-white">
        <div className="flex w-auto justify-between items-center pb-[8px] mb-[32px] border-b-[1px] border-input border-solid">
          <h3 className="font-latoMedium text-middle text-main">Summary</h3>
          <button className="flex items-center font-latoBlack text-small text-accent">
            <EditIcon className="mr-[8px]" /> Edit
          </button>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">
            Type of transfer:
          </p>
          <p className="font-latoRegular text-small text-disabled">1</p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Pick-Up Date:</p>
          <p className="font-latoRegular text-small text-disabled">1</p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Pick-Up Time:</p>
          <p className="font-latoRegular text-small text-disabled">1</p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">
            Pick-Up Location:
          </p>
          <p className="font-latoRegular text-small text-disabled">Type</p>
        </div>
        <div className="flex justify-between items-center gap-[8px]">
          <p className="font-latoBold text-small text-main mb-[24px]">
            Drop-Off Location:
          </p>
          <p className="font-latoRegular text-small text-disabled">Car</p>
        </div>
        <div className="flex justify-between items-center gap-[8px]">
          <p className="font-latoBold text-small text-main">Vehicle:</p>
          <p className="font-latoRegular text-small text-disabled">Car</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
