import React, { useState, useEffect } from 'react';
import { FaArrowTurnUp, FaWhatsapp } from "react-icons/fa6";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '50px',
                    zIndex: '999',
                    opacity: isVisible ? '1' : '0',
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    cursor: 'pointer',
                }}
                onClick={scrollToTop}
            >
                <FaArrowTurnUp style={{ fontSize: "40px", backgroundColor: "#e4bd5a", color: "white", borderRadius: "50%", padding: "8px" }} />
            </div>
            <style>
                {`
                @keyframes moveUpDown {
                    0% {
                        transform: translateY(0); // Initial position
                    }
                    50% {
                        transform: translateY(5px); // Midway position
                    }
                    100% {
                        transform: translateY(0); // Back to initial position
                    }
                }

                .whatsapp-btn {
                    position: fixed;
                    bottom: 20px;
                    left: 40px;
                    z-index: 999;
                    background-color: #25d366;
                    color: white;
                    border-radius: 50%;
                    box-shadow: 2px 2px 3px #999;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: transform 0.2s ease;
                    animation: moveUpDown 2s infinite alternate;
                }

                .whatsapp-btn:hover {
                    transform: translateY(-5px);
                }
                `}
            </style>
            <a
                href="https://api.whatsapp.com/send?phone=918750970676&text=Embark%20on%20unforgettable%20adventures%20with%20Midasia%20Routes%20today!"
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp style={{ fontSize: "45px", color: "white", borderRadius: "50%", padding: "8px" }} />
            </a >
        </>
    );
};

export default ScrollToTopButton;
