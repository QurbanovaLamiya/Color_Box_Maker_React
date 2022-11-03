import { Component } from "react";

class BoxList extends Component {
  render() {
    let inlineStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      background: this.props.color,
    };
    return (
      <>
        <div style={inlineStyle}></div>
        <button onClick={this.props.removeBox}>X</button>
      </>
    );
  }
}

export default BoxList;
