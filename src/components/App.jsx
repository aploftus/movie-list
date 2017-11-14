import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddToList from './AddToList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      shownMovies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      query: ''
    }
  }

  handleInputChange(query) {
    this.setState({ query: query });
  }

  filterMovies(event) {
    let query = this.state.query;
    let filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    event.preventDefault();
    this.setState({
      shownMovies: filteredMovies
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <div className="search">
          <AddToList />
          <Search 
            filterMovies={this.filterMovies.bind(this)}
            handleInputChange={this.handleInputChange.bind(this)}
          />
        </div>
        <div className="movie-list">
          <MovieList movies={this.state.shownMovies} />
        </div>
      </div>
    );
  }
}

export default App;
