import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const GithubCard = ({ avatar, name, joined, bio, followers, githubLink }) => (
  <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">Joined: {joined}</span>
      </Card.Meta>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="github" />
      {followers}
    </Card.Content>
  </Card>
);

export default GithubCard;
