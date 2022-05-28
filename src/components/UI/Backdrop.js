import classes from './Modal.module.css';
import React from 'react'

const Backdrop = props => {
return (
    <div className={classes.backdrop} onClick ={props.onClose} />
)
}

export default Backdrop;//rendered in Modal.js