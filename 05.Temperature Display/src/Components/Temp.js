import "./Temp.css";
import React from "react";

class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 20, tempClass: "cold" };

    this.tempUpHandler = this.tempUpHandler.bind(this);
    this.tempDownHandler = this.tempDownHandler.bind(this);
  }

  tempUpHandler() {
    this.setState((prevState) => {
      return {
        temp: prevState.temp + 1,
      };
    });
    if (this.state.temp >= 30) {
      this.setState({ tempClass: "hot" });
    }
  }
  tempDownHandler() {
    this.setState((prevState) => {
      return { temp: prevState.temp - 1 };
    });
    if (this.state.temp < 30) {
      this.setState({ tempClass: "cold" });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className={`temp ${this.state.tempClass}`}>{this.state.temp}°C</h1>
        <div className="sign">
          <h2 onClick={this.tempDownHandler}>-</h2>
          <h2 onClick={this.tempUpHandler}>+</h2>
        </div>
      </div>
    );
  }
}
export default Temp;
