import React from 'react';
import './App.css';

const Clear = (props) =>{
    return(
        <input type="button" value="Clear" id="clear" onClick={() => props.getKeyValue('Clear')}/>
    )
} 

export default Clear;