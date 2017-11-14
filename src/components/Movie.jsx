import React from 'react';

function Movie({movie, index}) {
  return <div className="movie-title">{movie.title}</div>
}

export default Movie;