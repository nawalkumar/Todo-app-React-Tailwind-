// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-xl font-bold">comet</div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">Upgrade</button>
        <a href="#Homepage" className="hover:underline">Home</a>
        <a href="#discover" className="hover:underline">Discover</a>
      </div>
      <div className="flex space-x-4">
        <button className="text-white">🔔</button>
        <button className="text-white">😊</button>
      </div>
    </nav>
  );
}

export default Navbar;
