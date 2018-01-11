import React from 'react';

function WatchedFilter(props) {
  return (
    <span className="filter">
      <button
        className="filter-watched"
        value="true"
        onClick={event => props.handleFilterClick(event)} >Watched</button>
      <button
        className="filter-watched"
        value="false"
        onClick={event => props.handleFilterClick(event)} >To Watch</button>
    </span>
  )
}

export default WatchedFilter;