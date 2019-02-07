import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

<<<<<<< HEAD
axios.defaults.baseURL = 'http://localhost:3001/';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root'));
=======
axios.defaults.baseURL = 'https://afternoon-ocean-29603.herokuapp.com';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, 
  document.getElementById('root'));
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
