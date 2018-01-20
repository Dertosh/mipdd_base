import React, { Component } from 'react';
import Cars from './Cars'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
      var apiUrl = "http://ih791894.vds.myihor.ru:5000";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Добро пожаловать в React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Cars source = {apiUrl} />
      </div>
    );
  }
}

export default App;
