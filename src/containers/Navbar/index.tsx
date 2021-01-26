// Core
import React from 'react'
import {
  NavLink
} from 'react-router-dom';

// Styles
import './style.scss'

// Redux
/* import { connect } from 'react-redux';
import { AppState } from '../../store'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux'; */


const Navbar = () => {
  return (
    <aside className="aside">
      <nav className="menu">
          <ul className="menu__ul">
              <li className="menu__li">
                <NavLink className="menu__a" to="/">Home</NavLink>
              </li>
              <li className="menu__li">
                <NavLink className="menu__a" to="/contact-list">Contact List</NavLink>
              </li>
          </ul>
      </nav>
    </aside>
  );
}

export default Navbar