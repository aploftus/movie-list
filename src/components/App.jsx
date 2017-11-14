import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <div className="search">
          <Search />
        </div>
        <div className="movie-list">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
