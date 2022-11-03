import { Component } from "react";

class BoxList extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    let inlineStyle = {
      width:`${this.props.width}px`,
      height: `${this.props.height}px`,
      background: this.props.color,
    };
    return <div style={inlineStyle}></div>;
  }
}

export default BoxList;
