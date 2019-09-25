import React, { Component } from 'react';
import NavbarComponent from '../../components/navbar/Navbar';
import './About.css';
import { Container, Row, Col, Card } from 'reactstrap';

class AboutUS extends Component {

  pushFunction = async () => {
    const title = "Push Notification";  
      const options = {
          body: 'Clicked Successfully',
          icon: './demoIcon.ico',
          tag: 'New Notification',
          badge: './demoIcon.ico',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
      }
      if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration("/worker/").then(reg => {
          console.log("About to show notification", reg);
          reg.showNotification(title, options);
      });

      // navigator.serviceWorker.ready.then(function(reg) {
      //   new Notification("Helo");
      // });
    }
  } 

  render() {
    return (
    <React.Fragment>
     <NavbarComponent />
     <div className="aboutBg">
     <Container>
        <Row noGutters={true} className="pt-4">
        <Col xs={12}>
            <Card className="valuesCard fadeInRight" onClick={this.pushFunction}>
                <Row noGutters={true}>
                    <Col className="homeValueNo" xs={2}>1</Col>
                    <Col className="homeValue pt-2 wobble" xs={10}>HTML</Col>
                </Row>
            </Card>
        </Col>
        </Row>
        <Row noGutters={true} className="mt-4">
        <Col xs={12}>
            <Card className="valuesCard fadeInLeft">
                <Row noGutters={true}>
                    <Col className="homeValue pt-2" xs={10}>CSS</Col>
                    <Col className="homeValueNo" xs={2}>2</Col>
                </Row>
            </Card>
        </Col>
        </Row>
        <Row noGutters={true} className="mt-4">
        <Col xs={12}>
            <Card className="valuesCard fadeInRight">
                <Row noGutters={true}>
                    <Col className="homeValueNo" xs={2}>3</Col>
                    <Col className="homeValue pt-2" xs={10}>Bootstrap</Col>
                </Row>
            </Card>
        </Col>
        </Row>
        <Row noGutters={true} className="mt-4">
        <Col xs={12}>
            <Card className="valuesCard fadeInLeft">
                <Row noGutters={true}>
                    <Col className="homeValue pt-2" xs={10}>Javascript</Col>
                    <Col className="homeValueNo" xs={2}>4</Col>
                </Row>
            </Card>
        </Col>
        </Row>
        <Row noGutters={true} className="mt-4">
        <Col xs={12}>
            <Card className="valuesCard fadeInRight">
                <Row noGutters={true}>
                    <Col className="homeValueNo" xs={2}>5</Col>
                    <Col className="homeValue pt-2" xs={10}>ReactJs</Col>
                </Row>
            </Card>
        </Col>
        </Row>
     </Container>
     </div>
    </React.Fragment>
    )
  }
}

export default AboutUS;