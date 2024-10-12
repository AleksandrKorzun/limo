import Image from "next/image";
import React from "react";
import Subtitle from "../../ui/subtitle";
import Text from "../../ui/text";

const CardService = ({ imgMob, imgDesc, title, desc }) => {
  return (
    <div className="mobV:h-[592px] mobH:h-[464px] mobH:w-[376px]  px-[16px] py-[32px] mobV:mb-[16px] rounded-[16px] desc:w-[640px] desc:px-[40px] desc:py-[56px] bg-backgroundSecondary">
      {/* <Image src={img} width={295} height={288} alt="our service photo" /> */}
      <picture>
        <source
          media="(max-width: 639px)"
          srcSet={imgMob}
          className="w-auto h-auto"
        />
        <source media="(min-width: 768px)" srcSet={imgDesc} />
        <img
          src={imgMob}
          alt="our service photo"
          className="w-auto tabV:w-full h-auto"
        />
      </picture>
      <Subtitle text={title} />
      <Text text={desc} />
    </div>
  );
};

export default CardService;
