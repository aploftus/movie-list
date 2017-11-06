import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movie List</h1>
        </header>
        <p className="App-intro">
          Here is a list of movies:
        </p>
        <div className="MovieList.js">
          <MovieList movies={movies} />
        </div>
      </div>
    );
  }
}

export default App;
