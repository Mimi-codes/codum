import React from 'react'
import CartContext from './cart-context';
import { useReducer } from 'react';

//Component to manage the cart-context data and provide the context to all components that wan the data.

const defaultCartState = {
    items:[],
    totalAmount: 0
};

const cartReducer = (state, action) => {
   if (action.type === 'ADD') {
 
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
   
    //to check if an item is already there
   const existingCartItemIndex = state.items.findIndex(
       item => item.id === action.item.id
       );

const existingCartItem = state.items[existingCartItemIndex];
let updatedItems;

if (existingCartItem) {
 const updatedItem = {
    ...existingCartItem,
    amount: existingCartItem.amount + action.item.amount
}
updatedItems = [...state.items];
updatedItems[existingCartItemIndex] = updatedItem;
} else {
    updatedItems = state.items.concat(action.item);
}

       return {
           items: updatedItems,
           totalAmount: updatedTotalAmount,
       }
   }
   
    return defaultCartState;
}


const CartProvider = (props) => {
const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };

const removeItemFromCartHandler = id=> {
    dispatchCartAction({type: 'REMOVE_ITEM', id: id});
};


  const cartContext = { //helper function
      items:cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
  }
  
    return (
      <CartContext.Provider value={cartContext}>
          {props.children}
      </CartContext.Provider>
  )
}

export default CartProvider;//rendered in App.js