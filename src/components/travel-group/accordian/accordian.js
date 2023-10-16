import React, { useState } from 'react'
import "./subaccordian.css";
import SubAccordian from './subaccordian';

const MyAccordion = ({ AccordianData }) => {
  console.log(AccordianData)
  return (
    <main>
      <div className='container'>
        <section className='info'>
          {AccordianData.map((question) => (
            <>
              <SubAccordian key={question.id} {...question} />

            </>
          ))}

        </section>

      </div>
    </main>
  )
}

export default MyAccordion
