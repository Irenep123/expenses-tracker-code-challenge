import React from 'react';

function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
