import "./App.css";
import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Course from "./components/Course/Course";

function App() {
  const courses = [
    { id: 1, title: "Java Script", src: "./img/pic2.png" },
    { id: 2, title: "React JS", src: "./img/pic1.png" },
    { id: 3, title: "CSS", src: "./img/pic3.png" },
    { id: 4, title: "Python", src: "./img/pic4.png" },
    { id: 5, title: "Vue JS", src: "./img/pic5.png" },
    { id: 6, title: "Github", src: "./img/pic6.png" },
    { id: 7, title: "Type Script", src: "./img/pic7.png" },
    { id: 8, title: "Node JS", src: "./img/pic8.png" },
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[0].title} src={"./img/pic2.png"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[1].title} src={"./img/pic1.png"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[2].title} src={"./img/pic3.png"}></Course>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Course title={courses[3].title} src={"./img/pic4.png"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[4].title} src={"./img/pic5.png"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[5].title} src={"./img/pic6.jpg"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[6].title} src={"./img/pic7.jpg"}></Course>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Course title={courses[7].title} src={"./img/pic8.jpg"}></Course>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
