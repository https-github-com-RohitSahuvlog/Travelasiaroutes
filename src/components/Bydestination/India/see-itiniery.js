import React, { useEffect, useState } from 'react';
import styles from './SeeItiniery.module.css';
import { useParams } from "react-router-dom";
import Axios from "../../../api";

const SeeItiniery = () => {
    const { countryname } = useParams();
    const [itineraryData, setItineraryData] = useState(null);
    useEffect(() => {
        Axios.get(`/api/countries/get-country?country=${countryname}`)
            .then((response) => {
                setItineraryData(response.data.itineraryDayData);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });

    }, [countryname]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.pageSection}>
                <h2 className={`${styles.daybyday} h1`}>
                    Day-by-Day
                </h2>

                {itineraryData && itineraryData.map((day) => (
                    <div key={day.id} className={`mx-auto ${styles.mt12} ${styles.maxW2xl}`} id={`day-${day.id}`}>
                        <div className="flex items-end justify-between">
                            <h3 className={`${styles.mb0} ${styles.day1}`}>Day {day.day}</h3>
                        </div>

                        <h4 className={`${styles.h3} ${styles.goldLinedTop} ${styles.mt5} ${styles.block} ${styles.pt_6} ${styles.textBlack}`}>
                            <div className={`${styles.mt5}`}>{day.location}</div>
                        </h4>

                        <div className={`${styles.mt5} ${styles.leadingNormal}`}>
                            <p>{day.activities}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeeItiniery;
