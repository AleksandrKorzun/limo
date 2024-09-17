"use client";
import React from "react";
import Text from "@/components/ui/text";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const CardReview = ({ name, desc }) => {
  return (
    <div className="flex flex-col gap-[16px] mobV:h-[408px] mobH:h-[352px] px-[16px] pt-[32px] desc:px-[24px] desc:w-[416px] desc:h-[352px] rounded-[16px] border-[1px] border-[#ACACAC] border-solid bg-backgroundSecondary">
      <div className="flex gap-[4px]">
        <Image src="/images/desc/star.png" width={24} height={24} alt="star" />
        <Image src="/images/desc/star.png" width={24} height={24} alt="star" />
        <Image src="/images/desc/star.png" width={24} height={24} alt="star" />
        <Image src="/images/desc/star.png" width={24} height={24} alt="star" />
        <Image src="/images/desc/star.png" width={24} height={24} alt="star" />
      </div>
      <Text text={name} className="text-[24px]" />
      <Text text={desc} />
    </div>
  );
};

export default CardReview;
