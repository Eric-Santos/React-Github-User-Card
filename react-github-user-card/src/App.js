import React from 'react';
import './App.css';
import axios from 'axios';

import GithubCard from './Components/GithubCard';

class App extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      users: {}
    };
  }
  componentDidMount() {
    axios
      .get('https://api.github.com/users/chilakiles12')
      .then(response => console.log(response.data))
      .then(response => this.setState({ users: response.data }))
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <GithubCard users={this.state.users} />
        <h1>{this.state.followers}</h1>
      </div>
    );
  }
}

export default App;
