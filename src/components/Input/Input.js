import React from 'react';
import "./Input.scss"

const Input = ({ name, label, placeHolder, onChange, type, value }) => {
    return (
        <div className='input'>
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} value={value} type={type} id={name} placeholder={placeHolder} />
        </div>
    )
}

export default Input