import React from 'react';

export default function Output(props){
    return (
        <li className="form-row">
            <label htmlFor={props.id}>{props.label}</label>
            <output id={props.id} aria-live="polite">
                ${props.value}
            </output>
        </li>
    );
}

Output.defaultProps = {
    value: 0
}