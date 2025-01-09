import React from "react";
import "./banner.css";
import hero from "../../../images/carpetbanner.png";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__text">
                <h2>
                    Heritage Masterpiece
                </h2>
            </div>
            <div className="banner__image">
                <img src={hero} alt="furniture" width="500px" />
            </div>
        </div>
    );
};

export default Banner;