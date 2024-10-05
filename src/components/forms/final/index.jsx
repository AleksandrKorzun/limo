import CustomButton from "@/components/ui/customButton";
import React from "react";

const Final = ({ setStep }) => {
  return (
    <div className="flex flex-col items-center justify-center desc:min-h-[555px]">
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
    </div>
  );
};

export default Final;
