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
    breakpoints={{
      "@0.00": {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      "@0.25": {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      "@0.35": {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      "@0.50": {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
      "@0.85": {
        slidesPerView: 3.8,
        spaceBetween: 20,
      },
      "@1.10": {
        slidesPerView: 3.8,
        spaceBetween: 40,
      },
      "@1.25": {
        slidesPerView: 4.6,
        spaceBetween: 40,
      },
      "@1.45": {
        slidesPerView: 5.6,
        spaceBetween: 50,
      },
      "@1.70": {
        slidesPerView: 6.6,
        spaceBetween: 50,
      },
      "@2.00": {
        slidesPerView: 7.2,
        spaceBetween: 50,
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
