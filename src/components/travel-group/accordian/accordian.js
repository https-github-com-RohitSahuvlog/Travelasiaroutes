import React, { useState } from 'react'
import "./subaccordian.css";
import SubAccordian from './subaccordian';

const MyAccordion = ({ AccordianData }) => {
  const [expandedStates, setExpandedStates] = useState(
    AccordianData.map(() => false)
  );

  const handleToggleAll = () => {
    setExpandedStates((prevStates) => prevStates.map((state) => !state));
  };

  const handleToggle = (index) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <main>
      <div className='btncontainer'>
        <button className='expand-btn' onClick={handleToggleAll}>
          {expandedStates.every((state) => state)
            ? 'Collapse All'
            : 'Expand All'}
        </button>
      </div>
      <div className='container'>

        <section className='info'>
          {AccordianData.map((question, index) => (
            <>
              <SubAccordian key={question.id} {...question}
                isExpanded={expandedStates[index]}
                onToggle={() => handleToggle(index)}
              />
            </>
          ))}

        </section>

      </div>
    </main>
  )
}

export default MyAccordion
