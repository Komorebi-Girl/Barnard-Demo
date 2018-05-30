import React, { Component } from "react";
import Navigation from "../elements/Navigation.js";
import SiteIntro from "../elements/SiteIntro.js";
import DeptTile from "../elements/DeptTile.js";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Navigation />
        <SiteIntro />
        <DeptTile
          heading="Audio-Visual Services"
          description="AVTS provides specialized audio visual services, equipment, and
          operators for classrooms and extra-curricular activities, as well as
          special events such as conferences, lectures, and panel discussions."
        />
      </div>
    );
  }
}

export default Landing;
