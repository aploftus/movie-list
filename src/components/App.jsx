import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddToList from './AddToList.jsx';
import WatchedFilter from './WatchedFilter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      shownMovies: [],
      query: '',
      titleToAdd: '',
      filter: ''
    }
  }

  handleSearchInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  toggleWatchStatus(index) {
    let movies = this.state.movies.slice();
    movies[index].watched = !movies[index].watched
    this.setState({ 
      movies: movies,
      shownMovies: movies,
    });
  }

  handleFilterClick(event) {
    this.setState({ filter: event.target.value});
    console.log(this.state.filter);
    let filteredMovies = this.state.movies.filter(movie => {
      return movie.watched === this.state.filter;
    });
    event.preventDefault();
    this.setState({
      shownMovies: filteredMovies,
    });
  }

  searchMovies(event) {
    let query = this.state.query;
    let filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    event.preventDefault();
    this.setState({
      shownMovies: filteredMovies,
      query: ''
    });
  }

  addMovieToList(event) {
    let movies = this.state.movies;
    movies.push({ title: this.state.titleToAdd, watched: false });
    event.preventDefault();
    this.setState({ 
      movies: movies,
      shownMovies: movies,
      titleToAdd: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <div className="search">
          <AddToList className="component"
            addMovieToList={this.addMovieToList.bind(this)}
            handleAddInputChange={this.handleAddInputChange.bind(this)}
            title={this.state.titleToAdd}
          />
          <div>
            <WatchedFilter
              className="component"
              handleFilterClick={this.handleFilterClick.bind(this)}/>
            <Search className="component"
              query={this.state.query}
              searchMovies={this.searchMovies.bind(this)}
              handleSearchInputChange={this.handleSearchInputChange.bind(this)}
            />
          </div>
        </div>
        <div className="movie-list">
          <MovieList
            movies={this.state.shownMovies} 
            toggleWatchStatus={this.toggleWatchStatus.bind(this)}
          />
        </div>
      </div>
    );
  }
}

// movies: [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ],

export default App;
