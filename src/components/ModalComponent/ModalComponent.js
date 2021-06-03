import React, { useEffect } from 'react';
import './ModalComponent.scss';

const ModalComponent = ({ show, close, title = '', children = null }) => {
  // if (!show) {
  //   return null;
  // }

  // useEffect(() => {
  //   document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    
  //   return () => {
  //     document.body.addEventListener('keydown', closeOnEscapeKeyDown)
  //   }
  // }, []);

  // const closeOnEscapeKeyDown = (e) => {
  //   if ((e.charCode || e.keyCode) === 27) {
  //     close();
  //   }
  // }
  
  return (
    // <div className="modal-wrapper" style={{
    //   transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
    //   opacity: show ? '1' : '0'
    // }}>
    //   <div className="modal-header">
    //     <p>Welcome To Our Site</p>
    //     <span onClick={close} className= "close-modal-btn">x</span>
    //   </div>
    //   <div className="modal-content">
    //     <div className="modal-body">
    //       <h4>Modal</h4>
    //       <p>lorem asdfasdfasdfasdkjhflaskdjhflaskd asd fa sdf asd fasdf   afsdfasdfasdfsdf fasdfasdfasdf asdfasdfasdf</p>
    //     </div>
    //     <div className="modal-footer">
    //       <button className="btn-cancel" onClick={close}>Close</button>
    //     </div>
    //   </div>
    // </div>

    <div className={`modal-wrapper ${show ? 'show' : ''}`} onClick={close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <p className="modal-title">{title}</p>
          <span onClick={close} className="close-modal-btn">x</span>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent;