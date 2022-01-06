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
    freeMode={{
      enabled: true,
      momentumBounce: false,
    }}
    loop={true}
    className="exitsSlider"
    navigation={{
      nextEl: ".review-swiper-button-next-unique",
      prevEl: ".review-swiper-button-prev-unique",
    }}
    lazy={{
      loadOnTransitionStart: true,
      loadPrevNext: false,
    }}
    speed={800}
    watchOverflow={true}
    preloadImages={false}
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
