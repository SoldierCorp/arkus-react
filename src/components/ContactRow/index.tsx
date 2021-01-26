// Core
import React from 'react'
import { Link } from 'react-router-dom';

// Styles
import './style.scss'

const ContactRow: React.FC<any> = (props) => {
  return (
    <div className="contact-item">
      <img src={props.avatar} alt={props.first_name} className="contact-avatar"/>
      <span className="contact-fullname">{props.first_name} {props.last_name}</span>
      <span className="contact-email">{props.email}</span>
      <button className="btn contact-view" onClick={props.doOpenModal}>Edit</button>
      {
        !props.contactDetails &&
          <Link
          to={{
            pathname: `/contact/${props.id}`,
            state: props
          }}
          className="btn contact-update">
          View
        </Link>
      }
    </div>
  );
}

export default ContactRow