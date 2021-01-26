// Core
import React from 'react'

// Styles
import './style.scss'

const ContactRow: React.FC<any> = (props) => {
  return (
    <div className="contact-item">
      <img src={props.avatar} alt={props.firstName} className="contact-avatar"/>
      <span className="contact-fullname">{props.firstName} {props.lastName}</span>
      <span className="contact-email">{props.email}</span>
    </div>
  );
}

export default ContactRow