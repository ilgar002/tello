import React from 'react'
import "./UserInfo.scss"
import { updateUser } from '../../../../store/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import Loading from "../../../../components/Loading/Spinner/Spinner"
import useForm from '../../../../hooks/useForm'
import { validateFirstname, validateEmail, validateLastname, validatePhone } from '../../../Auth/validateInput'
import Input from '../../../../components/Input/Input'



const UserInfo = () => {
    const dispatch = useDispatch()
    const { user, loading } = useSelector((state) => state.user)

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

    if (loading) {
        return <Loading />
    }

    const onClickUpdate = () => {
        if (firstnameIsValid && lastnameIsValid && emailIsValid && phoneIsValid) {
            dispatch(updateUser({ firstname, lastname, email, phone, id: user.id }))
        }
    }

    return (
        <div className='user-info'>
            <h6 className="title">Şəxsi məlumatlar</h6>
            <div className="content">
                <div className="info">
                    <Input
                        name={'ad'}
                        label={'Ad'}
                        onChange={onFirstnameChange}
                        defaultValue={user.firstname}
                        type="text"
                        className={'firstname data'}
                    />
                    <Input
                        name={'soyad'}
                        label={'Soyad'}
                        onChange={onLastnameChange}
                        defaultValue={user.lastname}
                        type="text"
                        className={'lastname data'}
                    />
                    <Input
                        name={'email'}
                        label={'E-mail'}
                        onChange={onEmailChange}
                        defaultValue={user.email}
                        type="text"
                        className={'email data'}
                    />
                    <Input
                        name={'phone'}
                        label={'Mobil nömrə'}
                        onChange={onPhoneChange}
                        defaultValue={user.phone}
                        type="text"
                        className={'phone data'}
                    />
                </div>
                <button onClick={onClickUpdate} className="update-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M10 18H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 1.5C14.8978 1.10217 15.4374 0.878677 16 0.878677C16.2786 0.878677 16.5544 0.933547 16.8118 1.04015C17.0692 1.14676 17.303 1.30301 17.5 1.5C17.697 1.69698 17.8532 1.93083 17.9598 2.1882C18.0665 2.44557 18.1213 2.72142 18.1213 3C18.1213 3.27857 18.0665 3.55442 17.9598 3.81179C17.8532 4.06916 17.697 4.30301 17.5 4.5L5 17L1 18L2 14L14.5 1.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Məlumatları yenilə
                </button>
            </div>
        </div>
    )
}

export default UserInfo