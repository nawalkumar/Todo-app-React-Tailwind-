import './App.css';

import React from 'react';
import Homepage from './components/Homepage';
import './index.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SearchBar />
      <ImageGrid />
    </div>
  );
}


function App1() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;