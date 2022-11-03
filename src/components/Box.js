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
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="boxWidth">Box Width:</label>
          <input type="number" id="boxWidth" name="boxWidth" />
          <label htmlFor="boxHeight">Box Height:</label>
          <input type="number" id="boxHeight" name="boxHeight" />
          <label htmlFor="boxColor">Box Color:</label>
          <input type="color" id="boxColor" name="boxColor" />
          <button type="submit">Add New Box</button>
        </form>
      </div>
    );
  }
}

export default Box;
