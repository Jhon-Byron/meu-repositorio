'use client'

import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Style from './slide1.module.css'

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,]}
        loop
        className={Style.Swiper}
      >
        <SwiperSlide className={Style.SwiperSlide}>
          <img className={Style.img} src="/projects/project1/cadastro.jpg" alt="cadastro" />
        </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img className={Style.img} src="/projects/project1/login.jpg" alt="login" />
          </SwiperSlide>
        <SwiperSlide className={Style.SwiperSlide}>
          <img className={Style.img} src="/projects/project1/interface.jpg" alt="interface" />
          </SwiperSlide>
      </Swiper>
    </>
  );
}
