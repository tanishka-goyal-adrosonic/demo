import React, { Component } from 'react';
import NavbarComponent from '../../components/navbar/Navbar';
import './contact.css';
import { Container } from 'reactstrap';

class ContactUS extends Component {
  render() {
    return (
    <React.Fragment>
     <NavbarComponent />
     <Container>
      <div className="wrapper">
        <div className="profile-pic bg1"></div>
        <div className="name">Sanchita</div>
        <div className="username">Programmer Analyst</div>
        <div className="username">sanchita.kadge@adrosonic.com</div>
        <div className="username"></div>
      </div>
      <div className="wrapper">
        <div className="profile-pic bg3"/>
        <div className="name">Manali</div>
        <div className="username">Software Analyst</div>
        <div className="username">manali.dhuri@adrosonic.com</div>
        <div className="username"></div>
      </div>
      <div className="wrapper">
        <div className="profile-pic bg2"/>
        <div className="name">Tanishka</div>
        <div className="username">Software Analyst</div>
        <div className="username">tanishka.goyal@adrosonic.comd</div>
        <div className="username"></div>
      </div>
     </Container>
    </React.Fragment>
    )
  }
}

export default ContactUS;