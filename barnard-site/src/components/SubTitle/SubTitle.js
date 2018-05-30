import React, { Component } from "react";
import "./SubTitle.css";
class SubTitle extends Component {
  render(props) {
    return (
      <div>
        <h3 className="SubTitle">{this.props.children}</h3>
      </div>
    );
  }
}

export default SubTitle;
