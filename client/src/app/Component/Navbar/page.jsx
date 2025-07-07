"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <span className="font-extrabold text-3xl text-white tracking-widest drop-shadow-lg">
                <span className="text-blue-400">E</span>comm
              </span>

              <span className="hidden sm:inline-block bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                NEW
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/AuthUser/Login"
              className="text-white hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-lg font-semibold tracking-wide hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              href="/AuthUser/Register"
              className="text-white hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-lg font-semibold tracking-wide hover:bg-white/10"
            >
              Register
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4 space-y-2 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg rounded-b-lg animate-fade-in-down">
          <a
            href="#"
            className="block text-white hover:text-blue-400 transition-colors duration-200 px-3 py-2 rounded-md text-lg font-semibold tracking-wide hover:bg-white/10"
          >
            Home
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
