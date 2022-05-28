import Backdrop from './Backdrop';
import classes from './Modal.module.css';
import ModalOverlay from './ModalOverlay';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import React from 'react';


//Create a helper constant
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
 <>
 {ReactDOM.createPortal(<Backdrop onClose ={props.onClose}/>, portalElement)}
 {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
</>
    );
};

export default Modal;