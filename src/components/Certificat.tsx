import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Certificat:React.FC = () => {
    useEffect(() => {
        AOS.init({
         
          easing: 'ease-in-out',
          once: true, 
        });
      }, []);
    
  return (
    <div  data-aos="fade-up" data-aos-duration="1500" className='sertifikat '>
        <div className="container">
            <div className="row align-items-center py-5 my-5">
                <div className="sertifikat-left-side col-12 col-md-3 py-3">
                    <h2 className='static-num roboto-bolds'>09</h2>
                    <h2 className='playfair-display sertifikat-h2'><span className='gallery-h3'>Property</span> Certificates</h2>
                    <p className='poppins-bold males py-2'>SMALLER MALE CONES </p>

                    


                </div>
                <div className="sertifikat-img col-12 col-md-2">
                        <img src="/assets/images/sertifikat/certificate01.jpg" alt="" />
                    </div>
                    <div className="sertifikat-img col-12 col-md-2">
                        <img src="/assets/images/sertifikat/certificate02.jpg" alt="" />
                    </div>
                    <div className="sertifikat-img col-12 col-md-2">
                        <img src="/assets/images/sertifikat/certificate03.jpg" alt="" />
                    </div>
                    <div className="sertifikat-img col-12 col-md-3">
                        <img src="/assets/images/sertifikat/certificate04.jpg" alt="" />
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default Certificat