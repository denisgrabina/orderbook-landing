import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Project } from "components/ui/Project";
import { MOCK, EXITS } from "constants.js";

SwiperCore.use([Navigation]);

const projects = MOCK.projects;

export const Slider = () => {

  return (
    <Swiper
      spaceBetween={30}
      freeMode={{
        centeredSlides: true,
        freeModeFluid: true,
      }}
      loop={true}
      className="exitingSlider"
      navigation={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
          navigation: false,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {projects.map((p, i) => {
        return (
          <SwiperSlide key={i}>
            <Project data={p} type={EXITS} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
