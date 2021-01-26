// Core
import React, { useEffect, useState } from 'react'

// Components
import ContactRow from '../../components/ContactRow'
import Modal from '../../components/Modal'
import { useSpring } from 'react-spring'

// Styles
import './style.scss'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store'
import { addContact, getContacts } from './actions'

// const ContactListComponent = (props) => {
const ContactListComponent = () => {

  const [modalOpen, setModalStatus] = useState(false)

  const modalProps = useSpring({
    opacity: modalOpen ? 1 : 0,
  })

  const modalContentProps = useSpring({
    opacity: modalOpen ? 1 : 0,
    top: modalOpen ? 0 : -500,
  })

  const openModal = () => {
    setModalStatus(true)
  }

  const closeModal = () => {
    setModalStatus(false)
  }

  // Get contacts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // Get state from redux
  const loading = useSelector((state: AppState) => state.contactList.loading);
  const contacts = useSelector((state: AppState) => state.contactList.contacts);
  const addSuccess = useSelector((state: AppState) => state.contactList.addSuccess);

  // Render contacts
  const renderContacts = () => {
    return contacts.map(c => (
      <ContactRow
        key={c.id}
        id={c.id}
        avatar={c.avatar}
        first_name={c.first_name}
        last_name={c.last_name}
        email={c.email}
      />
    ))
  }


  return (
    <article className="contactlist">
      <Modal
        modalOpen={modalOpen}
        modalProps={modalProps}
        modalContentProps={modalContentProps}
        closeModal={closeModal}
      />
      <div className="contactlist__container">
        <header className="page-header">
          <h2 className="contactlist__title">Contact List</h2>
          <button className="btn btn-new-contact" onClick={openModal}>+ New contact</button>
        </header>
        {
          loading && (
            <p><em>Loading...</em></p>
          )
        }
        <div className="contactlist__list">{!loading && renderContacts()}</div>
      </div>
    </article>
  );
}

export default ContactListComponent