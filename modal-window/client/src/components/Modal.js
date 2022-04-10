import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Message without styles
      </div>
    </div>,
    document.querySelector('')
  );
};

export default Modal;
