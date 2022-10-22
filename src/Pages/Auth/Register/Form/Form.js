import React, { useState } from 'react';
import './Form.scss';
import { useNavigate } from 'react-router-dom';
import SocialTools from '../../SocialTools/SocialTools';
import Input from '../../../../components/Input/Input';
import PhoneInput from '../../../../components/Input/PhoneInput';
import useForm from "../../../../hooks/useForm";
import { useDispatch } from "react-redux"
import { validateFirstname, validateEmail, validateLastname } from '../../validateInput'
import { registerUser } from '../../../../store/actions/user';
const Form = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const phoneIsValid = phone?.length === 13
    console.log(phone?.length);
    console.log(phoneIsValid);
    const { value: firstname,
        isValid: firstnameIsValid,
        hasError: firstnameHasError,
        onValueChange: onFirstnameChange,
        onValueFocus: onFirstnameFocus
    } = useForm(validateFirstname)

    const { value: lastname,
        isValid: lastnameIsValid,
        hasError: lastnameHasError,
        onValueChange: onLastnameChange,
        onValueFocus: onLastnameFocus
    } = useForm(validateLastname)

    const { value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        onValueChange: onEmailChange,
        onValueFocus: onEmailFocus
    } = useForm(validateEmail)

    const formIsValid = firstnameIsValid && lastnameIsValid && emailIsValid && phoneIsValid

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formIsValid) {
            dispatch(registerUser({ firstname, lastname, email, phone, }))
            navigate('/login', { replace: true })
        }
    }
    return (
        <div className='register-wrapper'>
            <h4 className='title'>Qeydiyyat</h4>
            <SocialTools />
            <span className='or'>
                və ya
            </span>
            <form onSubmit={onSubmitHandler} className='register-form'>
                <Input
                    name={'ad'}
                    label={'Ad'}
                    placeHolder={'Adınızı daxil edin'}
                    onChange={onFirstnameChange}
                    type="text"
                    value={firstname}
                    onFocus={onFirstnameFocus}
                    hasError={firstnameHasError ? 'invalid' : ''}
                />
                <Input
                    name={'soyad'}
                    label={'Soyad'}
                    placeHolder={'Soyadınızı daxil edin'}
                    onChange={onLastnameChange}
                    type="text"
                    value={lastname}
                    onFocus={onLastnameFocus}
                    hasError={lastnameHasError ? 'invalid' : ''}
                />
                <Input
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'nümunə@gmail.com'}
                    hasError={emailHasError ? 'invalid' : ''}
                    onFocus={onEmailFocus}
                    onChange={onEmailChange}
                    type="text"
                    value={email}
                />
                <PhoneInput
                    name={'nomre'}
                    label={'Mobil nömrə'}
                    placeHolder={'055 550 50 50'}
                    phone={phone}
                    setPhone={setPhone}
                    isValid={phoneIsValid}
                />
                <button disabled={!formIsValid} type='submit' className="register-btn">
                    Qeydiyyat
                </button>
            </form>
        </div>
    )
}

export default Form