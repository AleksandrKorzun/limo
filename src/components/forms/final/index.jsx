import CustomButton from "@/components/ui/customButton";
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

const Final = ({ setStep }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col items-center justify-center desc:min-h-[555px]"
    >
      <h3 className="font-latoBold text-big text-main mb-[24px] text-center">
        Thank You! Your Booking is Confirmed
      </h3>
      <p className="font-latoMedium text-medium text-main desc:w-[804px] text-center mb-[40px]">
        Your reservation has been successfully submitted. You will receive a
        confirmation email shortly with all the details. If you need any further
        assistance, please don’t hesitate to contact us.
      </p>
      <CustomButton
        text="Book Another Ride"
        onClick={() => setStep(1)}
        className="w-[192px]"
      />
    </motion.div>
  );
};

export default Final;
