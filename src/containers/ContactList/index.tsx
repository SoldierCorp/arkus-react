// Core
import React, { useEffect, useState } from 'react'

// Components
import ContactRow from '../../components/ContactRow'
import Modal from '../../components/Modal'
import { useSpring } from 'react-spring'
import { useHistory } from "react-router-dom"

// Styles
import './style.scss'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../store'
import { getContacts, contactToEdit } from './actions'

const ContactListComponent = () => {

  // Variables
  const dispatch = useDispatch()
  const history = useHistory()

  // States
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

  const openDetais = (c: any) => {
    dispatch(contactToEdit(c))
    history.push('contact/' + c.id)
  }

  // Get contacts
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

  // Get state from redux
  const loading = useSelector((state: AppState) => state.contactList.loading)
  const contacts = useSelector((state: AppState) => state.contactList.contacts)
  const isProcessing: any = useSelector((state: AppState) => state.contactList.processing)


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
        doOpenModal={() => openModal(c)}
        doOpenDetails={() => openDetais(c)}
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
        modalOpenType={modalOpenType}
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