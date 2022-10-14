import React from 'react';
import './Form.scss';
import { useNavigate } from 'react-router-dom';
import SocialTools from '../../SocialTools/SocialTools';
import Input from '../../../../components/Input/Input';
import useForm from "../../../../hooks/useForm";
import { useDispatch } from "react-redux"
import { validateFirstname, validateEmail, validateLastname, validatePhone } from '../../validateInput'
import { registerUser } from '../../../../store/actions/user';
const Form = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { value: firstname,
        isValid: firstnameIsValid,
        // hasError: firstnameHasError,
        onValueChange: onFirstnameChange,
        // onValueBlur: onFirstnameBlur
    } = useForm(validateFirstname)

    const { value: lastname,
        isValid: lastnameIsValid,
        // hasError: lastnameHasError,
        onValueChange: onLastnameChange,
        // onValueBlur: onLastnameBlur
    } = useForm(validateLastname)

    const { value: email,
        isValid: emailIsValid,
        // hasError: emailHasError,
        onValueChange: onEmailChange,
        // onValueBlur: onEmailBlur
    } = useForm(validateEmail)

    const { value: phone,
        isValid: phoneIsValid,
        // hasError: phoneHasError,
        onValueChange: onPhoneChange,
        // onValueBlur: onPhoneBlur
    } = useForm(validatePhone)


    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (firstnameIsValid && lastnameIsValid && emailIsValid && phoneIsValid) {
            dispatch(registerUser({ firstname, lastname, email, phone, }))
            navigate('/login', { replace: true })
        }
        else {
            console.log('error');
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
                />
                <Input
                    name={'soyad'}
                    label={'Soyad'}
                    placeHolder={'Soyadınızı daxil edin'}
                    onChange={onLastnameChange}
                    type="text"
                    value={lastname}
                />
                <Input
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'nümunə@gmail.com'}
                    onChange={onEmailChange}
                    type="text"
                    value={email}
                />
                <Input
                    name={'nomre'}
                    label={'Mobil nömrə'}
                    placeHolder={'055 555 55 50'}
                    onChange={onPhoneChange}
                    type="text"
                    value={phone}
                />
                <button type='submit' className="register-btn">
                    Qeydiyyat
                </button>
            </form>
        </div>
    )
}

export default Form