import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Exercises from '../pages/Exercises';
import Student from '../pages/Student';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/exercises" component={Exercises} />
    <Route path="/students" component={Student} />
  </Switch>
);

export default Routes;
