import React from 'react'
import "./ImageWrapper.scss"
import { Link } from "react-router-dom"
import LoginImage from '../../../images/login.png'

const ImageWrapper = ({ question, message, link }) => {
    return (
        <div className="img-wrapper">
            <img src={LoginImage} alt="auth" />
            <div className="navigation">
                {question}
                <Link to={link}>
                    {message}
                </Link>
            </div>
        </div>
    )
}

export default ImageWrapper