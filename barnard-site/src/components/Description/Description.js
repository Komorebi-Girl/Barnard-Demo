import React, { Component } from "react";
import "./Description.css";
class Description extends Component {
  render(props) {
    return (
      <div className="DescHolder">
        <p className="Description">{this.props.children}</p>
      </div>
    );
  }
}

export default Description;
