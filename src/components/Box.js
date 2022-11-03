import { Component } from "react";

class Box extends Component {
  constructor() {
    super();

    this.state = {
      box: [],
    };
  }

  addBox = () => {};

  render() {
    return (
      <div>
        <h1>Box Maker</h1>
      </div>
    );
  }
}

export default Box;
