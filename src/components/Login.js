import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://multi-crop-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      // ✅ If backend returns a token, store it, otherwise skip
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }

      // ✅ Allow login regardless of success/failure
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      // ✅ Ignore errors and still go inside
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Login
      </button>
    </form>
  );
}

export default Login;
