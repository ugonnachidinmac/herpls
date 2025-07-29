import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRightSide from "../Dashboard/TopRightSide";

const AddNewListing = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    hit: "",
    agent: "",
    price: "",
    type: "",
    description: "",
    landMark: "",
    city: "",
    state: "",
    country: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...formData.images];
    updatedImages[index] = files[0];
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      title, hit, agent, price, type,
      description, landMark, city, state, country, images,
    } = formData;

    if (
      !title || !hit || !agent || !price || !type ||
      !description || !landMark || !city || !state || !country
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (images.length === 0 || images.every((img) => !img)) {
      toast.error("Please upload at least one image");
      return;
    }

    navigate("/preview", { state: formData });
  };

  return (
    <section>
      <TopRightSide />

      <div className="w-full max-w-5xl mx-auto bg-headers p-4 rounded-xl mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center text-headers mb-4">
            Add New Listing
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title, Hit, Agent */}
            <div className="flex flex-col lg:flex-row gap-4">
              <InputField name="title" label="Title" value={formData.title} handleChange={handleChange} />
              <InputField name="hit" label="Hit" value={formData.hit} handleChange={handleChange} />
              <InputField name="agent" label="Agent Name" value={formData.agent} handleChange={handleChange} />
            </div>

            {/* Price and Type */}
            <div className="flex flex-col lg:flex-row gap-4">
              <InputField name="price" label="Price" type="number" value={formData.price} handleChange={handleChange} />
              <div className="flex-1">
                <label className="block font-semibold mb-1">Listing Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Type</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                  <option value="Lease">Lease</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 border border-headers rounded-lg bg-gray-50">
              <h3 className="text-lg font-bold text-headers mb-2">Location</h3>
              <div className="flex flex-col lg:flex-row gap-4">
                <InputField name="landMark" label="Land Mark" value={formData.landMark} handleChange={handleChange} />
                <InputField name="city" label="City" value={formData.city} handleChange={handleChange} />
                <InputField name="state" label="State" value={formData.state} handleChange={handleChange} />
                <InputField name="country" label="Country" value={formData.country} handleChange={handleChange} />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter description"
              />
            </div>

            {/* Image Upload */}
            <fieldset className="lg:flex gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index}>
                  <label className="block mb-1 text-sm">Sample Picture {index + 1}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              ))}
            </fieldset>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-headers hover:bg-buttons text-white font-bold py-3 px-4 rounded transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-center" />
    </section>
  );
};

// Reusable Input Field Component
const InputField = ({ name, label, value, handleChange, type = "text" }) => (
  <div className="flex-1">
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-300 p-2 rounded"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

export default AddNewListing;
