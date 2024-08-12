import React from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

const FAQ:React.FC = () => {
  return (
    <>
    <div   className='contact-links'>
        <div className="container">
          <h1 data-aos="fade-up" className='playfair-display py-4 sales-offices-h1'><span className=''>Sales Offices</span></h1>
          <h5 data-aos="fade-up" className='text-light roboto-light'>
            The smaller male cones release pollen, which fertilizes the female
          </h5>
        </div>
      </div>

      <div data-aos="fade-up" className="container">
        <div className="avabile-link d-flex align-items-center">
          <h6 className='text-light poppins-bold'>
            Start <FaAnglesRight className='double-left-icon' /> 
            <span className='pages-double  pages-double-small px-1'>Pages</span> <FaAnglesRight className='double-left-icon double-left-icon-small ' /> 
            <span className='px-3 contact-link-contact'>Sales Ofice</span>
          </h6>
        </div>
      </div>
    
    </>
  )
}

export default FAQ