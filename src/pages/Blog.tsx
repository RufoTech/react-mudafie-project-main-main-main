import React,{useState}from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

const Blog:React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
  return (
 <>
  <div className='contact-links'>
        <div className="container">
          <h1 data-aos="fade-up" className='playfair-display py-4 sales-offices-h1'>
            <span className=''>Testimonials</span>
          </h1>
          <h5 data-aos="fade-up" className='text-light roboto-light'>
            The smaller male cones release pollen, which fertilizes the female
          </h5>
        </div>
      </div>

      <div data-aos="fade-up" className="container">
        <div className="avabile-link d-flex align-items-center">
          <h6 className='text-light poppins-bold'>
            Start <FaAnglesRight className='double-left-icon' /> 
            <span className='pages-double pages-double-small px-1'>Pages</span> 
            <FaAnglesRight className='double-left-icon double-left-icon-small ' /> 
            <span className='px-3 contact-link-contact'>Blog</span>
          </h6>
        </div>
      </div>

    <div className="container">
   <div className="row">
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   <div className="testimonial-card col-12 col-md-6 col-lg-4">
      <div className="testimonial-card-header">
        <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
        <div className="testimonial-card-info">
          <h3 className="testimonial-card-name">Sasha Alexander</h3>
          <p className="testimonial-card-title">Fullstack Developer</p>
        </div>
      </div>
      <p className="testimonial-card-text">
        I've had the pleasure of using this product for the past few months, and I must say, it's a game-changer. As a developer, I appreciate tools that not only streamline my workflow but also enhance my productivity.
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
   </div>

    </div>


 </>
  )
}

export default Blog