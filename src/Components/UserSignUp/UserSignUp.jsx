import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomePgBg from "../Welcome/WelcomePgBg";

const carouselImages = [
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752508062/Image_15_cn6p7w.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752588029/Image_wqhtue.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605870/herplsImage2_xc5dcw.jpg",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605868/herplsImage1_o4jq2s.jpg",
];

const fallbackImage = "/fallback.jpg";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    location: "",
    password: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, location, password } = formData;
    if (!name || !username || !email || !location || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Signup successful! Redirecting to login...", {
      onClose: () => navigate("/userLogin"),
      autoClose: 2000,
    });
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* 🔵 Background with gray blur */}
      <div className="absolute inset-0 z-0">
        <WelcomePgBg />
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
      </div>

      {/* 🔵 SignUp + Carousel Foreground */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col lg:flex-row bg-white/95 backdrop-blur-md shadow-lg rounded-xl overflow-hidden w-full lg:w-[900px] max-w-full">

          {/* 🔵 Close Button */}
          <button
            className="absolute top-1 right-1 lg:top-6 lg:right-6 z-50 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={() => navigate("/")}
          >
            X
          </button>

          {/* 🔵 Left: Sign Up Form */}
          <div className="w-full max-w-md p-8 space-y-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="w-[250px] text-[14px] md:text-[18px] font-bold text-primary px-4 py-3 border border-primary text-center rounded-[12px] mx-auto">
                Create User Account
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-accent transition"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/userLogin")}
                className="text-accent cursor-pointer font-semibold"
              >
                Login
              </span>
            </p>

            <ToastContainer position="top-center" autoClose={2000} />
          </div>

          {/* 🔵 Right: Carousel */}
          <div className="w-full max-w-md">
            <img
              src={carouselImages[currentIndex]}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
              alt="Real estate visual"
              className="rounded-none w-full h-full object-cover transition duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserSignUp;
