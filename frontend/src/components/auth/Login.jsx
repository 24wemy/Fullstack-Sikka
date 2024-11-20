import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sesuaikan path import ke services
import { loginUser } from "../../services/auth.service";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float animation-delay-2000"></div>

      {/* Login Card */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-xl shadow-2xl w-96 transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold mb-8 text-center text-white tracking-wider">
          Welcome Back
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
              type="username"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white bg-opacity-20 text-white border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner placeholder-gray-300"
              placeholder="MASUKAN USERNAME ANDA"
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
              placeholder="MASUKAN PASSWORD ANDA"
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
