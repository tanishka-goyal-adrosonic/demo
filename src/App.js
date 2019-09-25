import React, { Component } from 'react';
import './App.css';
import Home from './containers/home/Home';
import { Route, Switch } from 'react-router-dom';
import AboutUS from './containers/about/About';
import Projects from './containers/team/Team';
import ContactUS from './components/contact/contact';

class App extends Component {
  render() {
    return (
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/aboutUs' exact component={AboutUS} />
       <Route path='/projects' exact component={Projects} />
       <Route path='/contactUs' exact component={ContactUS} />
     </Switch>
    )
  }
}

export default App;
