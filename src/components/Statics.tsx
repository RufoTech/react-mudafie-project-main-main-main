import React from 'react'

import { ReactTyped } from "react-typed";
const Statics:React.FC = () => {
 
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="static py-5 my-5">
        <div className="container ">
           <div className="statik-melumatlar">
           <h3 className='roboto-bolds static-num text-center'>02</h3>
            <h2 className=' playfair-display text-center py-4 static-property' ><span className='propetry-h2'>Homepark</span> Property</h2>
            <ReactTyped className=' h2 npm-text'
      strings={[
        "Decorated Flats in Pozniaky - Kiev",

        "Decorated Flats in Pozniaky - React",
        "Decorated Flats in Pozniaky -Bootstrap",
      ]}
      typeSpeed={40}
      backSpeed={50}
     
      loop
    >
      
    </ReactTyped>
           </div>
            <div data-aos="fade-up" className="melumatlar py-5">
              <div className="row">
                <div className="melumat1 col-12 col-md-6 col-lg-3">
                  <img src="/assets/images/Awards/icon-benefits01.png" alt="" className='' />
                  <h6 className='roboto-bolds py-2'>Near To Subway</h6>
                  <h1 ><span className='roboto-bolds'>28</span> <span className='melumat1-minute roboto-bold'>min</span> </h1>
                </div>
                <div className="melumat1 col-12 col-md-6  col-lg-3 py-3">
                  <img src="/assets/images/Awards/icon-benefits02.png" alt="" className='' />
                  <h6 className='roboto-bolds py-2'>Spaces in Pozniaky</h6>
                  <h1><span className='roboto-bolds'>28</span> <span className='melumat1-minute roboto-bold'>+</span> </h1> 
                 
                </div>
                <div className="melumat1 col-12 col-md-6 col-lg-3 py-4">
                  <img src="/assets/images/Awards/icon-benefits03.png" alt="" className='' />
                  <h6 className='roboto-bolds py-2'>Spaces in Pozniaky</h6>
                  <h1><span className='roboto-bolds'>15</span> <span className='melumat1-minute roboto-bold'>%</span> </h1>
                </div>
                <div className="melumat1 col-12 col-md-6  col-lg-3 py-2">
                  <img src="/assets/images/Awards/icon-benefits05.png" alt="" className='' />
                  <h6 className='roboto-bolds py-2'>Near To Subway</h6>
                  <h1><span className='roboto-bolds'>28</span ><span className='melumat1-minute roboto-bold px-3'>min</span></h1>
                </div>
             
               
               
              </div>
            </div>
            

        </div>
    </div>
  )
}

export default Statics