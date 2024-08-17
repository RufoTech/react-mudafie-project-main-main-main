import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const Homepark:React.FC = () => {
  return (
    <>
      <div  className='contact-links'>
        <div className="container">
          <h1 data-aos="fade-up" className='playfair-display py-4'>Homepark</h1>
          <h5 data-aos="fade-up" className='text-light roboto-light'>
            The smaller male cones release pollen, which fertilizes the female
          </h5>
        </div>
      </div>

      <div data-aos="fade-up" className="container">
        <div className="avabile-link d-flex align-items-center">
          <h6 className='text-light poppins-bold'>
            Start <FaAnglesRight className='double-left-icon' /> 
            <span className='px-4 contact-link-contact'>Homepark</span>
          </h6>
        </div>
      </div>

<div data-aos="fade-up" data-aos-duration="1000" className="homepark-text ">
    <div className="container">
        <h1 className='playfair-display'> <span className='gallery-h3'>Zaga</span> Construction  </h1>
        <h5 className='poppins-bold py-4 '> By aiming to take the life quality to an upper level with the whole realized Projects of luxury. </h5>
       
      
    </div>
</div>




      <div data-aos="fade-up" data-aos-duration="1000"  className="homepark py-4">
        <div className="container">
            <div className="row">
                <div  className=" homepark-left-side col-12 col-md-6">
                    <p className='roboto-light'>Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated.</p>
                </div>
                <div className=" homepark-right-side col-12 col-md-6">
<p className='roboto-light'>Really regard excuse off ten pulled. Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended.</p>
                </div>
            </div>
        </div>
      </div>

      <div className="apartment-slider py-2">
      <div className="container">
      <Swiper navigation={true}
           speed={1100}

      autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} modules={[Navigation,Autoplay]} 
       className="mySwiper">
        
        <SwiperSlide><img src="/assets/images/apartment/blog01.jpg" alt=""  className='w-100 '/></SwiperSlide>
        <SwiperSlide><img src="/assets/images/apartment/blog02.jpg" alt=""  className='w-100'/></SwiperSlide>
        <SwiperSlide><img src="/assets/images/apartment/blog03.jpg" alt=""  className='w-100'/></SwiperSlide>
        <SwiperSlide><img src="/assets/images/apartment/blog04.jpg" alt="" className='w-100' /></SwiperSlide>
     
        
      </Swiper>
      </div>
   
      </div>
      
      <div data-aos="fade-up" data-aos-duration="1000" className="apartment-description py-2">
        <div className="container">
          <h4 className='poppins-bold py-3'>Take the life quality to an upper level</h4>
          <p className='py-2 roboto-light'>Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended.Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not  Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated.</p>
         



      
         

          
         

        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="container py-5 my-2">
     <div className="row">
            <div className="col-12 col-md-6 ">
            <ul>
                <h5 className='poppins-bold'>Property Specifications
                </h5>
          <li className='roboto-light py-2'>Reget nec nunc. Etiam posuere iaculis quam. </li>
          <li className='roboto-light py-2'>Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.
          </li>
          <li className='roboto-light py-2'>Etiam nec urna in odio faucibus viverra eget nec nunc.
          </li>
          <li className='roboto-light py-2'>Lectus Morbi tempus, odio suscipit efficitur vestibulum
          </li>
          <li className='roboto-light py-2'>Ut in ante et quam malesuada gravida. Morbi tempus, odio suscipit
          </li>
          
         
          </ul>
            </div>
            <div className="col-12 col-md-6">
           <div className="container">
           <h5 className='poppins-bold'>Property Benebfits

</h5>

<li className='roboto-light py-2'>Sed lectus vehicula mollis. Ut in ante et quam malesuada gravida.
</li>
<li className='roboto-light py-2'>Reget nec nunc. Etiam posuere iaculis quam.
</li>
<li className='roboto-light py-2'>Faucibus viverra eget nec nunc. Etiam posuere iaculis quam.
</li>
<li className='roboto-light py-2'>Integer ac nunc sed lectus vehicula mollis in ante et gravida.
</li>
<li className='roboto-light py-2'>Morbi tempus, odio suscipit efficitur vestibulum
</li>
           </div>
            </div>
            
          </div>
     </div>

    
     <div data-aos="fade-up" data-aos-duration="1000" className="div d-flex align-items-center justify-content-center">
          <video autoPlay loop muted className='video-master d-flex align-items-center justify-content-center'>
      <source src="/assets/images/master/0804.mp4" type="video/mp4">
    </source></video>
          </div>



<div data-aos="fade-up" data-aos-duration="1000" className="container">
    <p className='roboto-light my-5'>Considered an invitation do introduced sufficient understood instrument it. Of decisively friendship in as collecting at. No affixed be husband ye females brother garrets proceed. Least child who seven happy yet balls young. Discovery sweetness principle discourse shameless bed one excellent. Sentiments of surrounded friendship dispatched connection is he. Me or produce besides hastily up as pleased. Bore less when had and john shed hope.

</p>
<p className='roboto-light py-4'>
Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.


</p>
</div>
      <div data-aos="fade-up" data-aos-duration="1000" className="container">
      <div className="aparment-description-end my-5">
            <div className="container">
            <p className=' px-3 roboto-light '>Song such eyes had and off. Removed winding ask explain delight out few behaved lasting</p>
            <h3 className='px-3 roboto-bolds'>Zaga Construction Lead Engineer
            </h3>
            </div>




          </div>
      </div>
    </>
  )
}

export default Homepark