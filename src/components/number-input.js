import React from 'react';

export default function NumberInput(props){
    return (
        <li className="form-row">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" step={props.step} id={props.id} min={props.min}
            max={props.max}
            onChange={e => props.onChange(e.target.value)} value={props.value}
            />
        </li>
    )
}

