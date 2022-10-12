import React from 'react';
import './Form.scss';
import SocialTools from '../../SocialTools/SocialTools';
import Input from '../../../../components/Input/Input'

const Form = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
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
                    // onChange={onEmailChange}
                    type="text"
                // value={email}
                />
                <Input
                    name={'soyad'}
                    label={'Soyad'}
                    placeHolder={'Soyadınızı daxil edin'}
                    // onChange={onEmailChange}
                    type="text"
                // value={email}
                />
                <Input
                    name={'email'}
                    label={'E-mail'}
                    placeHolder={'nümunə@gmail.com'}
                    // onChange={onEmailChange}
                    type="text"
                // value={email}
                />
                <Input
                    name={'nomre'}
                    label={'Mobil nömrə'}
                    placeHolder={'055 555 55 50'}
                    // onChange={onEmailChange}
                    type="text"
                // value={email}
                />
                <button type='submit' className="register-btn">
                    Qeydiyyat
                </button>
            </form>
        </div>
    )
}

export default Form