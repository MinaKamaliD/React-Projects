import "./Counter.css";
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.countDownHandler = this.countDownHandler.bind(this);
    this.countUpHandler = this.countUpHandler.bind(this);
  }

  countDownHandler() {
    this.setState((prevState) => {
      return { counter: prevState.counter - 1 };
    });
  }
  countUpHandler() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <button onClick={this.countUpHandler}>Count Up</button>
          <button onClick={this.countDownHandler}>Count Down</button>
        </div>
      </div>
    );
  }
}

export default Counter;
