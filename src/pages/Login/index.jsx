import React, { useState } from "react";
import { makeAuth } from '../../api/Auth/index.jsx'; // Importação direta de makeAuth

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeAuth(formData);
      if (response.accessToken) {
        alert("Auth has been made");
        console.log("Access Token:", response.accessToken);
        localStorage.setItem('token', response.accessToken);
      } else {
        alert("Auth has been made, but no token was returned.");
        console.log("No token returned from auth.");
      }
    } catch (error) {
      alert("Auth hasn't been made");
      console.error("Error during auth:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="flex w-full max-w-4l bg-white rounded-lg shadow-lg overflow-hidden h-screen">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 items-center justify-center">
          <div className="text-white text-4xl font-bold">Welcome Back!</div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center flex-col">
          <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-sm text-indigo-500 hover:text-indigo-700"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
