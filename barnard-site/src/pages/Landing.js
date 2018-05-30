import React, { Component } from "react";
import Navigation from "../elements/Navigation.js";
import SiteIntro from "../elements/SiteIntro.js";
import DeptTile from "../elements/DeptTile.js";
import Invite from "../components/Invite/Invite.js";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <Navigation />
        <SiteIntro />
        <Invite />
        <DeptTile
          heading="Audio-Visual Services"
          image="https://images.unsplash.com/photo-1450897889137-8a0b15a4c945?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=319f13616045f4effc4503085c2e73f3&auto=format&fit=crop&w=750&q=80"
          description="AVTS provides specialized audio visual services, equipment, and
          operators for classrooms and extra-curricular activities, as well as
          special events such as conferences, lectures, and panel discussions."
        />
        <DeptTile
          heading="Media Services"
          image="https://images.unsplash.com/photo-1522054361367-64c3824dcebc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cddaba14e151f9593130e84e914e6c6e&auto=format&fit=crop&w=750&q=80"
          description="IMS supports the innovative and effective use of educational technologies 
          such as video production (ranging from cell phone videos to DSLRs to 360/VR video), 
          CourseWorks and Canvas, mapping tools, surveys, and much more. IMS also provides video production 
          services for curriculum and special events."
        />
      </div>
    );
  }
}

export default Landing;
