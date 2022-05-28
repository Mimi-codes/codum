import classes from './Modal.module.css';
import React from 'react';

const ModalOverlay = props => {
return (
    <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>
    </div>
)
};

export default ModalOverlay;//rendered in Modal.js