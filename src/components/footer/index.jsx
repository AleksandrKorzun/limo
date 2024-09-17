"use client";
import { CONTACT, NAV, SOCIAL } from "@/data/constant";
import React from "react";
import { Link } from "react-scroll";
import Text from "../ui/text";

const Footer = () => {
  return (
    <div className="w-full bg-footer px-[24px] pt-[64px] pb-[32px] rounded-tr-[24px] rounded-tl-[24px]">
      <nav className="mx-auto pb-[32px] border-b-[1px] border-b-solid border-background">
        <ul className="flex justify-center items-center gap-[32px] desc:gap-[48px]">
          {NAV.map((item, index) => (
            <li
              key={item}
              className="flex justify-center items-center w-[83px] h-[40px] font-latoBold text-small text-white leading-3"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobV:grid mobV:grid-cols-2 flex justify-between gap-x-subgrid gap-y-[20px] pt-[32px] desc:mb-[48px]">
        {CONTACT.map(({ title, value }, i) => (
          <div key={title} className="flex flex-col gap-[16px] w-auto">
            <h2
              className={`text-background text-[24px] w-fit ${
                i % 2 === 0 ? "mobV:text-start" : "mobV:text-end"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-background text-[16px] w-auto ${
                i % 2 === 0 ? "mobV:text-start" : "mobV:text-end"
              }`}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
      <ul className="flex gap-[40px] mx-auto w-fit mb-[16px]">
        {SOCIAL.map(({ title, value }) => (
          <li key={title}>
            <a
              href={value}
              target="_blank"
              className="text-background text-small font-latoBold"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <Text
        text="Copyright 2024, Limousine. All rights reserved."
        className="text-background text-center text-[14px]"
      />
    </div>
  );
};

export default Footer;
