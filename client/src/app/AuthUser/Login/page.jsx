"use client";

import Link from "next/link";
import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login form submitted", { email, password });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-800"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center text-white tracking-tight drop-shadow-lg">
          Login{" "}
          <span role="img" aria-label="key">
            🔑
          </span>
        </h2>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition placeholder-gray-400"
            placeholder="Enter your email"
            required
            autoComplete="email"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-white font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white transition placeholder-gray-400"
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-3 rounded-xl font-bold shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all text-lg tracking-wide"
        >
          Login
        </button>
        <div className="mt-6 text-center">
          <Link
            href="#"
            className="text-blue-400 hover:underline text-sm transition-colors duration-200"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link
              href="/AuthUser/Register"
              className="text-blue-400 hover:underline font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
