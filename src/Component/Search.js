// components/SearchBar.js
import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search by Description"
    />
  );
};

export default Search;
