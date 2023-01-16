import { Component } from "react";

import { Container, Col, Row } from "react-bootstrap";

import "./App.css";
import Menu from "./components/Menu/Menu";
import RightSide from "./components/RightSide/RightSide";
import LeftSide from "./components/LeftSide/LeftSide";

class App extends Component {
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <Menu></Menu>
        <Row>
          <Col xs={12} md={6}>
            <LeftSide></LeftSide>
          </Col>
          <Col xs={12} md={6}>
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
