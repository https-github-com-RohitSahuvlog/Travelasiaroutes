import React, { useState } from 'react'
import IndiaPage from './IndiaPage';
import Itineraries from './Itineraries';
import Overview from './overview';
import styles from "./tap.module.css";
const Tap = ({ item }) => {
    const [component, setComponent] = useState("overview");

    return (
        <div className="w-[100%] color-[#3C3D3D] bg-white">
            <div className={styles.buttons_container}>
                <button
                    onClick={() => setComponent("overview")}
                    className={
                        component === "overview" ? "button_active" : "button_inactive"
                    }>
                    OVERVIEW
                </button>
                <button
                    onClick={() => setComponent("itineraries")}
                    className={
                        component === "itineraries" ? "button_active" : "button_inactive"
                    }>
                    ITNERARIES
                </button>

            </div>
            <div className={styles.content_container}>
                {component === "overview" ? (
                    <Overview {...item} />
                ) : (
                    <Itineraries {...item} />
                )}
            </div>
        </div>
    )
}

export default Tap