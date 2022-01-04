import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Lazy } from "swiper";
import { Project } from "components/ui/Project";
import { INVESTING, MOCK } from "constants.js";

SwiperCore.use([Navigation, Lazy]);

const projects = MOCK.projects;

export const Slider = () => (
  <Swiper
    spaceBetween={30}
    freeMode={true}
    loop={true}
    className="investingSlider"
    navigation={true}
    lazy={true}
    watchOverflow={true}
    breakpoints={{
      0: {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      375: {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      414: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 3.3,
        spaceBetween: 15,
      },
      960: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5.8,
        spaceBetween: 20,
      },
    }}
  >
    {projects.map((p, i) => {
      return (
        <SwiperSlide key={i}>
          <Project data={p} type={INVESTING} />
        </SwiperSlide>
      );
    })}
  </Swiper>
);
