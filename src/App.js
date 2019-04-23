import React, { Component } from 'react';
import './App.css';
import ApplicationList from './components/ApplicationList/ApplicationList';
import Header from './components/Header/Header';
import applications from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allApplicants: applications
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <ApplicationList applicants={this.state.allApplicants} />
      </div>
    );
  }
}

export default App;
