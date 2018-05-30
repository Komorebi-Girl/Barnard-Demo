import React, { Component } from "react";
import DeptHeading from "../components/DeptHeading/DeptHeading.js";
import DeptInfo from "../components/DeptInfo/DeptInfo.js";

class DeptTile extends Component {
  render() {
    return (
      <div className="DeptTile">
        <DeptHeading>{this.props.heading}</DeptHeading>
        <DeptInfo>{this.props.description}</DeptInfo>
      </div>
    );
  }
}

export default DeptTile;
