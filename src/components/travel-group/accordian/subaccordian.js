import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './subaccordian.css';

const SubAccordian = ({ day, description, activities, isExpanded, onToggle }) => {

  return (
    <article className='question'>
      <header>
        <h4 onClick={onToggle} className='question-title'>
          {day} DAY - <span dangerouslySetInnerHTML={{ __html: description }} />
        </h4>
        <button className='btn' onClick={onToggle}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>

      </header>
      {isExpanded && (
        <ul className='activities'>
          {activities.map((activity, index) => (
            <div dangerouslySetInnerHTML={{ __html: activity }} />
          ))}
        </ul>
      )}
    </article>
  );
};

export default SubAccordian;
