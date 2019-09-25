import React, { Component } from 'react';
import NavbarComponent from '../../components/navbar/Navbar';
import './home.css';

class Home extends Component {
  render() {
    return (
    <React.Fragment>
     <NavbarComponent />
     <div className="homeBg">
         <h1 className="homeTitle wobble animated">Welcome !!</h1>
         {/* <h5 className="homeSubTitle wobble animated">To Brown Bag Session</h5> */}
     </div>
    </React.Fragment>
    )
  }
}

export default Home;