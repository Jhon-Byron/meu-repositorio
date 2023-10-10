"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Slide1() {
  return (
    <div>
      <h1>Social Dev</h1>
      <Swiper>
        <SwiperSlide>
          <img src="/projects/project1/cadastro.jpg" alt="cadastro" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
