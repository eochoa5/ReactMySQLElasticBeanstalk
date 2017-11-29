import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Modals from './components/Modals';
import Routes from './components/Routes';

import 'animate.css';

class App extends Component {



  render() {
    return (
      <div>
          <NavBar/>
          <Modals/>
          <Routes/>
          <Footer/>
      </div>
    );
  }
}

export default App;
