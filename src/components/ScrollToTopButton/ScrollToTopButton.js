import React, { useState, useEffect } from 'react';
import { FaArrowTurnUp } from "react-icons/fa6";

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
        <div
            style={{
                position: 'fixed',
                bottom: '77px',
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
    );
};

export default ScrollToTopButton;
