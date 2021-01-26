// Core
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Navbar from '../containers/Navbar'
import Home from '../containers/Home'
import ContactList from '../containers/ContactList'
import Contact from '../containers/Contact'
import NotFound from '../components/NotFound'

const Routes: React.FC = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact-list' component={ContactList} />
        <Route path='/contact/:id' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Router>
);

export default Routes