import React, { useEffect, useRef, useState } from "react";

const WelcomePgBg = ({ setView }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

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
      }, 3000);
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
    <section className="min-h-screen w-full bg-gray-300 backdrop-blur-md flex items-center justify-center px-4 py-10 lg:py-16">
      <div className="mainContainer bg-white/30 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">
            Welcome to Herpls
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
            Where trust meets technology—bridging the gap between property seekers and professional agents for a better real estate experience.
          </p>
          <button
            onClick={() => setView("userLogin")}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition text-sm sm:text-base"
          >
            Get Started
          </button>
        </div>

        {/* Right Media Box */}
        <div className="flex-1 w-full h-60 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 shadow-lg">
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

export default WelcomePgBg;
