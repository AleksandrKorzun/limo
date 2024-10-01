"use client";
import CardReview from "@/components/cards/cardReview";
import Container from "@/components/container";
import CustomButton from "@/components/ui/customButton";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";
import { REVIEW } from "@/data/constant";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import ArrowLeftIcon from "@/assets/icons/ArrowLeft";
import ArrowRightIcon from "@/assets/icons/ArrowRight";

const SectionReview = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="pb-[95px]">
      <Container>
        <Title text="What Our Clients Say" />
        <Swiper
          slidesPerView="auto"
          speed={500}
          freeMode={true}
          spaceBetween={32}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Pagination, Navigation]}
          allowSlidePrev={true}
          allowSlideNext={true}
          className="slider-wrapper"
        >
          {REVIEW.map(({ name, desc }) => (
            <SwiperSlide key={name} className="review-wrapper">
              <CardReview name={name} desc={desc} />
            </SwiperSlide>
          ))}
          <div className="custom-navigation">
            <div className="swiper-button-prev" ref={prevRef}>
              <ArrowLeftIcon className="stroke-[#C0C0C0] p-[10px]" />
            </div>
            <div className="swiper-pagination" />{" "}
            <div className="swiper-button-next" ref={nextRef}>
              <ArrowRightIcon className="stroke-[#C0C0C0] p-[10px]" />
            </div>
          </div>
        </Swiper>
        <div className="flex flex-col gap-[16px] desc:flex-row desc:gap-[32px] desc:mt-[104px]">
          <Text
            text="Elevate Your Journey with Lion Limousine Luxury Awaits"
            className="text-[48px] leading-[56px] mb-[40px] desc:text-[72px] desc:mb-0 desc:w-[752px] desc:leading-[80px]"
          />
          <div className="flex flex-col gap-[16px] desc:flex-row-reverse desc:py-[40px] desc:gap-[55px]">
            <CustomButton text="Call us" className="w-full desc:w-[192px]" />
            <Text
              text="or"
              className="text-center desc:text-medium desc:my-auto"
            />
            <CustomButton
              text="Book a Transfer"
              className="w-full desc:w-[192px] desc:mt-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionReview;
