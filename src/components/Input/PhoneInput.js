import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneNumberInput from 'react-phone-number-input'

const PhoneInput = ({ name, label, placeHolder, phone, setPhone, isValid }) => {
    const [isTouched, setIsTouched] = useState(false)



    const valueIsNotValid = isTouched && !isValid
    function onValueFocus() {
        setIsTouched(true)
    }
    return (
        <div className={`phone-input ${valueIsNotValid ? 'invalid' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <PhoneNumberInput defaultCountry="AZ" onFocus={onValueFocus} onChange={setPhone} value={phone} id={name} placeholder={placeHolder} />
            <small className="alert">Yanlış {label}</small>
        </div>
    )
}

export default PhoneInput