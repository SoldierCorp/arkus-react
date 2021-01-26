// Core
import React from 'react'

// Styles
import './style.scss'

const ContactRow: React.FC<any> = (props) => {
  return (
    <div className="contact-item">
      <img src={props.avatar} alt={props.first_name} className="contact-avatar"/>
      <span className="contact-fullname">{props.first_name} {props.last_name}</span>
      <span className="contact-email">{props.email}</span>
      <button className="btn contact-view" onClick={props.doOpenModal}>Edit</button>
      <button className="btn contact-update" onClick={props.doOpenDetails}>View</button>
    </div>
  )
}

export default ContactRow