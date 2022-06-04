import React, { useContext } from 'react';
import AvailableProducts from './ProductItem/AvailableProducts';
import ProductsNav from './ProductsNav';

const Products = (props) => {
  
  return (
     <>
<ProductsNav />
<AvailableProducts />

</>
   
    )
}

export default Products;//rendered in App.js