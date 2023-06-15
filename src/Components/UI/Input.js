import {React , forwardRef}from 'react';
import classes from './Input.module.css';

const Input = ((props , ref) => {
    const label = 'Amount';
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
            
        </div>
    );
})

export default forwardRef(Input);
