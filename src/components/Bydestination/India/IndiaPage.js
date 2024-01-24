import React, { useEffect, useState } from "react";
import styles from "./india.module.css";
import Tap from "./Tap";
import IndiaCarousal from "./indiacarousel";
import { useParams } from "react-router-dom";
import Axios from "../../../api";
import { useNavigate } from "react-router-dom";

const IndiaPage = () => {
    const { countryname } = useParams();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState(null);
    useEffect(() => {
        Axios.get(`/api/countries/get-country?country=${countryname}`)
            .then((response) => {
                if (response.status === 404) {
                    navigate("/bespoke")
                }
                setCountryData(response.data);
            })
            .catch((error) => {
                navigate("/bespoke")
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

            </div>
        </>
    )
}

export default IndiaPage;