import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
 import './projectCard.css';
 import trytech from './img/trytech4.JPG';

const ProjectCards = (props) => {
  return (
    <CardDeck style={{margin: '50px 25px 25px 25px'}}>
      <Card>
        <CardImg top width="100%" src={trytech} alt="Card image cap" />
        <CardBody>
          <CardTitle>TryTech</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button className="viewsite-btn">View Site</Button>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Hip to Cryp</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className="viewsite-btn">View Site</Button>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Crystals Game</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className="viewsite-btn">View Site</Button>
          <Button>GitHub</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default ProjectCards;