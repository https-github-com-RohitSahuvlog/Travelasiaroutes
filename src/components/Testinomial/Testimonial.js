import styles from "./Testimonial.module.css";
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const TESTIMONIAL_DELAY = 3000;

const Testimonial = (props) => {
  const { testimonialData } = props;
  const refFeedbackParentDiv = useRef(null);
  const refButtonsParentDiv = useRef(null);
  const timeoutRef = useRef(null);
  const [delay, setDelay] = useState(6000);
  const [index, setIndex] = useState(0);

  useEffect(() => setDelay(TESTIMONIAL_DELAY), []);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.testimonialData.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => clearTimeout(timeoutRef.current);
  }, [props.testimonialData.length, index, delay]);

  const dotsHelper = (idx) => {
    if (refButtonsParentDiv.current === null) return;

    if (index === idx) {
      const arr2 = [...refFeedbackParentDiv.current.children];

      arr2.forEach((el, i) => {
        if (document.querySelector(`.feedbackText--${i}`))
          document
            .querySelector(`.feedbackText--${i}`)
            .classList.add(styles["not-visible"]);
      });

      arr2[index + 1].classList.remove(styles["not-visible"]);

      return styles["myDot--active"];
    }
  };

  const dotClickHandler = (arr, indx) => {
    setIndex(indx);
    arr.forEach((_, i) => {
      document
        .querySelector(`.feedbackText--${i}`)
        .classList.add(styles["not-visible"]);
      document
        .querySelector(`.buttonDot${i}`)
        .classList.remove(styles["myDot--active"]);
    });
    document
      .querySelector(`.feedbackText--${indx}`)
      .classList.remove(styles["not-visible"]);
    document
      .querySelector(`.buttonDot${indx}`)
      .classList.add(styles["myDot--active"]);
  };
  const generateStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <AiFillStar
            key={i}
            size={20}
            color="#E4BD5A"
            className="cursor-pointer"
          />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <BsStarHalf
            key={i}
            size={17}
            color="#E4BD5A"
            className="cursor-pointer"
          />
        );
      } else {
        stars.push(
          <AiOutlineStar
            key={i}
            size={20}
            color="#E4BD5A"
            className="cursor-pointer"
          />
        );
      }
    }
    return <div className="m-4"> {stars}</div>;
  };

  return (
    <div className={styles.maintestinomial}>

      <div className={styles.testinomialheader}>
        <h2>Our Client's Feedback</h2>
        <h3 style={{ fontSize: "18px", margin: "5px" }}>
          Here is a small selection of the kind words our clients have said about
          us recently.
        </h3>
      </div>
      <div className={`${styles["section-three-main-div"]} testimonial`}>

        <div
          ref={refFeedbackParentDiv}
          className={styles["section-three-sub-div-one"]}
        >
          <div
            className={`${styles["quotes-img"]} ${styles["quotes-img-right"]}`}
          />
          {testimonialData.map((el, i) => {
            return (
              <div
                key={i}
                className={`feedbackText--${i} ${styles["main-quotes-div"]} ${styles["not-visible"]}`}
              >
                <div className={styles.para}>{el.testimonial}</div>
                <div className={styles.subText}>{el.author}</div>
                {generateStars(el.rating)}
              </div>
            );
          })}
        </div>
        <div ref={refButtonsParentDiv}>
          {testimonialData.map((_, i, arr) => {
            return (
              <div
                name='change testimonial'
                key={i}
                className={`buttonDot${i} ${styles.myDot} ${index === i ? dotsHelper(i) : ""
                  }`}
                onClick={() => dotClickHandler(arr, i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Testimonial);
