import React, { useState } from "react";
import UploadForm from "./UploadForm";
import Results from "./Results";

function Dashboard() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 flex justify-between">
        <div className="font-bold">🌿 Plant Dashboard</div>
      </nav>

      {/* Predict Section */}
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Upload & Predict 🌱</h2>
        <UploadForm setResults={setResults} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default Dashboard;
