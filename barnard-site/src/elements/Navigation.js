import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar.js";
import NavItem from "../components/NavItem/NavItem.js";
import SearchBar from "../components/SearchBar/SearchBar.js";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <NavBar>
          <NavItem>A.V. Services</NavItem>
          <NavItem>Media Services</NavItem>
          <NavItem>Instructional Design Support</NavItem>
          <NavItem>Canvas Assistance</NavItem>
          <NavItem>Contact Us</NavItem>
          <SearchBar />
        </NavBar>
      </div>
    );
  }
}

export default Navigation;
