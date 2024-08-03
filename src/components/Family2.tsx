import React from 'react'
import Button from './Button'

const Family2:React.FC = () => {
  return (
<div className="umumifamily">
    <div className="container">
        <div className="row">
            <div className="family2-right-side  ">
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
  )
}

export default Family2