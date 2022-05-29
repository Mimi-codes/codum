import classes from './CartItem.module.css';
import React from 'react';

const CartItem = props => {
    // const price = `$${props.price.toFixed(2)}`;
    //change the className to quantity in line 15

    return (
        <>
        <li className={classes['cart-item']}>
            <div> 
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{props.price}</span>
                    <span className={classes.amount}>x {props.quantity}</span>
                    </div>
                    </div>               
  
<div className={classes.action}>
    <button  className={classes.action} onClick={props.onAdd}>+</button>
    <button className={classes.action} onClick={props.onRemove}>-</button>
</div>
     </li>
     </>
    );
};

export default CartItem; //rendered in Cart.js