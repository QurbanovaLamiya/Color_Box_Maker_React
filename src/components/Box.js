import React, { Component } from "react";
import BoxList from "./BoxList";
import { v4 } from "uuid";

class Box extends Component {
  constructor() {
    super();

    this.state = {
      box: [],
    };

    this.boxWidthRef = React.createRef();
    this.boxHeightRef = React.createRef();
    this.boxColorRef = React.createRef();
  }

  addBox = () => {
    let boxWidth = this.boxWidthRef.current.value;
    let boxHeight = this.boxHeightRef.current.value;
    let boxColor = this.boxColorRef.current.value;

    let newArr = [
      ...this.state.box,
      { boxWidth, boxHeight, boxColor, id: v4() },
    ];

    this.setState({ box: newArr });
  };

  removeBox = (id) => {
    this.setState({
      box: this.state.box.filter((box) => box.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Box Maker</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="boxWidth">Box Width:</label>
          <input
            type="number"
            id="boxWidth"
            name="boxWidth"
            ref={this.boxWidthRef}
          />
          <label htmlFor="boxHeight">Box Height:</label>
          <input
            type="number"
            id="boxHeight"
            name="boxHeight"
            ref={this.boxHeightRef}
          />
          <label htmlFor="boxColor">Box Color:</label>
          <input
            type="color"
            id="boxColor"
            name="boxColor"
            ref={this.boxColorRef}
          />
          <button type="submit" onClick={this.addBox}>
            Add New Box
          </button>
        </form>
        <div>
          {this.state.box
            .map((box) => (
              <BoxList
                key={`box-index-${box.id}`}
                width={box.boxWidth}
                height={box.boxHeight}
                color={box.boxColor}
                removeBox={() => this.removeBox(box.id)}
              />
            ))
            .reverse()}
        </div>
      </div>
    );
  }
}

export default Box;
