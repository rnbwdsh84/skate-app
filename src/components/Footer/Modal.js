import React, {useState} from 'react';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
            <div className='modalRight'>
            <p className='closeBtn' onClick={onClose}>
              X
            </p>
            <div className='content'>
                <h1>Terms & Conditions</h1>
                    <p>This site and its immediate content is the property of
                    The Australian Skateboarding Association. Any use of 
                    the content without permission is illegal. Please request
                    permission via the contact form.
                    </p>
                <h1>Privacy Statement</h1>
                    <p>Your privacy is of great importance to us. Our site
                    is secured by lockdown security pty. ltd. and any data 
                    sent to us is kept private and secure.
                    </p>
            </div>
          </div>
        </div>
        <div className="footer">
            <div className="footerL"><button class="footerButton" onclick="togglePopup()">T&C + Privacy</button></div>
            <div className="footerR"><p>Copyright © 2022 All Rights Reserved </p></div>
       </div>
      </div>
    );
  };

export default Modal;
