"use client";
import ArrowLeftIcon from "@/assets/icons/ArrowLeft";
import ArrowRightIcon from "@/assets/icons/ArrowRight";
import CalendarIcon from "@/assets/icons/Calendar";
import AutoCompleteInput from "@/components/ui/autoCompleteInput";
import CustomButton from "@/components/ui/customButton";
import Input from "@/components/ui/fieldInput";
import Select from "@/components/ui/select";

import { BOOKING_FORM, BOOKING_STEPS } from "@/data/constant";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import ArrowDownIcon from "@/assets/icons/ArroDown";
import ArrowDownSmallIcon from "@/assets/icons/ArrowDownSmall";
import ArrowUpIcon from "@/assets/icons/ArrowUp";
import ArrowDownCalendarIcon from "@/assets/icons/ArrowDownCalendar";
import { Formik, useFormik } from "formik";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const minutes = [0, 15, 30, 45];
// const timeValue = ["PM", "AM"];
// const libraries = ["core", "map", "places", "marker"];

const PlaceForm = ({
  step,
  mapRef,
  isLoaded,
  showRoute,
  duration,
  distance,
  onSubmitForm,
}) => {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [customTime, setCustomTime] = useState({
    hours:
      new Date().getHours() > 12
        ? new Date().getHours() - 12
        : new Date().getHours(),
    minutes: 15,
    timeValue: new Date().getHours() > 12 ? "PM" : "AM",
  });

  const increaseHour = () => {
    setCustomTime((prevTime) => {
      return {
        ...prevTime,
        hours: prevTime.hours === 12 ? 1 : prevTime.hours + 1,
      };
    });
  };

  const decreaseHour = () => {
    setCustomTime((prevTime) => {
      return {
        ...prevTime,
        hours: prevTime.hours === 1 ? 12 : prevTime.hours - 1,
      };
    });
  };

  const increaseMinute = () => {
    setCustomTime((prevTime) => {
      return {
        ...prevTime,
        minutes: prevTime.minutes === 45 ? 0 : prevTime.minutes + 15,
      };
    });
  };

  const decreaseMinute = () => {
    setCustomTime((prevTime) => {
      return {
        ...prevTime,
        minutes: prevTime.minutes === 0 ? 45 : prevTime.minutes - 15,
      };
    });
  };
  const onChangeTimeValue = () => {
    setCustomTime((prevTime) => {
      return {
        ...prevTime,
        timeValue: prevTime.timeValue === "PM" ? "AM" : "PM",
      };
    });
  };

  const handleSetTime = () => {
    const newTime = new Date();
    newTime.setHours(
      customTime.timeValue === "PM" ? customTime.hours + 12 : customTime.hours
    );
    newTime.setMinutes(customTime.minutes);
    setTime(newTime);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-[32px]">
      <Formik
        initialValues={{
          typeTransfer: "",
          date: "",
          time: "",
          pickUpLocation: [""],
          dropOffLocation: "",
        }}
        onSubmit={(values) => {
          localStorage.setItem("place", JSON.stringify(values));
          onSubmitForm();
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => {
          console.log("values", values);
          return (
            <form className="flex flex-col gap-[40px] desc:w-[50%]">
              <p className="text-main font-latoMedium text-medium leading-[130%] pb-[8px] border-b-[1px] border-b-solid border-b-[#D8D8D8]">
                {BOOKING_STEPS[step - 1].title}
              </p>
              <div className="flex flex-wrap gap-[24px]">
                <Select
                  label="Type of transfer"
                  placeholder="Point to Point"
                  type="select"
                  name="typeTransfer"
                  onChange={(v) => setFieldValue("typeTransfer", v)}
                  value={values.typeTransfer}
                  options={BOOKING_FORM[0].option}
                />

                <div className={`flex flex-col gap-[8px] w-[47.5%] relative`}>
                  <label className="font-latoBold text-small leading-[24px] text-main">
                    Select date
                  </label>
                  <DatePicker
                    months={months}
                    placeholderText="Select date"
                    selected={values.date}
                    renderCustomHeader={({
                      date,
                      decreaseMonth,
                      increaseMonth,
                    }) => (
                      <div className="flex justify-between items-center">
                        <button onClick={decreaseMonth} type="button">
                          <ArrowLeftIcon className="color-[#484747]" />
                        </button>
                        <p className="text-small">
                          {months[date.getMonth()]} {date.getFullYear()}
                        </p>
                        <button onClick={increaseMonth} type="button">
                          <ArrowRightIcon className="color-[#484747]" />
                        </button>
                      </div>
                    )}
                    onChange={(date) => {
                      setFieldValue("date", date);
                    }}
                    className="p-[8px] bg-input rounded-[8px] w-full"
                  />
                  <CalendarIcon className="absolute right-[8px] top-[44px]" />
                  {values.date.error && <p className="text-[#FD7542]">error</p>}
                </div>

                <div className={`flex flex-col gap-[8px] w-[47.5%] relative`}>
                  <label className="font-latoBold text-small leading-[24px] text-main">
                    Select time
                  </label>
                  <DatePicker
                    className="p-[8px] bg-input rounded-[8px] w-full"
                    selected={time}
                    placeholderText="Select time"
                    onChange={(date) => {
                      setTime(date);
                      setIsOpen(true);
                    }}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    showTimeCaption={false}
                    open={isOpen}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                  >
                    <div className="bg-[#dbdbdb] flex items-center gap-[8px]">
                      <div className="flex flex-col items-center w-full">
                        <button type="button" onClick={decreaseHour}>
                          <ArrowUpIcon className="w-[24px] h-[24px]" />
                        </button>
                        <span className="text-medium font-latoMedium text-main my-[8px] text-center w-full">
                          {customTime.hours}
                        </span>

                        <button type="button" onClick={increaseHour}>
                          <ArrowDownCalendarIcon className="w-[24px] h-[24px]" />
                        </button>
                      </div>
                      <span className="text-medium font-latoMedium text-main my-[8px]">
                        :
                      </span>
                      <div className="flex flex-col items-center w-full">
                        <button type="button" onClick={decreaseMinute}>
                          <ArrowUpIcon className="w-[24px] h-[24px]" />
                        </button>
                        <span className="text-medium font-latoMedium text-main my-[8px] text-center w-full">
                          {customTime.minutes}
                        </span>
                        <button type="button" onClick={increaseMinute}>
                          <ArrowDownCalendarIcon className="w-[24px] h-[24px]" />
                        </button>
                      </div>

                      <div className="flex flex-col items-center w-full">
                        <button type="button" onClick={onChangeTimeValue}>
                          <ArrowUpIcon className="w-[24px] h-[24px]" />
                        </button>
                        <span className="text-medium font-latoMedium text-main my-[8px] text-center w-full">
                          {/* {customTime.get()} */}
                          {customTime.timeValue}
                        </span>
                        <button type="button" onClick={onChangeTimeValue}>
                          <ArrowDownCalendarIcon className="w-[24px] h-[24px]" />
                        </button>
                      </div>
                    </div>
                    <CustomButton
                      text="Set time"
                      className="w-full mt-[8px]"
                      onClick={() => {
                        handleSetTime();
                        setFieldValue("time", time);
                      }}
                    />
                  </DatePicker>
                  <ArrowDownSmallIcon className="absolute right-[8px] top-[44px]" />
                </div>
                {values.pickUpLocation?.map((loc, idx) => (
                  <AutoCompleteInput
                    label={!idx && "Pick-Up Location"}
                    placeholder="Select"
                    value={startLocation}
                    onChange={(v) => {
                      if (!idx) {
                        setStartLocation(v, idx);
                      }
                      setFieldValue(
                        "pickUpLocation",
                        values.pickUpLocation.map((location, index) =>
                          index === idx ? v : location
                        )
                      );
                      if (idx === 1) {
                        showRoute(startLocation, values.pickUpLocation[1]);
                      }
                      if (idx > 1) {
                        showRoute(
                          startLocation,
                          values.pickUpLocation[-1],
                          values.pickUpLocation.slice(1, -1)
                        );
                      }
                    }}
                    type="text"
                    className="w-full"
                    isLoaded={isLoaded}
                  />
                ))}

                <button
                  className="font-latoBold text-small"
                  type="button"
                  onClick={() =>
                    setFieldValue("pickUpLocation", [
                      ...values.pickUpLocation,
                      "",
                    ])
                  }
                >
                  + Add stop
                </button>

                <AutoCompleteInput
                  label="Drop-Off Location"
                  placeholder="Select"
                  value={endLocation}
                  onChange={(v) => {
                    console.log("first", v);
                    setEndLocation(v);
                    showRoute(startLocation, v);
                  }}
                  type="text"
                  className="w-full"
                  isLoaded={isLoaded}
                />
              </div>
              <CustomButton
                text="Choose a vehicle"
                type="button"
                onClick={handleSubmit}
              />
            </form>
          );
        }}
      </Formik>
      <div className="desc:w-[50%] hidden desc:block shadow-map rounded-xl">
        {isLoaded ? (
          <div ref={mapRef} className="desc:h-[432px] rounded-t-[16px]"></div>
        ) : (
          <div className="desc:h-[432px]"></div>
        )}
        <div className="desc:h-[144px] flex flex-col gap-[16px] px-[16px] py-[32px] bg-white rounded-b-[16px]">
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
        </div>
      </div>
    </div>
  );
};

export default PlaceForm;
