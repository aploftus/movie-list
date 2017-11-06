import React, { Component } from 'react';
import Movie from './Movie.js';
// import _ from 'underscore';

function MovieList({movies}) {
  return (
      movies.map((movie, index) => {
        return <Movie movie={movie} key={index}/>
      })
  )
}

export default MovieList;