import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import "./subaccordian.css"
const SubAccordian = ({ day, description, activities }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {day} DAY - {description}
        </h4>
        <button className='btn' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <ul className="activities">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>}
    </article>
  )
}

export default SubAccordian
