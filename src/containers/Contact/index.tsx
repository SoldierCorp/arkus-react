// Core
import React, { useState } from 'react'


// Components
import Modal from '../../components/Modal'
import { useSpring } from 'react-spring'
import { useHistory } from "react-router-dom";

import ContactRow from '../../components/ContactRow'

// Styles
import './style.scss'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store'
import { addContact, getContacts, contactToEdit } from '../ContactList/actions'

const ContactComponent = () => {

  // Variables
  const dispatch = useDispatch();

  // State
  const [modalOpen, setModalStatus] = useState(false)
  const [modalOpenType, setModalOpenType] = useState('Add')

  // Functions for modal
  const modalProps = useSpring({
    opacity: modalOpen ? 1 : 0,
  })

  const modalContentProps = useSpring({
    opacity: modalOpen ? 1 : 0,
    top: modalOpen ? 0 : -500,
  })

  const openModal = (c: any) => {
    if (c.id !== undefined) {
      dispatch(contactToEdit(c))
      setModalOpenType('Update')
    } else {
      dispatch(contactToEdit({
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        avatar: '',
      }))
      setModalOpenType('Add')
    }

    setModalStatus(true)
  }

  const closeModal = () => {
    if (isProcessing) return false

    setModalStatus(false)
  }

  // Get state from redux
  const contactData: any = useSelector((state: AppState) => state.contactList.contactData)
  const isProcessing: any = useSelector((state: AppState) => state.contactList.processing)

  return (
    <article className="contact">
      <Modal
        modalOpen={modalOpen}
        modalProps={modalProps}
        modalContentProps={modalContentProps}
        closeModal={closeModal}
        modalOpenType={modalOpenType}
      />
      <div className="contact__container">
        <h2 className="contact__title">Contact Information</h2>

        <ContactRow
          avatar={contactData.avatar}
          first_name={contactData.first_name}
          last_name={contactData.last_name}
          email={contactData.email}
          doOpenModal={() => openModal(contactData)}
          contactDetails
        />
      </div>
    </article>
  );
}

export default ContactComponent