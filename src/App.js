import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobsList from './components/JobsList/JobsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container">
          <JobsList/>
        </div>
      </div>
    );
  }
}

export default App;
