import React from 'react'
import Button from './Button'

const Family2:React.FC = () => {

  return (
    <>
<div className="umumifamily">
    <div className="container">
        <div className="row">
            <div  data-aos="fade-up" data-aos-duration="1000" className="family2-right-side  ">
              <div className="container">
                <div className="yazılar py-4 my-4">
                  <h2 className=' aile-h2 roboto-bolds py-2'>06</h2>
                  <h2 className='playfair-display  text-light aile-h002 '><span className='aile-h02 '>Homepark  </span>Living  Spaces</h2>
                  <h2  className='roboto-bold text-light py-3'>Are you interested to Homepark</h2>
                  <p className='text-light py-3'>The sun collectors, shall provide the electricity of the social areas of the site and shall do its part for protecting the environment.</p>
                  <Button inTextBtn='SCHEDULE A VISIT'/> 

                </div>
              </div>

            </div>
        </div>
    </div>
</div>
<div className="xeberlerin">
<div className="container">
<h2 className='roboto-bolds static-num'>07</h2>
                <h2 className='playfair-display py-2'><span className='gallery-h3'>Homepark</span> Living Spaces </h2>
                <p className='poppins-bold male py-2'>SMALLER MALE CONES </p>
</div>
</div>
</>
  )
}

export default Family2