/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='modal-header'>Product is already added</h2>
        <p className='modal-paragraph'>Touch cart to change the quantity.</p>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
