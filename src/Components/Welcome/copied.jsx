import React, { useEffect, useRef, useState } from "react";
import UserLogin from "../UserLogin/UserLogin";
import UserSignUp from "../UserSignUp/UserSignUp";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [view, setView] = useState(null); 
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
    <section className="bg-gray-400 min-h-screen flex items-center justify-center px-4 relative">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-5xl w-full relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl font-bold text-primary mb-6">Welcome to Herpls</h1>
          <p className="mb-8 text-lg">
            Where trust meets technology—bridging the gap between property seekers and professional agents for a better real estate experience.
          </p>
          <button
            onClick={() => setView("userLogin")}
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition"
          >
            Get Started
          </button>
        </div>

        {/* Right Media */}
        <div className="flex-1 w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 shadow-md">
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

      {/* Login or SignUp Modal Overlay */}
      {view === "userLogin" && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            {/* <button
              className="absolute top-4 right-4 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              onClick={() => setView(null)}
            >
              Close
            </button> */}
            <UserLogin onSignUp={() => setView("userSignUp")} />
          </div>
        </div>
      )}

      {view === "userSignUp" && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              onClick={() => setView(null)}
            >
              Close
            </button>
            <UserSignUp />
          </div>
        </div>
      )}
    </section>
  );
};

export default Welcome;
