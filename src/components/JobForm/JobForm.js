import React, { Component } from 'react';
import axios from 'axios';

export default class JobForm extends Component {

  objModel = {
    name: '',
    description: '',
    salary: '',
    area: '',
    skills: '',
    differentials: '',
    isPcd: ''
  }

  state = {
    newJob: {
      name: '',
      description: '',
      salary: '',
      area: '',
      skills: '',
      differentials: '',
      isPcd: ''
    }
  }

  postJobHandler = (event) => {

    let objId = '';
    axios.post('/jobs', this.state.newJob)
      .then(response => {
        objId = response.data;
        this.setState({ newJob: {...this.objModel}});
      })
      .catch(error => {
        alert("Erro");
        console.error(error);
      })
  }

  onValueChangeHandler = (attrName, pValue) => {
    let currentJob = this.state.newJob;
    currentJob[attrName] = pValue;
    this.setState({ newJob: currentJob });
  }

  render() {
    return (
      <form className="row mb-0" onSubmit={ this.postJobHandler }>
        <div className="form-group col-12">
          <label for="nome">Nome *</label>
          <input type="text" className="form-control" id="nome" 
            value={ this.state.newJob.name } required
            onChange={(event) => this.onValueChangeHandler('name', event.target.value)}/>
        </div>
        <div className="form-group col-12">
          <label for="descricao">Descrição *</label>
          <textarea className="form-control" id="descricao" rows="3" required
            value={ this.state.newJob.description } name="description"
            onChange={(event) => this.onValueChangeHandler(event.target.name, event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="habilidades">Habilidades necessárias</label>
          <textarea className="form-control" id="habilidades" rows="3"
            value={ this.state.newJob.skills }
            onChange={(event) => this.onValueChangeHandler('skills', event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="diferenciais">Diferenciais</label>
          <textarea className="form-control" id="diferenciais" rows="3"
            value={ this.state.newJob.differentials }
            onChange={(event) => this.onValueChangeHandler('differentials', event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="salario">Salário Base *</label>
          <input type="text" className="form-control" id="salario" 
            value={ this.state.newJob.salary } required
            onChange={(event) => this.onValueChangeHandler('salary', event.target.value)}/>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="area">Área</label>
          <select className="form-control" id="area" required
            value={ this.state.newJob.area }
            onChange={(event) => this.onValueChangeHandler('area', event.target.value)}>
            <option value=''>Selecione</option>
            <option value='dev'>Desenvolvimento</option>
            <option value='design'>UX/UI</option>
            <option value='test'>Teste</option>
          </select>
        </div>

        <div className="form-group form-check col-sm-12 col-md-6 ml-3">
          <input type="checkbox" className="form-check-input" id="isPcd" 
            checked={ this.state.newJob.isPCD }
            onChange={(e) => this.onValueChangeHandler('isPcd', e.target.checked)}/>
          <label className="form-check-label" for="isPCD">Vaga para PCD</label>
        </div>

        <div className="form-group col-12 text-right mb-0">
          <button type="submit" className="btn btn-success">Criar vaga</button>
        </div>

      </form>
    )
  }
}