import React from 'react'
import classes from './Input.module.css';

const Input =  React.forwardRef((props, ref) => {

  //Replace the current code with the commented code later
  //wrap the react component with  React.forwardRef((props, ref)
  // <div className={classes.input}>
  // <label htmlFor={props.input.id}>{props.label}</label>
  // <input ref={ref} {...props.input} />
// </div>

  return (
   <div className={classes.input}>
     <label>{props.label}</label>
   <input ref={ref} {...props.input} />
   </div>
  
  )
});

export default Input; //rendered in ProImagesForm.js