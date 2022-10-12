import React from 'react';
import "./Login.scss";
import Form from './Form/Form';
import ImageWrapper from '../ImageWrapper/ImageWrapper';



const Login = () => {
    return (
        <div className='login'>
            <div className="container">
                <div className="login-content">
                    <Form />
                    <ImageWrapper
                        question={"Hesabınız yoxdur?"}
                        message={"Qeydiyyatdan keçin"}
                        link={'/register'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login