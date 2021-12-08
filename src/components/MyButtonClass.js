import React, { Component } from "react";

export default class MyButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Some text" };
  }
  render() {
    return (
      <>
        <div>{this.state.text}</div>
        <button onClick={() => this.setState({ text: "Button" })}>
          {this.state.children}
        </button>
      </>
    );
  }
}
