import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";



function MyGallery({ JapanImages }) {

    const galleryOptions = {
        disableFullscreen: true,
        showNav: false,
        showPlayButton: false,
    };
    return <div className="w-[100%] h-auto "> <ImageGallery items={JapanImages}  {...galleryOptions} />
    </div>;
}

export default MyGallery;
