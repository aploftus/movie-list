import React from 'react';
import Movie from './Movie.jsx';
// import _ from 'underscore';

function MovieList({movies}) {
  return (
      movies.map((movie, index) => {
        return <Movie movie={movie} key={index}/>
      })
  )
}

export default MovieList;