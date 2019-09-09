import React from 'react';
import './App.css';

import GithubCard from './Components/GithubCard';

class App extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      githubCard: []
    };
  }
  componentDidMount() {
    console.log('component did mount');
  }
  render() {
    console.log('at render method');
    return (
      <div>
        <GithubCard />
        <h1>h1 at render</h1>
      </div>
    );
  }
}

export default App;
