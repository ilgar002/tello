import React from 'react';
import "./Register.scss";
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import Form from './Form/Form';


const Register = () => {
    return (
        <div className='register'>
            <div className="container">
                <div className="register-content">
                    <Form />
                    <ImageWrapper
                        question={"Artıq hesabınız var?"}
                        message={"Daxil olun"}
                        link={'/login'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register