"use client";
import { CONTACT, NAV, SOCIAL } from "@/data/constant";
import React from "react";
import { Link } from "react-scroll";
import Text from "../ui/text";
import Container from "../container";
import { motion } from "framer-motion";

const hoverVariants = {
  initial: { top: 0, opacity: 1 },
  hover: { top: -25, opacity: 0, transition: { duration: 0.3 } },
};

const hoverTextVariants = {
  initial: { top: 25, opacity: 0 },
  hover: { top: 0, opacity: 1, transition: { duration: 0.3 } },
};

const Footer = () => {
  return (
    <div className="w-full bg-footer px-[24px] pt-[64px] mobV:pb-[50px] pb-[32px] rounded-tr-[24px] rounded-tl-[24px]">
      <a id="Contact" className="invisible"></a>
      <Container>
        <nav className="mx-auto pb-[32px] border-b-[1px] border-b-solid border-background">
          <ul className="flex justify-center items-center gap-[32px] desc:gap-[48px]">
            {NAV.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                whileHover="hover"
                className="flex justify-center items-center w-[83px] h-[40px] font-latoBold text-small text-white leading-3 cursor-pointer"
              >
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="relative"
                >
                  <motion.span
                    className="absolute translate-y-[-50%] translate-x-[-50%] left-0 top-1/2"
                    variants={hoverVariants}
                  >
                    {item}
                  </motion.span>
                  <motion.span
                    className="absolute translate-y-[-50%] translate-x-[-50%] left-0 top-1/2"
                    variants={hoverTextVariants}
                  >
                    {item}
                  </motion.span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="mobV:grid mobV:grid-cols-2 flex justify-between gap-x-subgrid gap-y-[20px] pt-[32px] mb-[48px]">
          {CONTACT.map(({ title, value }, i) => (
            <div
              key={title + value}
              className="flex flex-col gap-[16px] w-auto"
            >
              <h2
                className={`text-background text-[24px] w-fit mobV:w-auto ${
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
        <ul className="mobV:grid mobV:grid-cols-2 mobV:gap-x-[130px] flex flex-wrap gap-[40px] mx-auto w-fit mb-[16px]">
          {SOCIAL.map(({ title, value }) => (
            <li key={title}>
              <a
                href={value}
                target="_blank"
                className="text-background text-small mobV:text-medium font-latoBold  hover:text-accent cursor-pointer transition-colors duration-300 "
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Text
          text="Copyright 2024, Limousine. All rights reserved."
          className="text-white text-center text-[14px]"
        />
      </Container>
    </div>
  );
};

export default Footer;
