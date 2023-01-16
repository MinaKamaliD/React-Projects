import React from "react";
import { Component } from "react";
import Image from "react-bootstrap/Image";

class RightSide extends Component {
  render() {
    return (
      <div>
        <Image src="pic1.jpg" thumbnail style={{ border: "none" }}></Image>
      </div>
    );
  }
}

export default RightSide;
