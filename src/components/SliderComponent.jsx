import React, { useState } from 'react'
import "../css/SliderComponent.css"
export default function SliderComponent() {
    const text = [
        {
            "name":"Welcome To ASIA",
            "job":"Travelling Vlog",
            "image":"whyusbg.jpg",
            "para" : "Traveling opens doors to new cultures, landscapes, and experiences. It broadens perspectives, fosters personal growth, and creates lasting memories that enrich the tapestry of life's journey.",
            "imageTitle" : "Sachin Image",
            "link" : "#",
        },
        {
            "name":"Welcome To Nepam",
            "job":"Travelling Vlog",
            "image":"AboutUsSectionBg.jpg",
            "para" : "Traveling opens doors to new cultures, landscapes, and experiences. It broadens perspectives, fosters personal growth, and creates lasting memories that enrich the tapestry of life's journey.",
            "imageTitle" : "Vikas Image",
            "link" : "#",


        },
        {
            "name":"Welcome To Sri Lanka",
            "job":"Travelling Vlog",
            "image":"nepal.jfif",
            "para" : "Traveling opens doors to new cultures, landscapes, and experiences. It broadens perspectives, fosters personal growth, and creates lasting memories that enrich the tapestry of life's journey.",
            "imageTitle" : "Manihsha Image",
            "link" : "#",


        },
        {
            "name":"Welcome to Kailash",
            "job":"Travelling Vlog",
            "image":"kailash.jfif",
            "para" : "Traveling opens doors to new cultures, landscapes, and experiences. It broadens perspectives, fosters personal growth, and creates lasting memories that enrich the tapestry of life's journey.",
            "imageTitle" : "Sameer Image",
            "link" : "#",

        },
    ]
    let i = 0;
    const [counter , setCounter] = useState(0);
    const [myText , setMyText] = useState(text[counter]);
    const previousSlide = () => {
        if(counter>0){
            setCounter(counter-1);
        }else{
            setCounter(text.length-1);
        }
        setMyText(text[counter]);
        console.log(myText);
    }
    const nextSlide = () => {
        if(counter<text.length-1){
            setCounter(counter+1);
        }else{
            setCounter(0);
        }
        setMyText(text[counter]);
        console.log(myText);
    }


  return (
    <div className='slider-component'>
        <div className="previous-btn move-btn" onClick={previousSlide}>Previous</div>
        <div className="slides">
            <img src={require(`../images/${myText.image}`)} alt={myText.imageTitle} />
            <div className="slides-text">
                 <h2>{myText.name}</h2>
                 <h4>{myText.job}</h4>
                 <p>{myText.para}</p>
                 <a href={myText.link} className="btn-a btn-a-solid">Read Article</a>
            </div>
        </div>
        <div className="next-btn move-btn" onClick={nextSlide}>Next</div>
    </div>
  )
}
