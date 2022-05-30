import React from 'react'
import classes from './CheckOut.module.css';
import {useRef, useState } from 'react'


//helper functions
const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const CheckOut = props => {
    const [formInputsValidity, setFormInputsValidity] = useState({
name: true,
city: true,
street: true,
PhoneNumber: true
    });


const nameInputRef = useRef();
const cityInputRef = useRef();
const streetInputRef = useRef();
const PhoneNumberInputRef = useRef();

const confirmHandler =(event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPhoneNumber = PhoneNumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPhoneNumberIsValid = isFiveChars(enteredPhoneNumber);

setFormInputsValidity ({
    name: enteredNameIsValid,
    city: enteredCityIsValid,
    street: enteredStreetIsValid,
    PhoneNumber: enteredPhoneNumberIsValid
})

    const formIsValid = 
    enteredNameIsValid && 
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPhoneNumberIsValid;

if (!formIsValid) {
    return;

}
    //submit the cart data
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        PhoneNumber: enteredPhoneNumber
    })
}

const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid}`;

const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid}`;

const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid}`;

    const PhoneNumberControlClasses = `${classes.control} ${
        formInputsValidity.PhoneNumber ? '' : classes.invalid}`;
   
        return (
    <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>

        <div className={cityControlClasses}>
            <label htmlFor = 'city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>

        <div className={streetControlClasses}>
            <label htmlFor = 'street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>

        <div className={PhoneNumberControlClasses}>
            <label htmlFor = 'postal'>Phone Number</label>
            <input type='text' id='postal' ref={PhoneNumberInputRef}/>
        {!formInputsValidity.PhoneNumber && <p>Please enter a valid phone number (11 characters long)!</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' className= {classes.cancel} onClick = {props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
        </div>
    </form>
)
};

export default CheckOut;//rendered in Cart.js