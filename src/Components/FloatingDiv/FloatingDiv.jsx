import React from 'react'
import './FloatingDiv.css'
export const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingDiv">
      <img src={image} alt="crown_icon" />
      <span>{txt1} <br /> {txt2}</span>
    </div>
  )
}
