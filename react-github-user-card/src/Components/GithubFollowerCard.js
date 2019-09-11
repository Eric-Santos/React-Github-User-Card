import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const GithubFollowerCard = ({ avatar, name, githubLink, created_at }) => (
  <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{created_at}</span>
      </Card.Meta>
      <Card.Description>{githubLink}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="github" />
    </Card.Content>
  </Card>
);

export default GithubFollowerCard;
