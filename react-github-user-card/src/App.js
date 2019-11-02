import React from 'react';
import './App.css';
import axios from 'axios';

import GithubCard from './Components/GithubCard';
import GithubFollowerCard from './Components/GithubFollowerCard';

class App extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      users: [],
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get('https://api.github.com/users/eric-santos')
      // .then(response => console.log(response.data))
      .then(response => this.setState({ users: response.data }))
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    axios
      .get('https://api.github.com/users/eric-santos/followers')
      .then(response => this.setState({ followers: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <GithubCard
          avatar={this.state.users.avatar_url}
          name={this.state.users.name}
          joined={this.state.users.created_at}
          bio={this.state.users.bio}
          followers={this.state.users.followers}
        />
        {this.state.followers.map(follower => (
          <GithubFollowerCard
            key={follower.id}
            avatar={follower.avatar_url}
            name={follower.login}
            githubLink={follower.html_url}
          />
        ))}
      </div>
    );
  }
}

export default App;
