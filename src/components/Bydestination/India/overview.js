import React from 'react';
import styles from "./overview.module.css";
const Overview = ({ country, overviewlefth, overviewrighth }) => {
    return (
        <div className={styles.tab_overview}>
            <div className={styles.container}>
                <div className={styles.page_section2}>
                    <div className={styles["lead col-12 col-sm-10 offset-sm-1 flex items-center"]}>
                        <div className={`${styles["text_columns-2 w-full"]} ${styles.sect}`}>
                            <div className={styles.overviewtext}>
                                {overviewlefth}
                            </div>
                            <div className={styles.overviewtext}>
                                {overviewrighth}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}></div>
            </div>
        </div>
    )
}

export default Overview