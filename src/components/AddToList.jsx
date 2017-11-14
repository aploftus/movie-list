import React from 'react';

function AddToList(props) {
  return (
    <div>
      <form onSubmit={e => props.addMovieToList(e)}>
        <input 
          id="add"
          type="text"
          placeholder="add movie title here..."
          onChange={e => props.handleAddInputChange(e.target.value)}
        />
        <button id="add-button">Add!</button>
      </form>
    </div>
  )
}

export default AddToList;