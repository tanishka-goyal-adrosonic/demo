import React, {Component} from 'react';
import './navbar.css';

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
          activeTabClassName: window.location.pathname,
          openMenu: false
        };
      }
      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      toggleMobileMenu = () => {
        this.setState({
          openMenu: !this.state.openMenu
        });
      }
      

    render() {
      
        return(
            <React.Fragment>
              <nav class="menu" onClick={this.toggleMobileMenu}>
  <ol className={this.state.openMenu ? 'mobile_menu' : ''}>

  <li class="menu-item"><a href="/" className={(this.state.activeTabClassName === "/") ? "active" : ""}>Home</a></li>

    <li class="menu-item"><a href="/aboutUs" className={(this.state.activeTabClassName === "/aboutUs") ? "active" : ""}>About Us</a>

    </li>
    <li class="menu-item">
      <a href="/projects" className={(this.state.activeTabClassName === "/projects") ? "active" : ""}>Projects</a>
    </li>

    <li class="menu-item"><a href="/contactUs" className={(this.state.activeTabClassName === "/contactUs") ? "active" : ""}>Contact Us</a></li>
    
  </ol>
</nav>
        </React.Fragment>
        )
    }
}

export default NavbarComponent;