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
            <a
                href="https://api.whatsapp.com/send?phone=8750970676&text=Embark%20on%20unforgettable%20adventures%20with%20Midasia%20Routes%20today!"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '40px',
                    zIndex: '999',
                    backgroundColor: '#25d366',
                    color: 'white',
                    borderRadius: '50%',
                    textAlign: 'center',
                    boxShadow: '2px 2px 3px #999',
                    width: "45px",
                    height: "45px",
                    animation: 'pulse 1.2s infinite',
                    '@keyframes pulse': {
                        '0%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.1)' },
                        '100%': { transform: 'scale(1)' }
                    }
                }}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp style={{ fontSize: "45px", color: "white", borderRadius: "50%", padding: "8px" }} />
            </a>
        </>
    );
};

export default ScrollToTopButton;
