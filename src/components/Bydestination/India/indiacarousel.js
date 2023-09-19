import React, { useState, useEffect } from "react";
// import "./LandingCarousal.css";
import "./CoutryCarousal.css";
import { CircularProgress } from "@mui/material";
// import tanjortemple from "../../images/tanjoretemple.jpg";
const carousalData = [
    {
        image: `https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694966249/india/evrmrmyjcumye4aanbdo.jpg`,
        heading: "Pioneering Excellence Across MEA.",
        para: "Crafting Extraordinary Journeys",
    },
    {
        image:
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694965172/india/cswiccwa4eyb00g3qizi.jpg",
        heading: "Unlocking Your Travel DNA",
        para: "Tailoring Experiences Just for You.",
    },
    {
        image:
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694966252/india/f7hgpxpisydyrobrrniz.jpg",
        heading: "Once-in-a-Lifetime Memory",
        para: "A Symphony of Culture, Luxury and Discovery.",
    },
    {
        image:
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694965171/india/f9tjd5jbtndgffsxhkt0.jpg",
        heading: "Unleash Wanderlust",
        para: "Your Path to Untouched Destinations",
    },
    {
        image:
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694966238/india/jybxsi89dp5d9pvid089.webp",
        heading: "Guiding Beyond Maps",
        para: "Authentic Encounters with Exceptional Local Leaders",
    },

    {
        image:
            "https://res.cloudinary.com/dg5dkcpkn/image/upload/v1694966450/india/saaret2jblmkpbb6xenb.jpg",
        heading: "",
        para: "",
    },
];

const IndiaCarousal = () => {
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

    useEffect(() => {
        if (imagesLoaded) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % carousalData.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [imagesLoaded]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    if (!imagesLoaded) {
        return (
            <div className="loading-container">
                <CircularProgress />
            </div>
        );
    }
    return (
        <div className="landing-carousal">
            {carousalData.map((slide, index) => (
                <div
                    key={index}
                    className={`slide-section ${index === activeIndex ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                </div>
            ))}
            <div className="dots">
                {carousalData.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default IndiaCarousal;
