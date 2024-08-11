import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rooms: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState('/assets/images/Homeplan/plan01.jpg');

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="rooms py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="room-left-side col-12 col-md-6">
            <h2 className='roboto-bolds static-num'>05</h2>
            <h1 className='playfair-display'><span className='gallery-h3'>Homepark</span> Living Spaces</h1>
            <h2 className='poppins-bold py-3'>Decorated Flats in Pozniaky - Kiev</h2>
            <p>We are waiting for you in our sales office for <br /> having all these opportunities with affordable <br /> prices and appropriate payment <br /> opportunities.</p>
            <h5 className='poppins-bold py-2'><span className='color'>Total area:</span> <span className='square'>680 metre square </span></h5>
            <h5 className='poppins-bold py-2'><span className='color'>Total floor:</span> <span className='square'>24 Floor </span></h5>
            <h5 className='poppins-bold py-2'><span className='color'>Parking lot:</span> <span className='square'>5 Large </span></h5>
            <h5 className='poppins-bold py-2'><span className='color'>Social area:</span> <span className='square'>680 m&sup2; </span></h5>
          </div>
          <div className="room-right-side col-12 col-md-6 py-5">
            <div className="row">
              <div className="room-length1 col-4 col-md-4 col-lg-4 py-2">
                <button onClick={() => setSelectedImage('/assets/images/Homeplan/plan01.jpg')}>
                  <h5 className='poppins-bold'>2 Rooms 47m&sup2;</h5>
                </button>
              </div>
              <div className="room-length2 col-4 col-md-4 col-lg-4 py-2">
                <button onClick={() => setSelectedImage('/assets/images/Homeplan/plan02.jpg')}>
                  <h5 className='poppins-bold'>2 Rooms 65m&sup2;</h5>
                </button>
              </div>
              <div className="room-length3 col-4 col-md-4 col-lg-4 py-2">
                <button onClick={() => setSelectedImage('/assets/images/Homeplan/plan03.jpg')}>
                  <h5 className='poppins-bold'>3 Rooms 90m&sup2;</h5>
                </button>
              </div>
            </div>
            <img src={selectedImage} alt="Room Plan" className='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
