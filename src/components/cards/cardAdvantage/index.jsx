import Image from "next/image";
import React from "react";
import Subtitle from "../../ui/subtitle";
import Text from "../../ui/text";

const CardAdvantage = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col mobV:h-[440px] mobH:h-[464px] mobH:w-[376px] px-[16px] pt-[32px] mobV:mb-[16px] rounded-[16px] desc:h-[472px] desc:w-[304px] bg-backgroundSecondary">
      <Subtitle text={title} className="mt-0" />
      <Text text={desc} className="mb-auto" />
      <div className="mx-[-15px]">
        <Image
          src={img}
          width={327}
          height={192}
          className="w-[-webkit-fill-available] h-auto"
          alt="our service photo"
        />
      </div>
    </div>
  );
};

export default CardAdvantage;
