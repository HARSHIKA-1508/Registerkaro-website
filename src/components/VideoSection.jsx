import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-content">
        <h2>Our Video Introductions</h2>
        <p>
          Discover how we bring ideas to life with our creative and innovative
          approach. Explore the possibilities and let us help you transform
          your vision into reality.
        </p>
        <div className="video-points">
          <span>Explore ideas together</span>
          <span>Bring those ideas to life</span>
        </div>
      </div>
      <div className="video-frame">
        {/* Replace the src URL with your video URL or embed link */}
        <iframe
          src="https://www.youtube.com"
          title="Video Introduction"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
