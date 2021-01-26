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
          first_name={contactData.first_name}
          last_name={contactData.last_name}
          email={contactData.email}
          contactDetails
        />
      </div>
    </article>
  );
}

export default ContactComponent