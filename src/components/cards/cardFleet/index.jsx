import Image from "next/image";
import React from "react";
import Subtitle from "../../ui/subtitle";
import Text from "../../ui/text";
import CustomButton from "../../ui/customButton";

const CardFleet = ({ img, title, desc, specification }) => {
  return (
    <div className="mobV:h-[568px] px-[16px] py-[48px] mobV:mb-[16px] rounded-[16px] desc:h-[599px] desc:w-[416px] bg-backgroundSecondary">
      <Image
        src={img}
        width={295}
        height={288}
        alt="our service photo"
        className="w-auto h-auto mx-auto"
      />
      <Subtitle text={title} />
      <Text text={desc} />
      <Text text={specification} className="font-black mt-[16px] mb-[32px]" />
      <CustomButton text={"Book a Transfer"} className="w-full" />
    </div>
  );
};

export default CardFleet;
