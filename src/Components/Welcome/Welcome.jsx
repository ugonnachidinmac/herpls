import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const mediaSequence = [
    { type: "image", src: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605868/herplsImage1_o4jq2s.jpg" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png" },
    { type: "image", src: "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752508062/Image_15_cn6p7w.png" },
  ];

  useEffect(() => {
    let timer;
    const currentMedia = mediaSequence[currentIndex];

    if (currentMedia.type === "image") {
      timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaSequence.length);
      }, 2000);
    } else if (currentMedia.type === "video") {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
      timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
        setCurrentIndex((prev) => (prev + 1) % mediaSequence.length);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="bg-gray-400 min-h-screen flex items-center justify-center px-4 py-10 lg:py-16">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
            Welcome to Herpls
          </h1>
          <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-700">
            Where trust meets technology—bridging the gap between property seekers and professional agents for a better real estate experience.
          </p>
          <button
            onClick={() => navigate("/userLogin")}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>

        {/* Right Media */}
        <div className="flex-1 w-full h-60 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 shadow-md">
          {mediaSequence[currentIndex].type === "image" ? (
            <img
              src={mediaSequence[currentIndex].src}
              alt={`Media ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              src={mediaSequence[currentIndex].src}
              className="w-full h-full object-cover"
              muted
              playsInline
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default Welcome;
