"use client";
import Container from "@/components/container";
import CustomButton from "@/components/ui/customButton";
import ScrollButton from "@/components/ui/scrollButton";
import React from "react";

const SectionHero = () => {
  return (
    <section className="h-[100dvh]  mobV:bg-[url('/images/mob/hero_bg.webp')] mobH:bg-[url('/images/desc/hero_bg.webp')] tabV:bg-r tabH:bg-[url('/images/desc/hero_bg.webp')] tabV:bg-[url('/images/desc/hero_bg.webp')] desc:bg-[url('/images/desc/hero_bg.webp')] bg-cover">
      <Container className="relative">
        <h1 className="font-ebSemiBold mobV:pt-[158px] mobH:pt-[116px] tabV:pt-[224px] tabH:pt-[204px] desc:pt-[200px] mobV:mb-[24px] mobH:mb-[0] mobH:leading-[130%] mobV:text-middle mobH:text-middle tabV:text-tall desc:text-mega  tabH:text-tall tabV:text-center tabH:text-center desc:text-center tabV:px-[90px] tabH:px-[250px] desc:px-[250px] desc:mb-[24px] text-white">
          Black Lion Limousine
          <br /> Your Premier Chicago Transportation
        </h1>
        <h2 className="font-latoMedium text-small desc:text-medium mobV:mb-[32px] tabV:mb-[40px] mobH:mb-[16px] desc:mb-[50px] tabV:px-[140px] tabH:px-[300px] desc:px-[250px] tabV:text-center tabH:text-center desc:text-center text-white">
          Black Lion Limousine is a premier limousine service provider located
          in western suburbs of Chicago. With a commitment to excellence and
          customer satisfaction, we offer a wide range of transportation
          solutions for both corporate and personal needs
        </h2>
        <div className="flex justify-center">
          <CustomButton
            text="Book a Transfer"
            name="booked"
            className="mobV:w-full mobH:w-full tabV:w-[192px] tabH:w-[192px] desc:w-[192px] tabV:mx-auto tabH:mx-auto"
          />
        </div>
        <ScrollButton />
      </Container>
    </section>
  );
};

export default SectionHero;
