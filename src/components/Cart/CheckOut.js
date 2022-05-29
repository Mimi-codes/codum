import React from 'react'

const CheckOut = (props) => {
const confirmHandler = (event) => {
event.preventDefault();
}

  return (
<form onSubmit={confirmHandler}>
    <div>
<label htmlFor='name'>Your Name</label>
<input type='text' id='name' />
</div>

<div>
<label htmlFor='city'>City</label>
<input type='text' id='city' />
</div>

<div>
<label htmlFor='street'>Street</label>
<input type='text' id='street' />
</div>
<button type='button'>Confirm</button>
<button onClick={props.onCancel}>Cancel</button>
</form>
  )
}

export default CheckOut;//rendered in Cart.js