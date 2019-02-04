import React from 'react';

const jobCard = () => (
  <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
  <div class="card">
    <img class="card-img-top" src="developer.png" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Desenvolvedor Front-end JR</h5>
      <div>
        <b>Descrição:</b>
        <p>Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento de software e que tenha experiência
            em desenvolvimento full stack.</p>

        <b>Salário base:</b>
        <p>R$ 10,00</p>

      </div>
      <a href="#" class="btn btn-warning">
        <i class="far fa-edit"></i>
      </a>
      <a href="#" class="btn btn-danger">
        <i class="far fa-trash-alt"></i>
      </a>
    </div>
  </div>
  </div>
)

export default jobCard;