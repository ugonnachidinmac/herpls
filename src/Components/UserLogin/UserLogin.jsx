import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import WelcomePgBg from '../Welcome/WelcomePgBg';

const carouselImages = [
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752508062/Image_15_cn6p7w.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752588029/Image_wqhtue.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605870/herplsImage2_xc5dcw.jpg",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605868/herplsImage1_o4jq2s.jpg",
];

const fallbackImage =
  "https://via.placeholder.com/550x845.png?text=Image+Not+Available";

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    toast.success("Login successful!");
    navigate("/homePage");
    setFormData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* 🔵 Background with gray blur */}
      <div className="absolute inset-0 z-0">
        <WelcomePgBg />
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
      </div>

      {/* 🔵 Login + Carousel Foreground */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col lg:flex-row bg-white/95 backdrop-blur-md shadow-lg rounded-xl overflow-hidden w-full lg:w-[900px] max-w-full">

          {/* 🔵 Close Button */}
          <button
            className="absolute top-1 right-1 lg:top-6 lg:right-6 z-50 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={() => navigate("/")}
          >
            X
          </button>

          {/* 🔵 Left: Login Form */}
          <div className="w-full max-w-md p-8 space-y-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="w-[250px] text-2xl md:text-3xl font-bold text-headers px-4 py-3 border border-headers text-center rounded-[12px] mx-auto">
                User Login
              </h2>
            </div>

            <p className="text-center text-[12px] lg:text-[16px] text-gray-500 mb-6">
              Enter your email and password to login.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email<span className="text-red-600 ml-1">*</span>
                </label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password<span className="text-red-600 ml-1">*</span>
                </label>
                <div className="flex items-center border rounded-md px-3 py-2">
                  <FaLock className="text-gray-500 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-500 ml-2 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-headers text-white font-extrabold py-3 rounded-md hover:bg-buttons hover:text-neutral transition tracking-widest"
              >
                Login
              </button>
            </form>

            {/* Don’t have account */}
            <p className="text-center text-[12px] lg:text-[16px] mt-4">
              Don’t have an account?{" "}
              <span
                className="text-headers font-bold cursor-pointer hover:text-buttons"
                onClick={() => navigate("/userSignUp")}
              >
                Sign Up
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

export default UserLogin;
