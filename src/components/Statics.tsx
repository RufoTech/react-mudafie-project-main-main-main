import React, { useEffect, useState } from 'react';
import {ReactTyped} from 'react-typed';

const Statics: React.FC = () => {
  const [subwayMinutes, setSubwayMinutes] = useState(0);
  const [spaces, setSpaces] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  const animateValue = (start: number, end: number, duration: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleScroll = () => {
    const section = document.querySelector('.statik-melumatlar');
    if (section) {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible && !isAnimated) {
        setIsAnimated(true);
        animateValue(0, 45, 3000, setSubwayMinutes);
        animateValue(0, 28, 3000, setSpaces);
        animateValue(0, 30, 3000, setPercentage);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimated]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="static py-5 my-5">
      <div className="container">
        <div className="statik-melumatlar">
          <h3 className='roboto-bolds static-num text-center'>02</h3>
          <h2 className='playfair-display text-center py-4 static-property'>
            <span className='propetry-h2'>Homepark</span> Property
          </h2>
          <ReactTyped
            className='h2 npm-text'
            strings={[
              "Decorated Flats in Pozniaky - Kiev",
              "Decorated Flats in Pozniaky - React",
              "Decorated Flats in Pozniaky - Bootstrap",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div data-aos="fade-up" className="melumatlar py-5">
          <div className="row">
            <div className="melumat1 col-12 col-md-6 col-lg-3">
              <img src="/assets/images/Awards/icon-benefits01.png" alt="" className='' />
              <h6 className='roboto-bolds py-2'>Near To Subway</h6>
              <h1 ><span className='roboto-bolds'>{subwayMinutes}</span> <span className='melumat1-minute roboto-bold'>min</span> </h1>
            </div>
            <div className="melumat1 col-12 col-md-6 col-lg-3 py-3">
              <img src="/assets/images/Awards/icon-benefits02.png" alt="" className='' />
              <h6 className='roboto-bolds py-2'>Spaces in Pozniaky</h6>
              <h1><span className='roboto-bolds'>{spaces}</span> <span className='melumat1-minute roboto-bold'>+</span> </h1>
            </div>
            <div className="melumat1 col-12 col-md-6 col-lg-3 py-4">
              <img src="/assets/images/Awards/icon-benefits03.png" alt="" className='' />
              <h6 className='roboto-bolds py-2'>Spaces in Pozniaky</h6>
              <h1><span className='roboto-bolds'>{percentage}</span> <span className='melumat1-minute roboto-bold'>%</span> </h1>
            </div>
            <div className="melumat1 col-12 col-md-6 col-lg-3 py-2">
              <img src="/assets/images/Awards/icon-benefits05.png" alt="" className='' />
              <h6 className='roboto-bolds py-2'>Near To Subway</h6>
              <h1><span className='roboto-bolds'>{subwayMinutes}</span ><span className='melumat1-minute roboto-bold px-3'>min</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
