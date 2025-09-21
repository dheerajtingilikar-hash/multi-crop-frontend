import React, { useState } from "react";
import UploadForm from "./UploadForm";

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700">Multi Crop Prediction</h1>
      <UploadForm setResults={setResults} />
      {results && (
        <div className="mt-6 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Prediction Results</h2>
          <p>Crop: {results.crop}</p>
          <p>Confidence: {(results.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
