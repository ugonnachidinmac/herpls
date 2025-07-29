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

    // Handle individual image updates
    if (name.startsWith("image")) {
      const index = parseInt(name.replace("image", ""));
      const updatedImages = [...(formData.images || [])];
      updatedImages[index] = files[0];
      setFormData({ ...formData, images: updatedImages });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    alert("Listing submitted successfully!");
    navigate("/add-listing"); // Navigate back after submission
  };

  const goBack = () => {
    navigate("/add-listing");
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

      <h2 className="text-2xl font-bold mb-4 text-headers">Preview Listing</h2>

      {formData.images && formData.images.length > 0 && (
        <div className="my-4 flex gap-4 justify-center flex-wrap">
          {formData.images.map((img, idx) => (
            <img
              key={idx}
              src={typeof img === "string" ? img : URL.createObjectURL(img)}
              alt={`Listing ${idx + 1}`}
              className="w-40 h-32 object-cover rounded"
            />
          ))}
        </div>
      )}

      <div className="space-y-3 text-left">
        {[
          ["Title", "title"],
          ["Hit", "hit"],
          ["Agent", "agent"],
          ["Price", "price"],
          ["Type", "type"],
          ["Landmark", "landMark"],
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
            <label className="font-semibold">Change Images (up to 3):</label><br />
            {[0, 1, 2].map((index) => (
              <div key={index} className="my-1">
                <input
                  type="file"
                  name={`image${index}`}
                  accept="image/*"
                  onChange={handleChange}
                  className="block"
                />
              </div>
            ))}
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
          className="px-4 py-2 bg-headers text-white rounded hover:bg-buttons"
        >
          {isEditing ? "Save & Submit" : "Submit"}
        </button>
      </div>
    </section>
  );
};

export default PreviewPage;
