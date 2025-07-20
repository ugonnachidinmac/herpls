import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRightSide from "../Dashboard/TopRightSide";

const AddNewListing = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    agent: "",
    price: "",
    type: "",
    description: "",
    city: "",
    state: "",
    country: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, agent, price, type, description, city, state, country } =
      formData;

    if (!title || !agent || !price || !type || !description || !city || !state || !country) {
      toast.error("Please fill in all required fields");
      return;
    }

    navigate("/preview", { state: formData });
  };

  return (
    <section>
      <TopRightSide />

      <div className="w-full max-w-5xl mx-auto bg-primaryDarkest p-4 rounded-xl mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-center text-primary mb-4">
            Add New Listing
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title and Agent */}
            <div className="flex flex-col lg:flex-row gap-4">
              <fieldset className="flex-1">
                <label className="block font-semibold mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter title"
                />
              </fieldset>
              <fieldset className="flex-1">
                <label className="block font-semibold mb-1">Hit</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="One line hit about the lists"
                />
              </fieldset>

              <fieldset className="flex-1">
                <label className="block font-semibold mb-1">Agent Name</label>
                <input
                  type="text"
                  name="agent"
                  value={formData.agent}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter agent name"
                />
              </fieldset>
            </div>

            {/* Price and Type */}
            <div className="flex flex-col lg:flex-row gap-4">
              <fieldset className="flex-1">
                <label className="block font-semibold mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Enter price"
                />
              </fieldset>

              <fieldset className="flex-1">
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
              </fieldset>
            </div>

            {/* Location Section */}
            <div className="p-4 border border-primary rounded-lg bg-gray-50">
              <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
              <div className="flex flex-col lg:flex-row gap-4">
                <fieldset className="flex-1">
                  <label className="block font-semibold mb-1">Close Land Mark</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter city"
                  />
                </fieldset>
                <fieldset className="flex-1">
                  <label className="block font-semibold mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter city"
                  />
                </fieldset>

                <fieldset className="flex-1">
                  <label className="block font-semibold mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter state"
                  />
                </fieldset>

                <fieldset className="flex-1">
                  <label className="block font-semibold mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter country"
                  />
                </fieldset>
              </div>
            </div>

            {/* Description */}
            <fieldset>
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter description"
              ></textarea>
            </fieldset>

            {/* Image Upload */}
            <fieldset>
              <label className="block font-semibold mb-1">Sample Picture</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </fieldset>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-4 rounded transition"
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

export default AddNewListing;
