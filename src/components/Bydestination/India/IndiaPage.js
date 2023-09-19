import React from "react";
import styles from "./india.module.css";
import Tap from "./Tap";
import IndiaCarousal from "./indiacarousel";
import { useParams } from "react-router-dom";
import data from "../countrydata"

const IndiaPage = () => {
    const { countryname } = useParams();
    console.log(countryname, "countryname", "data", data)

    const { country, ...remaindata } = data[`${countryname}`]

    return (
        <>
            <div className={styles.mainCon}>
                <IndiaCarousal />
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

                <Tap item={remaindata} />
                <div className={`${styles["bg-blue rounded "]} ${styles.classic}`}>
                    <div className={`${styles["row text-center bs-md:flex items-center"]} ${styles.classicdiv}`}>
                        <div className={`${styles["col-md-8 bs-md:mb-0"]} `}>
                            <h2 className={styles.h3}>CLASSIC INDIA STARTING AT $18,200 PER PERSON</h2>
                        </div>
                        <div className={styles["col-md-4 static"]}>

                            <a className={`${styles["btn btn-sm btn-outline-gold mt-1"]} ${styles.bttn1}`}>SEE ITINERARY</a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndiaPage;