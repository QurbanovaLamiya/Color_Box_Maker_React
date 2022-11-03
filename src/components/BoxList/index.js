import { Component } from "react";

class BoxList extends Component {
  render() {
    let inlineStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      background: this.props.color,
      marginLeft: "15px",
    };
    return (
      <>
        <div style={inlineStyle}>
          <button
            onClick={this.props.removeBox}
            style={{ margin: "5px", background: "#fff", border: "none" }}
          >
            X
          </button>
        </div>
      </>
    );
  }
}

export default BoxList;
