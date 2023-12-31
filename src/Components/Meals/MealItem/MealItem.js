import{ React, useContext} from 'react';
import classes from './MealIteam.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/Cart-Context';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
   const cartctx=  useContext(CartContext)

    function addToCartHandler (amount) {
        cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
        
    }

    return (
        <li className={classes.meal}>
            <div>
            <div><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;
