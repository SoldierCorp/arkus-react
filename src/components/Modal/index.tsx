// Core
import React, { useState } from 'react'
import { animated } from 'react-spring'

// Styles
import './style.scss'


const Modal: React.FC<any> = (props) => {
  const [modalOpen, setModalStatus] = useState(false)
  

  const [contactData, setContactData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })
  const [contactAvatar, setContactAvatar] = useState('');

  const updateForm = (e: any) => {
    const {name, value} = e.target
    setContactData({...contactData, [name]: value})
  }

  const handleFileInput = (e: any) => {
    setContactAvatar(e.target.files[0])
  }

  const onNewContact = (e: any) => {
    e.preventDefault();
    // dispatch(addContact(contactData, contactAvatar));
  }

  return (
    <div>
      {props.modalOpen && (
        <animated.div
          className="modal"
          style={props.modalProps}
        >
          <div role="button" tabIndex={0} className="modal__backdrop" onClick={props.closeModal}></div>
          <animated.div className="modal__content" style={props.modalContentProps}>
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
                  onChange={handleFileInput}
                  required
                />
              </p>
              <p className="form-p form-p-flex">
                <button className="btn-default modal__close" onClick={props.closeModal}>Close</button>
                <input type="submit" className="btn btn-large" value="Add" />
              </p>

            </form>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}

export default Modal