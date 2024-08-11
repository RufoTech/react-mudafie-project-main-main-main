import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom';

const Error:React.FC = () => {
  return (
    <div className="container error-section">
      <div className=' d-flex align-items-center justify-content-center '>
      <img src="/assets/images/xeta/error404.png" alt="" className='error' />
      
      
    </div>
    <h1 className='text-center poppins-bold '>PAGE NOT FOUND</h1>
    <h5 className='text-center poppins bold py-3'>Looks like something gone wrong <br />
    Relax sometimes this could happens to visitors</h5>
   <div className="error-button text-center py-5">
   <Link to=""><Button inTextBtn={'GO HOMEPAGE'}/></Link>
   </div>
    </div>
  )
}

export default Error