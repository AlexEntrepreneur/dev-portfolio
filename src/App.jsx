import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import IntroView from './views/1-Intro/IntroView';
import AboutView from './views/2-About/AboutView';
import SkillsView from './views/3-Skills/SkillsView';
import ProjectsView from './views/4-Projects/ProjectsView';
import ProjectInfoView from './views/4-Projects/ProjectInfoView';
import ProjectSandboxView from './views/4-Projects/ProjectSandboxView';
import ResumeView from './views/5-Resume/ResumeView';
import ContactView from './views/6-Contact/ContactView';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={IntroView} />
      <Route exact path="/about" component={AboutView} />
      <Route exact path="/skills" component={SkillsView} />
      <Route exact path="/projects" component={ProjectsView} />
      <Route exact path="/project" component={() => <Redirect to="/projects"/>} />
      <Route exact path="/project/:id(\d+)" component={ProjectInfoView} />
      <Route exact path="/project/:id(\d+)/sandbox" component={ProjectSandboxView} />
      <Route exact path="/resume" component={ResumeView} />
      <Route exact path="/contact" component={ContactView} />
    </Switch>
  );
}

export default App;