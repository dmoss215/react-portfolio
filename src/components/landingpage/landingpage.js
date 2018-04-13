import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';
import githubImg from './img/github.png';
import linkedinImg from './img/linkedin.png';
import emailImg from './img/email.png';
import logo from './img/logo1.JPG';

class Landing extends Component {
    render() {
        return(
            <div className="main-landingpage">
                <Grid>
                    <Cell  className="landing-grid" col={12} tablet={12} style={{textAlign: "center", marginTop: '50px'}}>
                        {/* <img src={logo} alt="logo" /> */}
                        <img src={logo} alt="logo" />
                    </Cell>
                </Grid>
                <Grid className="landing-grid landing-header-text">
                    <Cell col={12} tablet={12}>
                        <h1 style={{marginBottom: '50px'}}> Dan Moss | Full Stack Web Developer </h1>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell  className="social-link" col={3} tablet={12}>
                    </Cell>
                    <Cell  style={{marginBottom: '30px'}} className="social-link" col={2} tablet={12}>
                        <h1 className=""> Github </h1>
                        <a href="https://github.com/dmoss215"><img src={githubImg} alt="github" /></a>
                    </Cell>
                    <Cell  style={{marginBottom: '30px'}} className="social-link" col={2} tablet={12}>
                        <h1 className=""> Linkedin </h1>
                        <a href="https://www.linkedin.com/in/daniel-moss-72a09099/"><img src={linkedinImg} alt="github" /></a>
                    </Cell>
                    <Cell  style={{marginBottom: '30px'}} className="social-link" col={2} tablet={12}>
                        <h1 className=""> Email </h1>
                        <a href="mailto:danmoss215@gmail.com"><img src={emailImg} alt="github" /></a>
                    </Cell>
                    <Cell  className="social-link" col={3} tablet={12}>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;