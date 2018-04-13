import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import Aboutme from './about/aboutme';
import Contact from './contact/contact';
import Projects from './projects/projects';

const MainRouter = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
    </Switch>
)

export default MainRouter;