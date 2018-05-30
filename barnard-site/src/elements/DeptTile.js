import React, { Component } from "react";
import DeptHeading from "../components/DeptHeading/DeptHeading.js";
import DeptInfo from "../components/DeptInfo/DeptInfo.js";

const btnStyle = {
  margin: "0% 84%",
  fontSize: 16.0,
  color: "#5051DB",
  borderColor: "#5051DB"
};

class DeptTile extends Component {
  render(props) {
    return (
      <div
        className="row DeptTile align-items-center justify-content-center"
        style={{ margin: "8% 0%" }}
      >
        <div className="col-6">
          <DeptHeading>{this.props.heading}</DeptHeading>
          <DeptInfo>{this.props.description}</DeptInfo>
          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            style={btnStyle}
          >
            More Info
          </button>
        </div>
        <div className="col-4">
          <img className="pic" src={this.props.image} style={{ height: 340 }} />
        </div>
      </div>
    );
  }
}

export default DeptTile;
