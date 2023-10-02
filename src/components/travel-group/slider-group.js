import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_ALA0340.jpg",
        thumbnail: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_ALA0340.jpg",
    },
    {
        original: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_APA0105.jpg",
        thumbnail: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_APA0105.jpg",
    },
    {
        original: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_CMI0145.jpg",
        thumbnail: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_CMI0145.jpg",
    },
    {
        original: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_APA0105.jpg",
        thumbnail: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF03_APA0105.jpg",
    },
    {
        original: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF46_ALA0299.jpg",
        thumbnail: "https://www.geoex.com/app/uploads/2019/08/west-africa-mystical-gallery-DanitaDelimont_RM_AF46_ALA0299.jpg",
    },
];

function MyGallery() {

    const galleryOptions = {
        disableFullscreen: true,
        showNav: false,
        showPlayButton: false,
    };
    return <div className="w-[100%] h-auto "> <ImageGallery items={images}  {...galleryOptions} />
    </div>;
}

export default MyGallery;
