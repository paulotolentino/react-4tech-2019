import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobsList from './components/JobsList/JobsList';
import JobForm from './components/JobForm/JobForm';
import Collapse from './components/navigation/Collapse/Collapse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho/>
        <div className="container pt-3">
          
          <Collapse buttonText="CRIAR VAGA" btnClass='btn-secondary' 
            collapseId="newJobForm">
            <JobForm/>
            <p>TESTE</p>
          </Collapse>

          <Collapse buttonText="VER VAGAS" btnClass='btn-info' 
            collapseId="viewJobsCollapse">
            <JobsList/>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default App;
