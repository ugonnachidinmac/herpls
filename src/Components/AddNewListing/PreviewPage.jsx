import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(state || {});

  if (!state) return <p>No listing data to preview.</p>;

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    alert("Listing submitted successfully!");
  };

  const goBack = () => {
    navigate("/add-listing"); // Update the path if your form is under a different route
  };

  return (
    <section className="p-6 max-w-3xl mx-auto bg-white rounded shadow text-center">
      <div className="flex justify-start mb-4">
        <button
          onClick={goBack}
          className="px-3 py-2 bg-neutral-200 hover:bg-neutral-300 rounded text-sm"
        >
          ← Back to Add Listing
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-primary">Preview Listing</h2>

      {formData.image && (
        <div className="my-4">
          <img
            src={
              typeof formData.image === "string"
                ? formData.image
                : URL.createObjectURL(formData.image)
            }
            alt="Listing"
            className="mx-auto w-72 h-48 object-cover rounded"
          />
        </div>
      )}

      <div className="space-y-3 text-left">
        {[
          ["Title", "title"],
          ["Agent", "agent"],
          ["Price", "price"],
          ["Type", "type"],
          ["City", "city"],
          ["State", "state"],
          ["Country", "country"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="font-semibold">{label}:</label><br />
            {isEditing ? (
              <input
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            ) : (
              <p className="pl-1">{formData[name]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="font-semibold">Description:</label><br />
          {isEditing ? (
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          ) : (
            <p className="pl-1">{formData.description}</p>
          )}
        </div>

        {isEditing && (
          <div>
            <label className="font-semibold">Change Image:</label><br />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleEditToggle}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-accent"
        >
          {isEditing ? "Save & Submit" : "Submit"}
        </button>
      </div>
    </section>
  );
};

export default PreviewPage;
