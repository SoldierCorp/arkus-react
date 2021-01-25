// Core
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/Home';
import ContactList from '../containers/ContactList';
import Contact from '../containers/Contact';
import NotFound from '../components/NotFound';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/contact-list' component={ContactList} />
      <Route path='/contact/:id' component={Contact} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;