import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { LuCircleArrowLeft } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";

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

    // Simulate login success
    toast.success("Login successful!");
    navigate("/chat");

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
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-background px-4 py-6">
      {/* Left: Form */}
      <div className="bg-white shadow-md rounded-lg mt-[24px] h-[450px] p-8 w-full max-w-lg">
        {/* Arrow and Heading */}
        <div className="mb-4 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <LuCircleArrowLeft className="text-2xl text-primary hover:text-primaryDark transition" />
          </div>
          <h2 className="w-[250px] text-2xl md:text-3xl font-bold text-primary px-4 py-3 border border-primary text-center rounded-[12px] mx-auto">
            User Login
          </h2>
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
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
            className="w-full bg-primary text-white font-extrabold py-3 rounded-md hover:bg-accent hover:text-neutral transition tracking-widest"
          >
            Login
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>

      {/* Right: Carousel */}
      <div className="w-full max-w-lg mt-[24px]">
        <img
          src={carouselImages[currentIndex]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          alt="Real estate visual"
          className="rounded-lg shadow-md w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover transition duration-700 ease-in-out"
        />
      </div>
    </section>
  );
};

export default UserLogin;
