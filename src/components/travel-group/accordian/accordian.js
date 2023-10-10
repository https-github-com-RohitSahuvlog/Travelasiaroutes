import React, { useState } from 'react'
import "./myaccordon.css"
import { DummyData } from './jsondata';
import SingleAccordian from './Question';

const MyAccordion = () => {
  return (
    <main>
      <div className='container'>
        <section className='info'>
          {DummyData.map((question) => (
            <>
              <SingleAccordian key={question.id} {...question} />

            </>
          ))}

        </section>

      </div>
    </main>
  )
}

export default MyAccordion
