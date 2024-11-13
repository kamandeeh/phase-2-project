import React from "react";

function Search({ search, setSearch }) {
  const handleSearchInputChange = ({ target: { value } }) => setSearch(value);

  return (
    <div className="search-container">
      <label htmlFor="search-input" className="search-label">Search for an electronic device :</label>
      <input
        type="text"
        id="search-input"
        placeholder="Enter device name..."
        className="search-input"
        value={search}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

export default Search;
