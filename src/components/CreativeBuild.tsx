import React from 'react'

const CreativeBuild:React.FC = () => {
  return (
   <div className="creative-build creative-build-background py-5">
     <div className='container '>
        <div className="row">

        <div className="creative-build-left-side col-12 col-md-6 ">
            <img src="/assets/images/Builds/creative-build-edited-2.png" alt=""  className='creative-build-img w-100'/>

        </div>
        <div className="creative-build-right-side col-12 col-md-6 ">
            <h2 className='roboto-bolds'>01</h2>
            <h1 className='playfair-display'> <span className='pozniaky'>Pozniaky</span> Construction LLC</h1>
            <h2 className='text-dark py-2 living-h2'>Living spaces for creative peoples</h2>
            <h4 className='py-3 playfair-display smaller-h4'>The smaller male cones release pollen,<br /> which fertilizes the female</h4>
            <div className="see-projects py-2 d-flex ">
              <img src="/assets/images/Builds/icon-m2.png" alt="" />
              <a href="" className='text-decoration-none'><h4 className='px-4  text-dark see-project-link  '>See our projects</h4></a>
            </div>

        </div>
        </div>
        
    </div>
   </div>
  )
}

export default CreativeBuild