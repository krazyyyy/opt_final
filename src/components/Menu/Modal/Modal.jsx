import React from "react";
import classes from './Modal.module.css';
import Popup from "../Popup/Popup";

const Modal = ({update, address, handleCurrentModal, handleWalletModal}) => {

    return(
        <div className={classes.modalBackground} onClick={() => update(false)}>
            <div>
                <Popup update={update} address={address} handleCurrentModal={handleCurrentModal} handleWalletModal={handleWalletModal} />
            </div>
        </div>
    )
};

export default Modal;