import React, { Component } from 'react';
import './projects.css';
import ProjectCards from './projectCard';

class Projects extends Component {
    render() {
        return(
            <div className='main-projects'>
            <h1>Projects Page </h1>
            <ProjectCards />
            </div>
        )
    }
}

export default Projects;