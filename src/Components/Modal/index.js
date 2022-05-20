import "./styles.css";
import React from "react";

export const Modal = ({ show, closeModalHandler}) => {
  return (
    <div className="modal-menu"
    style={{
        opacity: show ? '1' : '0'
    }}>
    <div className="modal-header">
    <span className="close-modal-btn" onClick={closeModalHandler}>x</span>
    </div>
      <div className="modal-containter">
        <a href="#">About </a>
        <a href="#">Services </a> <a href="#">Projects </a>
        <div className="contact-link-modal">
          <a href="#">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

