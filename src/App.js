import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import MainRouter from './components/mainRouter';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Dan" scroll>
                    <Navigation>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Me</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Me</Link>
                        <Link to="/resume">Resume</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <MainRouter />
                </Content>
            </Layout>
        </div>
      </div>
    );
  }
}

export default App;
