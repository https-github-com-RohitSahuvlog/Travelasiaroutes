import React from "react";
import Slider from "../../Carousal/slider";

const convertToNewFormat = (carouselData) => {
    return carouselData.map((item) => ({
        image: item.value,
        // heading: "Unlocking Your Travel DNA",
        // para: "Tailoring Experiences Just for You.",
    }));
};

const IndiaCarousal = ({ carousalData }) => {
    const convertedData = convertToNewFormat(carousalData);

    return (
        <div className="landing-carousal">
            <Slider carousalData={convertedData} />
        </div>
    );
};

export default IndiaCarousal;
