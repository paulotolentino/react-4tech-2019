import React, { Component } from 'react';
import axios from 'axios';

export default class JobForm extends Component {

<<<<<<< HEAD
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
=======
  objModel = Object.freeze({
    name: '',
    description: '',
    skills: '',
    differentials: '',
    salary: '',
    area: '',
    isPcd: false
  });

  state = {
    newJob: { ...this.objModel },
    idEditing: false
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
  }

  postJobHandler = (event) => {

    let objId = '';
<<<<<<< HEAD
    axios.post('/jobs', this.state.newJob)
      .then(response => {
        objId = response.data;
        this.setState({ newJob: {...this.objModel}});
      })
      .catch(error => {
        alert("Erro");
        console.error(error);
      })
=======

    if (this.state.newJob.id) { // se tem id é uma edição
      axios.put('/jobs/' + this.state.newJob.id, this.state.newJob)
        .then(response => {
          this.props.editedHandler(this.state.newJob.id, this.state.newJob);
          this.setState({ newJob: { ...this.objModel } }); //limpar form
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
    } else {

      axios.post('/jobs', this.state.newJob)
        .then(response => {
          objId = response.data;
          this.props.addItemList({ id: objId, ...this.state.newJob });
          this.setState({ newJob: { ...this.objModel } }); //limpar form
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
    }

    event.preventDefault();

  }


  componentDidUpdate() {

    console.log('did update - id: ' + this.props.editJobId);
    if (this.props.editJobId && !this.state.isEditing) {
      axios.get('/jobs/' + this.props.editJobId)
        .then(response => {
          this.setState({ newJob: response.data, isEditing: true });
        })
        .catch(error => {
          alert('Deu erro no servidor!');
          console.error(error);
        });
      }

  }

  shouldComponentUpdate(nextProps, nextState) {
    let hasChanged = false;
    if (this.props.editJobId !== nextProps.editJobId) {
      hasChanged = true;
    }
    Object.keys(nextState.newJob).forEach(key => {
      if (this.state.newJob[key] !== nextState.newJob[key]) {
        hasChanged = true;
      }
    });

    return hasChanged;
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
  }

  onValueChangeHandler = (attrName, pValue) => {
    let currentJob = { ...this.state.newJob };
    currentJob[attrName] = pValue;
    this.setState({ newJob: currentJob });
  }

  clearFormHandler = () => {
    this.setState({ newJob: { ...this.objModel }, isEditing: false }); //limpar form
    this.props.clearSelectedId();
  }

  render() {
    return (
<<<<<<< HEAD
      <form className="row mb-0" onSubmit={ this.postJobHandler }>
=======
      <form className="row mb-0" onSubmit={this.postJobHandler}>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
        <div className="form-group col-12">
          <label for="nome">Nome *</label>
          <input type="text" className="form-control" id="nome"
            value={this.state.newJob.name} required
            onChange={(event) => this.onValueChangeHandler('name', event.target.value)} />
        </div>
        <div className="form-group col-12">
          <label for="descricao">Descrição *</label>
          <textarea className="form-control" id="descricao" rows="3" required
            value={this.state.newJob.description} name="description"
            onChange={(event) => this.onValueChangeHandler(event.target.name, event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="habilidades">Habilidades necessárias</label>
          <textarea className="form-control" id="habilidades" rows="3"
            value={this.state.newJob.skills}
            onChange={(event) => this.onValueChangeHandler('skills', event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="diferenciais">Diferenciais</label>
          <textarea className="form-control" id="diferenciais" rows="3"
            value={this.state.newJob.differentials}
            onChange={(event) => this.onValueChangeHandler('differentials', event.target.value)}></textarea>
        </div>
        <div className="form-group col-sm-12 col-md-6">
          <label for="salario">Salário Base *</label>
          <input type="text" className="form-control" id="salario"
            value={this.state.newJob.salary} required
            onChange={(event) => this.onValueChangeHandler('salary', event.target.value)} />
        </div>
        <div className="form-group col-sm-12 col-md-6">
<<<<<<< HEAD
          <label for="area">Área</label>
          <select className="form-control" id="area" required
            value={ this.state.newJob.area }
            onChange={(event) => this.onValueChangeHandler('area', event.target.value)}>
            <option value=''>Selecione</option>
=======
          <label for="area">Área *</label>
          <select className="form-control" id="area"
            value={this.state.newJob.area} required
            onChange={(event) => this.onValueChangeHandler('area', event.target.value)}>
            <option value=''>Selecione...</option>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
            <option value='dev'>Desenvolvimento</option>
            <option value='design'>UX/UI</option>
            <option value='test'>Teste</option>
          </select>
        </div>

        <div className="form-group form-check col-sm-12 col-md-6 ml-3">
<<<<<<< HEAD
          <input type="checkbox" className="form-check-input" id="isPcd" 
            checked={ this.state.newJob.isPCD }
            onChange={(e) => this.onValueChangeHandler('isPcd', e.target.checked)}/>
          <label className="form-check-label" for="isPCD">Vaga para PCD</label>
        </div>

        <div className="form-group col-12 text-right mb-0">
          <button type="submit" className="btn btn-success">Criar vaga</button>
=======
          <input type="checkbox" className="form-check-input" id="isPcd"
            checked={this.state.newJob.isPcd}
            onChange={(e) => this.onValueChangeHandler('isPcd', e.target.checked)} />
          <label className="form-check-label" for="isPcd">Vaga para PCD</label>
        </div>

        <div className="form-group col-12 text-right mb-0">
          <button onClick={this.clearFormHandler} className="btn btn-light mr-1" data-toggle="collapse" data-target={'#' + this.props.panelId}>Cancelar</button>
          <button type="submit" className="btn btn-success" data-toggle="collapse" data-target={'#' + this.props.panelId}>Salvar vaga</button>
>>>>>>> fc7e3bae47cdaabb0de296b644cdb56b2265c174
        </div>

      </form>
    )
  }
}