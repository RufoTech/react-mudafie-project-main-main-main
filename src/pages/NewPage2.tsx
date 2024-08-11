import React from 'react'
import { IoPricetagsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NewPage2:React.FC = () => {
  return (
    <>
    <div className="container author-text py-5 my-5">
        <div className="news-page-2-img  ">
        <img src="/assets/images/News/blog03.jpg" alt="" className='xeber2-img' />
        </div>
        <div className="authors  d-flex align-items-center">
                <img src="/assets/images/News/author01.jpg" alt=""  className='author'/>
                <h6 className='poppins-bold px-3'>By Steven Bradley</h6>
                </div>
                <div className=" ">
                <h4 className='py-4'>Webz hosted its annual construction’s conference yesterday and the <br /> main focus was to build a privacy platform more the eye is attracted.</h4>
                <div className="search-tag py-2 ">
                <IoPricetagsSharp  className='icon-tag'/>
                <a href="" className='text-dark poppins-bold'>webz</a>
                <a href="" className='text-dark poppins-bold'>internet</a>
                <a href="" className='text-dark poppins-bold'>conference</a>
                </div>

                </div>
    </div>
    <div className="container author-text py-5 my-5">
        <div className="news-page-2-img  ">
        <img src="/assets/images/News/blog04.jpg" alt="" className='xeber2-img' />
        </div>
        <div className="authors  d-flex align-items-center">
                <img src="/assets/images/News/author01.jpg" alt=""  className='author'/>
                <h6 className='poppins-bold px-3'>By Steven Bradley</h6>
                </div>
                <div className=" ">
                <h4 className='py-4'>Webz hosted its annual construction’s conference yesterday and the <br /> main focus was to build a privacy platform more the eye is attracted.</h4>
                <div className="search-tag py-2 ">
                <IoPricetagsSharp  className='icon-tag'/>
                <a href="" className='text-dark poppins-bold '>webz</a>
                <a href="" className='text-dark poppins-bold'>internet</a>
                <a href="" className='text-dark poppins-bold '>conference</a>
                </div>

                </div>
    </div>
    <div className="button-news py-5">
       <div className="container">
        <Link to="/new" className='text-decoration-none'>       <button className='button-page-2'><h6>1</h6></button> </Link>
       
       <a href="" className='text-decoration-none'>       <button className='button-page-1'><h6>2</h6></button>  </a>
     
       </div>
    </div>
    </>
  )
}

export default NewPage2