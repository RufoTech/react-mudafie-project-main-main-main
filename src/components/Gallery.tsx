import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Gallery:React.FC = () => {
  return (
    <div className='gallery py-5'>
        <div className="container">
            <div className="row">
                <div className="gallery-left-side">
                <h2 className='gallery-03 roboto-bolds'>03</h2>
                <h1 className='playfair-display'><span className='gallery-h3 '>Property</span> Inner Gallery</h1>
                <h3 className='poppins-bold py-3'>Lux Living Spaces in  <br />Pozniaky - Kiev</h3>
              <a href="" className='all-gallery'>  <h6  className='poppins-bold text-dark  all-gallerys'>SEE ALL GALLERY <FaChevronRight className='fa-chevron-right' /> </h6> </a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Gallery