import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';



function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className= "navButton" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm modalState={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
