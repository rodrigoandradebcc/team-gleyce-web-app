import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Exercises from '../pages/Exercises';
import Student from '../pages/Student';
import Training from '../pages/Training';
import Plans from '../pages/Plans';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/exercises" component={Exercises} />
    <Route path="/students" component={Student} />
    <Route path="/trainings" component={Training} />
    <Route path="/plans" component={Plans} />
  </Switch>
);

export default Routes;
