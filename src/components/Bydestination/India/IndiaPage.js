import React, { useEffect, useState } from "react";
import styles from "./india.module.css";
import Tap from "./Tap";
import IndiaCarousal from "./indiacarousel";
import { useParams } from "react-router-dom";
import Axios from "../../../api";

const IndiaPage = () => {
    const { countryname } = useParams();
    const [countryData, setCountryData] = useState(null);
    useEffect(() => {
        Axios.get(`/api/countries/get-country?country=${countryname}`)
            .then((response) => {
                setCountryData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });

    }, [countryname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={styles.mainCon}>
                <IndiaCarousal carousalData={countryData?.carousalimages || []} />
                <h1 className={styles.page_section}>{countryname}</h1>
                <div className={styles.tabs_Page}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles["col-12 col-sm-10 offset-sm-1 px-0"]}>
                                <div className={styles.nav_tabs}>

                                </div>
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                {countryData && <Tap item={countryData} />}
                {/* <div className={`${styles["bg-blue rounded "]} ${styles.classic}`}>
                    <div className={`${styles["row text-center bs-md:flex items-center"]} ${styles.classicdiv}`}>
                        <div className={`${styles["col-md-8 bs-md:mb-0"]} `}>
                            <h2 className={styles.h3}>CLASSIC INDIA STARTING AT $18,200 PER PERSON</h2>
                        </div>
                        <div className={styles["col-md-4 static"]}>

                            <a className={`${styles["btn btn-sm btn-outline-gold mt-1"]} ${styles.bttn1}`}>SEE ITINERARY</a>

                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default IndiaPage;