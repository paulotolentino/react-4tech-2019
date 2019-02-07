import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobManagement from './components/JobManagement/JobManagement';
import Sobre from './components/About/About';
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/navigation/NotFound/NotFound';
import Login from './components/Login/Login';
import axios from 'axios';

class App extends Component {

  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

  loginHanlder = (paramEmail, paramPass) => {
    axios.post('/login', { 'email': paramEmail, 'password': paramPass})
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify( response.data.user ));
        window.localStorage.setItem('token', JSON.stringify( response.data.token ));

        this.setState({ loggedUser: response.data.user});
      })
      .catch(error => {
        alert('Login Inválido');
        console.error(error);
      })
  }

  logoutHandler = () =>{
    window.localStorage.clear();
    this.setState({ loggedUser: null})
  }

  render() {
    if(this.state.loggedUser){
      return (
        <div className="App">
          <Cabecalho userName ={ this.state.loggedUser.name }
          logout={ this.logoutHandler }/>
          <div className="container pt-3">
            <Switch>
              <Route exact path='/' component = { JobManagement }/>
              <Route exact path='/dashboard' component = { JobManagement }/>
              <Route exact path='/vagas' component = { JobManagement }/>
              <Route exact path='/sobre' component = { Sobre }/>
              <Route exact path='*' component = { NotFound }/>
            </Switch>
          </div>
        </div>
      );
    }
    return (<Login login={ this.loginHanlder }></Login>);    
  }
}

export default App;
