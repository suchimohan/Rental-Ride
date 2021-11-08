import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm.js';


function SignUpFormModal() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowSignUpModal(true)}>Sign Up</button>
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignUpForm modalState={setShowSignUpModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
