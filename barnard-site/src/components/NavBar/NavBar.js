import React, { Component } from "react";

class NavBar extends Component {
  render(props) {
    return (
      <ul className="nav nav-pills justify-content-end">
        {this.props.children}
      </ul>
    );
  }
}

export default NavBar;
