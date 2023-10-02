import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ScrollHighlightNavbar.module.css';

const ScrollHighlightNavbar = ({ navHeader }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Create an array to store the offsets of each header
      const offsets = navHeader.map((header) => {
        // Check if headerRef and its current property are defined
        if (header.headerRef && header.headerRef.current) {
          return {
            headerRef: header.headerRef,
            offsetTop: header.headerRef.current.offsetTop,
          };
        }
        // Return a default offset if headerRef is not defined or null
        return {
          headerRef: null,
          offsetTop: 0,
        };
      });

      // Find the nearest section based on the current scroll position
      let nearestIdx = 0;
      let nearestOffset = Math.abs(offsets[0].offsetTop - currentPosition);

      for (let i = 1; i < offsets.length; i++) {
        const offset = Math.abs(offsets[i].offsetTop - currentPosition);
        if (offset < nearestOffset) {
          nearestIdx = i;
          nearestOffset = offset;
        }
      }

      setActiveIndex(nearestIdx);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navHeader]);

  return (
    <div className={styles.navContainer}>
      {navHeader.map((header, index) => (
        <a
          key={header.headerID}
          className={styles.navlink}
          style={{
            backgroundColor: activeIndex === index ? 'gray' : 'white',
            color: activeIndex === index ? 'white' : 'gray',
            textDecoration: 'none',
          }}
          href={`#${header.headerID}`}
        >
          {header.headerTitle}
        </a>
      ))}
    </div>
  );
};

ScrollHighlightNavbar.propTypes = {
  navHeader: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string.isRequired,
      headerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
      headerTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScrollHighlightNavbar;
