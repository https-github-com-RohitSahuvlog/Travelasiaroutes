import React from 'react'
import "../css/card.css"
export default function Card(props) {
  return (
    <div className='testimonial-card'>
      <img src={props.image} alt="" />
      <div className="testimonial-card-overlay">
        <h4>{props.name}</h4>
        <p>{props.para}</p>
      </div>
    </div>
  )
}
