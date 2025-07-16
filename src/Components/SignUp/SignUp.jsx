import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
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

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    otherNames: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      firstName,
      otherNames,
      contact,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !username ||
      !firstName ||
      !otherNames ||
      !contact ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Signup successful!");
    setFormData({
      username: "",
      firstName: "",
      otherNames: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-background px-4 py-6">
      {/* Left: Form */}
      <div className="bg-white shadow-md rounded-lg mt-[24px] p-8 w-full max-w-lg">
        {/* Arrow and Heading */}
        <div className="mb-4 flex gap-[15px] items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <LuCircleArrowLeft className="text-2xl text-primary hover:text-primaryDark transition" />
          </div>
          <h2 className="w-[250px] text-1xl md:text-3xl font-bold text-primary px-4 py-3 border border-primary text-center rounded-[12px] mx-auto">
            Agent Sign Up
          </h2>
        </div>

        <p className="text-center text-sm text-gray-500 mb-6">
          Kindly fill all the required fields to sign up as an agent.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username<span className="text-red-600 ml-1">*</span>
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                required
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name<span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Other Names */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Other Names<span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="otherNames"
              required
              placeholder="Enter other names"
              value={formData.otherNames}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact<span className="text-red-600 ml-1">*</span>
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaPhoneAlt className="text-gray-500 mr-2" />
              <input
                type="tel"
                name="contact"
                required
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

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
                placeholder="Enter email"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password<span className="text-red-600 ml-1">*</span>
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                required
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="text-gray-500 ml-2 focus:outline-none"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-extrabold py-3 rounded-md hover:bg-accent hover:text-neutral transition tracking-widest"
          >
            Sign Up
          </button>
        </form>

        <ToastContainer position="top-center" autoClose={2000} />
      </div>

      {/* Right: Carousel Image */}
      <div className="w-full max-w-lg mt-[24px]">
        <img
          src={carouselImages[currentIndex]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
          alt="Real estate visual"
          className="rounded-lg shadow-md w-full h-[300px] sm:h-[450px] lg:h-[845px] object-cover transition duration-700 ease-in-out"
        />
      </div>
    </section>
  );
};

export default SignUp;
