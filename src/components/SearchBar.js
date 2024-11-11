// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample options
  const suggestions = [
    "Traditional Pottery",
    "Modern Art",
    "Graphic Design",
    "UI/UX Inspiration",
    "Brand Packaging",
  ];

  // Handle input change
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    setShowSuggestions(true); // Show suggestions when typing
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion); // Set input to the selected suggestion
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative w-1/3">
        <input 
          type="text" 
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)} // Show suggestions on focus
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Hide with delay to allow click
          placeholder="Try 'Traditional Pottery'"
          className="px-4 py-2 rounded-full w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <ul className="absolute top-full left-0 w-full bg-gray-700 rounded-lg mt-1 py-2 z-10">
            {suggestions
              .filter((suggestion) =>
                suggestion.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-white"
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="px-4 py-2 bg-gray-700 rounded-full text-sm">For You</button>
        <button className="px-4 py-2 bg-gray-700 rounded-full text-sm">Following</button>
      </div>
    </div>
  );
}

export default SearchBar;
