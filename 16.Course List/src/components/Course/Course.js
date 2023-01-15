import React from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";

class Course extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./img/pic1.png" />
        <Card.Body>
          <Card.Title>React JS</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            repellat! Nesciunt harum debitis, nulla aut sapiente facere minima.
          </Card.Text>
        </Card.Body>
        <div className="d-grid gap-2 rounded-3">
          <Button variant="primary" size="lg">
            Block level button
          </Button>
        </div>
      </Card>
    );
  }
}
export default Course;
