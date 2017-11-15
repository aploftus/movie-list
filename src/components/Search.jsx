import React from 'react';

function Search(props) {
  return (
      <form onSubmit={(e) => props.searchMovies(e)}>
        <input 
          id="query"
          type="text"
          placeholder="search..."
          value={props.query}
          onChange={e => props.handleSearchInputChange(e)}
        />
        <button id="search-button">Go!</button>
      </form>
  )
}

export default Search;