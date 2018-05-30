import React, { Component } from "react";
import "./Title.css";
class Title extends Component {
  render(props) {
    return (
      <div>
        <h1 className="Title">{this.props.children}</h1>
      </div>
    );
  }
}

export default Title;
