import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

export default function PhotoCard(props) {
    return (

<Col height="100%">
      <Card height="100%">
        <CardBody height="100%">
          <CardTitle><h2>{props.title}</h2></CardTitle>
          <CardTitle height="100%"><h4>Date: {props.date}</h4></CardTitle>
          <CardImg src={props.source} width="100%" alt="NASA Photo of the Day" />
          <hr />
          <CardText>{props.description}</CardText>
          <hr />
          <small><a href={props.link}>{props.link}</a></small>
        </CardBody>
      </Card>
    </Col>
    );
}