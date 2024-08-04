import React, { useState, useEffect } from 'react';
import Xeber from './Xeber';
import Xeberler from '../Xeberler.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';




const News: React.FC = () => {
  return (
    <div className='xeber-kartlari'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper py-3"
      >
        {
          Xeberler.map((birXeber) => (
            <SwiperSlide>
              <Xeber xeberTitle={birXeber.title} xeberImg={birXeber.image} xeberDate={birXeber.date} xeberParagraph={birXeber.paragraph}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default News;
