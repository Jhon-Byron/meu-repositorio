"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Style from "./slide2.module.css";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={Style.Swiper}
      >
        <SwiperSlide className={Style.SwiperSlide}>
          <img
            className={Style.img}
            src="/projects/project2/interface.jpg"
            alt="interface"
          />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img
            className={Style.img}
            src="/projects/project2/vitoriacirculo.jpg"
            alt="vitoria circulo"
          />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img
            className={Style.img}
            src="/projects/project2/vitoriax.jpg"
            alt="vitoria x"
          />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img
            className={Style.img}
            src="/projects/project2/empate.jpg"
            alt="empate"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
