import React from 'react';

import JobCard from './JobCard/JobCard';

class JobsList extends React.Component {

  state = {
    jobs: [
      { name: 'Desenvolvedor JR', description: 'jahsdkjahskdj', salary: 1200, area: 'dev' },
      { name: 'Tester JR', description: 'blablabla', salary: 1200, area: 'test' }
    ],
    hasError: false
  }

  jobRemoveHandler = (paramName) => {
    if (window.confirm(`Deseja realmente remover a vaga "${paramName}"?`)) {

      //let newList = ...;
      //this.setState({ jobs: newList });

      window.alert('Removido com sucesso!');
    }
  }

  render() {

    const renderJobs = this.state.jobs.map(job => {
      return <JobCard
        name={job.name}
        description={job.description}
        salary={job.salary}
        area={job.area}
        removeHandler={() => this.jobRemoveHandler(job.name)} />
    });

    return (
      <div className="row">
        {renderJobs}
      </div>
    )
  }
}
export default JobsList;