'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <img className='' src="/projects/project1/cadastro.jpg" alt="cadastro" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/projects/project1/login.jpg" alt="login" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="/projects/project1/interface.jpg" alt="interface" />
          </SwiperSlide>
      </Swiper>
    </>
  );
}
