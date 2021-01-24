// Core
import React from 'react'

// Styles
import './style.scss'

// Redux
import { connect } from 'react-redux';
import { AppState } from '../../store'
import { Home } from './types';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';


const HomeComponent = () => {
  return (
    <div>
      <h3>Home2</h3>
    </div>
  );
}

const mapStateToProps = ({ home }: AppState) => ({
  msgs: home.messages
})

const mapDispatchProps = () => {};


export default connect(mapStateToProps, mapDispatchProps)(HomeComponent)