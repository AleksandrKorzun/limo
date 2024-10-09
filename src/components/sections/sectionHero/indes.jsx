"use client";
import Container from "@/components/container";
import CustomButton from "@/components/ui/customButton";
import ScrollButton from "@/components/ui/scrollButton";
import React from "react";

const SectionHero = () => {
  return (
    <section className="h-[100dvh] bg-[url('/images/desc/hero_bg.png')] mobV:bg-[url('/images/mob/hero_bg.png')] mobH:bg-[url('/images/desc/hero_bg.png')] tabV:bg-r tabH:bg-[url('/images/desc/hero_bg.png')] tabV:bg-[url('/images/desc/hero_bg.png')] desc:bg-[url('/images/desc/hero_bg.png')] bg-cover">
      <Container className="relative">
        <h2 className="font-ebSemiBold pt-[224px] mobV:pt-[158px] mobH:pt-[116px] tabV:pt-[224px] tabH:pt-[204px] desc:pt-[200px] mb-[24px] mobV:mb-[24px] mobH:mb-[0] mobH:leading-[130%] mobV:text-big mobH:big tabV:text-tall desc:text-mega text-tall tabH:text-tall tabV:text-center text-center tabH:text-center desc:text-center tabV:px-[90px] px-[250px] tabH:px-[250px] desc:px-[310px] desc:mb-[24px] text-white">
          Redefining Business Travel with Premium Transfers
        </h2>
        <h3 className="font-latoMedium text-medium  mb-[32px] mobV:mb-[32px] tabV:mb-[40px] mobH:mb-[16px] desc:mb-[50px] px-[140px] tabV:px-[140px] tabH:px-[300px] desc:px-[450px] text-center tabV:text-center tabH:text-center desc:text-center text-white">
          Business trips with comfort and style. Book your transfer now!
        </h3>
        <div className="flex justify-center">
          <CustomButton
            text="Book a Transfer"
            name="booked"
            className="mobV:w-full w-[192px] mobH:w-full tabV:w-[192px] tabH:w-[192px] desc:w-[192px] tabV:mx-auto tabH:mx-auto"
          />
        </div>
        <ScrollButton />
      </Container>
    </section>
  );
};

export default SectionHero;
