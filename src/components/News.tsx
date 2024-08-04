import React, { useState, useEffect } from 'react';
import Xeber from './Xeber';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { Pagination, Autoplay } from 'swiper/modules'; // Autoplay modülü eklendi

interface Xeber {
  title: string;
  image: string;
  date: string;
  paragraph: string;
}

const News: React.FC = () => {
  const [xeberler, setXeberler] = useState<Xeber[]>([]);

  useEffect(() => {
    axios.get('src/Xeberler.json')
      .then(cavab => setXeberler(cavab.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='xeber-kartlari'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} 
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
        className="mySwiper py-4"
      >
        {xeberler.map((birXeber, index) => (
          <SwiperSlide key={index}>
            <Xeber 
              xeberTitle={birXeber.title} 
              xeberImg={birXeber.image} 
              xeberDate={birXeber.date}
              xeberParagraph={birXeber.paragraph}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
