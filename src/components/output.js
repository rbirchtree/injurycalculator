import React from 'react';

export default function Output(props){
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <output id={props.id} aria-live="polite">
                ${props.value}
            </output>
        </div>
    );
}

Output.defaultProps = {
    value: 0
}