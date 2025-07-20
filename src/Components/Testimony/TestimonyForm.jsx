import React, { useState } from "react";

const TestimonyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    country: "",
    testimony: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted testimony:", formData);
    // You can add toast, or API call here
    alert("Thank you for your testimony!");
    setFormData({
      name: "",
      state: "",
      country: "",
      testimony: "",
    });
  };

  const inputStyle = "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary";

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-primary">Share Your Testimony</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Name<span className="text-danger">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyle}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">State<span className="text-danger">*</span></label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Country<span className="text-danger">*</span></label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={inputStyle}
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Testimony<span className="text-danger">*</span></label>
          <textarea
            name="testimony"
            rows="5"
            value={formData.testimony}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Write your testimony here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white py-2 px-6 rounded hover:bg-primaryDark transition"
        >
          Submit Testimony
        </button>
      </form>
    </div>
  );
};

export default TestimonyForm;
