import React, { Component } from 'react';

function Search() {
  return (
    <div>
      <input 
        id="query"
        type="text"
        placeholder="search..."
      />
      <button id="search-button">Go!</button>
    </div>
  )
}

export default Search;