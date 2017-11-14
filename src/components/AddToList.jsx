import React from 'react';

function AddToList(props) {
  return (
    <div>
      <form>
        <input 
          id="add"
          type="text"
          placeholder="add movie title here..."
          
        />
        <button id="add-button">Add!</button>
      </form>
    </div>
  )
}

export default AddToList;