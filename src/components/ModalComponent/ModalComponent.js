import React from 'react';
import './ModalComponent.scss';

const ModalComponent = ({ show, close, title = '', children = null }) => {
  return (
    <>
    {
      show &&
      <div className="modal" onClick={close}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <div className="modal__content__header">
            <p className="modal__content__header__title">{title}</p>
            <span onClick={close} className="modal__content__header__close-btn">x</span>
          </div>
          <div className="modal__content__body">
            {children}
          </div>
          <div className="modal__content__footer">
            <button className="modal__content__footer__cancel-btn" onClick={close}>Close</button>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default ModalComponent;