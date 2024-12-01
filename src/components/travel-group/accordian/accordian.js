import React, { useEffect, useState } from 'react';
import "./subaccordian.css";
import SubAccordian from './subaccordian';

const MyAccordion = ({ AccordianData }) => {
  const [expandedStates, setExpandedStates] = useState([]);

  // Initialize the expandedStates array when AccordianData changes
  useEffect(() => {
    setExpandedStates(AccordianData?.map(() => false));
  }, [AccordianData]);

  // Expand all items
  const handleExpandAll = () => {
    setExpandedStates(expandedStates.map(() => true));
  };

  // Collapse all items
  const handleCollapseAll = () => {
    setExpandedStates(expandedStates.map(() => false));
  };

  // Toggle individual item based on index
  const handleToggle = (index) => {
    setExpandedStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <main>
      <div className='acc-btn-container'>
        {expandedStates.every((state) => state)
          ?
          <button className='expand-btn' onClick={handleCollapseAll}>
            Collapse All
          </button> : <button className='expand-btn' onClick={handleExpandAll}>
            Expand All
          </button>
        }



      </div>
      <div className='container'>
        <section className='info'>
          {AccordianData.map((question, index) => (
            <SubAccordian
              key={index}
              {...question}
              isExpanded={expandedStates[index]}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default MyAccordion;
