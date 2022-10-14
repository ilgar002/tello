import React from 'react';
import "./Input.scss"

const Input = ({ name, label, placeHolder, onChange, type, value, className, defaultValue }) => {
    return (
        <div className={`${className} input`}>
            <label htmlFor={name}>{label}</label>
            <input defaultValue={defaultValue} onChange={onChange} value={value} type={type} id={name} placeholder={placeHolder} />
        </div>
    )
}

export default Input