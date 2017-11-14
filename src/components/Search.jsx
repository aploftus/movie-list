import React from 'react';

function Search(props) {
  return (
    <div>
      <form onSubmit={(e) => props.filterMovies(e)}>
        <input 
          id="query"
          type="text"
          placeholder="search..."
          value={props.query}
          onChange={e => props.handleSearchInputChange(e)}
        />
        <button id="search-button">Go!</button>
      </form>
    </div>
  )
}

export default Search;