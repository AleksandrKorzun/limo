"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/customButton";
import { Link } from "react-scroll"; // Правильний імпорт
import { NAV } from "@/data/constant";

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
  }, [lastScrollTop, handleScroll]);
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
            <li
              key={item}
              className="flex justify-center items-center w-[83px] h-[40px] font-latoBold text-small text-main leading-3"
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
      <CustomButton text={"Book a Transfer"} className="p-[8px]" />
    </header>
  );
};

export default Header;
