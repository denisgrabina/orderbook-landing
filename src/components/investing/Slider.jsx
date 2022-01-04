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
      "@0.20": {
        slidesPerView: 1.3,
        spaceBetween: 15,
      },
      "@0.5": {
        slidesPerView: 4.2,
        spaceBetween: 15,
      },
      "@1.00": {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      "@1.75": {
        slidesPerView: 3.8,
        spaceBetween: 20,
      },
      "@2.00": {
        slidesPerView: 4.8,
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
