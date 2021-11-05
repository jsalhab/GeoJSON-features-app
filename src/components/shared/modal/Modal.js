import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} data-test="modal">
            <div className="modal-main">
                <button onClick={handleClose} className="close-button">
                    <FontAwesomeIcon icon={faTimes} className="info-icon" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;