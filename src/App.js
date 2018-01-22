import React, { Component } from 'react';
import Cars from './car/Cars'
import './App.css';
import Header from "./Header";
import Main from "./Main";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Main />
            </div>
        </BrowserRouter>
    );
  }
}

export default connect()(App);
