
import styles from "./india.module.css";
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";


const Itineraries = ({ itineryheading, listing }) => {
    const navigate = useNavigate();
    let country = itineryheading.split(" ")[0]
    const handleSeeItineraryClick = () => {

        country = country.toLowerCase();
        navigate(`/classic/${country}`);
    };
    return (
        <>
            <div>
                <div className={styles.Itineraties}>
                    <div className={styles.row}>
                        <div className={styles["col-12"]}>
                            <h3 className={styles.itineraryh3}>{itineryheading}</h3>
                        </div>
                    </div>
                    <div className={styles["warp-t mb-4"]}>
                        <div id="show_itin_area">
                            <div className={styles["nav-md-12"]}>
                                <div className={styles.row2}>
                                    <div className={styles["col-3 nav-col cursor:pointer"]}>
                                        <a className={styles['active']}>ALL ITNERARIES</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.stab_itin_area} ${styles["display:block"]} `}>

                                {listing?.map((ele) => {
                                    return <div className={`${styles["row mb-12 md:mb-17"]} ${styles.rowBox}`}>
                                        <div className={`${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]} ${styles.rowfis}`}>
                                            <a>
                                                <img className={styles.images} src={ele.image} alt="" width="375" height="250" />
                                            </a>
                                        </div>
                                        <div className={`${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]} ${styles.rowMid}`}>
                                            <h2 className={`${styles.heading}`} title={ele.heading}>
                                                {ele.heading.slice(0, 80)}{ele.heading.length > 80 ? '...' : ''}
                                            </h2>
                                            <div className={`${styles["text-small my-6 hidden md:block"]} ${styles.ptext}`} title={ele.text}>
                                                {ele.text.slice(0, 150)}{ele.text.length > 150 ? '...' : ''}
                                            </div>
                                            <div className={styles["font-heading-book text-xsmall hidden md:block"]}>

                                                <div className={styles.ptext}>
                                                    <span className={styles.text_gold}> INTEREST </span>
                                                    {ele.interests} <br />
                                                    <span className={styles.text_gold}> DESTINATION </span>
                                                    {ele.destination}
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${styles.rowdiv3} ${styles["col-12 col-sm-3 col-md-4 mb-6 md:mb-0"]}`}>

                                            <div className={`${styles.rowdiv}`}>
                                                <dl className={`${styles["col-6 col-sm-12"]}`}>
                                                    <dt className={`${styles["h4 text-gold mb-1"]} ${styles.text_gold}`}>DURATION</dt>
                                                    <dd className={styles["text-small"]}>{ele.duration}</dd>
                                                </dl>
                                                <dl className={styles["col-6 col-sm-12"]}>
                                                    <dt className={`${styles["h4 text-gold mb-1"]} ${styles.text_gold}`}>PRICE PER PERSON</dt>
                                                    <dd className="text-small">{
                                                        ele.priceperperson
                                                    }</dd>
                                                </dl>
                                            </div>
                                            <div className="w-full h-full flex justify-center items-center text-center">
                                                <div className={`${styles["btn btn-sm btn-outline-gold "]} ${styles.bttn}`} onClick={handleSeeItineraryClick}>SEE ITINERARY</div>
                                            </div>
                                        </div>
                                    </div>
                                })
                                }

                            </div>
                        </div>
                    </div>
                    <div >
                        <input type="hidden" name="txttotalitin" value="33" />
                        <div className={styles.nav_bar}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itineraries;