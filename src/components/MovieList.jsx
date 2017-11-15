import React from 'react';
import Movie from './Movie.jsx';
// import _ from 'underscore';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.movies.length === 0) {
      return (
        <div>Sorry, no movie matched your request</div>
      )
    } else {
      return (
        this.props.movies.map((movie, index) => {
          return <Movie
            movie={movie}
            key={index}
            index={index}
            toggleWatchStatus={this.props.toggleWatchStatus} />
        })
      )
    }
  }
}

export default MovieList;