//create user card here using props

import React from 'react';

class GithubCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>props.user.login</h1>
      </div>
    );
  }
}

export default GithubCard;
