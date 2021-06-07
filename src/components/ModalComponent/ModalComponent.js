import React from 'react';
import './ModalComponent.scss';

const ModalComponent = ({ show, close, title = '', children = null }) => {
  return (
    <>
    {
      show &&
      <div className="modal" onClick={close}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <div onClick={close} className="modal__content__close-btn">
            X
          </div>
          <div className="modal__content__body">
            {children}
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default ModalComponent;