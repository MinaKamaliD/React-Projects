import "./Temp.css";
import React from "react";

class Temp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="temp">15</h1>
        <div className="sign">
          <h2>+</h2>
          <h2>-</h2>
        </div>
      </div>
    );
  }
}
export default Temp;
