import React, { Component } from "react";
import Title from "../components/Title/Title.js";
import SubTitle from "../components/SubTitle/SubTitle.js";
import Description from "../components/Description/Description.js";

const introStyle = {
  marginTop: "5%",
  marginBottom: "23%"
};

class SiteIntro extends Component {
  render() {
    return (
      <div className="SiteIntro" style={introStyle}>
        <Title>Barnard College</Title>
        <SubTitle>Instructional Media and Technology Services</SubTitle>
        <Description>
          Instructional Media and Technology Services (IMATS) provides services
          and resources for teaching and learning. IMATS also supports the
          audiovisual needs of the College through two units: Audiovisual
          Technology Services (AVTS) and Instructional Media Services (IMS).
        </Description>
      </div>
    );
  }
}

export default SiteIntro;
