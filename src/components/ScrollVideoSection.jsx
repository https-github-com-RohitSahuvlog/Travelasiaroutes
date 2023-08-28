import React from "react";
import "../css/ScrollVideoSection.css";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video5 from "../videos/festivalSectionVideo.mp4";
export default function ScrollVideoSection() {
  return (
    <div className="scroll-video-section">
      <h2>Inside Mid Asia Routes</h2>
      <span className="about-us-section-underline"></span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor iusto
        aspernatur veniam quasi illo.
      </p>
      <div className="scrollable-section">
        <video src={video1} controls className="video-section-video"></video>
        <video src={video2} controls className="video-section-video"></video>
        <video src={video3} controls className="video-section-video"></video>
        <video src={video4} controls className="video-section-video"></video>
        <video src={video5} controls className="video-section-video"></video>
      </div>
    </div>
  );
}
