import React from 'react'
interface shirketProps{
    shirketinLogosu:string
}
const Shirket:React.FC<shirketProps> = ({shirketinLogosu}) => {
  return (
    <div className='py-5 '><img src={shirketinLogosu} alt=""  className='shirket-logo'/></div>
  )
}

export default Shirket