import React, { Fragment } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from '../../Store/Cart-Context';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const numOfCartIteam = cartCtx.items.reduce((curNum , item)=>{
        return curNum + item.amount;
    },0)
    return (
        
        
            <button className= {classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numOfCartIteam}</span>

            </button>
        
    );
}

export default HeaderCartButton;
