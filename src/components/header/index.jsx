/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/customButton";
import { Link } from "react-scroll";
import { NAV } from "@/data/constant";
import { motion } from "framer-motion";

const hoverVariants = {
  initial: { top: 0, opacity: 1 },
  hover: { top: -25, opacity: 0, transition: { duration: 0.3 } },
};

const hoverTextVariants = {
  initial: { top: 25, opacity: 0 },
  hover: { top: 0, opacity: 1, transition: { duration: 0.3 } },
};

const Header = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      style={{
        zIndex: 200,
        transform: showComponent
          ? "translate(-50%, 0)"
          : "translate(-50%, -150%)",
        transition: "transform 1s",
      }}
      className="fixed z-200 top-[24px] left-[50%] translate-x-[-50%] flex justify-between items-center mobV:px-[8px] mobH:px-[32px] tabV:px-[32px] tabH:px-[32px] desc:px-[32px] mobV:w-[327px] mobH:w-[793px] tabV:w-[720px] tabH:w-[816px] desc:w-[864px] h-[72px] bg-header rounded-[16px]"
    >
      <Image
        src="/images/desc/Logo.png"
        width={139}
        height={36}
        alt="company logo"
      />
      <nav className="mobV:hidden mobH:block tabV:block tabH:block desc:block">
        <ul className="flex items-center gap-[32px]">
          {NAV.map((item, index) => (
            <motion.li
              key={item}
              className="flex justify-center items-center w-[83px] h-[40px] font-latoBold text-small text-main leading-3 cursor-pointer relative"
              initial="initial"
              whileHover="hover"
            >
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-190}
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
      <CustomButton
        text={"Book a Transfer"}
        className="p-[8px]"
        name="booked"
      />
    </header>
  );
};

export default Header;
