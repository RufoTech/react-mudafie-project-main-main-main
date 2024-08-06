import React,{useEffect} from 'react'
import { FaFacebook,FaTwitter,FaLinkedin, FaGooglePlusSquare,FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer:React.FC = () => {
    useEffect(() => {
        AOS.init({
         
          easing: 'ease-in-out',
          once: true, 
        });
      }, []);
  return (
    <>
    <div className="container">
            <div data-aos="fade-up" data-aos-duration="1000" className="footer-upside">
                <div className="row">
                    <div className="footer-upside-text d-flex align-items-center col-12 col-md-4 ">
                        
                        <img src="/assets/images/footer/footer-icon01.png" alt="" />
                        <div className="footer-text  align-items-center">
                        <h3  className='playfair-display text-light'>Address Infos</h3>
                        <h6 className='text-light py-2'>Kyiv | G. Stalingrada Avenue, 6  Vilnius | Antakalnio St. 17</h6>
                        </div>

                      
                    </div>
                   
                    <div className="footer-upside-text d-flex align-items-center col-12 col-md-4 ">
                        
                        <img src="/assets/images/footer/footer-icon02.png" alt="" />
                        <div className="footer-text  align-items-center">
                        <h3  className='playfair-display text-light'>Working Hours</h3>
                        <h6 className='text-light py-2'>Monday to Friday <span><a className='text-light roboto-bolds' href="">09:00 </a></span> to <span><a href="" className=' text-light roboto-bolds'>18:30 </a></span>Saturday we work until <span><a href="" className='text-light roboto-bolds'>15:30</a></span></h6>
                       
                        </div>

                      
                    </div>
                   
                    <div className="footer-upside-text d-flex align-items-center col-12 col-md-4 ">
                        
                        <img src="/assets/images/footer/footer-icon03.png" alt="" />
                        <div className="footer-text  align-items-center">
                        <h3  className='playfair-display text-light'>Sales Office</h3>
                        <h6 className='text-light  py-2'>Boryssa Himry 124 B Block Pozniaky
                        Kiev Oblast - Ukraine</h6>
                        </div>

                      
                    </div>
                   
                </div>
            </div>
           
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" className="footer ">
                <div className="container">
                   <div className="row">
                    <div className="footer-section col-12 col-md-4">
                    <img src="/assets/images/header/logo-light.webp" alt=""  className='footer-logo'/>
                    <p className='text-light py-4'>By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.</p>
                    </div>
                    <div className="footer-links col-12 col-md-2">
                        <a href="" className='text-decoration-none roboto-bold'> <p  className='text-light '>HOMPARK</p> </a>
                       
                        <a href="" className='text-decoration-none roboto-bold'><p className='text-light '>Apartments</p></a>
                        <a href="" className='text-decoration-none roboto-bold'><p className='text-light'>Facilities</p></a>
                        <a href="" className='text-decoration-none roboto-bold'> <p className='text-light'>News</p>   </a>
                        <a href="" className='text-decoration-none roboto-bold'>  <p className='text-light'>ContactK</p></a>
                     
                      
                    </div>
                    <div className="footer-links col-12 col-md-2">
                        <a href="" className='text-decoration-none roboto-bold'><p  className='text-light '>Suites</p></a>
                       <a href="" className='text-decoration-none roboto-bold'> <p className='text-light '>Apartments</p></a>
                        <a href="" className='text-decoration-none roboto-bold'><p className='text-light'>Villas & Houses</p></a>
                      <a href="" className='text-decoration-none roboto-bold'>  <p className='text-light'>Buituiqe Room</p></a>
                        <a href="" className='text-decoration-none roboto-bold'><p className='text-light building-footer'>Buildings</p></a>
                       
                    </div>
                    <div className="footer-section-2 col-12 col-md-4">
                       <h4 className='playfair-display text-light'>CALL CENTER </h4>
                       <h2 className='poppins-bold text-light py-2'>+380(98)298-59-73</h2>
                       <a href="mailto:alekberovrufa@gmail.com" className='text-decoration-none'><h5 className='footer-gmail'>alekberovrufa@gmail.com   </h5></a>
                       <div className="social-media">
                            <div className="row">
                               <div className="socialmedia-icon ">
                                <a href="">                               <FaFacebook className='text-light'/> </a>
                               
                               </div>
                               <div className="socialmedia-icon ">
                                <a href="">                               <FaTwitter className='text-light'/>    </a>
                            

                               </div>
                               <div className="socialmedia-icon ">
                                <a href="">< FaLinkedin className='text-light'/>     </a>
                           
                               </div>
                               <div className="socialmedia-icon">
                                <a href="">                               <FaGooglePlusSquare  className='text-light'/> </a>
                               
                               </div>
                               <div className="socialmedia-icon ">
                                <a href="">                               < FaYoutube className='text-light fa-youtube'/>   </a>
                             
                               </div>
                            </div>
                        </div>


                      
                    </div>
                   </div>

                   <div className="footer-end  my-3 py-3">
                   
                   </div>
                   <div className="footer-ends d-flex justify-content-between">
                    <h6 className='text-light'> © 2019 Homepark | Real Estate & Luxury Homes</h6>
                  
                      <div className=""><h6 className='text-light'> Site Created by Rufat Alakbarli </h6></div>
                  
                   </div>
                </div>
            </div>
            
    </>
  )
}

export default Footer