import React from 'react';
import Button from './Button';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Introduction: React.FC = () => {
  return (
    <>
      <div className="introduction-about">
        <Swiper
          spaceBetween={0}
          
      
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1100}
          modules={[Autoplay]}

          className="mySwiper"
        >
          <SwiperSlide>
            <div className="introduction ">
              <div className="container">
                <span className=''>
                  <h1 className='playfair-display intro-h1'>Udfort Luxury Residences</h1>
           
                </span>
                <h2 className='text-light roboto-bold intro-h2 py-4'>Living Spaces In Pecherska-Kiev</h2>
               
                <div className="intro-button py-4">
                  <Button inTextBtn="GET A CONSTULTITION" />
                  <img src="/assets/images/introduction/service-icon-1.png" alt="" className='intro-icon1' />
                </div>
              </div>

            </div>
           
          </SwiperSlide>

          <SwiperSlide>
            <div className="introduction1">
              <div className="container">
                <span className='intro-h2'>
                  <h1 className='playfair-display intro-h01'>Oxome Premium Flats</h1>
                </span>
                <h2 className='text-light roboto-bold intro-h02 py-4'>Provide A Decent Level Of Comfort</h2>
                <div className="intro-button py-4">
                  <Button  inTextBtn="GET A BOOTSTRAP"/>
                  <img src="/assets/images/introduction/services-icon-2.png" alt="" className='intro-icon1' />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="introduction2">
              <div className="container">
                <span className='intro-h1'>
                  <h1 className='playfair-display intro-h001'>Homepark Elite Residences</h1>
                </span>
                <h2 className='text-light roboto-bold intro-h002 py-4'>We Build Your Dream House</h2>
                <div className="intro-button py-4">
                  <Button inTextBtn="GET A FRONTEND"/>
                  <img src="/assets/images/introduction/services-icon-3.png" alt="" className='intro-icon1' />
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        
      </div>
    </>
  )
}

export default Introduction;
