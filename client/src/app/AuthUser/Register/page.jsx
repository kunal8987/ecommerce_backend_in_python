
"use client";

import Link from "next/link";
import { useState } from "react";

let initialState = { user_name: "", full_name: "", email: "", password: "" };
const Register = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    setFormData(initialState); // Reset form after submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-7 border border-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight text-blue-400 drop-shadow-lg">
          Create Account
        </h2>
        <div>
          <label
            className="block text-gray-300 mb-2 font-medium"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label
            className="block text-gray-300 mb-2 font-medium"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label
            className="block text-gray-300 mb-2 font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            className="block text-gray-300 mb-2 font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-500 transition"
        >
          Register
        </button>
        <p className="text-center text-gray-400 text-sm pt-2">
          Already have an account?{" "}
          <Link
            href="/AuthUser/Login"
            className="text-blue-400 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
