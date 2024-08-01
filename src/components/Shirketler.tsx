import React from 'react'
import Shirket from './Shirket'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Shirketler:React.FC = () => {
  return (
   <div className="container">
     <Swiper
    slidesPerView={3}
    spaceBetween={20}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
   
  
    className="mySwiper"
  >
    
    <>
    
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket1.jpg'/></SwiperSlide>
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket2.jpg'/></SwiperSlide>
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket3.jpg'/></SwiperSlide>
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket4.jpg'/></SwiperSlide>
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket5.jpg'/></SwiperSlide>
    <SwiperSlide><Shirket shirketinLogosu='/assets/images/Shirketler/Shirket6.jpg'/></SwiperSlide>
  

   
   
   
   </>
   </Swiper>
   </div>

  )
}

export default Shirketler