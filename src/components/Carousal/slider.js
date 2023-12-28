import React, { useState, useEffect, useRef } from "react";
import "../../css/LandingCarousal.css";
import { CircularProgress } from "@mui/material";

const Slide = ({ image, heading, para, isActive }) => (
    <div
        className={`landingslide-section ${isActive ? "active" : ""}`}
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <div className="landingcontent">
            {heading && <h2>{heading}</h2>}
            {para && <p>{para}</p>}
        </div>
    </div>
);

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const Slider = ({ carousalData }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const imagePromises = carousalData.map((slide) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = slide.image;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => setImagesLoaded(true))
            .catch(() => setImagesLoaded(false));
    }, []);

    useInterval(() => {
        if (imagesLoaded) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % carousalData.length);
        }
    }, 5000);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    if (!imagesLoaded) {
        return (
            <div className="landingloading-container">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="landinglanding-carousal">
            {carousalData.map((slide, index) => (
                <Slide
                    key={index}
                    image={slide.image}
                    heading={slide.heading}
                    para={slide.para}
                    isActive={index === activeIndex}
                />
            ))}
            <div className="landingdots">
                {carousalData.map((_, index) => (
                    <div
                        key={index}
                        className={`landingdot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;