import React, { Component } from 'react';
import NavbarComponent from '../../components/navbar/Navbar';
import './Team.css';

class Projects extends Component {
  render() {
    return (
    <React.Fragment>
     <NavbarComponent />
     <div className="videoGIF">
       <p className="videoText">Stay Tuned</p>
       <p className="videoSubText">For Upcoming Projects</p>
     </div>
    </React.Fragment>
    )
  }
}

export default Projects;