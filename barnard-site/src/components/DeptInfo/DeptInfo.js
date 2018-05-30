import React, { Component } from "react";
import "./DeptInfo.css";
class DeptInfo extends Component {
  render(props) {
    return (
      <div className="DeptInfoHolder">
        <p className="DeptInfo">{this.props.children}</p>
      </div>
    );
  }
}

export default DeptInfo;
