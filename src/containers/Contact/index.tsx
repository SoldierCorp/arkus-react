// Core
import React from 'react'

// Components
import { useHistory } from "react-router-dom";
import ContactRow from '../../components/ContactRow'

// Styles
import './style.scss'

const ContactComponent = () => {
  const history: any = useHistory();
  const contactData: any = history.location.state

  return (
    <article className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contact Information</h2>

        <ContactRow
          avatar={contactData.avatar}
          firstName={contactData.first_name}
          lastName={contactData.last_name}
          email={contactData.email}
        />
      </div>
    </article>
  );
}

export default ContactComponent