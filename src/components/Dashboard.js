import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UploadForm from "./UploadForm";
import Results from "./Results";
import History from "./History";

function Dashboard({ isLoggedIn, setIsLoggedIn }) {
  const [results, setResults] = useState(null);

  if (!isLoggedIn) return <Navigate to="/login" />; // redirect if not logged in

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 flex justify-between">
        <div className="font-bold">🌿 Plant Dashboard</div>
        <ul className="flex space-x-6">
          <li><Link to="/dashboard">Predict</Link></li>
          <li><Link to="/history">History</Link></li>
          <li>
            <button onClick={() => setIsLoggedIn(false)} className="hover:text-yellow-300">
              Logout
            </button>
          </li>
        </ul>
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
