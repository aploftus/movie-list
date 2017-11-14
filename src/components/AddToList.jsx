import React from 'react';

function AddToList(props) {
  return (
    <div>
      <form onSubmit={e => props.addMovieToList(e)}>
        <input 
          id="titleToAdd"
          type="text"
          placeholder="add movie title here..."
          value={props.titleToAdd}
          onChange={e => props.handleAddInputChange(e)}
        />
        <button id="add-button">Add!</button>
      </form>
    </div>
  )
}

export default AddToList;