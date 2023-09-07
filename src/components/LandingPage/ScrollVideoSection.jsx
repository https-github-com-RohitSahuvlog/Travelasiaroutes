import React from "react";
import "../../css/ScrollVideoSection.css";

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
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
          className="video-section-video"
        ></video>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          controls
          className="video-section-video"
        ></video>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          controls
          className="video-section-video"
        ></video>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          controls
          className="video-section-video"
        ></video>
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          controls
          className="video-section-video"
        ></video>
      </div>
    </div>
  );
}
