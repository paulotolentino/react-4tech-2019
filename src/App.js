import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import JobManagement from './components/JobManagement/JobManagement';
import Sobre from './components/About/About';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import NotFound from './components/navigation/NotFound/NotFound';
import Login from './components/Login/Login';
=======
import NotFound from './components/navigation/NotFound/NotFound';
import Login from './components/Login/Login';

import { Switch, Route } from 'react-router-dom';
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
import axios from 'axios';

class App extends Component {

  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

<<<<<<< HEAD
  loginHanlder = (paramEmail, paramPass) => {
    axios.post('/login', { 'email': paramEmail, 'password': paramPass})
=======
  loginHandler = (paramEmail, paramPass) => {
    axios.post('/login', { 'email': paramEmail, 'password': paramPass })
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
      .then(response => {
        window.localStorage.setItem('user', JSON.stringify( response.data.user ));
        window.localStorage.setItem('token', JSON.stringify( response.data.token ));

<<<<<<< HEAD
        this.setState({ loggedUser: response.data.user});
      })
      .catch(error => {
        alert('Login Inválido');
=======
        this.setState({ loggedUser: response.data.user });
      })
      .catch(error => {
        alert('Login inválido');
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
        console.error(error);
      })
  }

<<<<<<< HEAD
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
=======
  logoutHandler = () => {
    window.localStorage.clear();
    this.setState({ loggedUser: null });
  }

  render() {
    if (this.state.loggedUser) {
      return (
        <div className="App">
          <Cabecalho userName={ this.state.loggedUser.name }
            logout={ this.logoutHandler }/>
          <div className="container pt-3">
            <Switch>
              <Route path='/' component={ JobManagement }/>
              <Route path='/dashboard' component={ JobManagement }/>
              <Route path='/vagas' component={ JobManagement }/>
              <Route path='/sobre' component={ Sobre }/>
              <Route path='*' component={ NotFound }/>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
            </Switch>
          </div>
        </div>
      );
    }
<<<<<<< HEAD
    return (<Login login={ this.loginHanlder }></Login>);    
=======

    return (<Login login={ this.loginHandler }></Login>);
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
  }
}

export default App;
