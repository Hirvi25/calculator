import React from 'react';
import './App.css';

const Answer = (props) =>{
    return(
        <input type="text" name="answer" id="answerstyle" value={props.value} onChange={props.handleChange}/>
    )
} 

export default Answer;