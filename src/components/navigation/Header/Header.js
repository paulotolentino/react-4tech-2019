import React from 'react';
import logo from '../../../assets/logo-vagas.png';
import { Link } from 'react-router-dom';

const header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
<<<<<<< HEAD
      <Link className="navbar-brand" to="/dashboard">
=======
      <Link className="navbar-brand" to='/dashboard'>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
        <img src={ logo } style={ { width: '100px' } }/>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
<<<<<<< HEAD
          <Link className="nav-item nav-link active text-white" to="/vagas">Vagas</Link>
          <Link className="nav-item nav-link text-white" to="/sobre">Sobre</Link>
        </div>
      </div>
      <a className="nav-item nav-link text-white">{ props.userName} </a>
=======
          <Link className="nav-item nav-link active text-white" to='/vagas'>
            Vagas
          </Link>
          <Link className="nav-item nav-link text-white" to='/sobre'>
            Sobre
          </Link>
        </div>
      </div>

      <a className="nav-item nav-link text-white">{ props.userName }</a>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
      <a className="nav-item nav-link text-white" onClick={() => props.logout()}>
        <i className="fas fa-sign-out-alt"></i>
      </a>
    </nav>
  )
}

export default header;