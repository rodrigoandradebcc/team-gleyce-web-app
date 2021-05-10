import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Exercises from '../pages/Exercises';
import Plans from '../pages/Plans';
import SignIn from '../pages/SignIn';
import Student from '../pages/Student';
import Training from '../pages/Training';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/exercises" component={Exercises} isPrivate />
    <Route path="/students" component={Student} isPrivate />
    <Route path="/trainings" component={Training} isPrivate />
    <Route path="/plans" component={Plans} isPrivate />
    <Route path="/logout" component={SignIn} />
  </Switch>
);

export default Routes;
