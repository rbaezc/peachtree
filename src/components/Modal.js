import React from 'react';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal d-block" : "modal d-none";

    return (
        <div className={showHideClassName}>
          <div className="modal-container">
            {children}
            <a href="!#" className="modal-close btn" onClick={handleClose}>
              x
            </a>
          </div>
        </div>
    );
}

export default Modal;