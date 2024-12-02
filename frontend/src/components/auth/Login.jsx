import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sesuaikan path import ke services
import { loginUser } from "../../services/auth.service";

const Login = () => {
  const [username, setUsername] = useState("");  // Corrected the state variable name for clarity
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);

      // Store user data (including role) in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect based on user role
      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setError(err.message); // Display error if login fails
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center overflow-hidden">
      {/* Login Card */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-2xl w-96">
        <h2 className="text-4xl font-bold mb-8 text-center text-white tracking-wider">
          Selamat Datang
        </h2>
        {error && (
          <div className="bg-red-500 text-white text-center px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}  // Corrected this line to match the state name
              className="w-full p-3 bg-white bg-opacity-20 text-white border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner placeholder-gray-300"
              placeholder="Masukan Username Anda"
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-white text-sm font-medium mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-white bg-opacity-20 text-white border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner placeholder-gray-300"
              placeholder="Masukan Password Anda"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
