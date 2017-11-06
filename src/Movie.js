import React, { Component } from 'react';

function Movie({movie}) {
  return <div className="movie-title">{movie.title}</div>
}

export default Movie;