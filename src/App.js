import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './component/Youtube/Youtube';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Youtube />
      </div>
    );
  }
}

export default App;
