import React, { useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
const[cartIsShown,setCartIsShown]= useState(false)

const ShowCartHandler=()=>{
  setCartIsShown(true);
}
const HideCartHandler=()=>{
  setCartIsShown(false);
}

  return (
  <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler}/>}
     <Header onShowCart={ShowCartHandler} />
     <main>
      <Meals/>
     </main>
     </CartProvider>
  );
}

export default App;
