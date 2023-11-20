import React from "react";
import "../../css/ScrollVideoSection.css";

const videoUrls = [
  "https://res.cloudinary.com/dxhoawdbh/video/upload/v1700374712/VID-20231119-WA0003_m7urrc.mp4",
  "https://res.cloudinary.com/dxhoawdbh/video/upload/v1700374695/WhatsApp_Video_2023-11-19_at_11.18.44_n0nefh.mp4",
  "https://res.cloudinary.com/dxhoawdbh/video/upload/v1700374747/WhatsApp_Video_2023-11-19_at_11.24.21_dn4t12.mp4",
];

export default function ScrollVideoSection() {
  return (
    <div className="scroll-video-section">
      <h2 style={{ borderBottom: "3px solid   #e4bd5a" }}>
        Travel Inspiration : Discover, Dream, Wander, Repeat.
      </h2>
      <p>
        Unearth your inner wanderer, let the world's beauty be your muse. Seek
        adventure, create stories, and find inspiration in every corner.
      </p>
      <div className="scrollable-section">
        {videoUrls.map((url, index) => (
          <video key={index} src={url} controls className="video-section-video"></video>
        ))}
      </div>
    </div>
  );
}
