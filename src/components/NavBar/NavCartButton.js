import React from 'react'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './NavCartButton.module.css';

const NavCartButton = (props) => {
const cartCtx = useContext(CartContext);
// const {items} = cartCtx;
// const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  // return curNumber + item.quantity;
// }, 0) //reduce helps to transform an array of data into a single value

const numberOfCartItems = cartCtx.items.length;
console.log(numberOfCartItems);

  return (
      <div>
          <span></span>
          <span>Cart</span>
          <span className={classes.badge}>
           {/* {numberOfCartItems} */} {cartCtx.items.length}

            </span>
          </div>
  )
}

export default NavCartButton//rendered in Nav.js