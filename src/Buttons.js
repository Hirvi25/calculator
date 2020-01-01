import React from 'react';
import './App.css';

const Buttons = (props) =>{
    return(
        <input type="button" value={props.value} onClick={() => props.getKeyValue(props.value) }/>
    )
} 

export default Buttons;