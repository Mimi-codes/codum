import React from 'react';
import { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Sofa from './components/Pages/Sofa';
import Popular from './components/Pages/Popular';
import Chair from './components/Pages/Chair';
import Lamps from './components/Pages/Lamps';
import All from './components/Pages/All';
import AboutUs from './components/Pages/AboutUs'
import NavBar from './components/NavBar/NavBar';
import LogIn from './components/NavBar/LogIn';


function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  
  //to show the cart items when the cart button is clicked:
  //Import useState and declare variables/functions for showing the cart items,
  //Render the cart conditionally,
  //add onClick(not necessarily this name but it must follow the 'on' naming convention) property as a pointer to the parent component to be passed through prop chain(prop drilling).e.g onShowCart={showCartHandler},
  //pass the the pointer to the next component rendered in it till the button component itself,
  //in the button component, add an onClick={props.onClick} (here, the name is not upto you) pointer to the button to be clicked itself.


  //To close the cart items,
  //Add a pointer (onClose={hideCartHandler})to the Cart component rendered,
  //Pass the pointer property to the close button as onClick={props.onClose}.
//Additionally, you might want to close the cart by clicking the modal/backdrop,
//Pass the onClose prop in Cart component to Backdrop component,
//Also pass the onClose prop from Backdrop to the Backdrop in Modal,
//Pass the same prop to the wrapping tag .i.e. Modal in the Cart component.

  return (
    <>
 {/* <NavBar onClick={props.onShowCart}/> */}
<CartProvider>
{cartIsShown && <Cart onClose={hideCartHandler} />}
    <HeroSection onShowCart={showCartHandler} />
    <Products />
    </CartProvider>

 
    <Footer />
    </>  
  );
}

export default App;
