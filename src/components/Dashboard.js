import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UploadForm from "./UploadForm";
import Results from "./Results";

function Dashboard({ isLoggedIn, setIsLoggedIn }) {
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [setIsLoggedIn, navigate]);

  if (!isLoggedIn) return <Navigate to="/login" />;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-700 text-white p-4 flex justify-between">
        <div className="font-bold">🌿 Plant Dashboard</div>
        <ul className="flex space-x-6">
          <li><Link to="/dashboard">Predict</Link></li>
          <li><Link to="/history">History</Link></li>
          <li>
            <button onClick={handleLogout} className="hover:text-yellow-300">
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Upload & Predict 🌱</h2>
        <UploadForm setResults={setResults} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default Dashboard;
