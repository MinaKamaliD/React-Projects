import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

class Course extends Component {
  render(props) {
    return (
      <Card className="mb-5">
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            repellat! Nesciunt harum debitis, nulla aut sapiente facere minima.
          </Card.Text>
        </Card.Body>
        <div className="d-grid gap-2 rounded-3">
          <Button variant="primary" size="lg">
            Add To List
          </Button>
        </div>
      </Card>
    );
  }
}
export default Course;
