// Core
import React, { useEffect, useState } from 'react'

// Components
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import ContactRow from '../../components/ContactRow'

// Styles
import './style.scss'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store'
import { addContact, getContacts } from './actions'

// const ContactListComponent = (props) => {
const ContactListComponent = () => {

  // State
  const [contactData, setContactData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })
  const [contactAvatar, setContactAvatar] = useState('');

  // Get contacts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // Get state from redux
  const loading = useSelector((state: AppState) => state.contactList.loading);
  const contacts = useSelector((state: AppState) => state.contactList.contacts);

  // Render contacts
  const renderContacts = () => {
    return contacts.map(c => (
      <Link
        to={{
          pathname: `/contact/${c.id}`,
          state: c
        }}
        className="contactlist__item"
        key={c.id}
      >
        <ContactRow
          avatar={c.avatar}
          firstName={c.first_name}
          lastName={c.last_name}
          email={c.email}
        />
      </Link>
    ))
  }

  // Add a contact
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

  const updateForm = (e: any) => {
    const {name, value} = e.target
    setContactData({...contactData, [name]: value})
  }

  const handleFileInput = (e: any) => {
    setContactAvatar(e.target.files[0])
  }

  const onNewContact = () => {
    dispatch(addContact(contactData, contactAvatar));
  }

  return (
    <article className="contactlist">
      {modalOpen && (
        <animated.div
          className="modal"
          style={modalProps}
        >
          <div role="button" tabIndex={0} className="modal__backdrop" onClick={closeModal}></div>
          <animated.div className="modal__content" style={modalContentProps}>
            <form className="form" onSubmit={onNewContact}>
              <p className="form-p">
                <label className="form-label" htmlFor="first-name">First Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="first-name"
                  name="first_name"
                  value={contactData.first_name}
                  onChange={updateForm}
                  required
                />
              </p>
              <p className="form-p">
                <label className="form-label" htmlFor="last-name">Last Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="last-name"
                  name="last_name"
                  value={contactData.last_name}
                  onChange={updateForm}
                  required
                />
              </p>
              <p className="form-p">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={contactData.email}
                  onChange={updateForm}
                  required
                />
              </p>
              <p className="form-p">
                <label className="form-label" htmlFor="avatar">Avatar</label>
                <input
                  className="form-input"
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  value={contactAvatar}
                  onChange={handleFileInput}
                  required
                />
              </p>
              <p className="form-p form-p-flex">
                <button className="btn-default modal__close" onClick={closeModal}>Close</button>
                <input type="submit" className="btn btn-large" value="Add" />
              </p>

            </form>
          </animated.div>
        </animated.div>
      )}
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

/* const mapStateToProps = ({contactList}: AppState) => ({})

const mapDispatchProps = () => {};

const connector = connect(mapStateToProps, mapDispatchProps); */

// type HeaderProps = ConnectedProps<typeof connector>;


export default ContactListComponent