import React from 'react';

import JobCard from './JobCard/JobCard';

class JobsList extends React.Component {

  state = {
    jobs: [
      { id: 1, name: 'Desenvolvedor JR', description: 'jahsdkjahskdj', salary: 1200, area: 'dev' },
      { id: 2, name: 'Tester JR', description: 'blablabla', salary: 1200, area: 'test' },
      { id: 3, name: 'Designer JR', description: 'jahsdkjahskdj', salary: 1200, area: 'design' },
      { id: 4, name: 'Tester JR', description: 'blablabla', salary: 1200, area: 'test' }
    ],
    hasError: false
  }

  jobRemoveHandler = (paramId, paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)) {
      const index = this.state.jobs.findIndex(job => job.id === paramId);

      let newList = this.state.jobs;
      newList.splice(index, 1);
      this.setState({ jobs: newList });

      window.alert('Removido com sucesso!');
    }
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT');
  }

  componentWillUpdate() {
    console.log('COMPONENT WILL UPDATE');
  }

  componentDidUpdate() {
    console.log('COMPONENT DID UPDATE');
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }

  render() {

    console.log('RENDER!');

    const renderJobs = this.state.jobs.map(job => {
      return <JobCard
        key={job.id}
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area}
        removeHandler={() => this.jobRemoveHandler(job.id, job.name)} />
    });

    return (
      <div className="row">
        {renderJobs}
      </div>
    )
  }
}
export default JobsList;