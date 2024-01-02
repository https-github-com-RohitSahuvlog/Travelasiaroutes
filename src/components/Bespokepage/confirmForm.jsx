import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import styles from "../../css/confirmForm.module.css";

const ConfirmForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Box className={styles.subcontent}>
            <Box sx={{ maxWidth: "600px", color: "#494949" }}>
                <h2
                    className={styles.header}
                >
                    Start Planning Your Trip
                </h2>
            </Box>
            <Box sx={{ textAlign: "center" }} className={styles.text}>
                Thank you for your information. One of our expert Travel Advisors will be in touch shortly to confirm your trip details.
            </Box>


        </Box>
    )
}

export default ConfirmForm