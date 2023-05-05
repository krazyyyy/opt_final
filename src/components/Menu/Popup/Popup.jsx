import React from "react";
import classes from './Popup.module.css';
import { Link } from 'react-router-dom';
import Close from '../../../assets/images/Close.png';

const Popup = ({update, address, handleCurrentModal, handleWalletModal}) => {

    const handleClick = (e) => {
        e.stopPropagation();
    }

    const handleAccept = () => {
        update(false);
    }

    return(
        <div className={classes.popupWrapper} onClick={(e) => handleClick(e)}>
            <div className={classes.popupMainContainer}>
                <span className={classes.popupList}>
                    <Link to={"/admin"}>
                        Admin
                    </Link>
                </span>
                <span className={classes.popupList}
                            onClick={(e) => {
                                window.location.href = "mailto:admin@optimumstaking.finance";
                                e.preventDefault();
                            }}
                >
                    Contacts
                </span>
                <span className={classes.popupListSpan}>
                    <span className={classes.popupListText}
                    onClick={
                        address ? handleCurrentModal : handleWalletModal
                    }
                    >
                        Connect Wallet
                    </span>
                </span>
            </div>
            <div className={classes.closeIconContainer}>
                <span onClick={handleAccept}>
                    <img src={Close} alt="" />
                </span>
            </div>
        </div>
    )
};

export default Popup;