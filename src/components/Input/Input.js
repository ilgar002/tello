import React from 'react';
import "./Input.scss"

const Input = ({ name, label, placeHolder, onChange, type, value, className, defaultValue, hasError, onFocus }) => {

    return (
        <div className={`${className} input ${hasError}`}>
            <label htmlFor={name}>{label}</label>
            <input onFocus={onFocus} defaultValue={defaultValue} onChange={onChange} value={value} type={type} id={name} placeholder={placeHolder} />
            <small className="alert">Yanlış {label}</small>
        </div>
    )
}

export default Input