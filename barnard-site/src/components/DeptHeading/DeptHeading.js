import React, { Component } from "react";
import "./DeptHeading.css";

class DeptHeading extends Component {
  render() {
    return (
      <div>
        <h2 className="DeptHeading">{this.props.children}</h2>
      </div>
    );
  }
}

export default DeptHeading;
