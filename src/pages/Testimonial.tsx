import React,{useState,useEffect} from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import Button from '../components/Button'
import axios from 'axios';


interface Post {
    id: number;
    title: string;
    body: string;
  }
const Testimonial:React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          setPosts(response.data.slice(0, 80)); 
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);


  return (
    
   <>
     <div className='contact-links'>
        <div className="container">
          <h1 data-aos="fade-up" className='playfair-display py-4 sales-offices-h1'>
            <span className=''>Blog</span>
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

      <div className="blog-upside">
        <div className="container">
            <div className="row">
                <div className="blog-upright-side  col-12  col-md-6" >
                    <h1 className='playfair-display'>A  Better Quality Build In <span className='gallery-h3'> Homepark</span> </h1>
                    <h5 className='roboto-light py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ratione repudiandae? Eum incidunt officiis non tempore unde fuga? Quas dolor nam ducimus dicta veniam corrupti possimus error placeat harum laborum?</h5>
                    <Button inTextBtn='Read More'/>
                    <div className="shared-post-man d-flex align-items-center">
                    <img src="/assets/images/News/author01.jpg" alt="Author" className="testimonial-card-image" />
                    <p>Sasha ● March,29 2024 ● Comments</p>

                    </div>
                    
                  
                </div>
                <div className="blog-upleft-side col-12 col-md-6">
                    <img src="/assets/images/introduction/ouse.jpg" alt="" className='' />

                </div>
            </div>
        </div>
      </div>
      
      <div className="container">
      <div className="blog-card-container">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <img src="/assets/images/introduction/home2.jpg" alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-description">{post.body}</p>
              <a href="#" className="blog-card-button">READ POST</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    
   </>
  )
}

export default Testimonial