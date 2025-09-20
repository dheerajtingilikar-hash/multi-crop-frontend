import React, { useState } from "react";

function UploadForm({ setResults }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    const res = await fetch("https://multi-crop-plant.onrender.com/predict", {   // ✅ Render backend
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    setResults(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" className="bg-green-600 text-white p-2 rounded">
        Predict
      </button>
    </form>
  );
}

export default UploadForm;
