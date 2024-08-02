import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Gallery:React.FC = () => {
  return (
    <div className='gallery py-5 my-5'>
        <div className="container">
            <div className="row">
                <div className="gallery-left-side col-12 col-md-3">
                <h2 className='gallery-03 roboto-bolds'>03</h2>
                <h3 className='playfair-display gallery-property'><span className='gallery-h3 '>Property</span> Inner Gallery</h3>
                <h3 className='poppins-bold py-3 lux-living' >Lux Living Spaces in  Pozniaky - Kiev</h3>
              <a href="" className='all-gallery'>  <h6  className='poppins-bold text-dark  all-gallerys'>SEE ALL GALLERY <FaChevronRight className='fa-chevron-right' /> </h6> </a>

                </div>
               <div className="gallery-right-side col-12 col-md-3">
                <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='' />
               </div>
               <div className="gallery-right-side  col-12 col-md-3">
                <img src="/assets/images/Shirketler-reklam/bina-reklam-edited.jpg" alt=""  className=''/>
               </div>
               <div className="gallery-right-side  col-12 col-md-3">
                <img src="/assets/images/Shirketler-reklam/bina-reklam2.jpg" alt="" className='' />
               </div>

            </div>
        </div>
    </div>
  )
}

export default Gallery