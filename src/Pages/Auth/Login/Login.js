import React, { useState } from 'react';
import "./Login.scss";
import Form from './Form/Form';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import Message from '../Message/Message';



const Login = () => {
    const [message, setMessage] = useState(false)

    return (
        <div className='login'>
            <div className="container">
                {message ? <Message
                    message={'E - poçt ünvanınızı yoxlayın. Göndərilmiş linkə keçid edin.'}
                /> :
                    <div className="login-content">
                        <Form
                            setMessage={setMessage}
                        />
                        <ImageWrapper
                            question={"Hesabınız yoxdur?"}
                            message={"Qeydiyyatdan keçin"}
                            link={'/register'}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default Login