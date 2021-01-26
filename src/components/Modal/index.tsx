// Core
import React, { useEffect, useState } from 'react'
import { animated } from 'react-spring'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store'
import { addContact, updateContact, updateContactData, processing } from '../../containers/ContactList/actions'

// Styles
import './style.scss'


const Modal: React.FC<any> = (props) => {

  const dispatch = useDispatch();
  const fileRef: any = React.useRef();
  const [contactAvatar, setContactAvatar] = useState('');

  const updateForm = (e: any) => {
    const {name, value} = e.target
    dispatch(updateContactData(name, value));
  }

  const handleFileInput = (e: any) => {
    setContactAvatar(e.target.files[0])
  }

  const onNewContact = (e: any) => {
    e.preventDefault();

    if (isProcessing) return false
    dispatch(processing(true));
    dispatch(addContact(contactDataToEdit, contactAvatar));
  }

  const onUpdateContact = (e: any) => {
    e.preventDefault();

    if (isProcessing) return false
    dispatch(processing(true));
    dispatch(updateContact(contactDataToEdit, contactAvatar));
  }

  // State from redux
  const isProcessing: any = useSelector((state: AppState) => state.contactList.processing);
  const contactDataToEdit: any = useSelector((state: AppState) => state.contactList.contactData);
  const formMessage: any = useSelector((state: AppState) => state.contactList.formMessage);
  const addSuccess = useSelector((state: AppState) => state.contactList.addSuccess);

  if (addSuccess) {
    fileRef.current.value = ''
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
            <form className="form" onSubmit={props.modalOpenType === 'Add' ? onNewContact : onUpdateContact}>
              <p className="form-p">
                <label className="form-label" htmlFor="first-name">First Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="first-name"
                  name="first_name"
                  value={contactDataToEdit.first_name}
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
                  value={contactDataToEdit.last_name}
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
                  value={contactDataToEdit.email}
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
                <button className="btn-default modal__close" onClick={props.closeModal} disabled={isProcessing}>Close</button>
                <input
                  ref={fileRef}
                  type="submit"
                  className="btn btn-large"
                  value={isProcessing ? 'Sending...' : props.modalOpenType}
                  disabled={isProcessing}
                />
              </p>
              <p className="form-p">
                <span className="form-message">{formMessage}</span>
              </p>
            </form>
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}

export default Modal