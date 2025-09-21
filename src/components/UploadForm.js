import React, { useState } from "react";

function UploadForm({ setResults }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload an image");

    setLoading(true);
    setErrorText("");

    const formData = new FormData();
    // make sure backend expects "file"
    formData.append("file", file);

    try {
      const token = localStorage.getItem("token"); // may be "dummy-token"
      const res = await fetch("https://multi-crop-plant.onrender.com/predict", {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {}, // no content-type for FormData
        body: formData,
      });

      // log full response for debugging
      console.log("Upload response status:", res.status, res.statusText);

      const contentType = res.headers.get("content-type") || "";
      let bodyText;
      if (contentType.includes("application/json")) {
        bodyText = await res.json();
      } else {
        bodyText = await res.text();
      }
      console.log("Upload response body:", bodyText);

      if (!res.ok) {
        setErrorText(`Error ${res.status}: ${JSON.stringify(bodyText)}`);
        alert("Upload failed: " + (bodyText.detail || JSON.stringify(bodyText)));
        setLoading(false);
        return;
      }

      // success
      setResults(bodyText);
    } catch (err) {
      console.error("Upload error catch:", err);
      setErrorText(String(err));
      alert("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload & Predict"}
        </button>
      </form>
      {errorText && <div style={{ color: "red", marginTop: 8 }}>{errorText}</div>}
    </div>
  );
}

export default UploadForm;
