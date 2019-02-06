import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobManagement from './components/JobManagement/JobManagement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
<<<<<<< HEAD
          
          <Collapse buttonText="CRIAR VAGA" btnClass='btn-secondary' 
            collapseId="newJobForm">
            <JobForm/>
            <p>TESTE</p>
          </Collapse>

          <JobsList/>
=======
          <JobManagement/>
>>>>>>> 9ae860ab6363ef4ce4f670a04ad68cf2e8e056e0
        </div>
      </div>
    );
  }
}

export default App;
