import { React, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasIteam = cartCtx.items.length >0;

  const cartIteamAddHandler = (item) => {
    cartCtx.addItem({...item ,amount:1})
  };
  const cartIteamRemoveHandler = (id) => {
    cartCtx.removeItem({id});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartIteamRemoveHandler.bind(null,item.id)}
          onAdd={cartIteamAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasIteam && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
