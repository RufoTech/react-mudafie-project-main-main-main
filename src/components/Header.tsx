import React, { useRef, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaRegWindowClose,FaFacebook,FaTwitter,FaLinkedin, FaGooglePlusSquare,FaYoutube } from "react-icons/fa";
import { IoIosCloseCircleOutline,IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';




const Header: React.FC = () => {
  const casusElement = useRef<HTMLDivElement>(null);
  const mobileMenuElement = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbariAc = () => {
    if (casusElement.current) {
      casusElement.current.classList.add("aktiv");
    }
    setIsMenuOpen(true);
  };

  const navbariBagla = () => {
    if (casusElement.current) {
      casusElement.current.classList.remove("aktiv");
    }
    setIsMenuOpen(false);
  };

  const mobileNavbariAc = () => {
    if (mobileMenuElement.current) {
      mobileMenuElement.current.classList.add("aktive");
    }
  }
    const mobileNavbariBagla = () => {
      if (mobileMenuElement.current) {
        mobileMenuElement.current.classList.remove("aktive");
      }
      
    }

  return (
    <>
    
      <div className="sidebar" ref={casusElement}>
        <FaRegWindowClose className='close-icon ' onClick={navbariBagla} />

        <div className="mobile-links">
          <ul className='py-5 '>
            <img src="/assets/images/header/logo-light.webp" alt="" className='sidebar-logo ' />
            <p className='text-light py-4'>
              By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.
            </p>
            <div className="company">
              <div className="row">
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
                <div className="shirket1 col-12 col-md-4">
                  <img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' />
                </div>
           <div className="sidebar-contact">
           <p className='text-light py-3'>Kyiv | G. Stalingrada Avenue, 6 Vilnius | Antakalnio St. 17</p>
                <h4 className='text-light'>+380(98)298-59-73</h4>
               <a href="mailto:alekberovrufa@gmail.com" className='elaqe-gmail text-light'>alekberovrufa@gmail.com</a>
           </div>
           <div className="sidebar-socialmedia">
            <div className="row ">
              
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.facebook.com/login.php/"><FaFacebook  className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
             <a href="https://x.com/?lang=en"> <FaTwitter className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
             <a href="https://az.linkedin.com/"> <FaLinkedin className=''/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.google.co.uk/"><FaGooglePlusSquare className='text-danger'/></a>


              </div>
              <div className="socialmedia-icon col-12 col-md-2">
              <a href="https://www.youtube.com/"><FaYoutube className='text-danger'/></a>


              </div>
            </div>
           </div>
           <div className="copriyght  ">
           <p className='text-light'>© 2019 Homepark | Real Estate & Luxury Homes</p>
           </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="mobile-menu "ref={mobileMenuElement}>
      <IoIosCloseCircleOutline className='iconclose text-light' onClick={mobileNavbariBagla}/>

           <div className="mobiles-links text-light">
          <a href="" className='poppins-bold'>Start</a>
          <a href="" className='poppins-bold'>HOMPARK</a>
          <a href="" className='poppins-bold'>PAGES</a>
          <a href="" className='poppins-bold'>APARTMENTS</a>
          <a href="" className='poppins-bold'>FACILITIES</a>
          <a href="" className='poppins-bold'>NEWS</a>
          <a href="" className='poppins-bold'>CONTANCT</a>
          <a href="" className='poppins-bold'>CONTANCT</a>
          <a href="" className='poppins-bold'>CONTANCT</a>
          <a href="" className='poppins-bold'>CONTANCT</a>
          <a href="" className='poppins-bold'>CONTANCT</a>
        
           </div>
        </div>
      
      <nav className="navbar navbar-expand-lg my-background py-2 " >
        <div className="container">
          <Link  className="navbar-brand" to="/">
            <img src="/assets/images/header/logo-light.webp" alt="" className='header-logo ' />
          </Link>

          <button  onClick={mobileNavbariAc}className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <IoIosMenu />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <div className='contacts d-flex'>
                  <div className="contact-menu align-items-center justify-content-center px-2">
                    <a className="contact text-light" aria-current="page" href="tel:+994997080401">
                      <span>
                        <h5 className='roboto-bold number'>+380(98)298-59-73</h5>
                      </span>
                    </a>
                    <a href='mailto:alekberovrufa@gmail.com' className='mb-0 email'>
                      <h6 className='elaqe-gmail'>alakbarlirufo@gmail.com</h6>
                    </a>
                  </div>
                  <a href=""><img src="/assets/images/header/icon-phone.png" alt="" className='logo-icon' /></a>
                  <div className="language d-flex align-items-center justify-content-center">
                    <li className="nav-item">
                      <a className="nav-link text-light roboto-bold language-en" href="#"><h5 className='language-en'>EN</h5></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light roboto-bold " href="#"><h5 className='language-ua'>UA</h5></a>
                    </li>
                    <button onClick={isMenuOpen ? navbariBagla : navbariAc} className="fabars text-light d-flex align-items-center justify-content-center px-4">
                      {isMenuOpen ? <FaRegWindowClose /> : <CiMenuBurger />}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
      </nav>
     
      <div className="header-links ">
   <nav className="navbar navbar-expand-lg  ">
      <div className="container">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 link-background ">
            <li className="nav-item ">
              <Link  className="nav-link text-light " aria-current="page" to="/"><h6 className='roboto-bold  navigation-links px-3'>START</h6></Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link text-light" to="/hompark"><h6 className='roboto-bold px-3 navigation-links'>HOMEPARK</h6></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#"><h6 className='roboto-bold px-3 navigation-links'>PAGES</h6></a>
              <ul className="dropdown-menu">
            <li><Link className="dropdown-item poppins-bold" to="/salesoffices">Sales Offices</Link></li>
            <li><Link className="dropdown-item poppins-bold" to="/salesteam">Sales Team</Link></li>
            <li><Link  className="dropdown-item poppins-bold" to="faq">FAQ</Link></li>
            <li><Link className="dropdown-item poppins-bold" to="/blog">Testimonials</Link></li>
            <li><Link className="dropdown-item poppins-bold" to="/testimonials">Blog</Link></li>
          </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/apartment"><h6 className='roboto-bold px-3 navigation-links'>APARTMENTS</h6></Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link text-light" to="/facilities"><h6 className='roboto-bold px-3 navigation-links'>FACILITIES</h6></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/new"><h6 className='roboto-bold px-3 navigation-links'>NEWS</h6></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact"><h6 className='roboto-bold navigation-links '>CONTACT</h6></Link>
            </li>
            
           
         
           
           
            
          </ul>
         
        </div>
        
      </div>
    </nav>
 
      </div>
    </>
  )
}

export default Header;
