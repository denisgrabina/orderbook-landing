import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Lazy } from "swiper";
import { Project } from "components/ui/Project";
import { MOCK, EXITS } from "constants.js";

const prev = require("assets/images/icon-arrow-prev.svg");
const next = require("assets/images/icon-arrow-next.svg");

SwiperCore.use([Navigation, Lazy]);

const projects = MOCK.projects;

export const Slider = () => (
  <Swiper
    spaceBetween={30}
    freeMode={true}
    loop={true}
    className="exitsSlider"
    navigation={{
      nextEl: ".review-swiper-button-next-unique",
      prevEl: ".review-swiper-button-prev-unique",
    }}
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
    <div className="arrows">
      <div className="review-swiper-button-prev-unique">
        <img src={prev} alt="prev icon" />
        <span>Prev</span>
      </div>
      <div className="review-swiper-button-next-unique">
        <img src={next} alt="prev icon" />
        <span>Next</span>
      </div>
    </div>
    {projects.map((p, i) => {
      return (
        <SwiperSlide key={i}>
          <Project data={p} type={EXITS} />
        </SwiperSlide>
      );
    })}
  </Swiper>
);
