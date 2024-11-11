// In src/components/Homepage.js
import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-opacity-80 backdrop-filter backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">🌟 comet</span>
          <ul className="flex space-x-6 text-gray-300">
            <li><a href="#manifesto">Manifesto</a></li>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <button className="px-4 py-2 rounded-full bg-green-200 text-gray-800 font-semibold hover:bg-green-300">
          Signup
        </button>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-semibold text-white mb-4 tracking-wider">
          Made for Creatives
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          A discovery engine for creatives
        </p>
        <button className="px-6 py-2 text-lg font-medium rounded-full bg-green-200 text-gray-800 hover:bg-green-300 transition">
          Get Inspired
        </button>
      </main>

      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-20">
        {/* Example items for grid, adjust as needed */}
        <div className="bg-cover bg-center" style={{ backgroundImage:"../image/admin.jpg" }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "../image/admin.jpg" }}></div>
        <div className="bg-cover bg-center" style={{ backgroundImage: "../image/admin.jpg" }}></div>
        {/* Add more images for the grid */}
      </div>
    </div>
  );
};

export default Homepage;
