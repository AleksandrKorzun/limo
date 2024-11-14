"use client";
import EditIcon from "@/assets/icons/Edit";
import CustomButton from "@/components/ui/customButton";
import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { COST, COST_PER_ML } from "@/data/constant";

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
const accessToken = process.env.NEXT_PUBLIC_REACT_APP_TELEGRAM_API_KEY;
const chatID = 291340498;
// const phoneNumber = ["380677310942", "16196381625"];
const phoneNumber = ["380677310942"];

const ReviewForm = ({
  step,
  setStep,
  form,
  mapRef,
  isLoaded,
  duration,
  distance,
}) => {
  const sendWhatsAppMessage = async (text) => {
    const encodedText = encodeURIComponent(text);
    const date = new Date(Date.now()).toLocaleDateString();
    const time = new Date(Date.now()).toLocaleTimeString();

    try {
      const response = await axios.get(
        `https://api.telegram.org/bot${accessToken}/sendMessage?chat_id=${chatID}&text=New Order (${date} ${time})%0A%0A${encodedText}`
      );

      // console.log(`Message sent to ${phone}:`, response.data);
    } catch (error) {
      console.error(
        // `Error sending message to ${phone}:`,
        error.response?.data || error.message
      );
    }
  };
  const handleSubmit = async (e) => {
    try {
      const text = Object.entries(form).reduce(
        (acc, [key, value]) => (acc += `${key}: ${value || "---"}\n\n`),
        ""
      );

      await sendWhatsAppMessage(text);
      await axios.post(
        "https://mail-service-bcre.onrender.com/send-email",
        form
      );
    } catch (error) {
      console.log("error", error);
    }
    setStep(5);
  };
  const totalDistance = Number(distance.split(" ")[0]);

  const getTotalCost = COST[form.type] + totalDistance * COST_PER_ML;
  return (
    <motion.div
      className="flex mobV:flex-col tabV:flex-col gap-[32px]"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="desc:w-[50%] h-fit px-[16px] py-[32px] desc:block shadow-map rounded-xl bg-white">
        <div className="flex w-auto justify-between items-center pb-[8px] mb-[32px] border-b-[1px] border-input border-solid">
          <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] ">
            Review Your Booking
          </p>
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
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Vehicle:</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.type}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">First name:</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.first_name}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Last name:</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.second_name}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Email address</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.email_address}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Phone number</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.phone_number}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[8px] mb-[24px]">
          <p className="font-latoBold text-small text-main">Comments</p>
          <p className="font-latoRegular text-small text-disabled">
            {form.comments}
          </p>
        </div>
      </div>
      <div className="desc:w-[50%] max-h-[576px] tabV:block desc:block shadow-map rounded-xl">
        {isLoaded ? (
          <div
            ref={mapRef}
            className="desc:h-[432px] h-[300px] tabV:h-[432px] rounded-t-[16px]"
          ></div>
        ) : (
          <div className="desc:h-[432px]"></div>
        )}
        <div className="desc:h-[144px] flex flex-col gap-[5px] px-[16px] py-[12px] bg-white rounded-b-[16px]">
          <div className="flex justify-between">
            <p className="text-black text-medium font-latoBlack leading-[100%]">
              Total Distance:
            </p>
            <p className="text-black text-medium font-latoMedium">
              {distance || "0 mi"}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-black text-medium font-latoBlack">Total Time:</p>
            <p className="text-black text-medium font-latoMedium">
              {duration || "0 h 0 m"}
            </p>
          </div>
          {form.type.includes("Premium Bus") ? (
            <p className="text-black text-[18px] font-latoBlack">
              The trip quotation will be sent to your email or phone.
            </p>
          ) : (
            <div className="flex justify-between">
              <p className="text-black text-medium font-latoBlack">
                Total Cost:
              </p>
              <p className="text-black text-medium font-latoMedium">
                $ {getTotalCost}
              </p>
            </div>
          )}
          <p className="text-placeholder text-[12px] font-latoBlack">
            * Final quotation can be varied
          </p>
        </div>
        <div className="flex mobV:flex-col mobV:hidden gap-[24px] tabV:justify-center mt-[40px]">
          <CustomButton
            text="Go Back"
            onClick={() => setStep(3)}
            variant="black"
            className="w-[192px] mobV:w-full border-[2px] border-main border-solid bg-transparent shadow-none hover:bg-main hover:text-white"
          />
          <CustomButton
            text="Confirm Booking"
            onClick={() => {
              handleSubmit();
            }}
            className="w-[192px] mobV:w-full"
          />
        </div>
      </div>
      <div className="flex mobV:flex-col tabV:hidden desc:hidden gap-[24px]  mt-[40px]">
        <CustomButton
          text="Go Back"
          onClick={() => setStep(3)}
          variant="black"
          className="w-[192px] mobV:w-full border-[2px] border-main border-solid bg-transparent shadow-none hover:bg-main hover:text-white"
        />
        <CustomButton
          text="Confirm Booking"
          onClick={async () => {
            await handleSubmit();
          }}
          className="w-[192px] mobV:w-full"
        />
      </div>
    </motion.div>
  );
};

export default ReviewForm;
