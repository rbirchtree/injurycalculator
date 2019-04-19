import React from 'react';


export default function(props){
    return (
        <li>
            <label>{props.label}</label>
            <input onChange={ e => props.onChange(e.target.value) value={props.value}}></input>
        </li>

    )
}