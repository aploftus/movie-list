import React from 'react';
import WatchedButton from './WatchedButton.jsx';

function Movie({movie, index, toggleWatchStatus}) {
  console.log('index of movie inside movie entry ', index);
  return (
    <div className="movie-title">
      <WatchedButton
        watched={movie.watched}
        index={index}
        toggleWatchStatus={toggleWatchStatus}
      />
      {movie.title}
    </div>
  )
}

export default Movie;