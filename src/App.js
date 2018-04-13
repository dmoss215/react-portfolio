import React, { Component } from 'react';
import './App.css';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import MainRouter from './components/mainRouter';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div className="App main-layout">
        <Navbar />
        <MainRouter className="main-router" />
      </div>
    );
  }
}

export default App;
