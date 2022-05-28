import classes from './CartItem.module.css';
import React from 'react';

const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <>
        <li className={classes['cart-item']}>
            <div> 
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>                
    <button  className={classes.action} onClick={props.onAdd}>+</button>
    <button className={classes.action} onClick={props.onRemove}>-</button>
                </div>
            </div>
<div className={classes.action}>
</div>
     </li>
     </>
    );
};

export default CartItem;