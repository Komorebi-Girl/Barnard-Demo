import React, { Component } from "react";
import "./NavItem.css";

class NavItem extends Component {
  render(props) {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#">
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavItem;
