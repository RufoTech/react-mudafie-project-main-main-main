import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Family:React.FC = () => {
 
  return (
    <div className="family py-5 my-5">
    <div className="container">
    <div className="row">
        <div className="family-left-side col-12 col-md-6">
          <img src="/assets/images/Family-photos/Family.png" alt=""  className='w-100'/>

        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="family-right-side col-12 col-md-6 ">
          <h2 className='roboto-bolds static-num '>04</h2>
          <h2 className='playfair-display homepark-living'><span className=' family-h2'>Homepark</span> Living Spaces</h2>
          <h2 className='poppins-bold py-3'>Decorated Flats in Pozniaky - Kiev</h2>
          <h6 className='playfair-display female-h6 '>The smaller male cones release pollen, which fertilizes the female</h6>
          <div className="bank py-5 ">
            <img src="/assets/images/Bank/bank1.jpg" alt="" className='bank1' />
            <img src="/assets/images/Bank/bank2.jpg" alt="" className='bank2' />
          </div>
          <div className="calculator d-flex align-items-center ">
            <img src="/assets/images/Family-photos/icon-calculator.png" alt=""  className='calculator-icon '/>
            <a href="" className='px-4 calculator-h4'><h4 className=' space-calculator'>Living Space Calculator <FaChevronRight className='fa-chevron-right'/>  </h4> </a>
          </div>


        </div>
      </div>
    </div>
    </div>
  )
}

export default Family