import React from 'react';
import developerImg from '../../../assets/developer.png'

const jobCard = () => (
  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
  <div className="card">
    <img className="card-img-top" src={developerImg} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Desenvolvedor Front-end JR</h5>
      <div>
        <b>Descrição:</b>
        <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência
            em desenvolvimento full stack.</p>

        <b>Salário base:</b>
        <p>R$ 10,00</p>

      </div>
      <a href="#" className="btn btn-warning">
        <i className="far fa-edit"></i>
      </a>
      <a href="#" className="btn btn-danger">
        <i className="far fa-trash-alt"></i>
      </a>
    </div>
  </div>
  </div>
)

export default jobCard;