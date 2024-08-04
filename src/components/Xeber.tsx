import React from 'react'

interface xeberProps{
  xeberTitle:string,
  xeberImg:string,
  xeberDate:string
  xeberParagraph:string
}
 
const Xeber:React.FC<xeberProps> = ({xeberTitle,xeberImg,xeberDate,xeberParagraph}) => {
  return (
    <div className='xeberler '>
        <div className="container">
            
               
                <div className="xeber">
                  <img src={xeberImg} alt=""  className='w-100 py-3'/>
                  <p  className='poppins-bold male'>{xeberDate}</p>
                  <a href="" className='text-decoration-none'><h5 className='text-dark poppins-bold title '>{xeberTitle}</h5>  </a>
                
                  <p> {xeberParagraph}</p>

                </div>
        
                
               
            </div>
     
    </div>
  )
}

export default Xeber