import React from 'react';

export default function SearchForm(props){
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search City</label>
            <input type="search" id="search" name="search" placeholder="Altadena"
                onChange={e=> props.onChange(e.target.value)} />
        </form>
    )
}
