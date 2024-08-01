import React from 'react'


interface ButtonProps{
    inTextBtn:string
}
const Button:React.FC<ButtonProps> = ({inTextBtn}) => {
  return (
  
    <button className="custom-button">{inTextBtn}
     <span className="arrow">›</span>
  </button>
  )
}

export default Button